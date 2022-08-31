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
                      >Boton</Button> 
  
  
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
            name: "descripcion",
            label: "descripcion"
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
          }
      ]
      //4 - renderizamos la datatable
      return (
          <div>
             <  ModalLegajo />
              <MUIDataTable
                  title={"Documentacion del Cliente"}
                  data={products}
                  columns={columns}
              />
  
  
  
          </div>
      )
}

export default LegajoCliente;