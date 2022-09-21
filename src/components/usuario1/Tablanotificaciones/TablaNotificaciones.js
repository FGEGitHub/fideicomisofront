import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";

import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import ModalVer from "./ModalVer";
import ModalResponder from "./Respuesta";
const TablaNotificaciones = (props) => {
    const [noti, setNoti] = useState([''])
    const [usuario, setUsuario] = useState([''])
    const navigate = useNavigate();
    useEffect(() => {
        traer()
       
     
     
      }, [])


    const traer = async () => {
        try {
            const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
            if (loggedUserJSON) {
              const usuario = JSON.parse(loggedUserJSON)
              console.log(usuario.cuil_cuit)
              setUsuario(usuario)
              const lotes  = await servicioUsuario1.noticliente(usuario.cuil_cuit)
              setNoti(lotes)
            }
           
        } catch (error) {
            
        }
      
      




    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
            < ModalVer
            id = {noti[dataIndex].id}/>
             {  noti[dataIndex].asunto=='Solicitud de documentacion' ?   <  ModalResponder  id = {noti[dataIndex].id}   cuil_cuit = {noti[dataIndex].cuil_cuit}/> : <div> </div> }
           
         
            </div>
          </>
        );
      }
    // definimos las columnas
    const columns = [
        {
            name: "id",
            label: "ID",

        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
       
        {
            name: "descripcion",
            label:"descripcion",
           
        },
        {
            name: "leida",
            label:"leida",
           
        },
        {
            name: "asunto",
            label:"asunto",
           
        },
        {
            name: "Ver/Contestar",
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
    <div>
        <MUIDataTable
        
            title={"Notificaciones"}
            data={noti}
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
)
}
export default TablaNotificaciones