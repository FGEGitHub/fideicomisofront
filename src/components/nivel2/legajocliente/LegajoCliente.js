import React, { useEffect, useState, } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import MUIDataTable from "mui-datatables";
import Container from '@mui/material/Container';
import servicioCliente from '../../../services/clientes'
import serviciousuario1 from '../../../services/usuario1'
import serviciousuarios from '../../../services/usuarios'
import "../../profile.css";
import { Box } from "@mui/system";
import ModalLegajo from './Modalegajo'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import Habilitar from './ModalHabiulitar'
import Deshabilitar from './ModalDeshabilitar'
import Estadisticas from './Estadisticas'
import ModalSeguro from './Modalseguroborrar'


const LegajoCliente = (props) => {
  const navigate = useNavigate();
  const [legajos, setLegajos] = useState([])
  const [file, setFile] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [address, setAddress] = useState(null);
  const [editMode, setEditMode] = useState(false);
  let params = useParams()
  let cuil_cuit = params.cuil_cuit
      const [products, setProducts] = useState([])
      const [act, setAct] = useState(false)
      const [user, setUser] = useState(null)
      const [cargado, setCargado] = useState(false)
  
      //2 - fcion para mostrar los datos con axios
      const endpoint = "http://localhost:4000/usuario1/all-files"
      const traer = async () => {

        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      
          const user = JSON.parse(loggedUserJSON)
         
        const notis = await serviciousuarios.traerusuario(user.cuil_cuit)
       
       console.log(notis[0])
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
      useEffect(() => {
          getData()
          traer()
      }, [])
  
  
      /* const downloadFile = async (index) => {
          const filename = (products[index].key)
      
          const link = await axios.get(`http://localhost:8080/get-object-url/`+filename).then(res => {
              
          } */
  
          async function download(index, rowIndex, data) {
              const filename = (products[index].ubicacion)
            
             
             const link = await serviciousuario1.obtenerurl(filename)
             console.log(link)
              console.log(link.data)            
              window.open(link.data)
        
              setAct(true)
  
          }
  
          async function veronline(index, rowIndex, data) {
            const filename = (products[index].ubicacion)
    
    
            const link = await serviciousuario1.obtenerurlonline(filename)
            console.log(link.data)
            window.open(link.data)
            
           // var nueva_ventana = window.open('', '_blank');
           // nueva_ventana.document.write('<html><head><title>Imagen de AWS</title></head><body style="text-align:center;"><img src="' + link.data + '" /></body></html>');
        } 
     function verFile(index, rowIndex, data) {
    
            /* const filename = (products[index].key)
            console.log(filename)
            const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
            console.log(link.data)
            setAct(true) */
            return (
                <>
    
                    <Button
                        onClick={() => veronline(index)}
                    >Ve online</Button>
    
    
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
                  
                    <Button
                          onClick={() => download(index)}
                      >   Descargar</Button> 
  
  
              </>
          );
      }
  
  
  
  
  
  
      //3 - Definimos las columns
      const columns = [
          {
              name: "tipo",
              label: "tipo"
  
          },
          {
              name: "cuil_cuit",
              label: "cuil_cuit"
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
              name: "descargar",
              options: {
                  customBodyRenderLite: (index, getData, rowindex) =>
                      downloadFile(
                          index,
                          rowindex,
                          getData,
                          // overbookingData,
                          // handleEditOpen
                      )
              },
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
            id = {products[dataIndex].id}
            getData = { async () => {
              const  data = await servicioCliente.traerLejagos(cuil_cuit)
                   
                    setProducts(data)
                }} />
            
          
            </div>
          </>
        );
      }
      //4 - renderizamos la datatable
      return (
          <div>
             <ButtonGroup variant="contained" aria-label="outlined primary button group">
           {user ?
            <>
           {user.nivel ===2 ? <> 

           < Estadisticas
             cuil_cuit = {cuil_cuit}/> 

<Button onClick={volver} > <ArrowBackIcon/> Volver</Button>
             <div    ></div>

             

             </> : <>
             <Button onClick={volver2} > <ArrowBackIcon/>  Volver</Button>
             <div    ></div></>}
           </>
             :<></>
             }
             < ModalLegajo
                getData = { async () => {
                  const  data = await servicioCliente.traerLejagos(cuil_cuit)
                       
                        setProducts(data)
                    }} 
              />
             <Habilitar 
              cuil_cuit_user= {props.cuil_cuit_user} />
             <Deshabilitar
             cuil_cuit_user= {props.cuil_cuit_user} />
          </ButtonGroup>
             <div    >
            
              <MUIDataTable
                  title={"Documentacion del Cliente"}
                  data={products}
                  columns={columns}
              />
              
  
                 </div>
                
          </div>
      )
}

export default LegajoCliente;