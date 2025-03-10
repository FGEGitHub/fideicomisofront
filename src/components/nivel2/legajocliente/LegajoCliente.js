import React, { useEffect, useState, } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import MUIDataTable from "mui-datatables";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import servicioCliente from '../../../services/clientes'
import serviciousuario1 from '../../../services/usuario1'
import serviciousuarios from '../../../services/usuarios'
import "../../profile.css";
import Modalveronline from './Modalveronline'
import Modalveronlinecbu from '../pagarcuota/verpdfcbu'
import ModalLegajo from './Modalegajo'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import Habilitar from './ModalHabiulitar'
import Deshabilitar from './ModalDeshabilitar'
import Estadisticas from './Estadisticas'
import ModalSeguro from './Modalseguroborrar'


const LegajoCliente = (props) => {
  const navigate = useNavigate();

  let params = useParams()
  let cuil_cuit = params.cuil_cuit
      const [products, setProducts] = useState()
      const [act, setAct] = useState(false)
      const [user, setUser] = useState(null)
      const [cargado, setCargado] = useState(false)
      const [refreshStats, setRefreshStats] = useState(false); // Estado para manejar las actualizaciones de estadísticas
      const [loadingPdf, setLoadingPdf] = useState(false); 
      const actualizarEstadisticas = () => {
        setRefreshStats(prev => !prev); // Cambiar el estado para forzar la actualización
      };
      //2 - fcion para mostrar los datos con axios
      const traer = async () => {

        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      
          const user = JSON.parse(loggedUserJSON)
         
        const notis = await serviciousuarios.traerusuario(user.cuil_cuit)
       
        setUser(notis[0])
        setCargado(true)
      
      
        /* if (notificaciones>0) {
          document.title= 'Santa Catalina ('+notificaciones+')'
       
        }   */
      }
      
  
      const getData = async () => {
        const  data = await servicioCliente.traerLejagos(cuil_cuit)
        
          
              setProducts(data)
          
      }
      
      const volver =  () => {
        navigate('/usuario2/detallecliente/'+cuil_cuit)
             
              
          
      }
      const volver2 =  () => {
        navigate('/legales/detallecliente/'+cuil_cuit)
             
      }

      
   
      const volver3 =  () => {
        navigate('/usuario2/detalleclic3/'+cuil_cuit)
             
              
          
      }

      useEffect(() => {
          getData()
          traer()
      }, [])
  

  
      const download = async (index) => {
        setLoadingPdf(true); // Activar pantalla de carga
        try {
          const filename = products[0][index].ubicacion;
          const link = await serviciousuario1.obtenerurl(filename);
          window.open(link.data);
        } catch (error) {
          console.error("Error al obtener el PDF", error);
        }
        setLoadingPdf(false); // Desactivar pantalla de carga
      };
  
          async function veronline(index, rowIndex, data) {
            const filename = (products[0][index].ubicacion)
    
    
            const link = await serviciousuario1.obtenerurlonline(filename)
            console.log(link.data)
            window.open(link.data)
            
           // var nueva_ventana = window.open('', '_blank');
           // nueva_ventana.document.write('<html><head><title>Imagen de AWS</title></head><body style="text-align:center;"><img src="' + link.data + '" /></body></html>');
        } 
        function verFile(index) {
          return (
            <>
              {products[0][index].lazo !== undefined ? (
                <Modalveronlinecbu id={products[0][index].id} />
              ) : (
                <Modalveronline id={products[0][index].id} />
              )}
            </>
          );
        }
      
    
        function downloadFile(index) {
          return (
            <Button onClick={() => download(index)} variant="contained" color="primary">
              Descargar
            </Button>
          );
        }
  
  
  
      //3 - Definimos las columns
      const columns = [
          {
              name: "tipo",
              label: "tipo"
  
          },
          {
              name: "descripcion",
              label: "descripcion"
          },
          {
            name: "fecha",
            label: "fecha"
        },
          {
            name: "estado",
            label: "estado"
        },
        {
          name: "ve online",
          options: {
              customBodyRenderLite: (dataIndex, rowIndex) =>
                  verFile(
                      dataIndex,
                      rowIndex,
                      // overbookingData,
                      // handleEditOpen
                  )
          }

      },
         
          {
            name: "Borrar",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
 
          
      ]

      function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
            < ModalSeguro
            id = {products[0][dataIndex].id}
            getData = { async () => {
              const  data = await servicioCliente.traerLejagos(cuil_cuit)
                   
                    setProducts(data)
                }} />
            
          
            </div>
          </>
        );
      }
      
      const optionss = {
    
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
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 15],
        downloadOptions: { filename: 'tableDownload.csv', separator: ',' },
        print: true,
        filter: true,
        viewColumns: true,
        pagination: true,

        textLabels: {
          body: {
            noMatch: "No se encontraron registros de debito automatico",
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
      //4 - renderizamos la datatable
      return (
          <div>
           
           {user ?
            <>
           {user.nivel ===2 ? <> 
             {props.cuil_cuit &&  
            <Estadisticas cuil_cuit={props.cuil_cuit} refresh={refreshStats} />  }
             {products && <></>}
  {products[1][0].zona=="IC3" ? <><Button onClick={volver3} > <ArrowBackIcon/> Volver</Button></>:<><Button onClick={volver} > <ArrowBackIcon/> Volver</Button></>}

          

             

             </> : <>
             <Button onClick={volver2} > <ArrowBackIcon/>  Volver</Button>
             <div    ></div></>}
           </>
             :<></>
             }<ButtonGroup variant="contained" aria-label="outlined primary button group">
{products ? <>
  < ModalLegajo
             razon={products[1][0].razon}
             tiposExistentes={products[0].map((legajo) => legajo.tipo)} // Asegúrate de que esta línea capture los tipos correctamente

                getData = {async () => {
                  console.log("get")
                  const  data = await servicioCliente.traerLejagos(cuil_cuit)
                       
                        setProducts(data)
                    
                }
                }
                getData2={actualizarEstadisticas}  
              />
</>:<></>}

            
              {products ? <>
              {products[1][0].habilitado=="Si" ? <>
              <Deshabilitar
             cuil_cuit_user= {props.cuil_cuit_user}
             getData= {async () => {
              const  data = await servicioCliente.traerLejagos(cuil_cuit)
                  
                    setProducts(data)
                
            }} />
              </>:<>
              <Habilitar 
              cuil_cuit_user= {props.cuil_cuit_user} 
              getData= {async () => {
                const  data = await servicioCliente.traerLejagos(cuil_cuit)
            
                      setProducts(data)
                  
              }}/>
              </>}
              
              
              </>:<></>}
          
         
          </ButtonGroup>
             <div    >
             {products ? <>
              <div>
      <Backdrop open={loadingPdf} style={{ color: "#fff", zIndex: 1301 }}>
        <div style={{ textAlign: "center" }}>
          <CircularProgress color="inherit" />
          <p>Cargando...</p>
        </div>
      </Backdrop>

      {cargado && user ? (
        <>
          <MUIDataTable title="Documentación del Cliente" data={products?.[0] || []} columns={columns} />
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
              </>:<></>}
  
                 </div>
                
          </div>
      )
}

export default LegajoCliente;