import { useState, useEffect } from "react";
import servicioClientes from '../../../services/clientes'
import MUIDataTable from "mui-datatables";
import Nuevo from './ClienteNuevo'
import CargaDeTabla from "../../CargaDeTabla"
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Button } from "@mui/material";

//import overbookingData from "./overbooking";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    

    const getClients = async () => {
        
        const clients = await servicioClientes.lista2({

        })
        setClients(clients)
        setLoading(false);
    }

    useEffect(() => {
        getClients()
    }, [])

    ///
//opcionde click en el nombre
    function CutomButtonsRenderere(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
       
           <p  onClick={() =>  navigate('/legales/detallecliente/'+clients[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{clients[dataIndex].Nombre}</p>
          
          </>
        );
      }
      //
      
      function CutomButtonsRendervencida(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
          {clients[dataIndex].cuil_cuit ? <><p style={{ color: 'crimson' }} >Si</p></>:<><p style={{ color: 'crimson' }} >No</p></>}
         
          
          </>
        );
      }

      function CutomButtonsRendercuil(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
       
           <p  onClick={() =>  navigate('/legales/detallecliente/'+clients[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{clients[dataIndex].cuil_cuit}</p>
          
          </>
        );
      }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
            <Button ><SearchIcon
             onClick={() =>  navigate('/legales/detallecliente/'+clients[dataIndex].cuil_cuit)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            /></Button> 
           
          </>
        );
      }
    // definimos las columnas
    const columns = [
        {
            name: "Nombre",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderere(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        }, 
 
           {
            name: "cuil_cuit",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                  CutomButtonsRendercuil(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
        {
            name: "Cuota del mes vencida?",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                  CutomButtonsRendervencida(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },
        {
          name: "cantidad_venc",
          label:"Cuotas vencidas",
         
      },
    
  
        {
            name: "cantidad_falt",
            label:"Cuotas faltantes",
           
        },
        {
            name: "Ver",
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

const options = {

    /*    rowsPerPage: 10,
       download: false, // hide csv download option
       onTableInit: this.handleTableInit,
       onTableChange: this.handleTableChange, */
};
// renderiza la data table
return (
    <>
    {loading ? (<CargaDeTabla/>)
        :(
    <div>
            <Stack spacing={2} sx={{ width: '100%' }}>
 
 <Alert severity="info">Cantidad de clientes: {clients.length}</Alert>
    </Stack>
    <br/>
    <Nuevo
    getClients =  { async () => {
        const clients = await servicioClientes.lista2({
        })
        setClients(clients)
    }}
    />
        <MUIDataTable
        
            title={"Lista de Clientes"}
            data={clients}
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
    </div>
    )}
    </>


)
}

export default Lotes;