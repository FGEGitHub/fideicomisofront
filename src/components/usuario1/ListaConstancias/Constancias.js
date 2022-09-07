import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';


const TablaNotificaciones = (props) => {
    const [cosntancias, setConstancias] = useState([''])
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
              const con  = await servicioUsuario1.constancias(usuario.cuil_cuit)
              setConstancias(con)
            }
           
        } catch (error) {
            
        }
      
      




    }
    async function download(index, rowIndex, data) {
        const filename = (cosntancias[index].ubicacion)
      
       
       const link = await servicioUsuario1.obtenerurl(filename)
       console.log(link)
        console.log(link.data)            
        window.open(link.data)
  
    

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
    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
          
            <Tooltip title="Responder">
            <ForwardToInboxTwoToneIcon style={{ cursor: "pointer" }} 
            onClick={() =>  navigate('/usuario/respuesta/'+cosntancias[dataIndex].id)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
            </Tooltip>
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
            name: "tipo",
            label: "tipo",
        },
       
        {
            name: "estado",
            label:"estado",
           
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
        
            title={"Cosntancias"}
            data={cosntancias}
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