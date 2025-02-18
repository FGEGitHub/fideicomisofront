import React, { useState,useEffect } from "react";
import { Card, CardContent, Typography, Button, Modal, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import servicionivel3 from '../../../services/nivel3'





const MainMenu = () => {
  const [open, setOpen] = useState(false);
  const [datos, setDatos] = useState();
  const [form, setForm] = useState('');
  const fecha = new Date();
  const anio = fecha.getFullYear();
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const mesNombre = meses[fecha.getMonth()];



    useEffect(() => {
        traer()
    }, [])

    
const traer = async() => {
      
    const historial = await servicionivel3.traerdatosdetarjetas()
  console.log(historial)
   setDatos(historial)  // 0 slario vital
  // 
    
    };



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async () => {
    const historial = await servicionivel3.enviardatosnuevosalario(form)
    alert(historial)
    traer()
    setOpen(false);
  };
  const handleSubmitfalso = () => {
   alert('Completa los campos')
   };

  const handleChange = (e) =>{
    setForm({  ...form, [e.target.name]: e.target.value })

  }


  const payments = [
    { fecha: "2025-02-17", monto: 500 },
    { fecha: "2025-02-16", monto: 1200 },
    { fecha: "2025-02-15", monto: 750 },
  ];
  const formatNumber = (num) => {
    return new Intl.NumberFormat("es-ES").format(num);
  };

  return (
    <Box sx={{ display: "grid", gap: 2, padding: 2 }}>
      {/* Salario mínimo */}
      <Card> 
        <CardContent>
          <Typography variant="h6">Salario mínimo, vital y móvil:</Typography>
          <Typography variant="h4">${datos && formatNumber(datos[0][0]['valor'])} pesos</Typography>
          <Typography variant="h6">con fecha de carga {datos && datos[0][0]['fecha']} </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Modificar
          </Button>
        </CardContent>
      </Card>

      {/* Modal para modificar el salario */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 3, borderRadius: 2 }}>
          <Typography variant="h6">Modificar Salario</Typography>
          Nuevo Salario
          <TextField
           
            type="number"
            fullWidth
        
            name="valor"
            onChange={handleChange}
            sx={{ my: 2 }}
          />

          Fecha
             <TextField
            
            type="text"
            fullWidth
   
            name="fecha"
            onChange={handleChange}
            placeholder="17/02/2024"
            sx={{ my: 2 }}
          />
                {form.valor && form.fecha ? <><Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>  </> :<><Button variant="contained" color="primary" onClick={handleSubmitfalso}>Completar los datos</Button>  </>  }
        </Box>
      </Modal>

      {/* ICC */}
      <Card>
        <CardContent>
          <Typography variant="h6">ICC:</Typography>
          <Typography variant="h5">{datos &&     datos[1].length > 0 ? datos[1][0].ICC:<>Sin ICC en este mes</>        }</Typography>
          <Typography variant="subtitle1">
      Mes: {mesNombre} {anio}
    </Typography>
        </CardContent>
      </Card>

      {/* Pagos de hoy */}
      <Card>
        <CardContent>
          <Typography variant="h6">Criterios de Riesgo</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
{datos &&   datos[2].length>0 ? <>
                { datos[2].map((pago, index) => (
                  <TableRow key={index}>
                    <TableCell>{pago.tipo}</TableCell>
                    <TableCell>{pago.valor} salarios minimos ({formatNumber(pago.valor*datos[0][0]['valor'])} pesos)</TableCell>
                  </TableRow>
                ))}

</>:<>Sin valores</>  }
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MainMenu;
