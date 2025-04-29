import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import servicioPagos from '../../../services/pagos'
import { useNavigate } from "react-router-dom";
//import overbookingData from "./overbooking";
import BotonRechazo from './Accion1'

import CheckIcon from '@mui/icons-material/Check';
import serviciousuario1 from '../../../services/usuario1'
import Button from "@mui/material/Button";

const PagosInusuales = () => {
    //configuracion de Hooks
    const [pagos, setpagos] = useState([]);
    const navigate = useNavigate();


    

    

    useEffect(() => {
        getPagosi()
    }, [])

    ///

    

const getPagosi = async () => {
        
        const pagos = await servicioPagos.todoslospagos({

        })
        console.log(pagos)
        setpagos(pagos)
    }
  

    const aprobar =async (id)  => {
        const auxiliarr = {id}
        await servicioPagos.aprobarpago(auxiliarr)
      //  setOpen(false)
      window.location.reload(true);
   
     // window.location.reload(true)
     }


    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
        return (
          <>
           
            <BotonRechazo 
             id= {pagos[dataIndex].id} 
            />
            <CheckIcon style={{ cursor: "pointer" }} 
            onClick={() =>  {aprobar(pagos[dataIndex].id) 
           /*  navigate('/usuario2/detallecliente/'+pendientes[dataIndex].id) */}  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
          </>
        );
      }
      //Styles de la tabla
      const StyledTable = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            backgroundColor: "#f5f5f5",
          }
        }
      }
    });
    // definimos las columnas

    function estado(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {pagos[dataIndex].estado === 'P' ? 'Pendiente'  : <div>{pagos[dataIndex].estado === 'A' ? 'Aprobado'  : <div> {pagos[dataIndex].estado} </div>}</div>}

            </>
        );
    }
    const columns = [
     
        {
            name: "mes",
            label: "Mes",
        },
        {
            name: "anio",
            label: "Año",
        },
        {
            name: "fecha",
            label: "fecha de pago",
        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "Nombre",
            label: "nombre",

        },
        {
            name: "Estado",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                estado(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },  
        {
            name: "monto",
            label: "Monto",
            
        },
        {
            name: "monto_distinto",
            label: "Monto distinto",
            
        },
        {
            name: "ingresos",
            label: "Ingresos declarados",
            actions: { onClick: (event, rowData) => alert(rowData) }
        },
       
        {
            name: "Descarga",
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
        const filename = (pagos[index].ubicacion)
      
       
       const link = await serviciousuario1.obtenerurl(filename)

        console.log(link.data)            
        window.open(link.data)
  
     
    }
    function downloadFile(index, rowIndex, data) {

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
        return (
            <>
                
                  <Button
                        onClick={() => download(index)}
                    >Descargar</Button> 
    
    
            </>
        );
    }

// renderiza la data table
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
    

    <div>
        <ThemeProvider theme={StyledTable()}>
        <MUIDataTable 
            title={"Lista de pagos "}
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
        </ThemeProvider>
    </div>
)
}

export default PagosInusuales;