import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [mesSeleccionado, setMesSeleccionado] = React.useState(new Date().getMonth() + 1);
  const [anioSeleccionado, setAnioSeleccionado] = React.useState(new Date().getFullYear());

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
    };
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const { totalHastaFecha, totalDesdeFecha, cuotaBase, existeFecha } = calcularTotales();

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={() => setOpen(true)}>
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
              <DialogContentText>
                <strong>Total desde {mesSeleccionado}/{anioSeleccionado} en adelante:</strong> {formatCurrency(totalDesdeFecha)}
              </DialogContentText>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={() => setOpen(false)} autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
