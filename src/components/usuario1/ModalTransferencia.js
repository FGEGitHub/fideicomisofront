import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../services/pagos'
import NativeSelect from '@mui/material/NativeSelect';
import useUser from '../../hooks/useUser'
import servicioLotes from '../../services/lotes'
import servicioUsuario1 from '../../services/usuario1'

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
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [lotes, setLotes] = useState([''])
  const [cuotas, setCuotas] = useState([''])

  useEffect(() => {

    traer()

  }, [])


  const traer = async () => {
    console.log('lotes')
    const prueba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))

    const lotes = await servicioUsuario1.lotesCliente(prueba.cuil_cuit)
    setLotes(lotes[0])
    setCuotas(lotes[1])





  }
  const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
  const cuil_cuit = preba.cuil_cuit

  const [pago, setPago] = useState({

    cuil_cuit: cuil_cuit,
    id:props.id


  })


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    console.log(pago)
    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })


    console.log(pago)
  }
  ////
  const pagar = async (event) => {
    // event.preventDefault();

    console.log(pago)
    try {

      await servicioPagos.pagar(
        pago


      )


    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')

    }

    setOpen(false);
  };/////
  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


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
        Subir comprobante Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Parcela {props.parcela}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
          <h3>Subir comprobante  Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Parcela {props.parcela}</h3>
          
            <form onSubmit={pagar}>

              {/* <TextField component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                

                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}


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
              <label>Fecha</label>
              <NativeSelect
                defaultValue={30}
                onChange={handleChange}
                inputProps={{
                  name: 'mes',
                  id: 'uncontrolled-native',

                }}

              > <option value={''}>Elegir</option>
                <option value={'1'}>Enero</option>
                <option value={'2'}>Febrero</option>
                <option value={'3'}>Marzo</option>
                <option value={'4'}>Abril</option>
                <option value={'5'}>Mayo</option>
                <option value={'6'}>Junio</option>
                <option value={'7'}>Julio</option>
                <option value={'8'}>Agosto</option>
                <option value={'9'}>Septiembre</option>
                <option value={'10'}>Octubre</option>
                <option value={'11'}>Noviembre</option>
                <option value={'12'}>Diciebre</option>


              </NativeSelect>

              <NativeSelect
                label="Año"
                defaultValue={30}
                onChange={handleChange}
                inputProps={{
                  name: 'anio',
                  id: 'uncontrolled-native',

                }}

              > <option value={''}>Elegir</option>
                <option value={'2015'}>2015</option>
                <option value={'2016'}>2016</option>
                <option value={'2017'}>2017</option>
                <option value={'2018'}>2018</option>
                <option value={'2019'}>2019</option>
                <option value={'2020'}>2020</option>
                <option value={'2021'}>2021</option>
                <option value={'2022'}>2022</option>
                <option value={'2023'}>2023</option>
                <option value={'2024'}>2024</option>


              </NativeSelect>



              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={handleChange} id="filled-basic" label="Monto" name="monto" variant="filled" />
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >

              </Box>
              <TextField component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"

                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField

                  onChange={handleChange}
                  name="fecha"
                  id="date"
                  label="Fecha de pago"
                  type="month"
                  defaultValue="2020-01"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Button type="submit" size="small" variant="contained">
                Subir Comprobante
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}