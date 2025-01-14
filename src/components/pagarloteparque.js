import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const calcularTotales = () => {
    const cuotas = props.cuotas || [];

    const sumatoriaPagos = cuotas.reduce((acc, cuota) => acc + parseFloat(cuota.pago || 0), 0);

    const totalDevengado = cuotas.reduce((acc, cuota) => {
      if (parseFloat(cuota.ajuste) !== 0) {
        return acc + parseFloat(cuota.cuota_con_ajuste || 0);
      } else {
        return acc + parseFloat(cuota.amortizacion || 0);
      }
    }, 0);

    const totalAPagar = totalDevengado - sumatoriaPagos;

    return { sumatoriaPagos, totalDevengado, totalAPagar };
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const { sumatoriaPagos, totalDevengado, totalAPagar } = calcularTotales();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Cancelar lote
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Cancelar lote {props.id_cliente}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Seguro que deseas cancelar el lote.
          </DialogContentText>
          <DialogContentText>
            <strong>Sumatoria de pagos:</strong> {formatCurrency(sumatoriaPagos)}
          </DialogContentText>
          <DialogContentText>
            <strong>Total devengado:</strong> {formatCurrency(totalDevengado)}
          </DialogContentText>
          <DialogContentText>
            <strong>Total a pagar:</strong> {formatCurrency(totalAPagar)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
