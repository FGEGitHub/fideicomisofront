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
    dibujarEgresos();
    dibujarSaldo();
  }, []);

  const dibujarEgresos = () => {

    const canvas = canvasEgresos.current;
    const ctx = canvas.getContext("2d");

    const data = datosFinancieros.egresos;

    const max = Math.max(...data.map(d => d.monto));

    ctx.clearRect(0,0,canvas.width,canvas.height);

    data.forEach((item,i)=>{

      const y = 30 + i*28;
      const width = (item.monto/max)*400;

      ctx.fillStyle="#7FB77E";
      ctx.fillRect(220,y,width,18);

      ctx.fillStyle="#000";
      ctx.font="12px Arial";

      ctx.fillText(item.concepto,10,y+13);

      ctx.fillText(
        "$"+item.monto.toLocaleString(),
        230+width,
        y+13
      );

    });

  };

  const dibujarSaldo = () => {

    const canvas = canvasSaldo.current;
    const ctx = canvas.getContext("2d");

    const data = datosFinancieros.saldoMensual;

    const max = Math.max(...data.map(d=>d.saldo));
    const min = Math.min(...data.map(d=>d.saldo));

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();

    data.forEach((p,i)=>{

      const x = 60 + i*70;

      const y =
        220 -
        ((p.saldo-min)/(max-min))*160;

      if(i===0) ctx.moveTo(x,y);
      else ctx.lineTo(x,y);

      ctx.fillText(p.fecha,x-10,240);

    });

    ctx.strokeStyle="#6BA368";
    ctx.lineWidth=3;
    ctx.stroke();

    ctx.lineTo(60+(data.length-1)*70,220);
    ctx.lineTo(60,220);
    ctx.closePath();

    ctx.fillStyle="rgba(107,163,104,0.3)";
    ctx.fill();

  };

  return (

    <div style={{fontFamily:"Arial",padding:20}}>

      <h2 style={{textAlign:"center"}}>
      PRINCIPALES GASTOS ANUAL
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"400px 1fr",
        gap:30
      }}>

        <table
        style={{
          borderCollapse:"collapse",
          width:"100%",
          fontSize:13
        }}
        >

          <thead>
            <tr>
              <th style={{border:"1px solid #999",padding:6}}>
              Concepto
              </th>
              <th style={{border:"1px solid #999",padding:6}}>
              Monto
              </th>
            </tr>
          </thead>

          <tbody>

          {datosFinancieros.egresos.map((e,i)=>(
            <tr key={i}>
              <td style={{border:"1px solid #ccc",padding:6}}>
              {e.concepto}
              </td>
              <td style={{border:"1px solid #ccc",padding:6}}>
              ${e.monto.toLocaleString()}
              </td>
            </tr>
          ))}

          </tbody>

        </table>

        <canvas
        ref={canvasEgresos}
        width={700}
        height={450}
        />

      </div>

      <h2 style={{marginTop:50}}>
      EVOLUCIÓN SALDO BANCO MENSUAL
      </h2>

      <canvas
      ref={canvasSaldo}
      width={900}
      height={300}
      />

    </div>

  );
}