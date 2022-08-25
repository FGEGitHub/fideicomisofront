


import MenuUsuario4 from '../../../components/nivel4/Menuizq4'
import Widget from '../../../components/nivel4/EstadistivasRelev/Widget/Widget';
import Featured from '../../../components/nivel4/EstadistivasRelev/Featured/Featured'
import Chart from '../../../components/nivel4/EstadistivasRelev/Featured/Featured'
import Tabla from '../../../components/nivel4/EstadistivasRelev/Tabla/Tabla'
import ModalBorrar from '../../../components/nivel4/ModalBorrar/ModalBorrar'
import "./Home.scss";

import React, { useEffect, useState, } from "react";
import Box from '@mui/material/Box';

import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '@mui/material';
import servicioRelevamiento from '../../../services/relevamiento'

import { useNavigate } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@mui/icons-material/Delete';




export default function Legajos() {

  const [barrio, setBarrio] = useState(
    { barrio: "La Tosquera" });
  const [datos, setDatos] = useState(null);
  const [historial, setHistorial] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    buscar()

  }, [])

  const handleChange = (e) => {

    setBarrio({ ...barrio, [e.target.name]: e.target.value })
  }



  const borrar = (e) => {

  console.log(e)
  }

  const buscar = async () => {

    const datoss = await servicioRelevamiento.buscar(barrio)
    setDatos(datoss)
    setHistorial(datos[2])

  };

  const columns = [
    {
      name: "Familia",
      label: "Familia",

  },
    {
        name: "Zona",
        label: "Zona",

    },
    {
        name: "Status",
        label: "Status",
    },
    {
        name: "Material_Construccion",
        label: "Material",

    },
   
    
    {
        name: "Actions",
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


];



function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
  return (
    <>
      <EditIcon
        onClick={() => onClick(data[dataIndex].id, dataIndex)}
        style={{ marginRight: "10px", cursor: "pointer" }}
      />
      <DeleteIcon style={{ cursor: "pointer" }} 
       onClick={() => {  borrar() } }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
      />
    </>
  );
}

  return (
    <MenuUsuario4>
  
      <div>
 
      <h4>Elegir barrio</h4>
  
        <Box sx={{ minWidth: 120 }}>
          <NativeSelect
            defaultValue={30}
            onChange={handleChange}
            inputProps={{
              name: 'barrio',
              id: 'uncontrolled-native',

            }}
          >  
            <option value={'La Tosquera'}>La Tosquera</option>
            <option value={'Otra'}>Otro</option>

          </NativeSelect>
        </Box>
      
        <Button onClick={buscar}>Buscar</Button>
      </div> 
       < ModalBorrar/>





      {datos ?
        <div>
          <div className="home">

            <div className="container">

              <div className="widgets">
              {datos ?
                  <div>
                    <Widget type="familias"
                       cantidad={datos[0].familias} 
                      />
                  </div> : <div> <Widget type="familias"
                  /></div>
                }
               
                {datos ?
                  <div>
                    <Widget type="condenuncia"
                       cantidad={datos[0].cdenuncia } 
                       porcentaje={datos[0].porcDenuncia}
                      />
                  </div> : <div> <Widget type="condenuncia"
                  /></div>
                }
                  {datos ?
                  <div>
                    <Widget type="sindenuncua"
                       cantidad={datos[0].SinDenuncia} 
                       porcentaje={datos[0].porcSDenuncia}
                      />
                  </div> : <div> <Widget type="SinDenuncia"
                  /></div>
                }
                {datos ?
                  <div>
                    <Widget type="enproceso"
                       cantidad={datos[0].EnProceso} 
                       porcentaje={datos[0].porcEnProceso}
                       
                      />
                  </div> : <div> <Widget type="EnProceso"
                  /></div>
                }
               
              
              </div>
              <div className="charts">
              {datos ?
                  <div>
                    <Featured 
                     porcentaje={datos[0].porcDenuncia}
                     titulo="Con Denuncia"
                     
                    />
                    </div> : <div><Featured /> </div> }
                
                    {datos ?
                  <div>
                    <Featured 
                     porcentaje={datos[0].porcSDenuncia}
                     titulo="Sin denuncia"
                    />
                    </div> : <div><Featured /> </div> }
                    {datos ?
                  <div>
                    <Featured 
                     porcentaje={datos[0].porcEnProceso}
                     titulo="En proceso"
                    />
                    </div> : <div><Featured /> </div> }

       
              </div>
              <div className="listContainer">
                <div className="listTitle">Edades </div>
                <Tabla
                datos= {datos[1]} />
              </div>
            </div>
          </div>


        </div>

        : <div></div>}

<div>
        <MUIDataTable
        
            title={"Relevamiento completo detallado"}
            data={historial}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
          


        />
    </div>
    </MenuUsuario4>
  );

}

