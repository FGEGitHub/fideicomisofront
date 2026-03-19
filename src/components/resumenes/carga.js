import React, { useState } from "react";
import servicionivel3 from "../../services/nivel3";
import SubirExcelMovimientos from "./subierexce";
import Tabla from "./tablamovimientos";

export default function FormMovimiento() {

  const [mostrarForm, setMostrarForm] = useState(false);

  const [tipo, setTipo] = useState("EGRESO");
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [medio, setMedio] = useState("");
  const [detalle, setDetalle] = useState("");
  const [loading, setLoading] = useState(false);

  const mediosPago = [
    "Efectivo",
    "Transferencia",
    "Banco",
    "Tarjeta",
    "Cheque"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!concepto || !monto || !medio) {
      alert("Complete los campos obligatorios");
      return;
    }

    setLoading(true);

    const data = {
      tipo_operacion: tipo,
      concepto: concepto,
      monto: Number(monto),
      medio_pago: medio,
      descripcion: detalle
    };

    try {
      await servicionivel3.enviarmovimiento(data);

      alert("Movimiento registrado");

      setConcepto("");
      setMonto("");
      setMedio("");
      setDetalle("");

      setMostrarForm(false); // 🔥 se cierra después de guardar

    } catch (err) {
      console.error(err);
      alert("Error al registrar el movimiento");
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔥 SIEMPRE VISIBLE */}
      <div style={{ maxWidth: 900, margin: "20px auto" }}>
        <SubirExcelMovimientos />

        {/* BOTÓN */}
        <button
          onClick={() => setMostrarForm(!mostrarForm)}
          style={{
            marginTop: 15,
            padding: 10,
            borderRadius: 6,
            border: "none",
            background: "#1976d2",
            color: "white",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {mostrarForm ? "Cerrar formulario" : "Agregar individual"}
        </button>
      </div>

      {/* 🔥 FORM OCULTO */}
      {mostrarForm && (
        <div
          style={{
            maxWidth: 420,
            margin: "20px auto",
            padding: 25,
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "#fafafa"
          }}
        >
          <h2 style={{ marginBottom: 20 }}>
            Registrar Movimiento
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >

            <label>Tipo</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="EGRESO">Egreso</option>
              <option value="INGRESO">Ingreso</option>
            </select>

            <label>Concepto</label>
            <input
              type="text"
              value={concepto}
              onChange={(e) => setConcepto(e.target.value)}
              placeholder="Ej: Impuestos AFIP"
            />

            <label>Monto</label>
            <input
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />

            <label>Medio de pago</label>
            <select
              value={medio}
              onChange={(e) => setMedio(e.target.value)}
            >
              <option value="">Seleccionar</option>
              {mediosPago.map((m, i) => (
                <option key={i} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <label>Detalle</label>
            <input
              type="text"
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              placeholder="Descripción opcional"
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: 10,
                padding: 10,
                borderRadius: 6,
                border: "none",
                background: "#2c3e50",
                color: "white",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {loading ? "Guardando..." : "Guardar movimiento"}
            </button>

          </form>
        </div>
      )}

      {/* 🔥 TABLA SIEMPRE VISIBLE */}
      <Tabla />
    </>
  );
}