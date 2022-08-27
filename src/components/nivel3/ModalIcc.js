import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import servicionivel3 from '../../services/nivel3'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';


export default function ModalIcc(props) {

    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({
    })
    const [cargado, setCargado] = useState(null)
    const [respuesta, setRespuesta] = useState()
    
    const handleChange = (e) => {
        console.log('una')
        setForm({ ...form, [e.target.name]: e.target.value })
     
    }
 
    const traer = async() => {
      
       const puede = await servicionivel3.nuevoicc(props.datos)
       setRespuesta(puede)
      
       setCargado(true)
        
        };  
    const handleClickOpen = () => {
        setOpen(true);
        traer()
    };
    const handleDeterminar = async (event) => {
        event.preventDefault();
       await servicionivel3.agregariccgral(form)
     

        setOpen(false);
       
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                AGREGAR NUEVO ICC
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>   AGREGAR NUEVO ICC</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    

                    {cargado  ?<div>
                      {respuesta.resp}
                    </div> :
                    
                    <div>cargando</div> }



                    </DialogContentText>
                  
                    <br/>
                     
                     

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleDeterminar}>Continuar</Button>
                        </DialogActions>
                   
                </DialogContent>




            </Dialog>
        </div>
    );
}
