import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchemaTwoToneIcon from '@mui/icons-material/SchemaTwoTone';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ApiIcon from '@mui/icons-material/Api';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import sercicioCuotas from '../../../services/cuotas'
import AppsOutageTwoToneIcon from '@mui/icons-material/AppsOutageTwoTone';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from "react-router-dom";
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

export default function SelectTextFields(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    //const usuario  = useUser().userContext

    const [rta, setRta] = useState({
        id_lote: props.idlote,
    })

    const [habilitado, setHabilitado] = useState(false)



    //{if(rta.puede=''){ props.setpuede()}}


    const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
    const cuil_cuit = preba.cuil_cuit

    const handleChange = (e) => {
        console.log(rta)
        setRta({ ...rta, [e.target.name]: e.target.value });
    }

    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    ////


    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Button variant="outlined" onClick={handleClickOpen}>
               Detalles
            </Button>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
            {props.zona =="IC3" ? <>
         Zona: {props.zona} Fraccion: {props.fraccion} Manzana: {props.manzana} Lote: {props.lote} </>:
         <>      Zona: {props.zona} Fraccion: {props.fraccion} Manzana: {props.manzana} Parcela: {props.parcela}                         </>}
        </DialogTitle>
                <DialogContent>
                <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ApiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Superficie" secondary={props.superficie} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AppsOutageTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adrema" secondary={props.adrema} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchemaTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mensura" secondary= {props.adrema} />
      </ListItem>
      {props.cuil_cuit !=0 ? <>
      
        <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchemaTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Titular" secondary= {props.nombre} />
        <Button   onClick={() => navigate('/usuario2/detallecliente/'+props.cuil_cuit)}>Ver</Button>
      </ListItem>
      
      
      </>:<>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchemaTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sin titular asignado" secondary= "--" />
      </ListItem>
      </>}
     
    </List>
                 
                </DialogContent>
                <DialogActions>
   <Button onClick={handleClose} size="small" variant="contained" >
                        Cerrar
                    </Button>

                </DialogActions>
            </Dialog>
        </Box >




    );
}