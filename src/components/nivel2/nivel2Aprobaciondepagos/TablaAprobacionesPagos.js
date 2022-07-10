import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import servicioAprobacionesPagos from '../../../services/pagos'
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CheckIcon from '@mui/icons-material/Check';
import BotonRechazo from './RechazoPago'
//import overbookingData from "./overbooking";

const TablaAprobaciones = () => {
    //configuracion de Hooks
    const [pendientes, setPendientes] = useState([]);
    const navigate = useNavigate();


    

    const getPendientes = async () => {

        const pendientes = await servicioAprobacionesPagos.aprobaciones({

        })
        setPendientes(pendientes)
    }

    const aprobar = async (id) => {

    await servicioAprobacionesPagos.aprobarpago(id)
    window.location.reload(true)
    }

    useEffect(() => {
        getPendientes()
    }, [])
  
    



    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
        return (
          <>
           
            <BotonRechazo 
             id= {pendientes[dataIndex].id} 
            
            />
            <CheckIcon style={{ cursor: "pointer" }} 
            onClick={() =>  {aprobar(pendientes[dataIndex].id) 
           /*  navigate('/usuario2/detallecliente/'+pendientes[dataIndex].id) */}  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
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
            name: "mes",
            label: "Mes",

        },
        {
            name: "anio",
            label: "Año",
           
        },
            {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "monto",
            label: "Monto",
        },
        {
            name: "descripcion",
            label: "Estado",
        },
        {
            name: "cuil_cuit_distinto",
            label: "Cuil/Cuit Distinto",
        },
        {
            name: "monto_distinto",
            label: "Monto Distinto",
        },
        {
            name: "monto_inusual",
            label: "Monto Inusual",
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
            title={"Lista de aprobaciones pendientes"}
            data={pendientes}
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

export default TablaAprobaciones;