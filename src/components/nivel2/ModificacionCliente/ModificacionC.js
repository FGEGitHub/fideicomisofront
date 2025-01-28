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
  const [cpManual, setCpManual] = useState("");
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
      // Si se seleccionó "OTRAS ZONAS" y se completó el CP manual
      if (modificaciones.cp === "OTRAS_ZONAS" && cpManual.trim()) {
        modificaciones.cp = cpManual; // Sobrescribe el valor de CP
      }
      await servicioCliente.modificarCliente(modificaciones);
      traerCliente();
      alert("Datos actualizados correctamente");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <>

      {cliente.length > 0 &&
        <>
          {cliente[0].razon == 'Persona' ? <>
            Edad:{cliente[0].edad}
          </> : <></>}

          <Box sx={{ display: "flex", alignItems: "center", width: "25%" }}>
            Riesgo
            <LinearProgress
              variant="determinate"
              value={cliente[0].riesgo}
              style={{
                width: "100%",
                marginRight: 8,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#e0e0e0", // Fondo de la barra
              }}
              sx={{
                "& .MuiLinearProgress-bar": {
                  backgroundColor:
                    cliente[0].riesgo <= 58
                      ? "green"
                      : cliente[0].riesgo <= 70
                        ? "yellow"
                        : "red", // Color de la barra según el valor
                },
              }}
            />
            <span
              style={{
                fontWeight: "bold",
                color:
                  cliente[0].riesgo <= 58
                    ? "green"
                    : cliente[0].riesgo <= 70
                      ? "yellow"
                      : "red", // Color del texto según el valor
                textTransform: "uppercase",
              }}
            >
              {cliente[0].riesgo <= 58
                ? "Bajo"
                : cliente[0].riesgo <= 70
                  ? "Medio"
                  : "Alto"}{" "}
                  
              ({cliente[0].riesgo}%)
            </span>
            <br/>
         
          </Box>   {cliente[0].pep_extranjero =="Si" ? <>
            <p style={{ color: 'crimson' }} > Pep Extranjero </p><br/>
          </> : <></>}
          {cliente[0].categoria_especial == "Si" ? <>
            <p style={{ color: 'crimson' }} >    Categoria Especial</p>
          </> : <></>}
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


                    {client.razon == "Persona" ? <>
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
                    </> : <>
                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Tipo de Cliente Empresa"
                          name="tipoClienteEmpresa"
                          value={modificaciones.tipoClienteEmpresa || ""}
                          onChange={(e) =>
                            setModificaciones({
                              ...modificaciones,
                              tipoClienteEmpresa: e.target.value,
                            })
                          }
                          fullWidth
                          variant="outlined"
                          margin="normal"
                        >
                          <MenuItem value="Consorcios de Propietarios">Consorcios de Propietarios</MenuItem>
                          <MenuItem value="Sociedad Anónima">Sociedad Anónima</MenuItem>
                          <MenuItem value="Sociedad de Hecho">Sociedad de Hecho</MenuItem>
                          <MenuItem value="Sociedad de Responsabilidad Limitada">
                            Sociedad de Responsabilidad Limitada
                          </MenuItem>
                          <MenuItem value="Sociedad en comandita por acciones">
                            Sociedad en comandita por acciones
                          </MenuItem>
                          <MenuItem value="Sociedad en comandita Simple">Sociedad en comandita Simple</MenuItem>
                          <MenuItem value="Sociedad Irregular">Sociedad Irregular</MenuItem>
                          <MenuItem value="Sociedad Unipersonal">Sociedad Unipersonal</MenuItem>
                          <MenuItem value="Sociedades cooperativas de trabajo">
                            Sociedades cooperativas de trabajo
                          </MenuItem>
                          <MenuItem value="Sociedades de garantía recíproca (SGR)">
                            Sociedades de garantía recíproca (SGR)
                          </MenuItem>
                          <MenuItem value="Asociaciones Civiles">Asociaciones Civiles</MenuItem>
                          <MenuItem value="Cooperativas">Cooperativas</MenuItem>
                          <MenuItem value="Embajadas">Embajadas</MenuItem>
                          <MenuItem value="Entidades sindicales">Entidades sindicales</MenuItem>
                          <MenuItem value="Fideicomisos">Fideicomisos</MenuItem>
                          <MenuItem value="Fundación">Fundación</MenuItem>
                          <MenuItem value="Mutuales">Mutuales</MenuItem>
                          <MenuItem value="Organizaciones sin fines de lucro - Otros">
                            Organizaciones sin fines de lucro - Otros
                          </MenuItem>
                          <MenuItem value="Sociedad Anónima Simplificada">
                            Sociedad Anónima Simplificada
                          </MenuItem>
                          <MenuItem value="Entes Autarquicos">Entes Autarquicos</MenuItem>
                          <MenuItem value="La Iglesia Católica">La Iglesia Católica</MenuItem>
                          <MenuItem value="SAPEM (participación estatal mayoritaria)">
                            SAPEM (participación estatal mayoritaria)
                          </MenuItem>
                          <MenuItem value="Sector Público Nacional, Provincial o Municipal">
                            Sector Público Nacional, Provincial o Municipal
                          </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Antiguedad"
                          name="antiguedad"
                          value={modificaciones.antiguedad || ""}
                          onChange={handleChange}
                          fullWidth
                        >
                          <MenuItem value="Mayor a 21 años">Mayor a 21 años</MenuItem>
                          <MenuItem value="Entre 11 y 20 años">Entre 11 y 20 años</MenuItem>
                          <MenuItem value="Entre 6 y 10 años">Entre 6 y 10 años</MenuItem>
                          <MenuItem value="Entre 2 y 5 años">Entre 2 y 5 años</MenuItem>
                          <MenuItem value="Menor o igual a 1 años">Menor o igual a 1 años</MenuItem>

                        </TextField>
                      </Grid>

                    </>}

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
                        label="Domicilio"
                        name="domicilio"
                        defaultValue={client.domicilio || ""}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      {client.cp && <>Actual: {client.cp}</>}
                      <TextField
                        select
                        fullWidth
                        label="Codigo postal"
                        name="cp"
                        value={modificaciones.cp || ""}
                        onChange={(e) => {
                          setModificaciones({
                            ...modificaciones,
                            cp: e.target.value,
                          });
                          if (e.target.value !== "OTRAS_ZONAS") {
                            setCpManual(""); // Limpia el campo manual si no es "OTRAS_ZONAS"
                          }
                        }}
                        variant="outlined"
                        margin="normal"
                      >
                        {codigosp.map((opcion, index) => (
                          <MenuItem key={index} value={opcion.codigo}>
                            {opcion.codigo} (Riesgo: {opcion.riesgo})
                          </MenuItem>
                        ))}
                        <MenuItem value="OTRAS_ZONAS">
                          OTRAS ZONAS RIESGO BAJO - LOCALIDAD RIESGO BAJO
                        </MenuItem>
                      </TextField>
                    </Grid>

                    {modificaciones.cp === "OTRAS_ZONAS" && (
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Ingrese código postal manualmente"
                          value={cpManual}
                          onChange={(e) => setCpManual(e.target.value)}
                          variant="outlined"
                          margin="normal"
                        />
                      </Grid>
                    )}

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
                        fullWidth
                        label="Volumen Transaccional (en pesos)"
                        name="volumenTransaccional"
                        value={modificaciones.volumenTransaccional || ""}
                        onChange={(e) => {
                          const valor = e.target.value;
                          // Validación para permitir solo números
                          if (/^\d*$/.test(valor)) {
                            setModificaciones({
                              ...modificaciones,
                              volumenTransaccional: valor,
                            });
                          }
                        }}
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          inputProps: { inputMode: "numeric", pattern: "[0-9]*" },
                        }}
                      /><br /><br/>
                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Pep Extranjero"
                          name="pep_extranjero"
                          value={modificaciones.pep_extranjero || ""}
                          onChange={handleChange}
                          fullWidth
                        >
                          <MenuItem value="Si">Si</MenuItem>
                          <MenuItem value="No">
                            No
                          </MenuItem>
                        </TextField>
                      </Grid><br/>
                      <Grid item xs={12}>
                        <TextField
                          select
                          label="Categoria especial"
                          name="categoria_especial"
                          value={modificaciones.categoria_especial || ""}
                          onChange={handleChange}
                          fullWidth
                        >
                          <MenuItem value="Si">Si</MenuItem>
                          <MenuItem value="No">
                            No
                          </MenuItem>
                        </TextField>
                      </Grid>
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
