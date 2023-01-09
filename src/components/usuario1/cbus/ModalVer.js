import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../../services/pagos'
import NativeSelect from '@mui/material/NativeSelect';
import DialogActions from '@mui/material/DialogActions';
import servicioCliente from '../../../services/clientes'
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useEffect, useState, Fragment } from "react";
const currencies = [
  {
    value: 'CBU',
    label: 'CBU N°1',
  },
  {
    value: 'CBU',
    label: 'CBU N°2',
  },

];

export default function Borrar(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [notificacion, setNotidicaciones] = useState()
  const [activo, setActivo] = useState(false)



  
  //const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
  //const cuil_cuit = preba.cuil_cuit


  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  
 
  ////
  
  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */
    const handleDeterminar = async (event) => {
      event.preventDefault();
     
      try {
  
        await servicioCliente.borrarcbu(props.id)

       } catch (error) {
         console.error(error);
         console.log('Error algo sucedio')
     
       
       }
       props.traer()
     
      setOpen(false);
    };
    

  return (

    
    <Box

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       < Tooltip title="Leer">
      <DeleteForeverIcon variant="outlined" onClick={handleClickOpen}/>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

  
             <div>
             <h3>Seguro quieres borrar el cbu :</h3>
             
               
   
   
                 <br />
                 <label>{props.numero} ?</label>
                 <br />
                 <br />
                No podrás notificar el pago asociado al mismo
   
                 <DialogActions>
   
                 <><Button variant="contained" color="error"   onClick={handleDeterminar} >Borrar</Button></>
                 <Button  variant="outlined" color="primary" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
                 </DialogActions>
             </div>
         
        </DialogContent>
      </Dialog>
    </Box >

   
  );
}