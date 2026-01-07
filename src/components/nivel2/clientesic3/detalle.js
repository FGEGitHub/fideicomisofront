import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Alert,
  Button,
  Chip,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import LotesCliente from "../../LotesCliente";
import InfoCliente from "../detalleclienteIngresos/FichaAxios";
import servicioCliente from "../../../services/clientes";
import Ingreso from "../detalleclienteIngresos/Ingresos";
import PEP from "../detalleclienteIngresos/DeterminarPep";
import Cuotas from "../cuotasic3/tabla";
import { alpha } from "@mui/material/styles";


const DetalleCliente = () => {
  const navigate = useNavigate();
  const { cuil_cuit } = useParams();

  const [cliente, setCliente] = useState();
  const [idd, setIdd] = useState();
  const [habilitado, setHabilitado] = useState(false);
  const [carga, setCarga] = useState(true);
  const [expuesta, setExpuesta] = useState(false);

  useEffect(() => {
    traer();
  }, []);

  const traer = async () => {
    const clientee = await servicioCliente.clientehabilitadoic3(cuil_cuit);

    setIdd(clientee[0][clientee[0].length - 1]);
    setCliente(clientee[1]);

    if (clientee[0][0].habilitado === "Si") setHabilitado(true);
    if (clientee[0][0].expuesta === "SI") setExpuesta(true);

    setCarga(false);
  };

  if (carga) return <>Cargando</>;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        background:
          "linear-gradient(180deg, rgba(10,59,79,0.05) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      {/* HEADER CLIENTE (igual a la 2da imagen) */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid #e8eef5",
          background:
            "linear-gradient(90deg, #0a3b4f 0%, #0b4f6c 55%, #0f7f86 100%)",
          mb: 2,
        }}
      >
        <Box sx={{ p: { xs: 2, md: 2.5 }, color: "#fff" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            alignItems={{ md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography sx={{ fontWeight: 950, letterSpacing: 0.2 }}>
                Cliente
              </Typography>
              <Typography
                sx={{
                  opacity: 0.92,
                  fontWeight: 700,
                  fontSize: 13,
                  mt: 0.2,
                }}
              >
                CUIT/CUIL: <b>{cuil_cuit}</b>
              </Typography>
            </Box>

            {/* ACCIONES ARRIBA A LA DERECHA (como la 2da imagen) */}
            <Box
              sx={{
                display: "flex",
                gap: 1.25,
                justifyContent: { xs: "flex-start", md: "flex-end" },
                flexWrap: "wrap",
              }}
            >
              {/* PEP (NO TOCO NADA, solo lo ubico como botón en el header) */}
              <Box
                sx={{
                  "& .MuiButton-root": {
                    borderRadius: 2,
                    px: 2.2,
                    py: 1.05,
                    textTransform: "none",
                    fontWeight: 900,
                    backgroundColor: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.24)",
                    },
                  },
                }}
              >
                <PEP cuil_cuit={cuil_cuit} />
              </Box>

              {/* ACTUALIZAR COMPROBANTES */}
              {idd && (
                <Button
                  variant="contained"
                  onClick={() =>
                    navigate("/usuario2/actualizarcomporbantes/" + cuil_cuit)
                  }
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 900,
                    px: 2,
                    backgroundColor: "rgba(255,255,255,0.16)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.25)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.24)" },
                  }}
                >
                  ACTUALIZAR COMPROBANTES
                </Button>
              )}
            </Box> </Stack>
        </Box>

      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 1,
          background: "transparent",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {expuesta ? (
            <Alert severity="warning" variant="filled">
              Persona PEP
            </Alert>
          ) : (
            <Chip label="Persona no PEP" color="success" />
          )}
        </Box>
      </Paper>

      {habilitado ? (
        <>
          <Alert severity="success" sx={{ mb: 2 }}>
            <b>
              Cliente habilitado por {cliente.cuil_cuit}, el día{" "}
              {cliente.fecha}
            </b>
          </Alert>

          <Ingreso />

          <Divider sx={{ my: 2 }} />

          <LotesCliente cuil_cuit={cuil_cuit} />
        </>
      ) : (
        <Alert severity="error">
          <b>
            Cliente no habilitado por {cliente.cuil_cuit}, el día{" "}
            {cliente.fecha}
          </b>
          . No se puede asignar lote.
        </Alert>
      )}

      {/* CHIP PEP ABAJO (opcional, prolijo) */}



      {/* INFO CLIENTE */}
      <Paper sx={{ borderRadius: 3, p: 2.5, mb: 2 }}>
        <InfoCliente cuil_cuit={cuil_cuit} />
      </Paper>



      {/* CUOTAS */}
      {cuil_cuit && (
        <Paper sx={{ borderRadius: 3, p: 2 }}>
          <Cuotas cuil_cuit={cuil_cuit} />
        </Paper>
      )}
    </Box>
  );
};

export default DetalleCliente;
