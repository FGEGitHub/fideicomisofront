import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import serviciousuario1 from '../../../services/usuario1'
import Tooltip from '@material-ui/core/Tooltip';
import React, { useEffect, useState, Fragment } from "react";
import DownloadIcon from '@mui/icons-material/Download';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function VerConstancias(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [constancias, setConstancias] = useState([])
  const [activo, setActivo] = useState(false)




  const traer = async () => {
      console.log(props.id)
    const not = await serviciousuario1.constanciasdelpago(props.id)

    setConstancias(not)

    setActivo(true)



  }





  const handleClickOpen = () => {
    setOpen(true);
    traer()
  };

  const handleClose = () => {
    setOpen(false);
  };


  async function download(index, rowIndex, data) {
    const filename = (constancias[index].ubicacion)


    const link = await serviciousuario1.obtenerurl(filename)

    window.open(link.data)


  }


  function downloadFile(index, rowIndex, data) {

    return (
      <>
        <Tooltip title="Descargar" arrow>
          <DownloadIcon
            onClick={() => download(index)}
          />

        </Tooltip>
      </>
    );
  }


  // definimos las columnas



  return (




    <div>

      <Box

        sx={{
          '& .MuiTextField-root': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
      >
        < Tooltip title="Ver Constancias">
          <Button
            onClick={handleClickOpen}
          >Ver</Button>

        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>

            <div>
              <h3>Lista de constancias</h3>
              <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tipo</TableCell>
                      <TableCell align="right">Cuil/Cuit</TableCell>
                      <TableCell align="right">Fecha</TableCell>
                      <TableCell align="right">Descarga</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {constancias.map((row, index) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.tipo == undefined ? 'Pago' : row.tipo}
                        </TableCell>
                        <TableCell align="right">{row.cuil_cuit}</TableCell>
                        <TableCell align="right">{row.fecha === undefined ? row.mes + '/' + row.anio : row.fecha}</TableCell>
                        <TableCell align="right">  {downloadFile(index)} </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>




          </DialogContent>
        </Dialog>
      </Box >

    </div>
  );
}