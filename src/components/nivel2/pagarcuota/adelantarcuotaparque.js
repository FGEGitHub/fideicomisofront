import React, { useState, useCallback } from 'react';
import {
    Button, Dialog, DialogTitle, DialogContent, DialogActions,
    DialogContentText, Select, MenuItem, TextField, CircularProgress, Typography,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import serviciocuotas from '../../../services/cuotas'; // tu servicio para enviar datos
import servicioUsuario1 from "../../../services/usuario1";
import Modalveronline from '../pagarcuota/verpdfcbu';
import { useParams } from "react-router-dom"
export default function AnticiparCuotas({ id_lote, cuotas, traerr }) {
    let params = useParams()
    const [open, setOpen] = useState(false);
    const [cantidad, setCantidad] = useState(1);
    const [fileUpload, setFileUpload] = useState(null);
    const [enviarr, setEnviarr] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cbus, setCbus] = useState([''])
    const [pago, setPago] = useState({});
    const [descripcionCBU, setDescripcionCBU] = useState('');
    const cuotasNoCalculadas = cuotas?.filter(c => c.ICC === 0) || [];
    const maxCuotas = cuotasNoCalculadas.length;
const cuotasFiltradas = [...cuotas]
  .filter(c => c.cuota_con_ajuste > 0)
  .sort((a, b) => a.numero - b.numero);

const anticipadas = cuotasFiltradas.slice(0, cantidad);
const totalAnticipado = anticipadas.reduce((total, cuota) => {
  const valor = parseFloat(cuota.cuota_con_ajuste);
  return total + (isNaN(valor) ? 0 : valor);
}, 0);

    const onDrop = useCallback((files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        setFileUpload(files[0]);
        setEnviarr(formData);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: "application/pdf, image/*",
    });

    const handleChange = (e) => {
        const selectedCBU = cbus.find((cbu) => cbu.id === e.target.value);
        setPago({ ...pago, [e.target.name]: e.target.value });
        setDescripcionCBU(selectedCBU ? selectedCBU.descripcion : '');
    };


    const enviarFinal = async () => {
        setLoading(true);
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
            const usuario = JSON.parse(loggedUserJSON)
            console.log(usuario.cuil_cuit)


            const formData = enviarr || new FormData();


            formData.append("id_lote", id_lote);
            formData.append("cuil_cuit", pago.cuil_cuit);
            formData.append("cuil_cuit_administrador", usuario.cuil_cuit);


            formData.append("fecha", pago.fecha);
            formData.append("cbu", pago.cbu);

            try {
                // const cancelacion = await serviciocuotas.cancelarlote({ mes: mesSeleccionado, anio: anioSeleccionado, id_lote: props.id_lote });
                const pagoRes = await servicioUsuario1.cancelarlote(formData);
                // alert(cancelacion);
                alert(pagoRes);
                setOpen(false);


                setPago({});
                setFileUpload(null);
                traerr(id_lote);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
    };
    const traercbu = async () => {


        const cuot = await servicioUsuario1.listacbus(params.cuil_cuit)
        setCbus(cuot)


    }
    const handleEnviar = async () => {
        if (!enviarr) {
            alert("Debe adjuntar un archivo");
            return;
        }

        setLoading(true);
        try {
            const formData = enviarr;
            formData.append("id_lote", id_lote);
            formData.append("cantidad", cantidad);

            const res = await serviciocuotas.anticiparCuotas(formData);
            alert(res?.mensaje || "Anticipación enviada correctamente");
            setOpen(false);
        } catch (error) {
            console.error(error);
            alert("Error al enviar la solicitud");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button variant="contained" onClick={() => {
                setOpen(true);
                traercbu(true)
            }} disabled={maxCuotas === 0}>
                Anticipar cuotas
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Anticipar cuotas</DialogTitle>
                <DialogContent>
                    {maxCuotas > 0 ? (
                        <>
                            <DialogContentText>
                                Puede anticipar hasta <strong>{maxCuotas}</strong> cuota(s).
                            </DialogContentText>
                            <Select
                                value={cantidad}
                                onChange={(e) => setCantidad(Number(e.target.value))}
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                {[...Array(maxCuotas).keys()].map((i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1} cuota(s)
                                    </MenuItem>
                                ))}
                            </Select>

{anticipadas.length > 0 && (
  <>
    <Typography variant="h6" sx={{ mt: 2 }}>
      Total a pagar: ${Number(totalAnticipado).toFixed(2)}
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>
      (Incluye {anticipadas.length} cuotas, hasta la #{anticipadas[anticipadas.length - 1].numero} 
      con ajuste: ${Number(anticipadas[anticipadas.length - 1].cuota_con_ajuste).toFixed(2)})
    </Typography>
  </>
)}


{/* <Typography variant="body2" sx={{ mt: 1 }}>
  {cuotasOrdenadas.slice(0, cantidad).map((cuota, index) => (
    <div key={index}>
      Cuota #{cuota.numero}: ${cuota.cuota_con_ajuste.toFixed(2)}
    </div>
  ))}
</Typography> */}
                            <TextField component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate


                                id="outlined-select-currency"
                                select
                                label="Elegir CBU"

                                name="cbu"
                                onChange={handleChange}
                                helperText="Por favor ingrese su CBU"
                            >
                                {
                                    cbus.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.lazo}-  {option.numero}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            {pago.cbu ? <Modalveronline id={pago.cbu} /> : <></>
                            }
                            {descripcionCBU && (
                                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    Ultimos numeros: {descripcionCBU}
                                </Typography>
                            )}
                            <TextField fullWidth type="date" label="Fecha" InputLabelProps={{ shrink: true }} onChange={(e) => setPago({ ...pago, fecha: e.target.value })} sx={{ mt: 2 }} />

                            <div
                                {...getRootProps()}
                                style={{
                                    border: "2px dashed gray",
                                    padding: 20,
                                    textAlign: "center",
                                    marginTop: 20,
                                    cursor: "pointer"
                                }}
                            >

                                <div {...getRootProps()} style={{ border: "2px dashed gray", padding: 10, textAlign: "center", marginTop: 10 }}>
                                    <input {...getInputProps()} />
                                    {fileUpload ? <Typography>Archivo: {fileUpload.name}</Typography> : <Typography>Arrastre un PDF o imagen aquí o haga clic para seleccionar</Typography>}
                                </div>
                            </div>
                        </>
                    ) : (
                        <DialogContentText sx={{ color: "red", mt: 2 }}>
                            No hay cuotas disponibles para anticipar.
                        </DialogContentText>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false);
                        traercbu()
                    }}>Cancelar</Button>
                    <Button
                        onClick={handleEnviar}
                        variant="contained"
                        disabled={maxCuotas === 0 || loading}
                    >
                        {loading ? <CircularProgress size={24} /> : "Enviar"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
