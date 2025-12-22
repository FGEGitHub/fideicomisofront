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
import serviciocuotas from "../services/cuotas";
import servicioUsuario1 from "../services/usuario1";
import { useParams } from "react-router-dom";
import Modalveronline from "./nivel2/pagarcuota/verpdfcbu";

export default function CancelarLoteCompleto(props) {
  let params = useParams();
  let id = params.id;
  const [descripcionCBU, setDescripcionCBU] = useState("");

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
  const [cbus, setCbus] = useState([""]);

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
    return {
      totalHastaFecha: totalDevengado - sumatoriaPagos,
      totalDesdeFecha: totalFuturo,
      cuotaBase,
      existeFecha,
      mesesRestantes,
    };
  };

  const traercbu = async () => {
    const cuot = await servicioUsuario1.listacbus(params.cuil_cuit);
    setCbus(cuot);
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(value);

  const { totalHastaFecha, totalDesdeFecha, cuotaBase, existeFecha, mesesRestantes } =
    calcularTotales();

  const onDrop = useCallback((files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    setFileUpload(files[0]);
    setEnviarr(formData);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
    accept: "application/pdf, image/*",
  });

  const handleConfirm = () => {
    if (password !== "1234") {
      setErrorPassword(true);
      return;
    }
    setErrorPassword(false);
    traercbu();
    setPaso(2);
  };

  const enviarFinal = async () => {
    setLoading(true);
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const usuario = JSON.parse(loggedUserJSON);
      console.log(usuario.cuil_cuit);
      console.log(mesSeleccionado, anioSeleccionado);

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
        const pagoRes = await servicioUsuario1.cancelarlote(formData);
        // alert(cancelacion);
        alert(pagoRes);
        setOpen(false);
        setPaso(1);
        setPassword("");
        setPago({});
        setFileUpload(null);
        props.traer(props.id_lote);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const selectedCBU = cbus.find((cbu) => cbu.id === e.target.value);
    setPago({ ...pago, [e.target.name]: e.target.value });
    setDescripcionCBU(selectedCBU ? selectedCBU.descripcion : "");
  };

  // =======================
  // 🎨 SOLO ESTILO (FRONT)
  // =======================
  const sxPrimaryBtn = {
    mb: 2,
    px: 2.2,
    py: 1.1,
    borderRadius: 2,
    textTransform: "none",
    fontWeight: 900,
    backgroundColor: "#01567c",
    boxShadow: "0 10px 25px rgba(1,86,124,0.25)",
    "&:hover": { backgroundColor: "#014a6b" },
  };

  const sxDialogPaper = {
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "0 22px 70px rgba(10,59,79,0.25)",
    border: "1px solid rgba(1,86,124,0.10)",
  };

  const sxDialogHeader = {
    px: 2.6,
    py: 2.1,
    color: "#fff",
    background: "linear-gradient(135deg, #0b2a3a 0%, #01567c 60%, #148D8D 100%)",
  };

  const sxContent = {
    p: 2.6,
    background:
      "radial-gradient(900px 420px at 10% 0%, rgba(1,86,124,0.10), transparent 55%), radial-gradient(800px 380px at 90% 10%, rgba(20,141,141,0.08), transparent 45%), #ffffff",
  };

const sxBlock = {
 
  p: 2.2,              // ⬅ más padding interno
  mt: 1.8,             // ⬅ separa del contenido de arriba
  mx: 0.5,             // ⬅ separa de los bordes laterales
  
};

  const sxWarn = {
    borderRadius: 2,
    p: 1.2,
    backgroundColor: "rgba(211,47,47,0.06)",
    border: "1px solid rgba(211,47,47,0.18)",
  };

  const sxSelect = {
    mt: 1.4,
    borderRadius: 2,
    backgroundColor: "#fbfdff",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(1,86,124,0.18)" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(1,86,124,0.35)" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#01567c",
      boxShadow: "0 0 0 3px rgba(1,86,124,0.12)",
    },
  };

  const sxInput = {
    mt: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      backgroundColor: "#fbfdff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(1,86,124,0.18)",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(1,86,124,0.35)",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#01567c",
      boxShadow: "0 0 0 3px rgba(1,86,124,0.12)",
    },
    "& .MuiInputLabel-root": { fontWeight: 800, color: "#2b3a42" },
  };

  const sxActionBar = {
    px: 2.6,
    py: 1.6,
    borderTop: "1px solid rgba(1,86,124,0.10)",
    backgroundColor: "#fff",
  };

  const sxBtnGhost = {
    textTransform: "none",
    fontWeight: 900,
    borderRadius: 2,
    px: 2,
    color: "rgba(10,59,79,0.88)",
    backgroundColor: "rgba(1,86,124,0.06)",
    border: "1px solid rgba(1,86,124,0.10)",
    "&:hover": { backgroundColor: "rgba(1,86,124,0.10)" },
  };

  const sxBtnNext = {
    textTransform: "none",
    fontWeight: 900,
    borderRadius: 2,
    px: 2.2,
    backgroundColor: "#148D8D",
    boxShadow: "0 10px 25px rgba(20,141,141,0.22)",
    "&:hover": { backgroundColor: "#0f7a7a" },
  };

  const sxDropzone = {
    mt: 2,
    borderRadius: 2,
    p: 2,
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: fileUpload ? "rgba(20,141,141,0.08)" : "#fbfdff",
    border: fileUpload ? "1px solid rgba(20,141,141,0.35)" : "1px dashed rgba(1,86,124,0.30)",
    transition: "0.18s ease",
    "&:hover": {
      borderColor: "rgba(1,86,124,0.45)",
      backgroundColor: "rgba(1,86,124,0.04)",
    },
  };

  const sxStatRow = {
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
    mt: 0.9,
    flexWrap: "wrap",
  };

  const sxStatLabel = { fontWeight: 900, color: "rgba(10,59,79,0.88)" };
  const sxStatValue = { fontWeight: 900, color: "#01567c" };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={sxPrimaryBtn}
          onClick={() => setOpen(true)}
        >
          Cancelar lote
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: sxDialogPaper }}
      >
        {/* Header moderno */}
        <DialogTitle sx={sxDialogHeader}>
          <Typography sx={{ fontWeight: 900, letterSpacing: 0.2, fontSize: 16 }}>
            Cancelar lote
          </Typography>
          <Typography sx={{ opacity: 0.92, mt: 0.6, fontSize: 13, fontWeight: 700 }}>
            {paso === 1
              ? "Seleccioná el mes/año de referencia y confirmá con contraseña."
              : "Seleccioná CBU, fecha y adjuntá documentación (PDF/imagen)."}
          </Typography>
        </DialogTitle>

        <DialogContent sx={sxContent}>
          {paso == 1 ? (
            <>
              

              {/* Bloque selección */}
              <div style={{ marginTop: 12 }}>
                <Typography sx={{ fontWeight: 900, color: "#0a3b4f", fontSize: 13.5, mb: 0.8 }}>
                  Período
                </Typography>

                <Select
                  value={mesSeleccionado}
                  onChange={(e) => setMesSeleccionado(parseInt(e.target.value))}
                  fullWidth
                  sx={sxSelect}
                  displayEmpty
                >
                  {[...Array(12).keys()].map((m) => (
                    <MenuItem key={m + 1} value={m + 1}>{`Mes ${m + 1}`}</MenuItem>
                  ))}
                </Select>

                <Select
                  value={anioSeleccionado}
                  onChange={(e) => setAnioSeleccionado(parseInt(e.target.value))}
                  fullWidth
                  sx={sxSelect}
                  displayEmpty
                >
                  {[...Array(5).keys()].map((a) => (
                    <MenuItem key={anioSeleccionado - 2 + a} value={anioSeleccionado - 2 + a}>
                      {anioSeleccionado - 2 + a}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              {/* Totales */}
              {!existeFecha ? (
                <div style={{ marginTop: 14 }}>
                  <div style={sxWarn}>
                    <Typography sx={{ fontWeight: 900, color: "#b71c1c", fontSize: 13.5 }}>
                      No existen cuotas registradas
                    </Typography>
                    <Typography sx={{ mt: 0.4, color: "rgba(130,0,0,0.80)", fontSize: 13 }}>
                      No existen cuotas registradas para {mesSeleccionado}/{anioSeleccionado}
                    </Typography>
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: 14 }}>
                  <div style={sxBlock}>
                    <Typography sx={{ fontWeight: 900, color: "#0a3b4f", fontSize: 13.5, mb: 0.6 }}>
                      Resumen
                    </Typography>

                    <div style={sxStatRow}>
                      <Typography sx={sxStatLabel}>Cuota base</Typography>
                      <Typography sx={sxStatValue}>{formatCurrency(cuotaBase)}</Typography>
                    </div>

                    <div style={sxStatRow}>
                      <Typography sx={sxStatLabel}>Total hasta la fecha</Typography>
                      <Typography sx={sxStatValue}>{formatCurrency(totalHastaFecha)}</Typography>
                    </div>

                    <div style={sxStatRow}>
                      <Typography sx={sxStatLabel}>Total desde la fecha</Typography>
                      <Typography sx={sxStatValue}>{formatCurrency(totalDesdeFecha)}</Typography>
                    </div>

                    <div style={sxStatRow}>
                      <Typography sx={sxStatLabel}>Meses restantes</Typography>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          color: mesesRestantes >= 30 ? "#b71c1c" : "#01567c",
                        }}
                      >
                        {mesesRestantes}
                      </Typography>
                    </div>

                    {mesesRestantes >= 30 && (
                      <Typography sx={{ mt: 0.9, fontSize: 12.5, fontWeight: 800, color: "rgba(130,0,0,0.78)" }}>
                        Aviso: la cantidad de meses restantes es alta.
                      </Typography>
                    )}
                  </div>
                </div>
              )}

              {/* Password */}
              <TextField
                type="password"
                label="Contraseña"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errorPassword}
                helperText={errorPassword ? "Contraseña incorrecta" : ""}
                sx={sxInput}
              />
            </>
          ) : (
            <>
              {/* CBU */}
              <Typography sx={{ fontWeight: 900, color: "#0a3b4f", fontSize: 13.5, mb: 1 }}>
                Datos de cancelación
              </Typography>

              <TextField
                component="form"
                sx={{
                  ...sxInput,
                  mt: 0,
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                id="outlined-select-currency"
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

              {pago.cbu ? <Modalveronline id={pago.cbu} /> : <></>}

              {descripcionCBU && (
                <Typography variant="body1" sx={{ mt: 1.6, fontWeight: 900, color: "#01567c" }}>
                  Ultimos numeros: {descripcionCBU}
                </Typography>
              )}

              {/* Fecha */}
              <TextField
                fullWidth
                type="date"
                label="Fecha"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setPago({ ...pago, fecha: e.target.value })}
                sx={sxInput}
              />

              {/* Dropzone */}
              <div {...getRootProps()} style={{ marginTop: 4 }}>
                <input {...getInputProps()} />
                <div style={sxDropzone}>
                  {fileUpload ? (
                    <>
                      <Typography sx={{ fontWeight: 900, color: "#0f7a7a" }}>
                        Archivo seleccionado
                      </Typography>
                      <Typography sx={{ mt: 0.4, color: "rgba(10,59,79,0.75)", fontWeight: 700 }}>
                        {fileUpload.name}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography sx={{ fontWeight: 900, color: "#0a3b4f" }}>
                        Arrastrá un PDF o imagen aquí
                      </Typography>
                      <Typography sx={{ mt: 0.4, color: "rgba(10,59,79,0.70)", fontSize: 13 }}>
                        o hacé click para seleccionar el archivo.
                      </Typography>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>

        <DialogActions sx={sxActionBar}>
          <Button
            onClick={() => {
              setOpen(false);
              setPaso(1);
              setPassword("");
            }} variant="contained"
             sx={{
          mb: 2,
          px: 2.2,
          py: 1.1,
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 700,
          backgroundColor: '#148D8D',
          boxShadow: '0 10px 25px rgba(1,86,124,0.25)',
          '&:hover': { backgroundColor: '#0e7070ff' }
        }}
            disabled={loading}
          >
            Cancelar
          </Button>

          {paso === 1 ? (
            <Button onClick={handleConfirm} disabled={!existeFecha}  sx={{
          mb: 2,
          px: 2.2,
          py: 1.1,
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 700,
          backgroundColor: '#01567c',
          boxShadow: '0 10px 25px rgba(1,86,124,0.25)',
          '&:hover': { backgroundColor: '#014a6b' }
        }} variant="contained">
              Siguiente
            </Button>
          ) : (
            <Button onClick={enviarFinal} disabled={loading} sx={sxBtnNext} variant="contained">
              {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Enviar"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
