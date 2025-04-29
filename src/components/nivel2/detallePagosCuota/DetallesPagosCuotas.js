import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import serviciousuario1 from '../../../services/usuario1'
import Borrar from './modalborrar';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Modif from './modalactcomp';
import Borrarcomp from './modalborrarcomprobante';

export default function DetallesPagos(props) {
    let params = useParams()
    let id = params.id
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id)
        traer()

    }, [])


    const [pagos, setPagos] = useState([]);

    const traer = async () => {
        const aux = {
            id: id
        }
        const pag = await servicioPagos.detallesPago(aux)

        setPagos(pag)




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

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
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

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
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

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
        return (
            <>



                {pagos[index].monto_distinto == "Si" ? <p style={{ color: 'crimson' }} >{(pagos[index].monto).toFixed(2)}</p> : (pagos[index].monto).toFixed(2)}

            </>
        );
    }
    function downloadFile(index, rowIndex, data) {

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
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
                }/>

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
