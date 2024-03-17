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
              identificacion={clients[0][dataIndex]['id']}
              
            

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
            name: "identificacion",
            label: "identificacion",


        },
        {
            name: "numero",
            label: "CBU",

        },
  
   
        {
            name: "estado",
            label: "Estado",
        },
        {
            name: "cuil_cuit",
            label: "cuil_cuit",
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