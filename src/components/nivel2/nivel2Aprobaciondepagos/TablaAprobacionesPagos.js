import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import servicioAprobacionesPagos from '../../../services/pagos'
import serviciousuario1 from '../../../services/usuario1'
import { useNavigate } from "react-router-dom";
import VerConstancias from './VerConstancias'
import Inconscistencia from './Inconscistencia'
import CargaDeTabla from "../../CargaDeTabla"
import BotonRechazo from './RechazoPago'
import BotonAprobacion from './AprobacionPago'
import Tooltip from '@material-ui/core/Tooltip';
//import overbookingData from "./overbooking";
import Button from "@mui/material/Button";
const TablaAprobaciones = () => {
    //configuracion de Hooks
    const [pendientes, setPendientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   


    const getPendientes = async () => {

        const pendientes = await servicioAprobacionesPagos.aprobaciones({

        })
        setPendientes(pendientes)
        setLoading(false);
    }

    const aprobar = async (id) => {

    await servicioAprobacionesPagos.aprobarpago(id)
    window.location.reload(true)
    }

    useEffect(() => {
        getPendientes()
    }, [])
  
    
//// Descarga
async function download(index, rowIndex, data) {
    const filename = (pendientes[index].ubicacion)
  
   
   const link = await serviciousuario1.obtenerurl(filename)
   console.log(link)
    console.log(link.data)            
    window.open(link.data)

}


function downloadFile(dataIndex, rowIndex, data) {

/* const filename = (products[index].key)
console.log(filename)
const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
console.log(link.data)
setAct(true) */
return (
    <>
         <  VerConstancias 
         id={pendientes[dataIndex].id} /> 
       


    </>
);
}
function CutomButtonsRendererr(dataIndex, rowIndex, data, onClick) {
     
    return (
      <>
       <p> ${pendientes[dataIndex].monto}  </p>
      
       
      </>
    );
  }
///inconsistencia
function Inconsistencia(dataIndex, rowIndex, data, onClick) {
     
    return (
      <>
        <Inconscistencia 
         monto_distinto= {pendientes[dataIndex].monto_distinto} 
         cuil_cuit_distinto= {pendientes[dataIndex].cuil_cuit_distinto}
         monto_inusual= {pendientes[dataIndex].monto_inusual}
         id= {pendientes[dataIndex].id}
        /> 
      
       
      </>
    );
  }
///Descarga

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
        return (
          <>
           
            <BotonRechazo 
             id= {pendientes[dataIndex].id} 
           
            />
           
            <Tooltip title="Aprobar" arrow>
            <BotonAprobacion
             id= {pendientes[dataIndex].id} 
             monto= {pendientes[dataIndex].monto}
            />
            </Tooltip>
          </>
        );
      }
    // definimos las columnas
    const columns = [
     
    
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
            name: "descripcion",
            label: "Estado",
        },
     
    
        {
            name: "monto_inusual",
            label: "Monto Inusual",
        },
        {
            name: "Inconscistencia",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    Inconsistencia(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },  
        {
            name: "Monto",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRendererr(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
    
        {
            name: "Ver Constancias",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                downloadFile(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        }, 
        {
            name: "Acciones",
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

        {loading ? <CargaDeTabla/> : <>
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
            </>}
    </div>
)
}

export default TablaAprobaciones;