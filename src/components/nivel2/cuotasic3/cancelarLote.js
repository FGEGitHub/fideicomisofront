import * as React from "react";
import { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import servicioUsuario1 from "../../../services/usuario1";
import { useParams } from "react-router-dom"
import Modalveronline from '../pagarcuota/verpdfcbu';

export default function CancelarLoteCompleto(props) {
  let params = useParams()
  let id = params.id
  const [descripcionCBU, setDescripcionCBU] = useState('');

  const [open, setOpen] = useState(false);
  const [paso, setPaso] = useState(1);
  const [mesSeleccionado, setMesSeleccionado] = useState(new Date().getMonth() + 1);
  const [anioSeleccionado, setAnioSeleccionado] = useState(new Date().getFullYear());
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [pago, setPago] = useState({});
  const [fileUpload, setFileUpload] = useState(null);
  const [enviarr, setEnviarr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cbus, setCbus] = useState([''])
  const calcularTotales = () => {
    const cuotas = props.cuotas || [];
    const fechaSeleccionada = new Date(anioSeleccionado, mesSeleccionado - 1);
    let sumatoriaPagos = 0;
    let totalDevengado = 0;
    let totalFuturo = 0;
    let cuotaBase = null;
    let mesesRestantes = 0;
    let existeFecha = false;

    cuotas.forEach((cuota) => {
      const cuotaFecha = new Date(cuota.anio, cuota.mes - 1);
      const cuotaConAjuste = parseFloat(cuota.cuota_con_ajuste || 0);
      const pago = parseFloat(cuota.pago || 0);

      if (cuotaFecha < fechaSeleccionada) {
        sumatoriaPagos += pago;
        totalDevengado += cuotaConAjuste;
      } else if (cuotaFecha >= fechaSeleccionada) {
        if (!cuotaBase) cuotaBase = cuotaConAjuste;
        mesesRestantes++;
        existeFecha = true;
      }
    });

    totalFuturo = cuotaBase ? cuotaBase * mesesRestantes : 0;
    return { totalHastaFecha: totalDevengado - sumatoriaPagos, totalDesdeFecha: totalFuturo, cuotaBase, existeFecha, mesesRestantes };
  };

  const traercbu = async () => {


    const cuot = await servicioUsuario1.listacbus(params.cuil_cuit)
    setCbus(cuot)


  }
  const formatCurrency = (value) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(value);

  const { totalHastaFecha, totalDesdeFecha, cuotaBase, existeFecha, mesesRestantes } = calcularTotales();

  const onDrop = useCallback((files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    setFileUpload(files[0]);
    setEnviarr(formData);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop, multiple: false, accept: "application/pdf, image/*" });

  const handleConfirm = () => {
    if (password !== "1234") {
      setErrorPassword(true);
      return;
    }
    setErrorPassword(false);
    traercbu()
    setPaso(2);
  };

  const enviarFinal = async () => {
    setLoading(true);
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const usuario = JSON.parse(loggedUserJSON)
      console.log(usuario.cuil_cuit)
console.log(mesSeleccionado,anioSeleccionado)

      const formData = enviarr || new FormData();
      formData.append("mes", mesSeleccionado);
      formData.append("anio", anioSeleccionado);
      formData.append("id_lote", props.id_lote);
      formData.append("cuil_cuit", pago.cuil_cuit);
      formData.append("cuil_cuit_administrador", usuario.cuil_cuit);

      formData.append("pago", pago.monto);
      formData.append("fecha", pago.fecha);
      formData.append("cbu", pago.cbu);

      try {
        // const cancelacion = await serviciocuotas.cancelarlote({ mes: mesSeleccionado, anio: anioSeleccionado, id_lote: props.id_lote });
        const pagoRes = await servicioUsuario1.cancelarloteic3(formData);
       // alert(cancelacion);
        alert(pagoRes);
        setOpen(false);
        setPaso(1);
        setPassword("");
        setPago({});
        setFileUpload(null);
        props.traer(props.id_lote);
      } catch (error) {
       console.log(error)
      } finally {
        setLoading(false);
      }
    }
  };
  const handleChange = (e) => {
    const selectedCBU = cbus.find((cbu) => cbu.id === e.target.value);
    setPago({ ...pago, [e.target.name]: e.target.value });
    setDescripcionCBU(selectedCBU ? selectedCBU.descripcion : '');
  };
  return (
    <>
      <Button variant="outlined" sx={{ color: "black", borderColor: "black" }} onClick={() => setOpen(true)}>
        Cancelar lote
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Cancelar lote</DialogTitle>
        <DialogContent>
          {paso == 1 ? (
            <>
              <DialogContentText>Seleccione el mes y año de referencia.</DialogContentText>
              <Select value={mesSeleccionado} onChange={(e) => setMesSeleccionado(parseInt(e.target.value))} fullWidth>
                {[...Array(12).keys()].map((m) => (
                  <MenuItem key={m + 1} value={m + 1}>{`Mes ${m + 1}`}</MenuItem>
                ))}
              </Select>
              <Select value={anioSeleccionado} onChange={(e) => setAnioSeleccionado(parseInt(e.target.value))} fullWidth>
                {[...Array(5).keys()].map((a) => (
                  <MenuItem key={anioSeleccionado - 2 + a} value={anioSeleccionado - 2 + a}>
                    {anioSeleccionado - 2 + a}
                  </MenuItem>
                ))}
              </Select>

              {!existeFecha ? (
                <DialogContentText style={{ color: "red" }}>
                  No existen cuotas registradas para {mesSeleccionado}/{anioSeleccionado}
                </DialogContentText>
              ) : (
                <>
                  <DialogContentText>
                    <strong>Cuota base:</strong> {formatCurrency(cuotaBase)}
                  </DialogContentText>
                  <DialogContentText>
                    <strong>Total hasta la fecha:</strong> {formatCurrency(totalHastaFecha)}
                  </DialogContentText>
                  <DialogContentText>
                    <strong>Total desde la fecha:</strong> {formatCurrency(totalDesdeFecha)}
                  </DialogContentText>
                  <DialogContentText>
                    <strong>Meses restantes:</strong> <span style={{ color: mesesRestantes >= 30 ? 'red' : 'black' }}>
  {mesesRestantes}
</span>
                  </DialogContentText>
                </>
              )}

              <TextField
                type="password"
                label="Contraseña"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errorPassword}
                helperText={errorPassword ? "Contraseña incorrecta" : ""}
                sx={{ mt: 2 }}
              />
            </>
          ) : (
            <>
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

              <div {...getRootProps()} style={{ border: "2px dashed gray", padding: 10, textAlign: "center", marginTop: 10 }}>
                <input {...getInputProps()} />
                {fileUpload ? <Typography>Archivo: {fileUpload.name}</Typography> : <Typography>Arrastre un PDF o imagen aquí o haga clic para seleccionar</Typography>}
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false); setPaso(1); setPassword(""); }}>Cancelar</Button>
          {paso === 1 ? (
            <Button onClick={handleConfirm} disabled={!existeFecha}>Siguiente</Button>
          ) : (
            <Button onClick={enviarFinal} disabled={loading}>{loading ? <CircularProgress size={24} /> : "Enviar"}</Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
