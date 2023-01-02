import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import servicioPagos from '../../../services/pagos'
import { useNavigate } from "react-router-dom";
//import overbookingData from "./overbooking";
import BotonRechazo from './RechazoPagoInusual'
import BotonAprobado from './AprobacionPagoInusual'
import CheckIcon from '@mui/icons-material/Check';
import serviciousuario1 from '../../../services/usuario1'
import Button from "@mui/material/Button";
import VerConstancias from "../../nivel2/nivel2Aprobaciondepagos/VerConstancias";

const PagosInusuales = () => {
    //configuracion de Hooks
    const [pagos, setpagos] = useState([]);
   
    const navigate = useNavigate();


    

    

    useEffect(() => {
        getPagosi()
    }, [])

    ///

    

const getPagosi = async () => {
        
        const pagos = await servicioPagos.pagosinusuales({

        })
        console.log(pagos)
        setpagos(pagos)
    }
  

    const aprobar =async (id)  => {
        const auxiliarr = {id}
        await servicioPagos.aprobarpago(auxiliarr)
      //  setOpen(false)
      window.location.reload(true);
   
     // window.location.reload(true)
     }


    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
     
        return (
          <>
           
            <BotonRechazo 
             id= {pagos[dataIndex].id} 
            />
            <BotonAprobado  id= {pagos[dataIndex].id} 
            monto= {pagos[dataIndex].monto} 
           
            />
          </>
        );
      }

      function CutomButtonsRenderere(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
       
           <p  onClick={() =>  navigate('/usuario2/detallecliente/'+pagos[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{pagos[dataIndex].Nombre}</p>
          
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
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderere(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
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
        {
            name: "Descarga",
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
    async function download(index, rowIndex, data) {
        const filename = (pagos[index].ubicacion)
      
       
       const link = await serviciousuario1.obtenerurl(filename)

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
                    >Descargar</Button> 
    
    
            </>
        );
    }
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