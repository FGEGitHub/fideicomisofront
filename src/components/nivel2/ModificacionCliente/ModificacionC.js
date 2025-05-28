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
import Typography from "@mui/material/Typography";


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
  const SMVM = 296832; // Valor del salario mínimo actualizado

  const calcularRiesgo = (valor) => {
    const vecesSMVM = valor / SMVM;

    if (cliente[0].razon === "Persona") {
      if (vecesSMVM <= 15) return 1;
      if (vecesSMVM <= 30) return 2;
      if (vecesSMVM <= 45) return 3;
      if (vecesSMVM <= 60) return 4;
      return 5;
    } else if (cliente[0].razon === "Empresa") {
      if (vecesSMVM <= 30) return 1;
      if (vecesSMVM <= 60) return 2;
      if (vecesSMVM <= 90) return 3;
      if (vecesSMVM <= 120) return 4;
      return 5;
    }
  };


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
      {cliente.length > 0 && (
        <Card
          sx={{
            mb: 3,
            backgroundColor: "#d7e8f2",
            borderRadius: 2,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >


          <Box sx={{ minWidth: "250px", flex: 1 }}>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold", textTransform: "uppercase" }}>
              Riesgo
            </Typography>
            <LinearProgress
              variant="determinate"
              value={cliente[0].riesgo}
              style={{
                width: "100%",
                marginRight: 8,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#f3f5f5", // Fondo de la barra
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
           

            <Typography
            
              variant="body2"
              sx={{
                mt: 1,
                fontWeight: "bold",
                color:
                  cliente[0].riesgo <= 58
                    ? "green"
                    : cliente[0].riesgo <= 70
                      ? "orange"
                      : "red",
                textTransform: "uppercase",
              }}
            >
              {cliente[0].riesgo <= 58
                ? "Bajo"
                : cliente[0].riesgo <= 70
                  ? "Medio"
                  : "Alto"} ( {cliente[0].riesgo}% )
            </Typography>

            {cliente[0].razon === "Persona" && (
              <Box sx={{ fontWeight: "bold", fontSize: 16 }}>
                Edad: <span style={{ fontWeight: "normal" }}>{cliente[0].edad}</span>
              </Box>
            )}
          </Box>
          {cliente[0].pep_extranjero === "Si" && (
            <Box sx={{ color: "crimson", fontWeight: "bold" }}>
              PEP Extranjero
            </Box>
          )}

          {cliente[0].categoria_especial === "Si" && (
            <Box sx={{ color: "crimson", fontWeight: "bold" }}>
              Categoría Especial
            </Box>
          )}
        </Card>
      )}

      <form onSubmit={handleGuardar}>
        {modificaciones &&
          cliente.map((client) => (
            <Container key={client.id} maxWidth="lg">
              <Card sx={{ backgroundColor: "#ffff", borderRadius: 2, p: 3 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    {/* Izquierda */}
                    <Grid item xs={12} md={8}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField label="Nombre y apellido" name="Nombre" defaultValue={client.Nombre || ""}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth size="small"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField label="Cuit" name="cuil_cuit" defaultValue={client.cuil_cuit || ""}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth size="small"
                          />
                        </Grid>

                        {client.razon == "Persona" ? <>
                          <Grid item xs={6}>
                            <TextField label="Fecha nacimiento" name="fechaNacimiento" type="date"
                              value={fechaNacimiento || "1990-01-01"}
                              onChange={(e) => handleFechaNacimientoChange(e.target.value)}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              fullWidth size="small"
                            />
                            {modificaciones.edad && modificaciones.edad}años
                          </Grid>

                          <Grid item xs={6}>
                            <TextField
                              select
                              label="Tipo de Cliente"
                              name="tipoCliente"
                              value={modificaciones.tipoCliente || ""}
                              onChange={handleChange}
                              fullWidth size="small"
                            >
                              <MenuItem value="Persona Humana">Persona Humana(Riesgo 1)</MenuItem>
                              <MenuItem value="Persona Humana con Actividad Comercial">
                                Persona Humana con Actividad Comercial (Riesgo 3)
                              </MenuItem>
                            </TextField>
                          </Grid>
                        </> : <>
                          <Grid item xs={6}>
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
                              size="small"
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
                        </>}

                        <Grid item xs={6}>
                          <TextField label="Domicilio" name="domicilio" defaultValue={client.domicilio || ""}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth size="small"
                          /> </Grid>

                        <Grid item xs={6}>
                          <TextField label="Correo" name="email" defaultValue={client.email || ""}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth size="small"
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            label="Teléfono"
                            name="telefono"
                            defaultValue={client.telefono || ""}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            size="small"
                          />
                        </Grid>

                        {/* Código Postal debajo del teléfono */}
                        <Grid item xs={12}>
                          <Grid container spacing={2} alignItems="center">
                            {/* Código Postal */}
                            <Grid item xs={6}>
                              <TextField
                                select
                                label="Código Postal"
                                name="cp"
                                value={modificaciones.cp || ""}
                                onChange={handleChange}
                                size="small"
                                fullWidth
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

                            {/* Categoría especial */}
                            <Grid item xs="auto">
                              <TextField
                                select
                                label="Categoría especial"
                                name="categoria_especial"
                                value={modificaciones.categoria_especial || ""}
                                onChange={handleChange}
                                size="small"
                                sx={{ width: '120px' }}
                              >
                                <MenuItem value="Si">Si</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                              </TextField>
                            </Grid>

                            {/* Pep Extranjero */}
                            <Grid item xs="auto">
                              <TextField
                                select
                                label="Pep Extranjero"
                                name="pep_extranjero"
                                value={modificaciones.pep_extranjero || ""}
                                onChange={handleChange}
                                size="small"
                                sx={{ width: '120px' }}
                              >
                                <MenuItem value="Si">Si</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                              </TextField>
                            </Grid>
                          </Grid>
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
                            margin="normal" size="small"
                          >
                            {filteredOptions3.map((opcion, index) => (
                              <MenuItem key={index} value={opcion.NACIONALIDAD}>
                                {opcion.NACIONALIDAD} (Riesgo: {opcion["NIVEL DE RIESGO"]})
                              </MenuItem>
                            ))}
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
                            margin="normal" size="small"
                          >
                            {filteredOptions.map((opcion, index) => (
                              <MenuItem key={index} value={opcion.actividad}>
                                {opcion.actividad} (Riesgo: {opcion.riesgo})
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>



                        <Grid item xs={12}>
                          <Typography variant="subtitle1" fontWeight="bold">SALARIO MINIMO: {SMVM.toLocaleString("es-AR")}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Volumen Transaccional"
                            name="volumenTransaccional"
                            value={modificaciones.volumenTransaccional || ""}
                            onChange={(e) => {
                              handleChange(e); // Esto mantiene tu estado general
                              const nuevoValor = e.target.value;
                              if (!isNaN(nuevoValor) && nuevoValor !== "") {
                                const riesgoCalculado = calcularRiesgo(Number(nuevoValor));
                                setModificaciones((prev) => ({
                                  ...prev,
                                  riesgoCalculado: riesgoCalculado,
                                }));
                              }
                            }}
                            variant="outlined" fullWidth size="small" />

                          {modificaciones.volumenTransaccional && (

                            <Typography>
                              Equivale a {(modificaciones.volumenTransaccional / SMVM).toFixed(2)} SMVM
                            </Typography>

                          )} </Grid>

                        {modificaciones.riesgoCalculado && (
                          <Grid item xs={6}>
                            <p><strong>Riesgo Calculado:</strong> Riesgo {modificaciones.riesgoCalculado}</p>

                          </Grid>
                        )}



                      </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, backgroundColor: "#fff" }}>
                        <Typography variant="h6" gutterBottom>
                          CLASIFICACION DE RIESGO
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                          <Box width={12} height={12} borderRadius={6} bgcolor="green" />
                          <Typography fontSize={14}>Bajo <small>(1–58) %</small></Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                          <Box width={12} height={12} borderRadius={6} bgcolor="orange" />
                          <Typography fontSize={14}>Medio <small>(59–70) %</small></Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box width={12} height={12} borderRadius={6} bgcolor="red" />
                          <Typography fontSize={14}>Alto <small>(71–100) %</small></Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="flex-end">
                        <Button type="submit" variant="contained" color="success">
                          GUARDAR
                        </Button>
                      </Box>
                    </Grid>
                  </Grid> {/* cierre del Grid container spacing={2} */}


                </CardContent>
              </Card>
            </Container>
          ))}
      </form>
    </>
  );

};

export default ModificacionC;