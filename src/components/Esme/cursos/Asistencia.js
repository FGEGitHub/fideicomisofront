import servicioEsme from '../../../services/esme'
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import Nuevo from './NuevaClase'

const TablaNotificaciones = (props) => {
    let params = useParams()
    let id = params.id
    const [clases, setClases] = useState([''])
    const [clase, setClase] = useState([])
    const [usuario, setUsuario] = useState([''])
    const navigate = useNavigate();
    useEffect(() => {
        traer()
       
     
     
      }, [])


    const traer = async () => {
        try {
     
            
              const lotes  = await servicioEsme.clases(id)
              setClases(lotes[0])
              setClase(lotes[1][0])
          
          
           
        } catch (error) {
            
        }
      
      




    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
            < EditIcon/>
         
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
            name: "fecha",
            label: "fecha",
        },
       
        {
            name: "tema",
            label:"tema",
           
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
        <>
        <Nuevo
    traer =  { async () => {
        const lotes  = await servicioEsme.clases(id)
              setClases(lotes[0])
              setClase([lotes[1][0]])
    }}
    clase={clase}
 
    />
    </>
   <h2>  {clase ? <>{clase.nombre}</>:<>etc</>}</h2>
   
        <MUIDataTable
        
            title={'Asistencia'}
            data={clases}
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