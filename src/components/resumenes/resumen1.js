import React, { useEffect, useState } from "react";

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

  const [ingresosAnim,setIngresosAnim]=useState(0);
  const [egresosAnim,setEgresosAnim]=useState(0);

  const resultado = datos.ingresos - datos.egresos;
  const proporcion = ((datos.egresos / datos.ingresos) * 100).toFixed(2);

  useEffect(() => {

    animarNumero(datos.ingresos,setIngresosAnim);
    animarNumero(datos.egresos,setEgresosAnim);

    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";

    script.onload = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(dibujarGraficos);
    };

    document.body.appendChild(script);

  }, []);

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

  const dibujarGraficos = () => {

    const resultado = datos.ingresos - datos.egresos;

    const dataBar = window.google.visualization.arrayToDataTable([
      ["Concepto", "Monto"],
      ["Ingresos", datos.ingresos],
      ["Egresos", datos.egresos],
      ["Resultado", resultado]
    ]);

    const optionsBar = {
      legend:{position:"none"},
      animation:{startup:true,duration:900},
      chartArea:{width:"80%",height:"70%"},
      colors:["#4caf50"]
    };

    const chartBar = new window.google.visualization.ColumnChart(
      document.getElementById("graficoBarras")
    );

    chartBar.draw(dataBar, optionsBar);

    const dataLine =
      window.google.visualization.arrayToDataTable(datos.saldo);

    const optionsLine = {
      legend:"none",
      curveType:"function",
      animation:{startup:true,duration:900},
      chartArea:{width:"85%",height:"70%"},
      colors:["#2e7d32"]
    };

    const chartLine = new window.google.visualization.LineChart(
      document.getElementById("graficoLinea")
    );

    chartLine.draw(dataLine, optionsLine);
  };

  return (

<div style={styles.dashboard}>

<h2 style={styles.titulo}>Panel Financiero</h2>

{/* SECCION RESUMEN */}

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


{/* SECCION GRAFICOS */}

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


function Card({titulo,valor,color}){

return(

<div style={{
background:"#fff",
borderLeft:`5px solid ${color}`,
padding:16,
borderRadius:8,
boxShadow:"0 2px 6px rgba(0,0,0,0.08)",
flex:1
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
?"$"+Math.round(valor).toLocaleString()
:valor
}
</div>

</div>

)

}


const styles={

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
gap:15
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

}