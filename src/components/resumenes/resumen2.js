import React, { useEffect, useRef } from "react";

const datosFinancieros = {
  egresos: [
    { concepto: "Honorarios Profesionales", monto: 13978748 },
    { concepto: "Servicios de Seguridad", monto: 9872749 },
    { concepto: "Servicio Seguridad Adicional", monto: 7628320 },
    { concepto: "Reintegro de Sueldos", monto: 2420000 },
    { concepto: "Reparación mantenimiento", monto: 196800 },
    { concepto: "Alquileres Oficinas", monto: 1828000 },
    { concepto: "Cobranza SC Parque", monto: 1680000 },
    { concepto: "Servicios personales", monto: 972745 },
    { concepto: "Otros egresos", monto: 851170 },
    { concepto: "Baños químicos", monto: 477343 },
    { concepto: "Compra muebles", monto: 368185 },
    { concepto: "Impuestos DGR", monto: 270172 },
    { concepto: "Impuestos AFIP", monto: 248555 },
    { concepto: "Comisiones bancarias", monto: 31900 }
  ],

  saldoMensual: [
    { fecha: "Ene", saldo: 15000000 },
    { fecha: "Feb", saldo: 14700000 },
    { fecha: "Mar", saldo: 15100000 },
    { fecha: "Abr", saldo: 17000000 },
    { fecha: "May", saldo: 17500000 },
    { fecha: "Jun", saldo: 17400000 },
    { fecha: "Jul", saldo: 16800000 },
    { fecha: "Ago", saldo: 16200000 },
    { fecha: "Sep", saldo: 15900000 },
    { fecha: "Oct", saldo: 15500000 },
    { fecha: "Nov", saldo: 15200000 },
    { fecha: "Dic", saldo: 15100000 }
  ]
};

export default function DashboardFinanciero() {

  const canvasEgresos = useRef(null);
  const canvasSaldo = useRef(null);

  useEffect(() => {

    animarEgresos();
    animarSaldo();

  }, []);

  /* ---------------- BARRAS GASTOS ---------------- */

  function animarEgresos(){

    const canvas = canvasEgresos.current;
    const ctx = canvas.getContext("2d");

    const data = datosFinancieros.egresos;

    const max = Math.max(...data.map(d=>d.monto));

    let progreso = 0;

    function frame(){

      ctx.clearRect(0,0,canvas.width,canvas.height);

      data.forEach((item,i)=>{

        const y = 40 + i*28;
        const width = (item.monto/max)*420*progreso;

        ctx.fillStyle="#4CAF50";
        ctx.fillRect(240,y,width,18);

        ctx.fillStyle="#333";
        ctx.font="12px Arial";

        ctx.fillText(item.concepto,10,y+13);

        ctx.fillText(
          "$"+item.monto.toLocaleString(),
          250+width,
          y+13
        );

      });

      progreso += 0.03;

      if(progreso<=1){
        requestAnimationFrame(frame);
      }

    }

    frame();

  }

  /* ---------------- LINEA SALDO ---------------- */

  function animarSaldo(){

    const canvas = canvasSaldo.current;
    const ctx = canvas.getContext("2d");

    const data = datosFinancieros.saldoMensual;

    const max = Math.max(...data.map(d=>d.saldo));
    const min = Math.min(...data.map(d=>d.saldo));

    let progreso = 0;

    function frame(){

      ctx.clearRect(0,0,canvas.width,canvas.height);

      ctx.beginPath();

      data.forEach((p,i)=>{

        const x = 70 + i*70;

        const y =
          220 -
          ((p.saldo-min)/(max-min))*160*progreso;

        if(i===0) ctx.moveTo(x,y);
        else ctx.lineTo(x,y);

        ctx.fillStyle="#555";
        ctx.fillText(p.fecha,x-10,240);

      });

      ctx.strokeStyle="#2E7D32";
      ctx.lineWidth=3;
      ctx.stroke();

      progreso += 0.03;

      if(progreso<=1){
        requestAnimationFrame(frame);
      }

    }

    frame();

  }

  return (

<div style={styles.dashboard}>

<h2 style={styles.titulo}>
Dashboard Financiero
</h2>

{/* ---------- SECCION GASTOS ---------- */}

<div style={styles.section}>

<h3 style={styles.subtitulo}>
Principales Gastos Anuales
</h3>

<div style={styles.grid}>

<div style={styles.cardTabla}>

<table style={styles.table}>

<thead>
<tr>
<th>Concepto</th>
<th>Monto</th>
</tr>
</thead>

<tbody>

{datosFinancieros.egresos.map((e,i)=>(
<tr key={i}>
<td>{e.concepto}</td>
<td>${e.monto.toLocaleString()}</td>
</tr>
))}

</tbody>

</table>

</div>

<div style={styles.cardGrafico}>
<canvas ref={canvasEgresos} width={700} height={420}/>
</div>

</div>

</div>

{/* ---------- SECCION EVOLUCION ---------- */}

<div style={styles.section}>

<h3 style={styles.subtitulo}>
Evolución Saldo Banco
</h3>

<div style={styles.cardGraficoGrande}>

<canvas ref={canvasSaldo} width={900} height={300}/>

</div>

</div>

</div>

  );
}

/* ---------------- ESTILOS UX ---------------- */

const styles={

dashboard:{
fontFamily:"Segoe UI",
background:"#f5f7fb",
padding:30,
minHeight:"100vh"
},

titulo:{
textAlign:"center",
marginBottom:30
},

section:{
background:"#fff",
padding:20,
borderRadius:10,
marginBottom:30,
boxShadow:"0 4px 12px rgba(0,0,0,0.05)"
},

subtitulo:{
marginBottom:15
},

grid:{
display:"grid",
gridTemplateColumns:"400px 1fr",
gap:25
},

cardTabla:{
overflow:"auto"
},

cardGrafico:{
background:"#fafafa",
padding:10,
borderRadius:8
},

cardGraficoGrande:{
background:"#fafafa",
padding:15,
borderRadius:8
},

table:{
width:"100%",
borderCollapse:"collapse",
fontSize:13
}

}