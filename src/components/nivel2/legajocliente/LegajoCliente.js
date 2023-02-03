import React, { useEffect, useState, } from "react";

import Button from "@mui/material/Button";

import MUIDataTable from "mui-datatables";
import Container from '@mui/material/Container';
import servicioCliente from '../../../services/clientes'
import serviciousuario1 from '../../../services/usuario1'
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
  
  
  
      //2 - fcion para mostrar los datos con axios
      const endpoint = "http://localhost:4000/usuario1/all-files"
  
  
      const getData = async () => {
        const  data = await servicioCliente.traerLejagos(cuil_cuit)
             
              setProducts(data)
          
      }
      
      const volver =  () => {
        navigate('/usuario2/detallecliente/'+cuil_cuit)
             
              
          
      }
  
      useEffect(() => {
          getData()
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
           
            < Estadisticas
             cuil_cuit = {cuil_cuit}/>
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
         
             <Button onClick={volver} > Volver</Button>
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