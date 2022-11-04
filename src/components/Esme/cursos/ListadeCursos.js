import { useState, useEffect } from "react";

import servicioEsme from '../../../services/esme'
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import CargaDeTabla from "../../CargaDeTabla"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Nuevo from './NuevoCurso'
import PageviewIcon from '@mui/icons-material/Pageview';
const TablaCursos = () => {
    //configuracion de Hooks
    const navigate = useNavigate();
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   


    const getPendientes = async () => {

        const curs = await servicioEsme.listaCursos({

        })
        setCursos(curs)
        setLoading(false);
    }

    

    useEffect(() => {
        getPendientes()
    }, [])
  
    

    function downloadFile(index, rowIndex, data) {

        return (
          <>
            <Tooltip title="Ir al curso" arrow>
              <PageviewIcon
                onClick={() => navigate('/esme/curso/'+cursos[index].id)}
              />
    
            </Tooltip>
          </>
        );
      }





    // definimos las columnas
   

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
     getClients =  { async () => {
        const clients = await servicioEsme.listaCursos({
        })
        setCursos(clients)
    }}
    
    />
            </>
        {loading ? <CargaDeTabla/> : <>
        <h3>Lista de constancias</h3>
              <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                    <TableCell align="left">id</TableCell>
                      <TableCell align="left">Nombre</TableCell>
                      <TableCell align="left">Otro</TableCell>
                      <TableCell align="left">Ver</TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cursos.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="left">{row.nombre}</TableCell>
                        <TableCell align="left">{row.otro === undefined ? row.otro : row.otro}</TableCell>
                        <TableCell align="left">  {downloadFile(index)} </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>}
    </div>
)
}

export default TablaCursos;