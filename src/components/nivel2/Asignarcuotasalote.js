import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import servicioCuotas from '../../services/cuotas'
export default function Borrarcuotas(props) {
  const [open, setOpen] = React.useState(false);
  const [lotess, setLotess] = React.useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
 
  const handleClickOpen = () => {
    
    setOpen(true);
    traercuotaselcliente()

  };
  const traercuotaselcliente = async () => {
    
    const cuotas = await servicioCuotas.traercuotaselcliente(props.id_origen)
    console.log(cuotas)
    setLotess(
        cuotas)
    
};
const asignar = async (id) => {
    console.log(id)
  const datos = {id :id,
id_origen: props.id_origen}
    const cuotas = await servicioCuotas.asignarloteacuotas(datos)
    console.log(cuotas)
    setLotess(
        cuotas)
    
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Añadir a cuadro de cuotas 
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
        
            {lotess ?  <>
                {
                        lotess.map((item, index) =>
                            <div>

           <Button key={index} variant="contained" onClick={() => { asignar(item['id_lote']) }}> Asignar {item.zona} - {item.manzana} - {item.parcela}</Button>
                            </div>
                        )
                    }
            
            
            </>:<></>}
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