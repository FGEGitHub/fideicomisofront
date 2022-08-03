import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import servicioCuotas from '../../../services/cuotas'
export default function Borrarcuotas(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const borarTodas = async () => {
 
    const cuotas = await servicioCuotas.borrarcuotas(props.id)
    handleClose()

};

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
       Borrar todas las cuotas
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="Estas seguro"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Estas seguro?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se borrarán todas las cuotas del lote
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Cancelar
          </Button>
          <Button onClick={borarTodas} autoFocus>
           Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}