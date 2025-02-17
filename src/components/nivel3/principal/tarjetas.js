import React, { useState,useEffect } from "react";
import { Card, CardContent, Typography, Button, Modal, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import servicionivel3 from '../../../services/nivel3'





const MainMenu = () => {
  const [open, setOpen] = useState(false);
  const [datos, setDatos] = useState();
  const [salary, setSalary] = useState(800);
  const [newSalary, setNewSalary] = useState("");
  const [newDate, setNewDate] = useState("");



    useEffect(() => {
        traer()
    }, [])

    
const traer = async() => {
      
    const historial = await servicionivel3.traerdatosdetarjetas()
  
   setDatos(historial)  // 0 slario vital
  // 
    
    };



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    if (newSalary) {
      const today = new Date();
      const formattedToday = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

      const formattedDate = newDate.match(/^\d{2}\/\d{2}\/\d{4}$/) ? newDate : formattedToday;
      
      setSalary(Number(newSalary));
      setNewDate(formattedDate);

      setNewSalary("");
      handleClose();
    }
  };

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
          <Typography variant="h6">con fecha {datos && datos[0][0]['fecha']} </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Modificar
          </Button>
        </CardContent>
      </Card>

      {/* Modal para modificar el salario */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 3, borderRadius: 2 }}>
          <Typography variant="h6">Modificar Salario</Typography>
          <TextField
            label="Nuevo Salario"
            type="number"
            fullWidth
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
            sx={{ my: 2 }}
          />
             <TextField
            label="Fecha (DD/MM/YYYY)"
            type="text"
            fullWidth
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            placeholder="17/02/2024"
            sx={{ my: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Box>
      </Modal>

      {/* ICC */}
      <Card>
        <CardContent>
          <Typography variant="h6">ICC:</Typography>
          <Typography variant="h5">$200 pesos</Typography>
          <Typography variant="subtitle1">Mes: Enero 2018</Typography>
        </CardContent>
      </Card>

      {/* Pagos de hoy */}
      <Card>
        <CardContent>
          <Typography variant="h6">Pagos de hoy:</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((pago, index) => (
                  <TableRow key={index}>
                    <TableCell>{pago.fecha}</TableCell>
                    <TableCell>${pago.monto}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MainMenu;
