import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';

import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const Constancias = (props) => {
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
       
        <>
        < Tooltip> 
    <h2>Constancias </h2>
    
     </Tooltip> 
    <br/>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: "20%",maxWidth: "1000%"}} aria-label="customized table"  size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>TIPO</StyledTableCell>
            <StyledTableCell align="right">ESTADO</StyledTableCell>   
            <StyledTableCell align="right">DESCARGAR</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {cosntancias.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              {row.tipo}
              </StyledTableCell>
          
             
              <StyledTableCell align="right">{row.estado}</StyledTableCell>
              <StyledTableCell align="right"> <Button
                    onClick={() => download(index)}
                >   Descargar</Button>  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </>
    </div>
)
}
export default Constancias