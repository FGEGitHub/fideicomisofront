import React, { useState } from "react";
import servicionivel3 from "../../services/nivel3";

export default function SubirExcelMovimientos(){

  const [archivo,setArchivo] = useState(null);
  const [loading,setLoading] = useState(false);
  const [resultado,setResultado] = useState(null);

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

      const resp = await servicionivel3.subirexceldemovimientos(formData);

      setResultado(resp);

      alert(
        `Archivo procesado\n\n` +
        `Total: ${resp.total}\n` +
        `Insertados: ${resp.insertados}\n` +
        `Duplicados: ${resp.duplicados}`
      );

      setArchivo(null);

    }catch(err){
      console.error(err);
      alert("Error al subir el archivo");
    }

    setLoading(false);
  };

  // 🔥 separar duplicados
  const duplicadosExcel = resultado?.duplicados_detalle?.filter(d => d.tipo === "EXCEL") || [];
  const duplicadosBD = resultado?.duplicados_detalle?.filter(d => d.tipo === "BD") || [];

  return(
    <div style={{
      maxWidth:700,
      margin:"40px auto",
      padding:25,
      borderRadius:10,
      border:"1px solid #ddd",
      background:"#fafafa"
    }}>

      <h2 style={{ marginBottom:20 }}>Subir Excel de Movimientos</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display:"flex", flexDirection:"column", gap:12 }}
      >

        <label>Archivo Excel</label>

        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
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

      {/* 🔥 RESULTADO */}
      {resultado && (
        <div style={{ marginTop:30 }}>

          <h3>Resumen</h3>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(3,1fr)",
            gap:10,
            marginBottom:20
          }}>
            <div>📄 Total: <strong>{resultado.total}</strong></div>
            <div>✅ Insertados: <strong>{resultado.insertados}</strong></div>
            <div>🔁 Duplicados: <strong>{resultado.duplicados}</strong></div>
          </div>

          {/* 🔵 DUPLICADOS BD */}
          {duplicadosBD.length > 0 && (
            <>
              <h4 style={{ color:"#2980b9" }}>
                🔵 Duplicados en Base de Datos ({duplicadosBD.length})
              </h4>

              <div style={{
                maxHeight:200,
                overflow:"auto",
                background:"#fff",
                padding:10,
                border:"1px solid #eee"
              }}>
                {duplicadosBD.map((d,i)=>(
                  <div key={i} style={{ borderBottom:"1px solid #eee", padding:5 }}>
                    <strong>{d.fecha}</strong> | {d.cuit} | ${d.monto}
                    <br/>
                    <small>{d.descripcion}</small>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 🟣 DUPLICADOS EXCEL */}
          {duplicadosExcel.length > 0 && (
            <>
              <h4 style={{ color:"#8e44ad", marginTop:20 }}>
                🟣 Duplicados dentro del Excel ({duplicadosExcel.length})
              </h4>

              <div style={{
                maxHeight:200,
                overflow:"auto",
                background:"#fff",
                padding:10,
                border:"1px solid #eee"
              }}>
                {duplicadosExcel.map((d,i)=>(
                  <div key={i} style={{ borderBottom:"1px solid #eee", padding:5 }}>
                    <strong>{d.fecha}</strong> | {d.cuit} | ${d.monto}
                    <br/>
                    <small>{d.descripcion}</small>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      )}

    </div>
  );
}