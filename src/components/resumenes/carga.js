import React, { useState } from "react";
import servicionivel3 from "../../services/nivel3";
import SubirExcelMovimientos from "./subierexce";
import Tabla from "./tablamovimientos";
const categoriasEgresos = [
"Honorarios Profesionales",
"Servicios de Seguridad",
"Servicio Seguridad Adicional",
"Reintegro de Sueldos",
"Reparación mantenimiento",
"Alquileres Oficinas",
"Cobranza SC Parque",
"Servicios personales",
"Otros egresos",
"Baños químicos",
"Compra muebles",
"Impuestos DGR",
"Impuestos AFIP",
"Comisiones bancarias"
];

const categoriasIngresos = [
"Cuotas",
"Expensas",
"Servicios",
"Intereses",
"Otros ingresos"
];

const mediosPago = [
"Efectivo",
"Transferencia",
"Banco",
"Tarjeta",
"Cheque"
];

export default function FormMovimiento() {

const [tipo,setTipo] = useState("egreso");
const [categoria,setCategoria] = useState("");
const [monto,setMonto] = useState("");
const [medio,setMedio] = useState("");
const [detalle,setDetalle] = useState("");
const [loading,setLoading] = useState(false);

const categorias =
tipo === "egreso"
? categoriasEgresos
: categoriasIngresos;


const handleSubmit = async (e) => {

e.preventDefault();

if(!categoria || !monto || !medio){
alert("Complete los campos obligatorios");
return;
}

setLoading(true);

const data = {
tipo,
categoria,
monto,
medio_pago: medio,
detalle
};

try{

await servicionivel3.enviarmovimiento(data);

alert("Movimiento registrado");

setCategoria("");
setMonto("");
setMedio("");
setDetalle("");

}catch(err){

console.error(err);
alert("Error al registrar el movimiento");

}

setLoading(false);

};


return(
<>
<div style={{
maxWidth:420,
margin:"40px auto",
padding:25,
borderRadius:10,
border:"1px solid #ddd",
background:"#fafafa"
}}>
<SubirExcelMovimientos/>
<h2 style={{
marginBottom:20,
fontWeight:600
}}>
Registrar Movimiento
</h2>

<form
onSubmit={handleSubmit}
style={{
display:"flex",
flexDirection:"column",
gap:12
}}
>

<label>Tipo de movimiento</label>

<select
value={tipo}
onChange={(e)=>setTipo(e.target.value)}
>

<option value="egreso">Egreso</option>
<option value="ingreso">Ingreso</option>

</select>


<label>Categoría</label>

<select
value={categoria}
onChange={(e)=>setCategoria(e.target.value)}
>

<option value="">Seleccionar</option>

{categorias.map((c,i)=>(
<option key={i} value={c}>
{c}
</option>
))}

</select>


<label>Monto</label>

<input
type="number"
value={monto}
onChange={(e)=>setMonto(e.target.value)}
placeholder="Ingrese el monto"
/>


<label>Medio de pago</label>

<select
value={medio}
onChange={(e)=>setMedio(e.target.value)}
>

<option value="">Seleccionar</option>

{mediosPago.map((m,i)=>(
<option key={i} value={m}>
{m}
</option>
))}

</select>


<label>Detalle</label>

<input
type="text"
value={detalle}
onChange={(e)=>setDetalle(e.target.value)}
placeholder="Observación o detalle"
/>


<button
type="submit"
disabled={loading}
style={{
marginTop:10,
padding:10,
borderRadius:6,
border:"none",
background:"#2c3e50",
color:"white",
fontWeight:600,
cursor:"pointer"
}}
>

{loading ? "Guardando..." : "Guardar movimiento"}

</button>

</form>

</div>
<Tabla/>
</>
)

}