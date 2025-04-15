import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import serviciocuotas from '../services/cuotas'
;

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [mesSeleccionado, setMesSeleccionado] = React.useState(new Date().getMonth() + 1);
  const [anioSeleccionado, setAnioSeleccionado] = React.useState(new Date().getFullYear());
  const [password, setPassword] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState(false);

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
        if (!cuotaBase) {
          cuotaBase = cuotaConAjuste;
        }
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

  const formatCurrency = (value) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const { totalHastaFecha, totalDesdeFecha, cuotaBase, existeFecha, mesesRestantes } = calcularTotales();

  const handleConfirm = async () => {
    if (password !== "1234") {
      setErrorPassword(true);
      return;
    }

    setErrorPassword(false);

    const cuotas = props.cuotas || [];
    const id_lote = cuotas.length > 0 ? cuotas[0].id_lote : null;

    if (props.id_lote) {
      console.log( mesSeleccionado)
    const rta =  await serviciocuotas.cancelarlote({
        mes: mesSeleccionado,
        anio: anioSeleccionado,
        id_lote:props.id_lote,
      });
      alert(rta)
    }

    setOpen(false);
    setPassword("");
  };

  return (
    <React.Fragment>
      <Button variant="outlined" sx={{ color: "black", borderColor: "black" }} onClick={() => setOpen(true)}>
        Cancelar lote
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Cancelar lote</DialogTitle>
        <DialogContent>
          <DialogContentText>Seleccione el mes y año de referencia.</DialogContentText>
          <Select
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(parseInt(e.target.value, 10))}
            fullWidth
          >
            {[...Array(12).keys()].map((m) => (
              <MenuItem key={m + 1} value={m + 1}>{`Mes ${m + 1}`}</MenuItem>
            ))}
          </Select>
          <Select
            value={anioSeleccionado}
            onChange={(e) => setAnioSeleccionado(parseInt(e.target.value, 10))}
            fullWidth
          >
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
                <strong>Cuota tomada como base:</strong> {formatCurrency(cuotaBase)}
              </DialogContentText>
              <DialogContentText>
                <strong>Total hasta {mesSeleccionado}/{anioSeleccionado}:</strong> {formatCurrency(totalHastaFecha)}
              </DialogContentText>
              <DialogContentText style={{ color: mesesRestantes >= 30 ? "red" : "inherit" }}>
                <strong>Total desde {mesSeleccionado}/{anioSeleccionado} en adelante:</strong> {formatCurrency(totalDesdeFecha)}
                {totalDesdeFecha && (
                  <>
                    <br />
                    <strong>Cantidad de cuotas: {mesesRestantes}</strong>
                  </>
                )}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false); setPassword(""); setErrorPassword(false); }}>Cancelar</Button>
          <Button onClick={handleConfirm} autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
