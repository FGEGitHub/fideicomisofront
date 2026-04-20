import React, { useEffect, useRef, useState } from "react";
import servicionivel3 from "../../services/nivel3";


const headerGradient = "linear-gradient(90deg, #0a3b4f 0%, #0b4f6c 55%, #148D8D 100%)";

export default function DashboardFinanciero() {
  const canvasEgresos = useRef(null);
  const canvasSaldo = useRef(null);
const [fechaDesde, setFechaDesde] = useState("");
const [fechaHasta, setFechaHasta] = useState("");
const [modoVista, setModoVista] = useState("dia"); // "dia" o "mes"
  const [egresos, setEgresos] = useState([]);
  const [saldoMensual, setSaldoMensual] = useState([]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1366
  );
useEffect(() => {
  const hoy = new Date();

  // 🔥 ir al mes anterior
  const primerDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth() - 1, 1);
  const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);

  // 🔥 formatear a YYYY-MM-DD (input date)
  const format = (fecha) => fecha.toISOString().slice(0, 10);

  setFechaDesde(format(primerDiaMesAnterior));
  setFechaHasta(format(ultimoDiaMesAnterior));
}, []);
  useEffect(() => {
    traerDatos();
  }, []);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (egresos.length) {
      animarEgresos(egresos);
    } else {
      limpiarCanvas(canvasEgresos.current);
    }
  }, [egresos, windowWidth]);

  useEffect(() => {
    if (saldoMensual.length) {
      animarSaldo(saldoMensual);
    } else {
      limpiarCanvas(canvasSaldo.current);
    }
  }, [saldoMensual, windowWidth]);
useEffect(() => {
  traerDatos();
}, [fechaDesde, fechaHasta, modoVista]);

const traerDatos = async () => {
  try {
    const resp = await servicionivel3.traermovimientos();

    const egresosMap = {};
    const saldoAgrupado = {};

    resp.forEach((mov) => {
      const fecha = new Date(mov.fecha);

      // 🔥 FILTRO POR FECHA
      if (fechaDesde && fecha < new Date(fechaDesde)) return;
      if (fechaHasta && fecha > new Date(fechaHasta)) return;

      // 🔥 AGRUPACIÓN DINÁMICA
      let clave;

      if (modoVista === "dia") {
        clave = fecha.toISOString().slice(0, 10); // YYYY-MM-DD
      } else {
        clave = fecha.toISOString().slice(0, 7); // YYYY-MM
      }

      const debito = Number(mov.debito) || 0;
      const credito = Number(mov.credito) || 0;
      const concepto = mov.concepto || "Sin categoría";

      // ================= EGRESOS (no se rompe)
      if (debito > 0) {
        if (!egresosMap[concepto]) egresosMap[concepto] = 0;
        egresosMap[concepto] += debito;
      }

      // ================= SALDO DINÁMICO
      const saldo = credito - debito;

      if (!saldoAgrupado[clave]) saldoAgrupado[clave] = 0;
      saldoAgrupado[clave] += saldo;
    });

    // ================= EGRESOS (igual que antes)
    const egresosArray = Object.keys(egresosMap)
      .map((key) => ({
        concepto: key,
        monto: egresosMap[key],
      }))
      .sort((a, b) => b.monto - a.monto)
      .slice(0, 10);

    // ================= SALDO ORDENADO + ACUMULADO
    const saldoArray = [];
    let acumulado = 0;

    Object.keys(saldoAgrupado)
      .sort()
      .forEach((key) => {
        acumulado += saldoAgrupado[key];

        saldoArray.push({
          fecha: formatearFecha(key),
          saldo: acumulado,
        });
      });

    setEgresos(egresosArray);
    setSaldoMensual(saldoArray);
  } catch (error) {
    console.error(error);
  }
};
function formatearFecha(fechaStr) {
  if (fechaStr.length === 10) {
    // día
    const [anio, mes, dia] = fechaStr.split("-");
    return `${dia}/${mes}`;
  } else {
    // mes
    const [anio, mes] = fechaStr.split("-");
    return `${mes}/${anio}`;
  }
}
  function limpiarCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function recortarTexto(ctx, texto, maxWidth) {
    if (ctx.measureText(texto).width <= maxWidth) return texto;
    let resultado = texto;
    while (resultado.length > 0 && ctx.measureText(resultado + "...").width > maxWidth) {
      resultado = resultado.slice(0, -1);
    }
    return resultado + "...";
  }

  function animarEgresos(data) {
    const canvas = canvasEgresos.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const max = Math.max(...data.map((d) => d.monto), 1);

    let progreso = 0;

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const leftLabel = 10;
      const labelWidth = Math.min(175, canvas.width * 0.32);
      const barStartX = labelWidth + 18;
      const rightPadding = 90;
      const usableBarWidth = canvas.width - barStartX - rightPadding;
      const rowGap = 23;
      const top = 22;

      data.forEach((item, i) => {
        const y = top + i * rowGap;
        const width = (item.monto / max) * usableBarWidth * progreso;

        roundRectCanvas(ctx, barStartX, y, usableBarWidth, 14, 7, "#E7EEF2");
        roundRectCanvas(ctx, barStartX, y, width, 14, 7, "#49AF50");

        ctx.fillStyle = "#334155";
        ctx.font = "600 11px Segoe UI";
        const concepto = recortarTexto(ctx, item.concepto, labelWidth - 8);
        ctx.fillText(concepto, leftLabel, y + 11);

        ctx.fillStyle = "#111827";
        ctx.font = "700 11px Segoe UI";
        ctx.fillText(
          "$" + Math.round(item.monto).toLocaleString("es-AR"),
          barStartX + width + 8,
          y + 11
        );
      });

      progreso += 0.035;
      if (progreso <= 1) requestAnimationFrame(frame);
    }

    frame();
  }

  function animarSaldo(data) {
    const canvas = canvasSaldo.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const max = Math.max(...data.map((d) => d.saldo), 1);
    const min = Math.min(...data.map((d) => d.saldo), 0);

    let progreso = 0;

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const paddingX = 42;
      const paddingTop = 24;
      const paddingBottom = 34;
      const usableWidth = canvas.width - paddingX * 2;
      const usableHeight = canvas.height - paddingTop - paddingBottom;

      for (let i = 0; i < 4; i++) {
        const y = paddingTop + (usableHeight / 3) * i;
        ctx.beginPath();
        ctx.moveTo(paddingX, y);
        ctx.lineTo(canvas.width - paddingX, y);
        ctx.strokeStyle = "#DCE7EB";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.beginPath();

      data.forEach((p, i) => {
        const x = paddingX + (i / (data.length - 1 || 1)) * usableWidth;
        const y =
          paddingTop +
          usableHeight -
          ((p.saldo - min) / (max - min || 1)) * usableHeight * progreso;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });

      ctx.strokeStyle = "#2E7D32";
      ctx.lineWidth = 3;
      ctx.stroke();

      data.forEach((p, i) => {
        const x = paddingX + (i / (data.length - 1 || 1)) * usableWidth;
        const y =
          paddingTop +
          usableHeight -
          ((p.saldo - min) / (max - min || 1)) * usableHeight * progreso;

        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#2E7D32";
        ctx.fill();

        ctx.fillStyle = "#64748B";
        ctx.font = "600 11px Segoe UI";
        ctx.fillText(p.fecha, x - 10, canvas.height - 10);
      });

      progreso += 0.035;
      if (progreso <= 1) requestAnimationFrame(frame);
    }

    frame();
  }

  const isMobile = windowWidth < 900;

  return (
    <div style={styles.page}>
      <div style={styles.dashboard}>
      
          <div />
       

        <SectionCard
          title="Principales egresos"
          subtitle="Ranking de conceptos con mayor impacto en los débitos."
        >
          <div
            style={{
              ...styles.grid,
              gridTemplateColumns: isMobile
                ? "1fr"
                : "minmax(290px, 0.95fr) minmax(360px, 1.05fr)",
            }}
          >
            <div style={styles.cardTabla}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Concepto</th>
                    <th style={styles.th}>Monto</th>
                  </tr>
                </thead>
                <tbody>
                  {egresos.map((e, i) => (
                    <tr key={i}>
                      <td style={styles.td}>{e.concepto}</td>
                      <td style={styles.tdMonto}>
                        ${Math.round(e.monto).toLocaleString("es-AR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={styles.cardGrafico}>
              <canvas
                ref={canvasEgresos}
                width={560}
                height={290}
                style={styles.canvasResponsive}
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Evolución saldo banco"
          subtitle="Comportamiento acumulado del saldo a lo largo de los meses."
        >
          <div style={styles.cardGraficoGrande}>
            <div style={{ display: "flex", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
  <input type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
  <input type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />

  <select value={modoVista} onChange={(e) => setModoVista(e.target.value)}>
    <option value="dia">Día</option>
    <option value="mes">Mes</option>
  </select>
</div>
            <canvas
              ref={canvasSaldo}
              width={820}
              height={230}
              style={styles.canvasResponsive}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Tabla de Movimientos"
          
        >
      
        </SectionCard>
      </div>
    </div>
  );
}

function SectionCard({ title, subtitle, children, hero = false }) {
  return (
    <div style={hero ? styles.sectionHero : styles.section}>
      <div style={styles.sectionHeaderGradient}>
        <div style={styles.sectionHeaderTextWrap}>
          <div style={hero ? styles.heroEyebrow : styles.sectionEyebrow}>
            {hero ? "PANEL FINANCIERO" : "RESUMEN"}
          </div>
          <h3 style={hero ? styles.heroTitle : styles.sectionTitle}>{title}</h3>
          {subtitle ? (
            <div style={hero ? styles.heroSubtitle : styles.sectionSubtitle}>
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>

      <div style={styles.sectionBody}>{children}</div>
    </div>
  );
}

function roundRectCanvas(ctx, x, y, width, height, radius, fillStyle) {
  if (width <= 0 || height <= 0) return;
  const r = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();

  ctx.fillStyle = fillStyle;
  ctx.fill();
}

const styles = {
  page: {
    width: "100%",
    minWidth: 0,
    padding: 12,
    boxSizing: "border-box",
    background: "linear-gradient(180deg, #f4f7fb 0%, #eef3f8 100%)",
  },

  dashboard: {
    fontFamily: "Segoe UI, Inter, sans-serif",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    minWidth: 0,
    boxSizing: "border-box",
  },

  section: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: 22,
    marginBottom: 14,
    boxShadow: "0 14px 28px rgba(15,23,42,0.05)",
    border: "1px solid rgba(11,79,108,0.08)",
    overflow: "hidden",
  },

  sectionHero: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: 22,
    marginBottom: 14,
    boxShadow: "0 14px 28px rgba(15,23,42,0.05)",
    border: "1px solid rgba(11,79,108,0.08)",
    overflow: "hidden",
  },

  sectionHeaderGradient: {
    background: headerGradient,
    padding: "16px 18px",
    color: "#fff",
  },

  sectionHeaderTextWrap: {
    minWidth: 0,
  },

  sectionEyebrow: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1,
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: 4,
  },

  heroEyebrow: {
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    opacity: 0.92,
    marginBottom: 4,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#fff",
  },

  heroTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#fff",
  },

  sectionSubtitle: {
    marginTop: 5,
    fontSize: 13,
    color: "rgba(255,255,255,0.92)",
    lineHeight: 1.35,
    fontWeight: 600,
  },

  heroSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "rgba(255,255,255,0.92)",
    lineHeight: 1.35,
  },

  sectionBody: {
    padding: 14,
    background: "rgba(255,255,255,0.96)",
  },

  grid: {
    display: "grid",
    gap: 14,
    alignItems: "start",
  },

  cardTabla: {
    overflow: "auto",
    border: "1px solid rgba(148,163,184,0.18)",
    borderRadius: 14,
    background: "#fff",
    maxHeight: 250,
  },

  cardGrafico: {
    background: "linear-gradient(180deg, #fbfdff 0%, #f4f7fb 100%)",
    padding: 10,
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(148,163,184,0.14)",
    minWidth: 0,
  },

  cardGraficoGrande: {
    background: "linear-gradient(180deg, #fbfdff 0%, #f4f7fb 100%)",
    padding: 10,
    borderRadius: 16,
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    border: "1px solid rgba(148,163,184,0.14)",
  },

  canvasResponsive: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    display: "block",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12.5,
    color: "#0F172A",
    minWidth: 300,
  },

  th: {
    textAlign: "left",
    padding: "9px 12px",
    borderBottom: "1px solid #E5E7EB",
    background: "#F8FAFC",
    position: "sticky",
    top: 0,
    zIndex: 1,
    fontSize: 12.5,
    fontWeight: 800,
    color: "#334155",
  },

  td: {
    padding: "9px 12px",
    borderBottom: "1px solid #F1F5F9",
    verticalAlign: "top",
    fontSize: 12.5,
  },

  tdMonto: {
    padding: "9px 12px",
    borderBottom: "1px solid #F1F5F9",
    verticalAlign: "top",
    fontSize: 12.5,
    fontWeight: 700,
    color: "#0F172A",
    whiteSpace: "nowrap",
  },

  tablaScrollContainer: {
    maxHeight: "360px",
    overflowY: "auto",
    overflowX: "auto",
    padding: 10,
    boxSizing: "border-box",
    background: "#fff",
    borderRadius: 14,
    border: "1px solid rgba(148,163,184,0.14)",
  },
};