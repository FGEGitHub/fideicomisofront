import React, { useEffect, useState } from "react";
import servicionivel3 from "../../services/nivel3";

const styles = {
  dashboard:{
    fontFamily:"Segoe UI",
    background:"#f5f7fb",
    padding:25,
    minHeight:"100vh"
  },
  titulo:{
    textAlign:"center",
    marginBottom:25
  },
  seccion:{
    background:"#fff",
    padding:20,
    borderRadius:10,
    marginBottom:25,
    boxShadow:"0 4px 12px rgba(0,0,0,0.05)"
  },
  subtitulo:{
    marginBottom:15
  },
  kpis:{
    display:"flex",
    gap:15,
    flexWrap:"wrap"
  },
  graficos:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:20
  },
  cardGrafico:{
    background:"#fafafa",
    borderRadius:8,
    padding:10
  }
};

export default function PanelFinanciero() {

  const [ingresosAnim,setIngresosAnim]=useState(0);
  const [egresosAnim,setEgresosAnim]=useState(0);

  const [ingresos,setIngresos]=useState(0);
  const [egresos,setEgresos]=useState(0);

  useEffect(() => {
    traerDatos();
  }, []);

  const traerDatos = async () => {
    try {

      const resp = await servicionivel3.traermovimientos();

      let totalIngresos = 0;
      let totalEgresos = 0;

      const acumuladoPorMes = {};

      resp.forEach(mov => {

        const fecha = new Date(mov.fecha);
        const mes = fecha.toLocaleString("es-AR", { month: "short" });

        const credito = Number(mov.credito) || 0;
        const debito = Number(mov.debito) || 0;

        totalIngresos += credito;
        totalEgresos += debito;

        const saldo = credito - debito;

        if (!acumuladoPorMes[mes]) {
          acumuladoPorMes[mes] = 0;
        }

        acumuladoPorMes[mes] += saldo;
      });

      const saldoArray = [["Mes", "Saldo"]];
      let acumulado = 0;

      Object.keys(acumuladoPorMes).forEach(mes => {
        acumulado += acumuladoPorMes[mes];
        saldoArray.push([mes, acumulado]);
      });

      setIngresos(totalIngresos);
      setEgresos(totalEgresos);

      animarNumero(totalIngresos,setIngresosAnim);
      animarNumero(totalEgresos,setEgresosAnim);

      cargarGraficos(totalIngresos,totalEgresos,saldoArray);

    } catch (error) {
      console.error(error);
    }
  };

  function animarNumero(valor,setter){
    let actual=0;
    const incremento=valor/60;

    const timer=setInterval(()=>{
      actual+=incremento;

      if(actual>=valor){
        actual=valor;
        clearInterval(timer);
      }

      setter(actual);
    },20)
  }

  const cargarGraficos = (ing,eg,saldoArr) => {

    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";

    script.onload = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(() =>
        dibujarGraficos(ing,eg,saldoArr)
      );
    };

    document.body.appendChild(script);
  };

  const dibujarGraficos = (ing,eg,saldoArr) => {

    const resultado = ing - eg;

    const dataBar = window.google.visualization.arrayToDataTable([
      ["Concepto", "Monto"],
      ["Ingresos", ing],
      ["Egresos", eg],
      ["Resultado", resultado]
    ]);

    const chartBar = new window.google.visualization.ColumnChart(
      document.getElementById("graficoBarras")
    );

    chartBar.draw(dataBar, {
      legend:{position:"none"},
      animation:{startup:true,duration:900},
      chartArea:{width:"80%",height:"70%"}
    });

    const dataLine =
      window.google.visualization.arrayToDataTable(saldoArr);

    const chartLine = new window.google.visualization.LineChart(
      document.getElementById("graficoLinea")
    );

    chartLine.draw(dataLine, {
      legend:"none",
      curveType:"function",
      animation:{startup:true,duration:900},
      chartArea:{width:"85%",height:"70%"}
    });
  };

  const resultado = ingresos - egresos;
  const proporcion = ingresos > 0
    ? ((egresos / ingresos) * 100).toFixed(2)
    : 0;

  return (

<div style={styles.dashboard}>

<h2 style={styles.titulo}>Panel Financiero</h2>

<div style={styles.seccion}>

<h3 style={styles.subtitulo}>Resumen del Mes</h3>

<div style={styles.kpis}>

<Card titulo="Ingresos" valor={ingresosAnim} color="#4caf50"/>
<Card titulo="Egresos" valor={egresosAnim} color="#e53935"/>
<Card titulo="Resultado"
valor={resultado}
color={resultado<0?"#e53935":"#4caf50"}
/>
<Card titulo="Egreso / Ingreso"
valor={proporcion+"%"}
color="#607d8b"
/>

</div>
</div>

<div style={styles.seccion}>

<h3 style={styles.subtitulo}>Análisis Financiero</h3>

<div style={styles.graficos}>

<div style={styles.cardGrafico}>
<div id="graficoBarras" style={{height:300}}/>
</div>

<div style={styles.cardGrafico}>
<div id="graficoLinea" style={{height:300}}/>
</div>

</div>

</div>

</div>

  );
}


// ✅ COMPONENTE CARD (incluido acá)
function Card({titulo,valor,color}){

  return(

    <div style={{
      background:"#fff",
      borderLeft:`5px solid ${color}`,
      padding:16,
      borderRadius:8,
      boxShadow:"0 2px 6px rgba(0,0,0,0.08)",
      flex:1,
      minWidth:150
    }}>

      <div style={{fontSize:13,color:"#666"}}>
        {titulo}
      </div>

      <div style={{
        fontSize:22,
        fontWeight:"bold",
        marginTop:4
      }}>
        {
          typeof valor==="number"
          ? "$"+Math.round(valor).toLocaleString()
          : valor
        }
      </div>

    </div>

  )
}