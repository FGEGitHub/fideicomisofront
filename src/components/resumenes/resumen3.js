import React,{useEffect,useRef,useState} from "react";
import servicionivel3 from "../../services/nivel3";

export default function DashboardFinanciero(){

const flujoRef = useRef(null);
const balanzaRef = useRef(null);
const ingresosRef = useRef(null);
const gastosRef = useRef(null);

// ✅ ESTADOS
const [kpis,setKpis] = useState({
ingresos:0,
gastos:0,
ganancia:0,
rentabilidad:0
});

const [flujoCaja,setFlujoCaja] = useState([]);
const [balanzaMes,setBalanzaMes] = useState([]);
const [divisionIngresos,setDivisionIngresos] = useState([]);
const [distribucionGastos,setDistribucionGastos] = useState([]);

useEffect(()=>{
traerDatos();
},[]);

// ✅ TRAER DATOS REALES
const traerDatos = async () => {

try{

const resp = await servicionivel3.traermovimientos();

let ingresos = 0;
let gastos = 0;

const ingresosCat = {};
const gastosCat = {};

resp.forEach(mov=>{

const credito = Number(mov.credito)||0;
const debito = Number(mov.debito)||0;

const categoria = mov.categoria || "Otros";

ingresos += credito;
gastos += debito;

// ingresos por categoria
if(credito > 0){
if(!ingresosCat[categoria]) ingresosCat[categoria]=0;
ingresosCat[categoria]+=credito;
}

// gastos por categoria
if(debito > 0){
if(!gastosCat[categoria]) gastosCat[categoria]=0;
gastosCat[categoria]+=debito;
}

});

const ganancia = ingresos - gastos;

const rentabilidad = ingresos > 0
? ((ganancia / ingresos) * 100).toFixed(2)
: 0;

// KPIs
setKpis({
ingresos,
gastos,
ganancia,
rentabilidad
});

// flujo
const flujo = [
{concepto:"Ingresos",valor:ingresos},
{concepto:"Gastos",valor:gastos}
];

setFlujoCaja(flujo);

// balanza
const balanza = [
{concepto:"Resultado",valor:ganancia}
];

setBalanzaMes(balanza);

// donut ingresos
const totalIng = Object.values(ingresosCat).reduce((a,b)=>a+b,0);

setDivisionIngresos(
Object.keys(ingresosCat).map(k=>({
tipo:k,
porcentaje:(ingresosCat[k]/totalIng)*100
}))
);

// donut gastos
const totalGas = Object.values(gastosCat).reduce((a,b)=>a+b,0);

setDistribucionGastos(
Object.keys(gastosCat).map(k=>({
tipo:k,
porcentaje:(gastosCat[k]/totalGas)*100
}))
);

// dibujar
setTimeout(()=>{
drawBarChart(flujo);
drawBalance(balanza);
drawDonutIngresos();
drawDonutGastos();
},300);

}catch(e){
console.error(e);
}

};

/* ---------------- GRAFICOS ---------------- */

function drawBarChart(data){

const canvas=flujoRef.current;
const ctx=canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

const max=Math.max(...data.map(d=>d.valor));

data.forEach((d,i)=>{

const x=60+i*120;
const height=(d.valor/max)*160;

ctx.fillStyle = i===0 ? "#16A34A" : "#DC2626";

ctx.fillRect(x,200-height,80,height);

ctx.fillStyle="#111827";
ctx.font="12px Arial";

ctx.fillText("$"+Math.round(d.valor).toLocaleString(),x,180-height);
ctx.fillText(d.concepto,x,220);

});

}

function drawBalance(data){

const canvas=balanzaRef.current;
const ctx=canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

const max=Math.max(...data.map(d=>Math.abs(d.valor)));

data.forEach((d,i)=>{

const x=120;
const height=(Math.abs(d.valor)/max)*160;

ctx.fillStyle = d.valor >= 0 ? "#1E3A8A" : "#DC2626";

ctx.fillRect(x,200-height,100,height);

ctx.fillStyle="#111827";
ctx.fillText("$"+Math.round(d.valor).toLocaleString(),x,180-height);
ctx.fillText(d.concepto,x,220);

});

}

function drawDonut(canvas,dataArray){

const ctx=canvas.getContext("2d");

const total=dataArray.reduce((a,b)=>a+b.porcentaje,0);

let start=0;

const colors=[
"#3B82F6",
"#6366F1",
"#8B5CF6",
"#EC4899",
"#F59E0B",
"#10B981",
"#EF4444"
];

dataArray.forEach((d,i)=>{

const slice=(d.porcentaje/total)*Math.PI*2;

ctx.beginPath();
ctx.moveTo(150,150);
ctx.arc(150,150,120,start,start+slice);
ctx.closePath();

ctx.fillStyle=colors[i % colors.length];
ctx.fill();

start+=slice;

});

// centro
ctx.beginPath();
ctx.arc(150,150,60,0,Math.PI*2);
ctx.fillStyle="#fff";
ctx.fill();

}

function drawDonutIngresos(){
drawDonut(ingresosRef.current,divisionIngresos);
}

function drawDonutGastos(){
drawDonut(gastosRef.current,distribucionGastos);
}

/* ---------------- UI ---------------- */

return(

<div style={styles.dashboard}>

<h2 style={styles.titulo}>
Dashboard Financiero
</h2>

<div style={styles.kpis}>

<KpiCard titulo="Ingresos" valor={kpis.ingresos} color="#16A34A"/>
<KpiCard titulo="Gastos" valor={kpis.gastos} color="#DC2626"/>
<KpiCard titulo="Resultado" valor={kpis.ganancia} color="#1E3A8A"/>
<KpiCard titulo="Rentabilidad" valor={kpis.rentabilidad+"%"} color="#7C3AED"/>

</div>

<div style={styles.graficos}>

<Section titulo="Flujo de Caja">
<canvas ref={flujoRef} width={350} height={250}/>
</Section>

<Section titulo="Resultado del Mes">
<canvas ref={balanzaRef} width={350} height={250}/>
</Section>

<Section titulo="Ingresos por Categoría">
<canvas ref={ingresosRef} width={300} height={300}/>
</Section>

<Section titulo="Gastos por Categoría">
<canvas ref={gastosRef} width={300} height={300}/>
</Section>

</div>

</div>

)

}

/* ---------------- COMPONENTES ---------------- */

function KpiCard({titulo,valor,color}){

const [display,setDisplay]=useState(0);

useEffect(()=>{
animate(valor,setDisplay);
},[valor]);

function animate(target,setter){

let current=0;
const inc=target/40;

const timer=setInterval(()=>{

current+=inc;

if(current>=target){
current=target;
clearInterval(timer);
}

setter(Math.floor(current));

},25);

}

return(

<div style={{...styles.card,borderTop:`4px solid ${color}`}}>

<div style={styles.cardTitle}>{titulo}</div>

<div style={styles.cardValue}>
{typeof valor==="number"?"$"+display.toLocaleString():valor}
</div>

</div>

)

}

function Section({titulo,children}){

return(

<div style={styles.section}>

<h4 style={styles.sectionTitle}>
{titulo}
</h4>

{children}

</div>

)

}

/* ---------------- ESTILOS PRO ---------------- */

const styles={

dashboard:{
fontFamily:"Inter, Segoe UI",
padding:30,
minHeight:"100vh",
background:"#F9FAFB"
},

titulo:{
marginBottom:25,
color:"#111827"
},

kpis:{
display:"flex",
gap:20,
marginBottom:30,
flexWrap:"wrap"
},

card:{
background:"#fff",
padding:20,
borderRadius:12,
width:200,
boxShadow:"0 10px 25px rgba(0,0,0,0.06)",
border:"1px solid #E5E7EB"
},

cardTitle:{
fontSize:13,
color:"#6B7280"
},

cardValue:{
fontSize:24,
fontWeight:"600",
marginTop:5
},

graficos:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
gap:25
},

section:{
background:"#fff",
padding:20,
borderRadius:12,
boxShadow:"0 10px 25px rgba(0,0,0,0.05)",
border:"1px solid #E5E7EB"
},

sectionTitle:{
marginBottom:10,
color:"#374151"
}

};