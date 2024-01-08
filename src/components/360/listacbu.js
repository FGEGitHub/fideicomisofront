import { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import MUIDataTable from "mui-datatables";
import servicio360 from '../../services/pagos360'
import { useNavigate } from "react-router-dom";
import CargaDeTabla from "../CargaDeTabla"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Baja from './modalcancelaradesion'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



const Lotes = (props) => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
            <>
              <Baja
              identificacion={clients[0][dataIndex]['identificacion']}
              
            

              />
            </>
        );
    }

    const getClients = async () => {

        const clients = await servicio360.listacbus360(props.cuil_cuit)

        setClients(clients)
        setLoading(false);
    }

    useEffect(() => {
        getClients()
    }, [])

    // definimos las columnas
    const columns = [
       
        {
            name: "id",
            label: "id",
        },
        {
            name: "identificacion",
            label: "identificacion",


        },
        {
            name: "numero",
            label: "CBU",

        },
        {
            name: "estado",
            label: "estado",
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
            name: "nombre",
            label: "Persona",
        },

        /*   {
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
          
          },   */
          {
            name: "Ver/ir",
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
    const options = {
        selectableRows: false, // Deshabilita los checkboxes
      };
    return (
        <>
            {loading ? (<CargaDeTabla />)
                : (
                    <div>
                        <Stack spacing={2} sx={{ width: '100%' }}>

                            <Alert severity="info">Lotes: Total:{clients[0].length} Disponibles {clients[1]} ( Parque : {clients[2]}  -  IC3: {clients[3]} )</Alert>
                        </Stack>
                        <MUIDataTable

                            title={"Lista de CBUS"}
                            data={clients[0]}
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