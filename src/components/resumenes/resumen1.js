import React, { useEffect } from "react";

const datos = {
  mes: "Marzo 2026",
  ingresos: 9430714.18,
  egresos: 10869414.59,
  saldo: [
    ["Fecha", "Saldo"],
    ["Ene", 2000000],
    ["Feb", 2600000],
    ["Mar", 3800000],
    ["Abr", 5200000],
    ["May", 6700000],
    ["Jun", 7600000],
    ["Jul", 8900000],
    ["Ago", 10100000],
    ["Sep", 11200000]
  ]
};

export default function PanelFinanciero() {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.onload = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(dibujarGraficos);
    };

    document.body.appendChild(script);

  }, []);

  const dibujarGraficos = () => {

    const resultado = datos.ingresos - datos.egresos;

    const dataBar = window.google.visualization.arrayToDataTable([
      ["Concepto", "Monto"],
      ["Ingresos", datos.ingresos],
      ["Egresos", datos.egresos],
      ["Resultado", resultado]
    ]);

    const optionsBar = {
      title: "Total Ingresos / Egresos / Resultado Neto",
      is3D: true,
      legend: { position: "bottom" },
      chartArea: { width: "75%", height: "65%" },
      colors: ["#8bc34a"]
    };

    const chartBar = new window.google.visualization.ColumnChart(
      document.getElementById("graficoBarras")
    );

    chartBar.draw(dataBar, optionsBar);

    const dataLine =
      window.google.visualization.arrayToDataTable(datos.saldo);

    const optionsLine = {
      title: "Saldo anual del banco",
      legend: "none",
      curveType: "function",
      chartArea: { width: "85%", height: "70%" },
      colors: ["#4caf50"]
    };

    const chartLine = new window.google.visualization.LineChart(
      document.getElementById("graficoLinea")
    );

    chartLine.draw(dataLine, optionsLine);
  };

  const resultado = datos.ingresos - datos.egresos;
  const proporcion = ((datos.egresos / datos.ingresos) * 100).toFixed(2);

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: 20,
        background: "#f3f3f3"
      }}
    >

      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        PANEL FINANCIERO 2026
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 20
        }}
      >

        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            padding: 15,
            fontSize: 14,
            lineHeight: 1.8
          }}
        >

          <div style={{ marginBottom: 10 }}>
            <b>Mes analizado:</b>
            <div>{datos.mes}</div>
          </div>

          <div>
            <b>Total ingresos del mes</b>
            <div>
              ${datos.ingresos.toLocaleString()}
            </div>
          </div>

          <div>
            <b>Total egresos del mes</b>
            <div>
              ${datos.egresos.toLocaleString()}
            </div>
          </div>

          <div>
            <b>Resultado neto</b>
            <div
              style={{
                color: resultado < 0 ? "red" : "green"
              }}
            >
              ${resultado.toLocaleString()}
            </div>
          </div>

          <div>
            <b>Proporción egreso / ingreso</b>
            <div>{proporcion}%</div>
          </div>

        </div>

        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            padding: 10
          }} 
        >

          <div 
            id="graficoBarras"
            style={{ width: "100%", height: 320 }}
          />

        </div>

      </div>

      <div
        style={{
          marginTop: 25,
          background: "white",
          border: "1px solid #ccc",
          padding: 10
        }}
      >

        <div
          id="graficoLinea"
          style={{ width: "100%", height: 350 }}
        />

      </div>

    </div>
  );
}