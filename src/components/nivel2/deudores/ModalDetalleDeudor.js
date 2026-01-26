import { useEffect, useMemo, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
    Box,
    Button,
    Paper,
    Stack,
    Chip,
    Skeleton,
    Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";

const pickFirstTruthy = (...vals) => vals.find((v) => v !== undefined && v !== null && String(v).trim() !== "");

export default function ModalDetalleDeudor({
    open,
    onClose,
    clienteBase,          // el "c" de la tabla (deudores)
    getDetalleCliente,    // async (cuil) => objeto con fraccion/manzana/lote/parcela
}) {
    const [loading, setLoading] = useState(false);
    const [detalle, setDetalle] = useState(null);

    const cuil = clienteBase?.cuil_cuit;

    useEffect(() => {
        let alive = true;

        const load = async () => {
            if (!open || !cuil) {
                setDetalle(null);
                return;
            }

            // mostramos base inmediatamente
            setDetalle(clienteBase);

            if (!getDetalleCliente) return;

            try {
                setLoading(true);
                const resp = await getDetalleCliente(cuil);
                const data = resp?.data ?? resp; // por si viene axios

                if (!alive) return;

                // merge: lo que venga del detalle pisa lo base
                setDetalle((prev) => ({ ...(prev ?? {}), ...(data ?? {}) }));
            } catch (e) {
                // si falla, nos quedamos con lo base
                if (!alive) return;
                setDetalle(clienteBase);
            } finally {
                if (!alive) return;
                setLoading(false);
            }
        };

        load();
        return () => {
            alive = false;
        };
    }, [open, cuil, clienteBase, getDetalleCliente]);

    const nombreCompleto = useMemo(() => {
        const n = detalle?.nombre ?? clienteBase?.nombre ?? "";
        const a = detalle?.apellido ?? clienteBase?.apellido ?? "";
        return `${n} ${a}`.trim();
    }, [detalle, clienteBase]);

    // ✅ Intentamos cubrir posibles nombres de campos sin romper nada:
    // (si tu backend usa fraccion/manzana/lote/parcela tal cual, mejor todavía)
    const fraccion = pickFirstTruthy(detalle?.fraccion, detalle?.Fraccion, detalle?.frac, detalle?.fracc);
    const manzana = pickFirstTruthy(detalle?.manzana, detalle?.Manzana, detalle?.mz, detalle?.mza);
    const parcela = pickFirstTruthy(detalle?.parcela, detalle?.Parcela, detalle?.nro_parcela, detalle?.parc);
    const lote = pickFirstTruthy(detalle?.lote, detalle?.Lote, detalle?.nro_lote);

    const cuotasAdeudadas = (detalle?.cuotasquedebe ?? clienteBase?.cuotasquedebe ?? []).filter(Boolean);

    const showInmueble =
        fraccion || manzana || parcela || lote || loading; // si está cargando mostramos skeleton

const moneyARS = (v) =>
  Number(v ?? 0).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    overflow: "hidden",

                    boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
                },
            }}
        >
            <DialogTitle
                sx={{
                    background:
                        "linear-gradient(90deg, rgba(10,59,79,0.95) 0%, rgba(11,79,108,0.95) 55%, rgba(15,127,134,0.95) 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: 1,
                }}
            >
                <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <ReceiptLongRoundedIcon fontSize="small" />
                        <Typography fontWeight={900} sx={{ lineHeight: 1.15 }}>
                            Detalle de deuda
                        </Typography>
                    </Box>

                </Box>

                <IconButton onClick={onClose} sx={{ color: "#fff" }}>
                    <CloseRoundedIcon />
                </IconButton>
            </DialogTitle>






            <DialogContent sx={{ p: 2.25 }}>

                <Paper
                    elevation={0}
                    sx={{
                        p: 1.75,
                        borderRadius: 2.5,
                        border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
                        background:
                            "linear-gradient(180deg, rgba(15,127,134,0.06) 0%, rgba(255,255,255,0.92) 100%)",
                        mb: 2,
                    }}
                >

                    <Typography fontSize={13} sx={{ opacity: 0.9, mt: 0.25 }}>
                        {nombreCompleto || "-"} {cuil ? `— ${cuil}` : ""}
                    </Typography>
                    {/* Si estás cargando un merge/fetch en el modal */}
                    {loading ? (
                        <Stack spacing={1}>
                            <Skeleton height={18} />
                            <Skeleton height={18} />
                        </Stack>
                    ) : (
                        <>
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                <Chip
                                    size="small"
                                    label={`Fracción: ${fraccion ?? "-"}`}
                                    sx={{ fontWeight: 800 }}
                                />
                                <Chip
                                    size="small"
                                    label={`Manzana: ${manzana ?? "-"}`}
                                    sx={{ fontWeight: 800 }}
                                />

                                {/* Mostramos ambos si existen (así cubrís PIT/IC3 y casos mixtos) */}
                                {parcela ? (
                                    <Chip
                                        size="small"
                                        label={`Parcela: ${parcela}`}
                                        sx={{ fontWeight: 800 }}
                                    />
                                ) : (
                                    <Chip
                                        size="small"
                                        label="Parcela: -"
                                        sx={{ fontWeight: 800 }}
                                    />
                                )}

                                {lote ? (
                                    <Chip
                                        size="small"
                                        label={`Lote: ${lote}`}
                                        sx={{ fontWeight: 800 }}
                                    />
                                ) : (
                                    <Chip
                                        size="small"
                                        label="Lote: -"
                                        sx={{ fontWeight: 800 }}
                                    />
                                )}
                            </Stack>

                            {/* Mensaje si NO hay nada */}
                            {!fraccion && !manzana && !parcela && !lote && (
                                <Typography sx={{ mt: 1.25, fontSize: 13, color: alpha("#063a52", 0.75) }}>
                                    No hay datos del terreno disponibles para este cliente (fracción/manzana/lote/parcela).
                                </Typography>
                            )}
                        </>
                    )}
                </Paper>
{/* ===== RESUMEN DE ESTADO (viene de la tabla) ===== */}
<Paper
  elevation={0}
  sx={{
    p: 1.75,
    borderRadius: 2.5,
    border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
    background:
      "linear-gradient(180deg, rgba(10,59,79,0.04) 0%, rgba(20,141,141,0.03) 45%, rgba(255,255,255,0.95) 100%)",
    mb: 2,
  }}
>
  <Typography fontWeight={900} sx={{ color: "#063a52", mb: 1 }}>
    Estado de cuotas / montos
  </Typography>

  <Stack direction="row" flexWrap="wrap" gap={1}>
    <Chip
      label={`Liquidadas: ${detalle?.liquidadas ?? clienteBase?.liquidadas ?? "-"}`}
      sx={{ fontWeight: 900, backgroundColor: alpha("#1565c0", 0.08) }}
    />

    <Chip
      label={`Debe: ${detalle?.debe ?? clienteBase?.debe ?? "-"}`}
      sx={{ fontWeight: 900, backgroundColor: alpha("#c62828", 0.08) }}
    />

    <Chip
      label={`Pagadas: ${detalle?.pagadas ?? clienteBase?.pagadas ?? "-"}`}
      sx={{ fontWeight: 900, backgroundColor: alpha("#2e7d32", 0.08) }}
    />

    <Chip
      label={`Total devengado: ${moneyARS(detalle?.total_devengado ?? clienteBase?.total_devengado)}`}
      sx={{ fontWeight: 900, backgroundColor: alpha("#0b4f6c", 0.06) }}
    />

    <Chip
      label={`Total pagado: ${moneyARS(detalle?.pagado ?? clienteBase?.pagado)}`}
      sx={{ fontWeight: 900, backgroundColor: alpha("#0f7f86", 0.08) }}
    />

    <Chip
      label={`Deuda: ${moneyARS(
        (detalle?.total_devengado ?? clienteBase?.total_devengado ?? 0) -
          (detalle?.pagado ?? clienteBase?.pagado ?? 0)
      )}`}
      sx={{
        fontWeight: 900,
        backgroundColor: alpha("#c62828", 0.08),
        border: `1px solid ${alpha("#c62828", 0.25)}`,
      }}
    />
  </Stack>
</Paper>


                <Divider sx={{ mb: 2 }} />

                {/* ===== CUOTAS ADEUDADAS ===== */}
                <Typography sx={{ mb: 1, color: alpha("#063a52", 0.9) }}>
                    Cuotas adeudadas:
                </Typography>

                {cuotasAdeudadas.length > 0 ? (
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {cuotasAdeudadas.map((q, i) => (
                            <Chip
                                key={`${q}-${i}`}
                                label={q}
                                color="error"
                                variant="outlined"
                                sx={{
                                    fontWeight: 900,
                                    borderWidth: 2,
                                    backgroundColor: alpha("#c62828", 0.06),
                                }}
                            />
                        ))}
                    </Stack>
                ) : (
                    <Chip label="Sin deuda" color="success" />
                )}
            </DialogContent>

        </Dialog>
    );
}
