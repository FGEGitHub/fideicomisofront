import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import actividades from './actividades.json';
import servicioCliente from "../../../services/clientes";
import codigosp from './codigop.json';
import nacionalidadjson from './nacionalidad.json';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const ModificacionC = () => {
  const [cliente, setCliente] = useState([]);
  const [modificaciones, setModificaciones] = useState({});
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [search, setSearch] = useState('');
  const { cuil_cuit } = useParams();

  const opcionesSMVM = [
    { rango: "0 A 15 SMVM", valor: 1 },
    { rango: "MAYOR DE 15 A 30 SMVM", valor: 2 },
    { rango: "MAYOR DE 30 A 45 SMVM", valor: 3 },
    { rango: "MAYOR DE 45 A 60 SMVM", valor: 4 },
    { rango: "MAYOR DE 60 SMVM", valor: 5 },
  ];


  const filteredOptions = actividades.filter(opcion =>
    opcion.actividad.toLowerCase().includes(search.toLowerCase())
  );
  const filteredOptions2 = codigosp.filter(opcion =>
    opcion.codigo.toLowerCase().includes(search.toLowerCase())
  );
  const filteredOptions3 = nacionalidadjson.filter(opcion =>
    opcion.NACIONALIDAD.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    traerCliente();
  }, []);

  const traerCliente = async () => {
    const clienteResponse = await servicioCliente.cliente(cuil_cuit);
    const client = clienteResponse[0];
    setCliente(clienteResponse);
    setModificaciones({ ...client });
    setFechaNacimiento(client.fechaNacimiento || "1990-01-01");
  };

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleFechaNacimientoChange = (newValue) => {
    setFechaNacimiento(newValue);
    if (newValue) {
      const fecha = new Date(newValue);
      setModificaciones({
        ...modificaciones,
        fechaNacimiento: newValue,
        edad: calcularEdad(fecha),
      });
    }
  };

  const handleChange = (e) => {
    console.log(modificaciones)
    setModificaciones({ ...modificaciones, [e.target.name]: e.target.value });
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    try {
      await servicioCliente.modificarCliente(modificaciones);
      alert("Datos actualizados correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <>

      {cliente.length > 0 &&
        <>
          Edad:{cliente[0].edad}
          <Box sx={{ display: "flex", alignItems: "center", width: "2%" }}>
            Riesgo
            <LinearProgress
              variant="determinate"

              style={{ width: "100%", marginRight: 8 }}
            />
            <span>{`${cliente[0].riesgo}%`}</span>
          </Box>
        </>}

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
                        name="fechaNacimiento"
                        type="date"
                        value={fechaNacimiento || "1990-01-01"}
                        onChange={(e) => handleFechaNacimientoChange(e.target.value)}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                      />
                      {modificaciones.edad && `${modificaciones.edad} años`}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        label="Tipo de Cliente"
                        name="tipoCliente"
                        value={modificaciones.tipoCliente || ""}
                        onChange={handleChange}
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
                        fullWidth
                        label="Seleccionar actividad"
                        name="actividadEconomica"
                        value={modificaciones.actividadEconomica || ""}
                        onChange={(e) =>
                          setModificaciones({
                            ...modificaciones,
                            actividadEconomica: e.target.value,
                          })
                        }
                        variant="outlined"
                        margin="normal"
                      >
                        {filteredOptions.map((opcion, index) => (
                          <MenuItem key={index} value={opcion.actividad}>
                            {opcion.actividad} (Riesgo: {opcion.riesgo})
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>


                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Codigo postal"
                        name="cp"
                        value={modificaciones.cp || ""}
                        onChange={(e) =>
                          setModificaciones({
                            ...modificaciones,
                            cp: e.target.value,
                          })
                        }
                        variant="outlined"
                        margin="normal"
                      >
                        {filteredOptions2.map((opcion, index) => (
                          <MenuItem key={index} value={opcion.codigo}>
                            {opcion.codigo} (Riesgo: {opcion.riesgo})
                          </MenuItem>
                        ))}
                      </TextField>

                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Nacionalidad"
                        name="nacionalidad"
                        value={modificaciones.nacionalidad || ""}
                        onChange={(e) =>
                          setModificaciones({
                            ...modificaciones,
                            nacionalidad: e.target.value,
                          })
                        }
                        variant="outlined"
                        margin="normal"
                      >
                        {filteredOptions3.map((opcion, index) => (
                          <MenuItem key={index} value={opcion.NACIONALIDAD}>
                            {opcion.NACIONALIDAD} (Riesgo: {opcion.riesgo})
                          </MenuItem>
                        ))}
                      </TextField>

                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        fullWidth
                        label="Rango Volumen Transaccional"
                        name="volumenTransaccional"
                        value={modificaciones.volumenTransaccional || ""}
                        onChange={(e) =>
                          setModificaciones({
                            ...modificaciones,
                            volumenTransaccional: e.target.value,
                          })
                        }
                        variant="outlined"
                        margin="normal"
                      >
                        {opcionesSMVM.map((opcion, index) => (
                          <MenuItem key={index} value={opcion.rango}>
                            {opcion.rango} (Valor: {opcion.valor})
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mt: 3 }}
                  >
                    Guardar
                  </Button>
                </CardContent>
              </Card>
            </Container>
          ))}
      </form>
    </>
  );
};

export default ModificacionC;
