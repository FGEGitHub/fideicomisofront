import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import servicioCliente from "../../../services/clientes";

const ModificacionC = () => {
  const [cliente, setCliente] = useState([]);
  const [modificaciones, setModificaciones] = useState({});
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [edad, setEdad] = useState(null);
  const [tipoCliente, setTipoCliente] = useState("");
  const [actividadEconomica, setActividadEconomica] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [volumenTransaccional, setVolumenTransaccional] = useState("");
  const { cuil_cuit } = useParams();

  useEffect(() => {
    traerCliente();
  }, []);

  const traerCliente = async () => {
    const clienteResponse = await servicioCliente.cliente(cuil_cuit);
    const client = clienteResponse[0];
    setCliente(clienteResponse);
    setModificaciones({ ...client });
    setFechaNacimiento(client.fechaNacimiento || "1990-01-01"); 
    setTipoCliente(client.tipoCliente || "");
    setActividadEconomica(client.actividadEconomica || "");
    setNacionalidad(client.nacionalidad || "");
    setVolumenTransaccional(client.volumenTransaccional || "");
    if (client.fechaNacimiento) {
      calcularEdad(new Date(client.fechaNacimiento));
    }
  };

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const edadCalculada = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      setEdad(edadCalculada - 1);
    } else {
      setEdad(edadCalculada);
    }
  };

  const handleFechaNacimientoChange = (newValue) => {
    setFechaNacimiento(newValue);
    if (newValue) {
      calcularEdad(new Date(newValue));
    } else {
      setEdad(null);
    }
  };

  const handleChange = (e) => {
    setModificaciones({ ...modificaciones, [e.target.name]: e.target.value });
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    const datosActualizados = {
      ...modificaciones,
      fechaNacimiento,
      tipoCliente,
      actividadEconomica,
      nacionalidad,
      volumenTransaccional,
    };
    try {
      await servicioCliente.modificarCliente(datosActualizados);
      alert("Datos actualizados correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <form onSubmit={handleGuardar}>
      {modificaciones &&
        cliente.map((client) => (
          <Container key={client.id} maxWidth="sm">
            <Card sx={{ backgroundColor: "#bdbdbd", borderRadius: 2, p: 2 }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      label="Nombre"
                      name="Nombre"
                      defaultValue={client.Nombre || ""}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="CUIL/CUIT"
                      name="cuil_cuit"
                      defaultValue={client.cuil_cuit || ""}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      defaultValue={client.email || ""}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                  <TextField
  label="Fecha de Nacimiento"
  name="fecha_nac"
  type="date"
  value={fechaNacimiento || "1990-01-01"} // Fecha por defecto si no existe
  onChange={(e) => {
    const nuevaFecha = e.target.value;
    setFechaNacimiento(nuevaFecha);

    // Calcular la edad automáticamente al seleccionar una fecha
    if (nuevaFecha) {
      const hoy = new Date();
      const fechaNac = new Date(nuevaFecha);
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const mes = hoy.getMonth() - fechaNac.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }
      setModificaciones({ ...modificaciones, edad });
    }
  }}
  InputLabelProps={{
    shrink: true,
  }}
  fullWidth
/> { modificaciones.edad &&     modificaciones.edad +" años"|| ""}
</Grid>

                 
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Tipo de Cliente"
                      value={tipoCliente}
                      onChange={(e) => setTipoCliente(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value="Persona Humana">Persona Humana</MenuItem>
                      <MenuItem value="Persona Humana con Actividad Comercial">
                        Persona Humana con Actividad Comercial
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      label="Actividad Económica"
                      value={actividadEconomica}
                      onChange={(e) => setActividadEconomica(e.target.value)}
                      fullWidth
                    >
                      {["Jubilado", "Estudiante", "Ama de casa", "Trabajo Relac. Dependencia"].map(
                        (opcion, index) => (
                          <MenuItem key={index} value={opcion}>
                            {opcion}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Nacionalidad"
                      name="nacionalidad"
                      defaultValue={nacionalidad || ""}
                      onChange={(e) => setNacionalidad(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Volumen Transaccional"
                      name="volumenTransaccional"
                      defaultValue={volumenTransaccional || ""}
                      onChange={(e) => setVolumenTransaccional(e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, textAlign: "center" }}>
                  <Button variant="contained" color="primary" type="submit">
                    Guardar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Container>
        ))}
    </form>
  );
};

export default ModificacionC;
