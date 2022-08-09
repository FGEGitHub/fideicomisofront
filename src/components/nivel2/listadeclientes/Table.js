import { useState, useEffect } from "react";
import servicioClientes from '../../../services/clientes'
import MUIDataTable from "mui-datatables";

import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
//import overbookingData from "./overbooking";

const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();


    

    const getClients = async () => {

        const clients = await servicioClientes.lista({

        })
        setClients(clients)
    }

    useEffect(() => {
        getClients()
    }, [])

    ///



    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
<<<<<<< HEAD
            <EditIcon
             onClick={() =>  navigate('/usuario2/modificarcliente/'+clients[dataIndex].cuil_cuit)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <SearchIcon style={{ cursor: "pointer" }} 
=======
          
               <  SearchIcon style={{ cursor: "pointer" }} 
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34
            onClick={() =>  navigate('/usuario2/detallecliente/'+clients[dataIndex].cuil_cuit)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
            <EditIcon
             onClick={() =>  navigate('/usuario2/modificarcliente/'+clients[dataIndex].cuil_cuit)}
              style={{ marginRight: "10px", cursor: "pointer" }}
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
            name: "Nombre",
            label: "Nombre",

        },
        {
            name: "razon",
            label: "Razon",
           
        },
        {
            name: "observaciones",
            label:"Observaciones",
           
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
            data={clients}
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

export default Lotes;