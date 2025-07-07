import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import ComprobantePDF from './ComprobantePDF';
import Borrar from './modalborrar';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Modif from './modalactcomp';
import Borrarcomp from './modalborrarcomprobante';
function abrirComprobante(pago) {
    const win = window.open('', '_blank');
    const fecha = new Date().toLocaleDateString();

    const contenido = `
    <html>
      <head>
        <title>Comprobante de Pago</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 10px;
          }
          h2 {
            color: #333;
            text-align: center;
          }
          table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
          }
          td, th {
            padding: 10px;
            border: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <h2>Comprobante de Pago</h2>
        <table>
          <tr>
            <th>Fecha</th>
            <td>${fecha}</td>
          </tr>
          <tr>
            <th>De</th>
            <td>________ (emisor)</td>
          </tr>
          <tr>
            <th>Para</th>
            <td>________ (receptor)</td>
          </tr>
          <tr>
            <th>Monto</th>
            <td>$ ${pago.monto.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Mes/Año</th>
            <td>${pago.mes} / ${pago.anio}</td>
          </tr>
          <tr>
            <th>Detalle</th>
            <td>Pago registrado bajo el ID: ${pago.id}</td>
          </tr>
        </table>
        <p style="margin-top:40px; text-align:center">Gracias por su pago.</p>
      </body>
    </html>
  `;

    win.document.open();
    win.document.write(contenido);
    win.document.close();
}
export default function DetallesPagos(props) {
    let params = useParams()
    let id = params.id
    const navigate = useNavigate();
    const [pagos, setPagos] = useState([]);
    useEffect(() => {
        console.log(id)
        traer()

    }, [])



    const generarPDF = async (fila) => {
        const blob = await pdf(<ComprobantePDF datos={fila} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    };
    const traer = async () => {
        const aux = {
            id: id
        }
        const pag = await servicioPagos.detallesPago(aux)

        setPagos(pag)




    }
    function emitirComprobante(pago) {
        return (
            <Button
                variant="outlined"
                size="small"
                onClick={() => abrirComprobante(pago)}
            >
                Comprobante
            </Button>
        );
    }

    const columns = [
        {
            name: "id",
            label: "id",
        },
        {
            name: "mes",
            label: "mes",


        },
        {
            name: "anio",
            label: "año",

        },
        {
            name: "Monto",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    monto(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }


        },

        {
            name: "cuil_cuit_administrador",
            label: "Cuil administrador",
        },
        {
            name: "Borrar comprobante",

            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    borrarcomp(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }
        },

        {
            name: "Modificar",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    modifa(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }


        },
        {
            name: "Emitir comprobante",
            options: {
                customBodyRenderLite: (dataIndex) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => generarPDF(pagos[dataIndex])}
                    >
                        PDF
                    </Button>
                )
            }
        },

        {
            name: "Ver/borrar",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    downloadFile(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },

    ];

    async function download(index, rowIndex, data) {
        try {
            const pdfBlob = await servicioPagos.traerPdfConstanciadepago(pagos[index].id);
            const url = URL.createObjectURL(pdfBlob);
            window.open(url, '_blank');
        } catch (error) {
            console.error('Error al obtener el PDF:', error);
            alert('Error al cargar el PDF');
        }


    }


    function modifa(index, rowIndex, data) {

        return (
            <>


                <Modif

                    id={pagos[index].id}
                    getData={async () => {
                        const aux = {
                            id: id
                        }
                        const pag = await servicioPagos.detallesPago(aux)

                        setPagos(pag)




                    }} />

            </>
        );
    }
    function borrarcomp(index, rowIndex, data) {

        return (
            <>

                {pagos[index].ubicacion == null ? "Sin comprobante" : <Borrarcomp
                    id={pagos[index].id}
                    getData={async () => {
                        const aux = {
                            id: id
                        }
                        const pag = await servicioPagos.detallesPago(aux)

                        setPagos(pag)




                    }} />}



            </>
        );
    }



    function monto(index, rowIndex, data) {


        return (
            <>



                {pagos[index].monto_distinto == "Si" ? <p style={{ color: 'crimson' }} >{(pagos[index].monto).toFixed(2)}</p> : (pagos[index].monto).toFixed(2)}

            </>
        );
    }
    function downloadFile(index, rowIndex, data) {


        return (
            <>
                <button

                    onClick={() => download(index)}
                >Ver Online</button>
                <Borrar
                    id={pagos[index].id}
                    traer={async () => {
                        const aux = {
                            id: id
                        }
                        const pag = await servicioPagos.detallesPago(aux)

                        setPagos(pag)




                    }
                    } />

            </>
        );
    }
    const options = {


        setTableProps: () => {
            return {
                style: {
                    backgroundColor: "#e3f2fd", // Cambia el color de fondo de la tabla
                },
            };
        },
        customHeadRender: (columnMeta, handleToggleColumn) => ({
            TableCell: {
                style: {
                    backgroundColor: '#1565c0', // Cambia el color de fondo del encabezado
                    color: 'white', // Cambia el color del texto del encabezado
                },
            },
        }),
        selectableRows: false, // Desactivar la selección de filas
        stickyHeader: true,
        selectableRowsHeader: false,
        selectableRowsOnClick: true,
        responsive: 'scroll',
        rowsPerPage: 10,
        rowsPerPageOptions: [5, 10, 15],
        downloadOptions: { filename: 'tableDownload.csv', separator: ',' },
        print: true,
        filter: true,
        viewColumns: true,
        pagination: true,

        textLabels: {
            body: {
                noMatch: "No se encontraron registros",
                toolTip: "Ordenar",
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Filas por página:",
                displayRows: "de",
            },
            toolbar: {
                search: "Buscar",
                downloadCsv: "Descargar CSV",
                print: "Imprimir",
                viewColumns: "Ver columnas",
                filterTable: "Filtrar tabla",
            },
            filter: {
                all: "Todos",
                title: "FILTROS",
                reset: "RESETEAR",
            },
            viewColumns: {
                title: "Mostrar columnas",
                titleAria: "Mostrar/ocultar columnas de la tabla",
            },
            selectedRows: {
                text: "fila(s) seleccionada(s)",
                delete: "Eliminar",
                deleteAria: "Eliminar filas seleccionadas",
            },
        },

    };


    return (

        <MUIDataTable
            title={"Lista de Pagos"}
            data={pagos}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            options={options}
        />

    )
}
