import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import servicioCuotas from '../../../services/cuotas';

export default function Borrarcuotas(props) {
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword('');
    setError('');
  };

  const borarTodas = async () => {
    if (password === 'conpumundohipermegared') {
      await servicioCuotas.borrarcuotas(props.id);
      handleClose();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div>
      <Button   variant="outlined"
    sx={{ color: "black", borderColor: "black" }} onClick={handleClickOpen}>
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
          <TextField
            margin="dense"
            label="Ingrese la contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={borarTodas}>Si</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}