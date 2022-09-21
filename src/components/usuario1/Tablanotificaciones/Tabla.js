import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ModalVer from "./ModalVer";
import ModalResponder from "./Respuesta";


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
  











const Tabla = (props) => {
    const [noti, setNoti] = useState([''])
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
              const lotes  = await servicioUsuario1.noticliente(usuario.cuil_cuit)
              setNoti(lotes)
            }
           
        } catch (error) {
            
        }
      
      




    }

  






return (
    <div>
    <br/>  <br/> <br/> <br/> 
    < Tooltip> 
    <h2>Notificaciones </h2>
    
     </Tooltip> 
    <br/>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: "20%",maxWidth: "1000%"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Asunto</StyledTableCell>
            <StyledTableCell align="right">Descripcion</StyledTableCell>
            <StyledTableCell align="right">Leida</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {noti.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.asunto}
              </StyledTableCell>
          
              <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
              <StyledTableCell align="right">{row.leida}</StyledTableCell>
              <StyledTableCell align="right">   < ModalVer id = {row.id}/> {  row.asunto=='Letra no clara' ?   <  ModalResponder id = {row.id}  cuil_cuit = {usuario.cuil_cuit}/> : <div> </div> } </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
)
}
export default Tabla