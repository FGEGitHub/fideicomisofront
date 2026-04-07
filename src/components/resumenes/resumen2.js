import React, { useEffect, useRef, useState } from "react";
import servicionivel3 from "../../services/nivel3";
import Tabla from "./tablamovimientos";

export default function DashboardFinanciero() {

  const canvasEgresos = useRef(null);
  const canvasSaldo = useRef(null);

  const [egresos,setEgresos] = useState([]);
  const [saldoMensual,setSaldoMensual] = useState([]);

  useEffect(() => {
    traerDatos();
  }, []);

  const traerDatos = async () => {
    try {

      const resp = await servicionivel3.traermovimientos();

      const egresosMap = {};
      const saldoPorMes = {};

      resp.forEach(mov => {

        const fecha = new Date(mov.fecha);
        const mes = fecha.toLocaleString("es-AR",{month:"short"});

        const debito = Number(mov.debito) || 0;
        const credito = Number(mov.credito) || 0;

        const concepto = mov.concepto || "Sin categoría";

        // 👉 EGRESOS
        if(debito > 0){
          if(!egresosMap[concepto]){
            egresosMap[concepto] = 0;
          }
          egresosMap[concepto] += debito;
        }

        // 👉 SALDO
        const saldo = credito - debito;

        if(!saldoPorMes[mes]){
          saldoPorMes[mes] = 0;
        }

        saldoPorMes[mes] += saldo;

      });

      const egresosArray = Object.keys(egresosMap).map(key => ({
        concepto: key,
        monto: egresosMap[key]
      }))
      .sort((a,b)=>b.monto-a.monto)
      .slice(0,10);

      const saldoArray = [];
      let acumulado = 0;

      Object.keys(saldoPorMes).forEach(mes=>{
        acumulado += saldoPorMes[mes];
        saldoArray.push({fecha:mes,saldo:acumulado});
      });

      setEgresos(egresosArray);
      setSaldoMensual(saldoArray);

      setTimeout(()=>{
        animarEgresos(egresosArray);
        animarSaldo(saldoArray);
      },100);

    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- BARRAS ---------------- */

  function animarEgresos(data){

    const canvas = canvasEgresos.current;
    const ctx = canvas.getContext("2d");

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
          "$"+Math.round(item.monto).toLocaleString(),
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

  /* ---------------- LINEA SALDO (FULL WIDTH) ---------------- */

  function animarSaldo(data){

    const canvas = canvasSaldo.current;
    const ctx = canvas.getContext("2d");

    const max = Math.max(...data.map(d=>d.saldo));
    const min = Math.min(...data.map(d=>d.saldo));

    let progreso = 0;

    function frame(){

      ctx.clearRect(0,0,canvas.width,canvas.height);

      ctx.beginPath();

      const paddingX = 60;
      const usableWidth = canvas.width - paddingX * 2;

      data.forEach((p,i)=>{

        // 👉 DISTRIBUCIÓN DINÁMICA EN TODO EL ANCHO
        const x = paddingX + (i/(data.length-1 || 1)) * usableWidth;

        const y =
          220 -
          ((p.saldo-min)/(max-min || 1))*160*progreso;

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

<div style={styles.section}>

<h3 style={styles.subtitulo}>
Principales egresos
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

{egresos.map((e,i)=>(
<tr key={i}>
<td>{e.concepto}</td>
<td>${Math.round(e.monto).toLocaleString()}</td>
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

<div style={styles.section}>

<h3 style={styles.subtitulo}>
Evolución Saldo Banco
</h3>

<div style={styles.cardGraficoGrande}>
<canvas ref={canvasSaldo} width={900} height={300}/>
</div>

</div>

<Tabla/>

</div>

  );
}

const styles={

dashboard:{
fontFamily:"Inter, Segoe UI",
background:"#F9FAFB",
padding:30,
minHeight:"100vh"
},

titulo:{
textAlign:"center",
marginBottom:30,
color:"#111827",
fontWeight:"600"
},

section:{
background:"#ffffff",
padding:20,
borderRadius:12,
marginBottom:30,
boxShadow:"0 10px 25px rgba(0,0,0,0.06)",
border:"1px solid #E5E7EB"
},

subtitulo:{
marginBottom:15,
color:"#374151",
fontWeight:"600"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
gap:25
},

cardTabla:{
overflow:"auto"
},

cardGrafico:{
background:"#F3F4F6",
padding:10,
borderRadius:10
},

cardGraficoGrande:{
background:"#F3F4F6",
padding:15,
borderRadius:10,
width:"100%" // 👈 asegura ancho completo
},

table:{
width:"100%",
borderCollapse:"collapse",
fontSize:13,
color:"#111827"
}

};