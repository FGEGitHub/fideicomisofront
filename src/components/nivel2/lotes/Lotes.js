import { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import MUIDataTable from "mui-datatables";
import servicioClientes from '../../../services/lotes'
import { useNavigate } from "react-router-dom";


const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
 
    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
            <EditIcon
              onClick={() => onClick(data[dataIndex].id, dataIndex)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <SearchIcon style={{ cursor: "pointer" }} 
            onClick={() =>  navigate('/usuario2/detallecliente/'+clients[dataIndex].cuil_cuit)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
          </>
        );
      }

    const getClients = async () => {
        
     const  clients = await servicioClientes.lista({
      
      })
      setClients(clients)}

    useEffect(() => {
        getClients()
    }, [])
    
    // definimos las columnas
    const columns = [
        {
            name: "zona",
            label: "Zona",
        },
        {
            name: "fraccion",
            label: "Fraccion",
            
            
        },
        {
            name: "manzana",
            label: "Manzana",
            
        },
        {
            name: "lote",
            label: "Lote",
        },
        {
            name: "parcela",
            label: "Parcela",
        },
         {
            name: "nombre_razon",
            label: "Nombre/Razon",
        },
        {
            name: "cuil_cuit",
            label: "Cuil/Cuit",
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
    // renderiza la data table
            return (
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
                    />
            )
    }

    export default Lotes;