import React, { useState } from "react";
import servicioClientes from "../../../services/clientes";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ModalLote from "./ModalSeguro";

const AsignarLoteACliente = () => {
  const navigate = useNavigate();
  const { cuil_cuit } = useParams();
  const [lotes, setLotes] = useState({
    cuil_cuit: cuil_cuit,
    zona: "IC3",
    fraccion: "IC3",
    estado: "VENDIDO",
    manzana: "",
    parcela: "",
    lote: "",
  });
  const [parque, setParque] = useState(false);

  const designar = async (event) => {
    console.log(lotes);
    await servicioClientes.ventaLote(lotes);
    navigate("/usuario2/detallecliente/" + cuil_cuit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLotes({ ...lotes,  [e.target.name]: e.target.value });
    if (value === "PIT") {
      setParque(true);
    } else {
      setParque(false);
    }
  };

  return (

    
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ maxWidth: 690, padding: 2 }}>
        <h2>Seleccionar el lote correspondiente a la persona</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Select
                name="zona"
                value={lotes.zona}
                onChange={handleChange}
                variant="filled"
              >
                <MenuItem value={"IC3"}>Elegir</MenuItem>
                <MenuItem value={"PIT"}>Parque Industrial</MenuItem>
                <MenuItem value={"IC3"}>IC3</MenuItem>
              </Select>
              <TextField
                autoFocus
                margin="dense"
                variant="filled"
                type="number"
                label="Manzana"
                name="manzana"
                value={lotes.manzana}
                onChange={handleChange}
                fullWidth
              />
              {lotes.zona=='PIT' ? (
                <TextField
                  autoFocus
                  margin="dense"
                  type="number"
                  label="Parcela"
                  name="parcela"
                  value={lotes.parcela}
                  onChange={handleChange}
                  fullWidth
                  variant="filled"
                />
              ) : (
                <TextField
                  autoFocus
                  margin="dense"
                  label="Lote"
                  name="lote"
                  value={lotes.lote}
                  onChange={handleChange}
                  fullWidth
                  variant="filled"
                />
              )}
              <FormControl fullWidth>
                <Select
                  name="fraccion"
                  value={lotes.fraccion}
                  onChange={handleChange}
                  variant="filled"
                >
                  <MenuItem value={"IC3"}>Elegir</MenuItem>
                  <MenuItem value={"ID/4"}>ID/4 (parque)</MenuItem>
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                  <MenuItem value={"D"}>D</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  name="estado"
                  value={lotes.estado}
                  onChange={handleChange}
                  variant="filled"
                >
                  <MenuItem value={"IC3"}>Elegir</MenuItem>
                  <MenuItem value={"VENDIDO"}>Venta</MenuItem>
                  <MenuItem value={"RESERVADO"}>Reservar</MenuItem>
                </Select>
              </FormControl>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" onClick={designar}>
                Designar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ModalLote datos={lotes} cuil_cuit={cuil_cuit} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AsignarLoteACliente;
