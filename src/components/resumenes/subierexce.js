import React, { useState } from "react";
import servicionivel3 from "../../services/nivel3";

export default function SubirExcelMovimientos(){

const [archivo,setArchivo] = useState(null);
const [loading,setLoading] = useState(false);

const handleFileChange = (e)=>{
setArchivo(e.target.files[0]);
};

const handleSubmit = async (e)=>{

e.preventDefault();

if(!archivo){
alert("Seleccione un archivo Excel");
return;
}

setLoading(true);

try{

const formData = new FormData();
formData.append("file",archivo);

await servicionivel3.subirexceldemovimientos(formData);

alert("Excel cargado correctamente");
setArchivo(null);

}catch(err){

console.error(err);
alert("Error al subir el archivo");

}

setLoading(false);

};

return(

<div style={{
maxWidth:420,
margin:"40px auto",
padding:25,
borderRadius:10,
border:"1px solid #ddd",
background:"#fafafa"
}}>

<h2 style={{
marginBottom:20,
fontWeight:600
}}>
Subir Excel de Movimientos
</h2>

<form
onSubmit={handleSubmit}
style={{
display:"flex",
flexDirection:"column",
gap:12
}}
>

<label>Archivo Excel</label>

<input
type="file"
accept=".xlsx,.xls"
onChange={handleFileChange}
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

{loading ? "Subiendo..." : "Subir Excel"}

</button>

</form>

</div>

);

}