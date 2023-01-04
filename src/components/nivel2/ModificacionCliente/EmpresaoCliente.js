import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Paper} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import servicioClientes from '../../../services/clientes'
import InputLabel from '@mui/material/InputLabel';
import { useParams } from "react-router-dom"
import React, {useCallback, useEffect, useState, Fragment } from "react";



const currencies = [
  {
    value: 'SI',
    label: 'SI',
  },
  {
    value: 'NO',
    label: 'NO',
  },

];

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  let params = useParams()
  let cuil_cuit = params.cuil_cuit
   const [establecer, setEstablecer] = useState({
    cuil_cuit,
    

    })


    const handleDeterminar = async() => {
 
  
       await servicioClientes.determinarEmpresa(establecer)
     //  
      
     setOpen(false);
  
  
      }





  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    console.log(establecer)
    setEstablecer({ ...establecer, [e.target.name]: e.target.value })


  }
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
        <br/> <br/>
      <Button variant="outlined" onClick={handleClickOpen}>
      Establecer Empresa/Cliente
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
          <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                         Razon
                        </InputLabel>
                        <NativeSelect
                            defaultValue={"Empresa"}
                            onChange={handleChange}
                            inputProps={{
                                name: 'razon',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'Empresa'}>Elegir</option>
                            <option   value={'Empresa'}>Empresa</option>
                            <option  value={'Persona'}>Persona</option>
                         
                        </NativeSelect>  
                         
                     
              <br />

              <div>
               {/*  <NativeSelect
                  defaultValue={30}
                  onChange={handleChange}
                  inputProps={{
                    name: 'id',
                    id: 'uncontrolled-native',

                  }}

                >          
                        <option key={index} value={item['id']}>Elegir</option>
                        <option key={index} value={item['id']}>  {item['zona']}F{item['fraccion']}M{item['manzana']}P{item['parcela']}</option>
                      

                </NativeSelect>
 */}

              </div>


              <br />
              <Button variant="contained" color="primary"  onClick={handleDeterminar}>Determinar</Button>
              <Button  variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}