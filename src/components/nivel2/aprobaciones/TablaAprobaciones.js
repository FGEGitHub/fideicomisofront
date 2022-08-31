import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import servicioAprobaciones from '../../../services/Aprobaciones'
import serviciousuario1 from '../../../services/usuario1'
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CheckIcon from '@mui/icons-material/Check';
import BotonRechazo from './RechazoConstancia'
//import overbookingData from "./overbooking";
import Button from "@mui/material/Button";

const TablaAprobaciones = () => {
    //configuracion de Hooks
    const [pendientes, setPendientes] = useState([]);
    const [act, setAct] = useState(false)
    const navigate = useNavigate();


    

    const getPendientes = async () => {

        const pendientes = await servicioAprobaciones.lista({

        })
        setPendientes(pendientes)
    }

    const aprobar = async (id) => {

    await servicioAprobaciones.aprobacion(id)
    window.location.reload(true)
    }

    useEffect(() => {
        getPendientes()
    }, [])

    ///

    async function download(index, rowIndex, data) {
        const filename = (pendientes[index].ubicacion)
      
       
       const link = await serviciousuario1.obtenerurl(filename)
       console.log(link)
        console.log(link.data)            
        window.open(link.data)
  
        setAct(true)

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
                >Boton</Button> 


        </>
    );
}


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
            name: "tipo",
            label: "Tipo",

        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "ubicacion",
            label: "Descripcion",

        },
        {
            name: "estado",
            label: "Estado",
            actions: { onClick: (event, rowData) => alert(rowData) }
        },
        {
            name: "Actions",
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