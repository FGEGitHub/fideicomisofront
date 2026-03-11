import React,{useEffect,useRef,useState} from "react";

const dashboardFinanzas = {

mesSeleccionado:"Diciembre",

kpis:{
ingresos:111300,
gastos:81000,
ganancia:30300,
rentabilidad:27
}, 

flujoCaja:[
{concepto:"Ingresos",valor:111300},
{concepto:"Meta Ingresos",valor:68456},
{concepto:"Gastos",valor:81000},
{concepto:"Meta Gastos",valor:54765}
],

balanzaMes:[
{concepto:"Ganancia / Perdida",valor:30300},
{concepto:"Meta",valor:13691}
],

divisionIngresos:[
{tipo:"Productos",porcentaje:29},
{tipo:"Servicios",porcentaje:39},
{tipo:"Otros ingresos",porcentaje:7},
{tipo:"Financieros",porcentaje:25}
],

distribucionGastos:[
{tipo:"Costo productos",porcentaje:25},
{tipo:"Servicios",porcentaje:5},
{tipo:"Otros costos",porcentaje:8},
{tipo:"RRHH",porcentaje:21},
{tipo:"Marketing",porcentaje:7},
{tipo:"Funcionamiento",porcentaje:14},
{tipo:"Otros",porcentaje:20}
]

}

export default function DashboardFinanciero(){

const flujoRef = useRef(null);
const balanzaRef = useRef(null);
const ingresosRef = useRef(null);
const gastosRef = useRef(null);

useEffect(()=>{

setTimeout(()=>{
drawBarChart();
drawBalance();
drawDonutIngresos();
drawDonutGastos();
},400)

},[])


function animateNumber(target,setter,duration=1000){

let start=0
const increment=target/(duration/16)

const counter=setInterval(()=>{

start+=increment

if(start>=target){
start=target
clearInterval(counter)
}

setter(Math.floor(start))

},16)

}



function drawBarChart(){

const canvas=flujoRef.current
const ctx=canvas.getContext("2d")

ctx.clearRect(0,0,canvas.width,canvas.height)

const max=Math.max(...dashboardFinanzas.flujoCaja.map(d=>d.valor))

dashboardFinanzas.flujoCaja.forEach((d,i)=>{

const x=40+i*80
const height=(d.valor/max)*160

ctx.fillStyle=
i===0?"#2ecc71":
i===1?"#9be7a1":
i===2?"#e74c3c":
"#ff9b8e"

ctx.fillRect(x,200-height,60,height)

ctx.fillStyle="#333"
ctx.font="12px Arial"

ctx.fillText("$"+d.valor.toLocaleString(),x,185-height)

ctx.fillText(d.concepto,x-5,220)

})

}



function drawBalance(){

const canvas=balanzaRef.current
const ctx=canvas.getContext("2d")

ctx.clearRect(0,0,canvas.width,canvas.height)

const max=Math.max(...dashboardFinanzas.balanzaMes.map(d=>d.valor))

dashboardFinanzas.balanzaMes.forEach((d,i)=>{

const x=70+i*120
const height=(d.valor/max)*160

ctx.fillStyle=i===0?"#3498db":"#bdc3c7"

ctx.fillRect(x,200-height,80,height)

ctx.fillStyle="#333"
ctx.fillText("$"+d.valor.toLocaleString(),x,180-height)

ctx.fillText(d.concepto,x,220)

})

}



function drawDonut(canvas,dataArray){

const ctx=canvas.getContext("2d")

const total=dataArray.reduce((a,b)=>a+b.porcentaje,0)

let start=0

dataArray.forEach((d,i)=>{

const slice=(d.porcentaje/total)*Math.PI*2

ctx.beginPath()

ctx.moveTo(150,150)

ctx.arc(150,150,120,start,start+slice)

ctx.closePath()

ctx.fillStyle=[
"#2ecc71",
"#27ae60",
"#f1c40f",
"#3498db",
"#9b59b6",
"#e67e22",
"#e74c3c"
][i]

ctx.fill()

start+=slice

})

ctx.beginPath()
ctx.arc(150,150,60,0,Math.PI*2)
ctx.fillStyle="#fff"
ctx.fill()

}



function drawDonutIngresos(){

drawDonut(ingresosRef.current,dashboardFinanzas.divisionIngresos)

}

function drawDonutGastos(){

drawDonut(gastosRef.current,dashboardFinanzas.distribucionGastos)

}



return(

<div style={styles.dashboard}>


<h2 style={styles.titulo}>
Dashboard Financiero
</h2>


<div style={styles.kpis}>

<KpiCard titulo="Ingresos" valor={dashboardFinanzas.kpis.ingresos} color="#2ecc71"/>
<KpiCard titulo="Gastos" valor={dashboardFinanzas.kpis.gastos} color="#e74c3c"/>
<KpiCard titulo="Ganancia" valor={dashboardFinanzas.kpis.ganancia} color="#3498db"/>
<KpiCard titulo="Rentabilidad" valor={dashboardFinanzas.kpis.rentabilidad+"%"} color="#9b59b6"/>

</div>


<div style={styles.graficos}>

<Section titulo="Flujo de Caja Comparación">
<canvas ref={flujoRef} width={320} height={250}/>
</Section>

<Section titulo="Balanza del Mes">
<canvas ref={balanzaRef} width={320} height={250}/>
</Section>

<Section titulo="División de Ingresos">
<canvas ref={ingresosRef} width={300} height={300}/>
</Section>

<Section titulo="Distribución de Gastos">
<canvas ref={gastosRef} width={300} height={300}/>
</Section>

</div>


</div>

)

}



function KpiCard({titulo,valor,color}){

const [display,setDisplay]=useState(0)

useEffect(()=>{
animate(display,valor,setDisplay)
},[])

function animate(start,target,setter){

let current=0

const inc=target/40

const timer=setInterval(()=>{

current+=inc

if(current>=target){
current=target
clearInterval(timer)
}

setter(Math.floor(current))

},25)

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



const styles={

dashboard:{
fontFamily:"Segoe UI",
padding:30,
minHeight:"100vh",
background:"linear-gradient(135deg,#eef3f8,#dde7f3)"
},

titulo:{
marginBottom:20
},

kpis:{
display:"flex",
gap:20,
marginBottom:30
},

card:{
background:"#fff",
padding:20,
borderRadius:10,
width:200,
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
transition:"0.3s"
},

cardTitle:{
fontSize:14,
color:"#777"
},

cardValue:{
fontSize:26,
fontWeight:"bold"
},

graficos:{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:25
},

section:{
background:"#fff",
padding:20,
borderRadius:10,
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
},

sectionTitle:{
marginBottom:10
}

}