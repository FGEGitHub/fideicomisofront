import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import servicioPagos from '../../../services/pagos'
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
//import overbookingData from "./overbooking";
import BotonRechazo from './RechazoPagoInusual'
import BotonAprobado from './AprobacionPagoInusual'
import CheckIcon from '@mui/icons-material/Check';

const PagosInusuales = () => {
    //configuracion de Hooks
    const [pagos, setpagos] = useState([]);
    const navigate = useNavigate();


    

    

    useEffect(() => {
        getPagosi()
    }, [])

    ///

    

const getPagosi = async () => {
        console.log('getPagosi')
        const pagos = await servicioPagos.pagosinusuales({

        })
        console.log(pagos)
        setpagos(pagos)
    }
    const aprobar = async () => {

      console.log('definir')
    }
    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
        return (
          <>
           
            <BotonRechazo 
             id= {pagos[dataIndex].id} 
            />
            <CheckIcon style={{ cursor: "pointer" }} 
            onClick={() =>  {aprobar(pagos[dataIndex].id) 
           /*  navigate('/usuario2/detallecliente/'+pendientes[dataIndex].id) */}  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
          </>
        );
      }
      //Styles de la tabla
      const StyledTable = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            backgroundColor: "#f5f5f5",
          }
        }
      }
    });
    // definimos las columnas
    const columns = [
     
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "Nombre",
            label: "nombre",

        },
        {
            name: "monto",
            label: "Monto",
            
        },
        {
            name: "ingresos",
            label: "Ingresos declarados",
            actions: { onClick: (event, rowData) => alert(rowData) }
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
        <ThemeProvider theme={StyledTable()}>
        <MUIDataTable 
            title={"Lista de pagos inusuales"}
            data={pagos}
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
        </ThemeProvider>
    </div>
)
}

export default PagosInusuales;