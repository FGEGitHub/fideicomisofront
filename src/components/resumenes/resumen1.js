import React, { useEffect, useRef, useState } from "react";
import servicionivel3 from "../../services/nivel3";

const styles = {
  dashboard: {
    fontFamily: "Segoe UI",
    background: "#f5f7fb",
    padding: 25,
    minHeight: "100vh",
  },
  titulo: {
    textAlign: "center",
    marginBottom: 25,
  },
  seccion: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  subtitulo: {
    marginBottom: 15,
  },
  kpis: {
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
  },
  graficos: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  cardGrafico: {
    background: "#fafafa",
    borderRadius: 8,
    padding: 10,
  },
  filtroWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  filtroGrupo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: "#444",
  },
  select: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #d0d7de",
    background: "#fff",
    minWidth: 220,
    outline: "none",
    cursor: "pointer",
  },
  textoSecundario: {
    fontSize: 14,
    color: "#607d8b",
    fontWeight: 600,
  },
  sinDatos: {
    textAlign: "center",
    padding: "30px 10px",
    color: "#666",
    fontSize: 15,
  },
};

const GOOGLE_CHARTS_SRC = "https://www.gstatic.com/charts/loader.js";

function normalizarAnio(anio) {
  const texto = String(anio || "").trim();
  if (texto.length === 2) {
    return `20${texto}`;
  }
  return texto;
}

function limpiarFecha(fecha) {
  if (!fecha) return "";
  return String(fecha)
    .replace("T", " ")
    .split(" ")[0]
    .split(".")[0]
    .trim();
}

function parseFecha(fecha) {
  const limpia = limpiarFecha(fecha);
  if (!limpia) return null;

  let dia = "";
  let mes = "";
  let anio = "";

  if (limpia.includes("/")) {
    const partes = limpia.split("/");
    if (partes.length !== 3) return null;
    [dia, mes, anio] = partes;
  } else if (limpia.includes("-")) {
    const partes = limpia.split("-");
    if (partes.length !== 3) return null;

    if (partes[0].length === 4) {
      [anio, mes, dia] = partes;
    } else {
      [dia, mes, anio] = partes;
    }
  } else {
    return null;
  }

  const dia2 = String(dia).padStart(2, "0");
  const mes2 = String(mes).padStart(2, "0");
  const anio4 = normalizarAnio(anio);

  return {
    dia: dia2,
    mes: mes2,
    anio: anio4,
    iso: `${anio4}-${mes2}-${dia2}`,
    periodo: `${anio4}-${mes2}`,
    label: `${dia2}/${mes2}/${anio4}`,
  };
}

function valorFecha(fecha) {
  const parsed = parseFecha(fecha);
  if (!parsed) return 0;
  return new Date(`${parsed.anio}-${parsed.mes}-${parsed.dia}`).getTime();
}

function obtenerPeriodo(fecha) {
  const parsed = parseFecha(fecha);
  return parsed ? parsed.periodo : "";
}

function formatearFecha(fecha) {
  const parsed = parseFecha(fecha);
  return parsed ? parsed.label : "-";
}
function deduplicarMovimientos(lista) {
  const vistos = new Set();

  return lista.filter((mov) => {
    const key = [
      limpiarFecha(mov.fecha),
      String(mov.cuil_cuit || "").trim(),
      Number(mov.debito || 0).toFixed(2),
      Number(mov.credito || 0).toFixed(2),
      String(mov.descripcion || "").trim().toLowerCase(),
      String(mov.nombre_razon || "").trim().toLowerCase(),
    ].join("|");

    if (vistos.has(key)) {
      return false;
    }

    vistos.add(key);
    return true;
  });
}
function formatearPeriodo(periodo) {
  if (!periodo) return "-";

  const [anio, mes] = periodo.split("-");
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return `${meses[Number(mes) - 1] || mes} ${anio}`;
}

function formatearPeriodoCorto(periodo) {
  if (!periodo) return "-";

  const [anio, mes] = periodo.split("-");
  const meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  return `${meses[Number(mes) - 1] || mes}/${anio}`;
}

export default function PanelFinanciero() {
  const [movimientos, setMovimientos] = useState([]);
  const [periodosDisponibles, setPeriodosDisponibles] = useState([]);
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("");

  const [ingresosGenerales, setIngresosGenerales] = useState(0);
  const [egresosGenerales, setEgresosGenerales] = useState(0);
  const [ingresosGeneralesAnim, setIngresosGeneralesAnim] = useState(0);
  const [egresosGeneralesAnim, setEgresosGeneralesAnim] = useState(0);

  const [ingresosMes, setIngresosMes] = useState(0);
  const [egresosMes, setEgresosMes] = useState(0);
  const [ingresosMesAnim, setIngresosMesAnim] = useState(0);
  const [egresosMesAnim, setEgresosMesAnim] = useState(0);

  const timersRef = useRef({});
  const chartsPromiseRef = useRef(null);

  useEffect(() => {
    traerDatos();

    return () => {
      Object.values(timersRef.current).forEach((timer) => clearInterval(timer));
    };
  }, []);

  useEffect(() => {
    if (!movimientos.length) {
      setIngresosGenerales(0);
      setEgresosGenerales(0);
      setIngresosGeneralesAnim(0);
      setEgresosGeneralesAnim(0);
      limpiarGrafico("graficoBarrasGeneral");
      limpiarGrafico("graficoLineaGeneral");
      return;
    }

    const resumenGeneral = calcularResumenGeneral(movimientos);

    setIngresosGenerales(resumenGeneral.totalIngresos);
    setEgresosGenerales(resumenGeneral.totalEgresos);

    animarNumero(resumenGeneral.totalIngresos, setIngresosGeneralesAnim, "ingGeneral");
    animarNumero(resumenGeneral.totalEgresos, setEgresosGeneralesAnim, "egGeneral");

    dibujarGraficosGenerales(
      resumenGeneral.totalIngresos,
      resumenGeneral.totalEgresos,
      resumenGeneral.saldoArray
    );
  }, [movimientos]);

  useEffect(() => {
    if (!periodoSeleccionado || !movimientos.length) {
      setIngresosMes(0);
      setEgresosMes(0);
      setIngresosMesAnim(0);
      setEgresosMesAnim(0);
      limpiarGrafico("graficoBarrasMes");
      limpiarGrafico("graficoLineaMes");
      return;
    }

    const resumenMes = calcularResumenPorPeriodo(movimientos, periodoSeleccionado);

    setIngresosMes(resumenMes.totalIngresos);
    setEgresosMes(resumenMes.totalEgresos);

    animarNumero(resumenMes.totalIngresos, setIngresosMesAnim, "ingMes");
    animarNumero(resumenMes.totalEgresos, setEgresosMesAnim, "egMes");

    dibujarGraficosMes(
      resumenMes.totalIngresos,
      resumenMes.totalEgresos,
      resumenMes.saldoArray
    );
  }, [movimientos, periodoSeleccionado]);

  const traerDatos = async () => {
    try {
      const resp = await servicionivel3.traermovimientos();
      const lista = Array.isArray(resp) ? resp : [];
      const listaSinDuplicados = deduplicarMovimientos(lista);

      setMovimientos(listaSinDuplicados);
      const periodos = [
        ...new Set(lista.map((mov) => obtenerPeriodo(mov.fecha)).filter(Boolean)),
      ].sort((a, b) => b.localeCompare(a));

      setPeriodosDisponibles(periodos);

      if (periodos.length > 0) {
        setPeriodoSeleccionado(periodos[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function animarNumero(valor, setter, key) {
    clearInterval(timersRef.current[key]);

    if (!valor || valor <= 0) {
      setter(0);
      return;
    }

    let actual = 0;
    const incremento = valor / 60;

    timersRef.current[key] = setInterval(() => {
      actual += incremento;

      if (actual >= valor) {
        actual = valor;
        clearInterval(timersRef.current[key]);
      }

      setter(actual);
    }, 20);
  }

  function calcularResumenGeneral(lista) {
    let totalIngresos = 0;
    let totalEgresos = 0;

    const acumuladoPorPeriodo = {};

    lista.forEach((mov) => {
      const periodo = obtenerPeriodo(mov.fecha);
      if (!periodo) return;

      const credito = Number(mov.credito) || 0;
      const debito = Number(mov.debito) || 0;

      totalIngresos += credito;
      totalEgresos += debito;

      const saldo = credito - debito;

      if (!acumuladoPorPeriodo[periodo]) {
        acumuladoPorPeriodo[periodo] = 0;
      }

      acumuladoPorPeriodo[periodo] += saldo;
    });

    const saldoArray = [["Mes", "Saldo acumulado"]];
    let acumulado = 0;

    Object.keys(acumuladoPorPeriodo)
      .sort((a, b) => a.localeCompare(b))
      .forEach((periodo) => {
        acumulado += acumuladoPorPeriodo[periodo];
        saldoArray.push([formatearPeriodoCorto(periodo), acumulado]);
      });

    return {
      totalIngresos,
      totalEgresos,
      saldoArray,
    };
  }

  function calcularResumenPorPeriodo(lista, periodoSeleccionadoActual) {
    const filtrados = lista
      .filter((mov) => obtenerPeriodo(mov.fecha) === periodoSeleccionadoActual)
      .sort((a, b) => valorFecha(a.fecha) - valorFecha(b.fecha));

    let totalIngresos = 0;
    let totalEgresos = 0;

    const acumuladoPorFecha = {};

    filtrados.forEach((mov) => {
      const credito = Number(mov.credito) || 0;
      const debito = Number(mov.debito) || 0;

      totalIngresos += credito;
      totalEgresos += debito;

      const parsed = parseFecha(mov.fecha);
      if (!parsed) return;

      if (!acumuladoPorFecha[parsed.iso]) {
        acumuladoPorFecha[parsed.iso] = 0;
      }

      acumuladoPorFecha[parsed.iso] += credito - debito;
    });

    const saldoArray = [["Fecha", "Saldo acumulado"]];
    let acumulado = 0;

    Object.keys(acumuladoPorFecha)
      .sort((a, b) => a.localeCompare(b))
      .forEach((fechaIso) => {
        acumulado += acumuladoPorFecha[fechaIso];
        saldoArray.push([formatearFecha(fechaIso), acumulado]);
      });

    if (saldoArray.length === 1) {
      saldoArray.push([formatearPeriodo(periodoSeleccionadoActual), 0]);
    }

    return {
      totalIngresos,
      totalEgresos,
      saldoArray,
    };
  }

  function limpiarGrafico(id) {
    const nodo = document.getElementById(id);
    if (nodo) nodo.innerHTML = "";
  }

  function cargarGoogleCharts() {
    if (window.google?.visualization) {
      return Promise.resolve();
    }

    if (chartsPromiseRef.current) {
      return chartsPromiseRef.current;
    }

    chartsPromiseRef.current = new Promise((resolve, reject) => {
      const iniciar = () => {
        if (!window.google?.charts) {
          reject(new Error("No se pudo iniciar Google Charts"));
          return;
        }

        window.google.charts.load("current", { packages: ["corechart"] });
        window.google.charts.setOnLoadCallback(() => resolve());
      };

      const scriptExistente = document.querySelector(`script[src="${GOOGLE_CHARTS_SRC}"]`);

      if (scriptExistente) {
        if (window.google?.charts) {
          iniciar();
        } else {
          scriptExistente.addEventListener("load", iniciar, { once: true });
          scriptExistente.addEventListener("error", reject, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.src = GOOGLE_CHARTS_SRC;
      script.onload = iniciar;
      script.onerror = reject;
      document.body.appendChild(script);
    });

    return chartsPromiseRef.current;
  }

  async function dibujarGraficosGenerales(ingresos, egresos, saldoArray) {
    try {
      await cargarGoogleCharts();

      const resultado = ingresos - egresos;

      const dataBar = window.google.visualization.arrayToDataTable([
        ["Concepto", "Monto"],
        ["Ingresos", ingresos],
        ["Egresos", egresos],
        ["Resultado", resultado],
      ]);

      const chartBar = new window.google.visualization.ColumnChart(
        document.getElementById("graficoBarrasGeneral")
      );

      chartBar.draw(dataBar, {
        legend: { position: "none" },
        animation: { startup: true, duration: 900 },
        chartArea: { width: "80%", height: "70%" },
      });

      const dataLine = window.google.visualization.arrayToDataTable(saldoArray);

      const chartLine = new window.google.visualization.LineChart(
        document.getElementById("graficoLineaGeneral")
      );

      chartLine.draw(dataLine, {
        legend: "none",
        curveType: "function",
        animation: { startup: true, duration: 900 },
        chartArea: { width: "85%", height: "70%" },
      });
    } catch (error) {
      console.error("Error al dibujar gráficos generales:", error);
    }
  }

  async function dibujarGraficosMes(ingresos, egresos, saldoArray) {
    try {
      await cargarGoogleCharts();

      const resultado = ingresos - egresos;

      const dataBar = window.google.visualization.arrayToDataTable([
        ["Concepto", "Monto"],
        ["Ingresos", ingresos],
        ["Egresos", egresos],
        ["Resultado", resultado],
      ]);

      const chartBar = new window.google.visualization.ColumnChart(
        document.getElementById("graficoBarrasMes")
      );

      chartBar.draw(dataBar, {
        legend: { position: "none" },
        animation: { startup: true, duration: 900 },
        chartArea: { width: "80%", height: "70%" },
      });

      const dataLine = window.google.visualization.arrayToDataTable(saldoArray);

      const chartLine = new window.google.visualization.LineChart(
        document.getElementById("graficoLineaMes")
      );

      chartLine.draw(dataLine, {
        legend: "none",
        curveType: "function",
        animation: { startup: true, duration: 900 },
        chartArea: { width: "85%", height: "70%" },
      });
    } catch (error) {
      console.error("Error al dibujar gráficos por mes:", error);
    }
  }

  const resultadoGeneral = ingresosGenerales - egresosGenerales;
  const proporcionGeneral =
    ingresosGenerales > 0 ? ((egresosGenerales / ingresosGenerales) * 100).toFixed(2) : 0;

  const resultadoMes = ingresosMes - egresosMes;
  const proporcionMes =
    ingresosMes > 0 ? ((egresosMes / ingresosMes) * 100).toFixed(2) : 0;

  return (
    <div style={styles.dashboard}>
      <h2 style={styles.titulo}>Panel Financiero</h2>

      {/* SECCIÓN GENERAL - TODOS LOS EXTRACTOS */}
      <div style={styles.seccion}>
        <h3 style={styles.subtitulo}>Resumen General</h3>

        <div style={styles.kpis}>
          <Card titulo="Ingresos" valor={ingresosGeneralesAnim} color="#4caf50" />
          <Card titulo="Egresos" valor={egresosGeneralesAnim} color="#e53935" />
          <Card
            titulo="Resultado"
            valor={resultadoGeneral}
            color={resultadoGeneral < 0 ? "#e53935" : "#4caf50"}
          />
          <Card
            titulo="Egreso / Ingreso"
            valor={proporcionGeneral + "%"}
            color="#607d8b"
          />
        </div>
      </div>

      <div style={styles.seccion}>
        <h3 style={styles.subtitulo}>Análisis Financiero General</h3>

        <div style={styles.graficos}>
          <div style={styles.cardGrafico}>
            <div id="graficoBarrasGeneral" style={{ height: 300 }} />
          </div>

          <div style={styles.cardGrafico}>
            <div id="graficoLineaGeneral" style={{ height: 300 }} />
          </div>
        </div>
      </div>

      {/* NUEVA SECCIÓN - FILTRADA POR MES + AÑO */}
      <div style={styles.seccion}>
        <div style={styles.filtroWrap}>
          <div style={styles.filtroGrupo}>
            <label style={styles.label}>Seleccionar mes</label>

            <select
              value={periodoSeleccionado}
              onChange={(e) => setPeriodoSeleccionado(e.target.value)}
              style={styles.select}
            >
              {periodosDisponibles.length === 0 && (
                <option value="">Sin períodos</option>
              )}

              {periodosDisponibles.map((periodo) => (
                <option key={periodo} value={periodo}>
                  {formatearPeriodo(periodo)}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.textoSecundario}>
            {periodoSeleccionado
              ? `Mostrando: ${formatearPeriodo(periodoSeleccionado)}`
              : "Sin datos"}
          </div>
        </div>

        <h3 style={styles.subtitulo}>
          Resumen mensual {periodoSeleccionado ? `- ${formatearPeriodo(periodoSeleccionado)}` : ""}
        </h3>

        <div style={styles.kpis}>
          <Card titulo="Ingresos" valor={ingresosMesAnim} color="#4caf50" />
          <Card titulo="Egresos" valor={egresosMesAnim} color="#e53935" />
          <Card
            titulo="Resultado"
            valor={resultadoMes}
            color={resultadoMes < 0 ? "#e53935" : "#4caf50"}
          />
          <Card titulo="Egreso / Ingreso" valor={proporcionMes + "%"} color="#607d8b" />
        </div>
      </div>

      <div style={styles.seccion}>
        <h3 style={styles.subtitulo}>
          Análisis Financiero por mes {periodoSeleccionado ? `- ${formatearPeriodo(periodoSeleccionado)}` : ""}
        </h3>

        {periodoSeleccionado ? (
          <div style={styles.graficos}>
            <div style={styles.cardGrafico}>
              <div id="graficoBarrasMes" style={{ height: 300 }} />
            </div>

            <div style={styles.cardGrafico}>
              <div id="graficoLineaMes" style={{ height: 300 }} />
            </div>
          </div>
        ) : (
          <div style={styles.sinDatos}>No hay datos disponibles para ese período.</div>
        )}
      </div>
    </div>
  );
}

function Card({ titulo, valor, color }) {
  return (
    <div
      style={{
        background: "#fff",
        borderLeft: `5px solid ${color}`,
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        flex: 1,
        minWidth: 150,
      }}
    >
      <div style={{ fontSize: 13, color: "#666" }}>{titulo}</div>

      <div
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 4,
        }}
      >
        {typeof valor === "number"
          ? "$" + Math.round(valor).toLocaleString("es-AR")
          : valor}
      </div>
    </div>
  );
}