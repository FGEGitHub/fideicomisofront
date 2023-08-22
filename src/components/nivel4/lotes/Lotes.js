import { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import MUIDataTable from "mui-datatables";
import servicioLotes from '../../../services/lotes'
import { useNavigate } from "react-router-dom";
import CargaDeTabla from "../../CargaDeTabla"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Nuevo from './nuevo'
import Nuevamanzana from './nuevamanzana'
import Modificar from "./modificar"
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {    console.log(clients[0][dataIndex].id)
        return (
        
            <>
                <Modificar 
                id = {clients[0][dataIndex].id}
                fraccion = {clients[0][dataIndex].fraccion}
                manzana = {clients[0][dataIndex].manzana}
                parcela = {clients[0][dataIndex].parcela}
                adrema = {clients[0][dataIndex].adrema}
                getClients = {async () => {

                    const clients = await servicioLotes.lista2({
            
                    })
            
                    setClients(clients)
                    setLoading(false);
                }}
                />
            </>
        );
    }

    const getClients = async () => {

        const clients = await servicioLotes.lista2({

        })

        setClients(clients)
        setLoading(false);
    }

    useEffect(() => {
        getClients()
    }, [])

    // definimos las columnas
    const columns = [
        {
            name: "zona",
            label: "Zona",
        },
        {
            name: "adrema",
            label: "adrema",


        },
        {
            name: "manzana",
            label: "Manzana",

        },
     
        {
            name: "parcela",
            label: "Parcela",
        },
        {
            name: "superficie",
            label: "superficie",
        },
        {
            name: "estado",
            label: "Estado",
        },
        {
            name: "cuil_cuit",
            label: "cuil_cuit",
        },

  {
              name: "Modificar",
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
    // renderiza la data table
    return (
        <>
        <Nuevamanzana/>
            <Nuevo
                getClients={async () => {

                    const clients = await servicioLotes.lista2({

                    })

                    setClients(clients)
                    setLoading(false);
                }
                }
            />
            {loading ? (<CargaDeTabla />)
                : (
                    <div>
                        <Stack spacing={2} sx={{ width: '100%' }}>

                            <Alert severity="info">Lotes: Total:{clients[0].length} Disponibles {clients[1]} </Alert>
                        </Stack>
                        <MUIDataTable

                            title={"Lista de lotes"}
                            data={clients[0]}
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
                )}
        </>


    )
}

export default Lotes;