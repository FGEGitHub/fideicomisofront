import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";

import MUIDataTable from "mui-datatables";

import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
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
              console.log(usuario)
              setUsuario(usuario)
        
            }
            const lotes  = await servicioUsuario1.noticliente(usuario.cuil_cuit)
            setNoti(lotes)
        } catch (error) {
            
        }
      
      




    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
            <EditIcon
              onClick={() => onClick(data[dataIndex].id, dataIndex)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <SearchIcon style={{ cursor: "pointer" }} 
            onClick={() =>  navigate('/usuario2/respuesta/'+noti[dataIndex].cuil_cuit)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
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
        
            title={"Lista de Clientes"}
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