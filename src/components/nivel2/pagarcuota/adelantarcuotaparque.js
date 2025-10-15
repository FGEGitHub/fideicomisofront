import React, { useState, useCallback } from 'react';
import {
    Button, Dialog, DialogTitle, DialogContent, DialogActions,
    DialogContentText, Select, MenuItem, TextField, CircularProgress, Typography,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import serviciocuotas from '../../../services/cuotas';
import servicioUsuario1 from "../../../services/usuario1";
import Modalveronline from '../pagarcuota/verpdfcbu';
import { useParams } from "react-router-dom"

export default function AnticiparCuotas({ id_lote, cuotas, traerr }) {
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [cantidad, setCantidad] = useState(1);
    const [fileUpload, setFileUpload] = useState(null);
    const [enviarr, setEnviarr] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cbus, setCbus] = useState(['']);
    const [pago, setPago] = useState({});
    const [descripcionCBU, setDescripcionCBU] = useState('');

    // Se filtran las cuotas sin calcular (ICC=0)
    const cuotasNoCalculadas = cuotas?.filter(c => c.ICC === 0) || [];
    const maxCuotas = cuotasNoCalculadas.length; // hasta cuántas puede anticipar

    // Filtramos las que tienen valor calculado (>0)
    const cuotasFiltradas = [...cuotas]
        .filter(c => c.cuota_con_ajuste > 0)
        .sort((a, b) => a.numero - b.numero);

    // Tomamos la última cuota calculada (la de mayor número)
    const ultimaCalculada = cuotasFiltradas[cuotasFiltradas.length - 1];

    // Total = cantidad seleccionada * valor de la última cuota calculada
    const totalAnticipado = ultimaCalculada
        ? cantidad * parseFloat(ultimaCalculada.cuota_con_ajuste)
        : 0;

    // --- manejo de archivos
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

    const traercbu = async () => {
        const cuot = await servicioUsuario1.listacbus(params.cuil_cuit);
        setCbus(cuot);
    };

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
            traerr(id_lote);
        } catch (error) {
            console.error(error);
            alert("Error al enviar la solicitud");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{ color: "black", borderColor: "black", fontSize: "0.70rem" }}
                onClick={() => {
                    setOpen(true);
                    traercbu(true);
                }}
                disabled={maxCuotas === 0}
            >
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

                            {ultimaCalculada && (
                                <>
                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        Total a pagar: ${Number(totalAnticipado).toFixed(2)}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mt: 1,
                                            color: cantidad >= 30 ? "red" : "inherit",
                                            fontWeight: cantidad >= 30 ? "bold" : "normal",
                                        }}
                                    >
                                        (Incluye {cantidad} cuotas, hasta la #{cantidad} 
                                        {" "}con ajuste base: ${Number(ultimaCalculada.cuota_con_ajuste).toFixed(2)})
                                    </Typography>
                                </>
                            )}

                            <TextField
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                select
                                label="Elegir CBU"
                                name="cbu"
                                onChange={handleChange}
                                helperText="Por favor ingrese su CBU"
                            >
                                {cbus.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.lazo}- {option.numero}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {pago.cbu ? <Modalveronline id={pago.cbu} /> : null}

                            {descripcionCBU && (
                                <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    Últimos números: {descripcionCBU}
                                </Typography>
                            )}

                            <TextField
                                fullWidth
                                type="date"
                                label="Fecha"
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => setPago({ ...pago, fecha: e.target.value })}
                                sx={{ mt: 2 }}
                            />

                            <div
                                {...getRootProps()}
                                style={{
                                    border: "2px dashed gray",
                                    padding: 20,
                                    textAlign: "center",
                                    marginTop: 20,
                                    cursor: "pointer",
                                }}
                            >
                                <input {...getInputProps()} />
                                {fileUpload ? (
                                    <Typography>Archivo: {fileUpload.name}</Typography>
                                ) : (
                                    <Typography>
                                        Arrastre un PDF o imagen aquí o haga clic para seleccionar
                                    </Typography>
                                )}
                            </div>
                        </>
                    ) : (
                        <DialogContentText sx={{ color: "red", mt: 2 }}>
                            No hay cuotas disponibles para anticipar.
                        </DialogContentText>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancelar</Button>
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
