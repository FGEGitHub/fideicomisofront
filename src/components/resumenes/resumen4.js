import React, { useEffect, useRef, useState } from "react";
import servicionivel3 from "../../services/nivel3";

export default function DashboardFinanciero() {

const barRef = useRef(null);
const ingresosRef = useRef(null);
const gastosRef = useRef(null);

const [kpis,setKpis] = useState({
  ingresos:0,
  gastos:0,
  resultado:0,
  rentabilidad:0
});

const [ingresosCat,setIngresosCat] = useState([]);
const [gastosCat,setGastosCat] = useState([]);

useEffect(()=>{
  traerDatos();
},[]);

/* ================= DATOS ================= */

const traerDatos = async () => {

const resp = await servicionivel3.traermovimientos();

let ingresos = 0;
let gastos = 0;

const ing = {};
const gas = {};

resp.forEach(mov=>{

  const c = Number(mov.credito)||0;
  const d = Number(mov.debito)||0;
  const cat = mov.categoria || "Otros";

  ingresos += c;
  gastos += d;

  if(c>0){
    if(!ing[cat]) ing[cat]=0;
    ing[cat]+=c;
  }

  if(d>0){
    if(!gas[cat]) gas[cat]=0;
    gas[cat]+=d;
  }

});

const resultado = ingresos - gastos;
const rentabilidad = ingresos>0 ? ((resultado/ingresos)*100).toFixed(2) : 0;

setKpis({ ingresos, gastos, resultado, rentabilidad });

setIngresosCat(Object.keys(ing).map(k=>({
  tipo:k,
  valor:ing[k]
})));

setGastosCat(Object.keys(gas).map(k=>({
  tipo:k,
  valor:gas[k]
})));

// dibujar
setTimeout(()=>{
  drawBars(ingresos,gastos,resultado);
  drawDonut(ingresosRef.current, Object.values(ing));
  drawDonut(gastosRef.current, Object.values(gas));
},200);

};

/* ================= BARRAS ================= */

function drawBars(ingresos,gastos,resultado){

const canvas = barRef.current;
const ctx = canvas.getContext("2d");

ctx.clearRect(0,0,400,260);

// fondo líneas
ctx.strokeStyle="#E5E7EB";

for(let i=0;i<5;i++){
  let y = 220 - i*40;
  ctx.beginPath();
  ctx.moveTo(40,y);
  ctx.lineTo(360,y);
  ctx.stroke();
}

const data = [
  {label:"Ingresos", value:ingresos, color:"#22C55E"},
  {label:"Egresos", value:gastos, color:"#86EFAC"},
  {label:"Resultado", value:resultado, color:"#4ADE80"}
];

const max = Math.max(...data.map(d=>d.value));

data.forEach((d,i)=>{

  const x = 70 + i*100;
  const h = (d.value/max)*160;
  const y = 220 - h;

  // sombra
  ctx.fillStyle="#d1d5db";
  ctx.fillRect(x+5,y+5,50,h);

  // barra
  ctx.fillStyle=d.color;
  ctx.fillRect(x,y,50,h);

  // valor
  ctx.fillStyle="#111";
  ctx.font="bold 12px Arial";
  ctx.textAlign="center";
  ctx.fillText("$"+Math.round(d.value).toLocaleString(),x+25,y-5);

  // label
  ctx.font="12px Arial";
  ctx.fillText(d.label,x+25,240);

});

}

/* ================= DONUT ================= */

function drawDonut(canvas,data){

const ctx = canvas.getContext("2d");

ctx.clearRect(0,0,300,300);

const total = data.reduce((a,b)=>a+b,0);

let start = 0;

const colors = [
"#3B82F6","#6366F1","#8B5CF6","#EC4899","#F59E0B","#10B981","#EF4444"
];

data.forEach((v,i)=>{

  const slice = (v/total)*Math.PI*2;

  ctx.beginPath();
  ctx.moveTo(150,150);
  ctx.arc(150,150,120,start,start+slice);
  ctx.closePath();

  ctx.fillStyle = colors[i % colors.length];
  ctx.fill();

  start+=slice;

});

// agujero
ctx.beginPath();
ctx.arc(150,150,70,0,Math.PI*2);
ctx.fillStyle="#fff";
ctx.fill();

}

/* ================= UI ================= */

return(
<div style={styles.container}>

<h2 style={styles.title}>Panel Financiero 2026</h2>

{/* KPIs */}
<div style={styles.kpis}>
  <Kpi titulo="Ingresos" valor={kpis.ingresos} color="#22C55E"/>
  <Kpi titulo="Egresos" valor={kpis.gastos} color="#EF4444"/>
  <Kpi titulo="Resultado" valor={kpis.resultado} color="#3B82F6"/>
  <Kpi titulo="Rentabilidad" valor={kpis.rentabilidad+"%"} color="#8B5CF6"/>
</div>

{/* GRAFICOS */}
<div style={styles.grid}>

<div style={styles.card}>
  <h4>Total Ingresos / Egresos / Resultado</h4>
  <canvas ref={barRef} width={400} height={260}/>
</div>

<div style={styles.card}>
  <h4>Ingresos por Categoría</h4>
  <canvas ref={ingresosRef} width={300} height={300}/>
</div>

<div style={styles.card}>
  <h4>Gastos por Categoría</h4>
  <canvas ref={gastosRef} width={300} height={300}/>
</div>

</div>

</div>
);

}

/* ================= KPI ================= */

function Kpi({titulo,valor,color}){

const [num,setNum]=useState(0);

useEffect(()=>{
  let i=0;
  const inc = valor/40;

  const t = setInterval(()=>{
    i+=inc;
    if(i>=valor){
      i=valor;
      clearInterval(t);
    }
    setNum(Math.floor(i));
  },20);

},[valor]);

return(
<div style={{...styles.kpi,borderTop:`4px solid ${color}`}}>
  <div style={{fontSize:12,color:"#6B7280"}}>{titulo}</div>
  <div style={{fontSize:22,fontWeight:"bold"}}>
    {typeof valor==="number"?"$"+num.toLocaleString():valor}
  </div>
</div>
);

}

/* ================= ESTILOS ================= */

const styles = {

container:{
  padding:30,
  fontFamily:"Arial",
  background:"#F9FAFB",
  minHeight:"100vh"
},

title:{
  marginBottom:20
},

kpis:{
  display:"flex",
  gap:20,
  marginBottom:30,
  flexWrap:"wrap"
},

kpi:{
  background:"#fff",
  padding:15,
  borderRadius:10,
  width:180,
  boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
},

grid:{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
  gap:20
},

card:{
  background:"#fff",
  padding:20,
  borderRadius:12,
  boxShadow:"0 10px 20px rgba(0,0,0,0.05)"
}

};