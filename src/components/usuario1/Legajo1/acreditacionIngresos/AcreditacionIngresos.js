import React from 'react';
import { Paper, Button,CircularProgress } from '@mui/material';
import Tooltip from '@material-ui/core/Tooltip';

import DownloadIcon from '@mui/icons-material/Download';
import  { useCallback, useEffect, useState, Fragment } from "react";
import { useDropzone } from 'react-dropzone';
import servicioLegajo from '../../../../services/legajos'
import BackupIcon from '@material-ui/icons/Backup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import servicioUsuario1 from '../../../../services/usuario1'  
import NativeSelect from '@mui/material/NativeSelect';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Skeleton from '@mui/material/Skeleton';









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

const AcreditacionIngresos = (props) => {
  const handleClick = () => {
    console.log('click');
  };                             
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [enviarr, setEnviarr] = useState(null);    
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([''])
  const [datos, setdatos] = useState([''])
  const [detalle, setDetalle] = useState([''])
  const [noespedef, setNoespdf] = useState(false);
  const onDrop = useCallback  ((files, acceptedFiles) => {
       // window.location.reload(true);
       const formData = new FormData();
       
    if(files[0].path[files[0].path.length-1] =="f" && files[0].path[files[0].path.length-2] =="d" && files[0].path[files[0].path.length-3] =="p" ){
      setNoespdf(false)
    }else{
      setNoespdf(true)
    }
       setFileUpload(acceptedFiles);
       formData.append('file', files[0]);
       setEnviarr(formData)


    });
    const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone({
      onDrop,
      multiple: false,
      accept: 'document/*',
  
    });

    useEffect(() => {

      
      //console.log(loggedUserJSON)
  
      // s
  
      traer()
  
    }, [])

    const handleChangee = (e) => {
      console.log(detalle)
      setDetalle({ ...detalle, [e.target.name]: e.target.value })
    }
    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    )); 
    const traer = async () => {

      const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
  
      setUser(preba)
  
      const lotes = await servicioUsuario1.usuario1acredingresos(preba.cuil_cuit)
  
      setdatos(lotes)
  
  
  
  
    }

    const enviar = async () => {
      setLoading(true);
      console.log(enviarr)
    await   enviarr.append('datos', [props.cuil_cuit,detalle.tipo]);
      console.log(enviarr)
      const rta = await servicioLegajo.subirlegajo1(enviarr)
      setLoading(false);
     alert(rta)
     
      props.enviado()
  }
  async function download(index, rowIndex, data) {
    const filename = (datos[index].ubicacion)


    const link = await servicioUsuario1.obtenerurl(filename)

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
  
  async function veronline(index, rowIndex, data) {
    const filename = (datos[index].ubicacion)


    const link = await servicioUsuario1.obtenerurlonline(filename)
    console.log(link.data)
    window.open(link.data)
    
   // var nueva_ventana = window.open('', '_blank');
   // nueva_ventana.document.write('<html><head><title>Imagen de AWS</title></head><body style="text-align:center;"><img src="' + link.data + '" /></body></html>');
} 
function verFile(index, rowIndex, data) {

  
    return (
        <>

            <Button
                onClick={() => veronline(index)}
            >Ver online</Button>


        </>
    );
}
  return (
    <>
       <Paper
          sx={{
            cursor: 'pointer',
            background: '#fafafa',
            color: '#bdbdbd',
            border: '1px dashed #ccc',
            '&:hover': { border: '1px solid #ccc' },
          }}
        >
          <div style={{ padding: '16px' }} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p style={{ color: 'green' }}>Suelta aqui el documento</p>
            ) : (
              <p>Arrastra hasta aqui el archivo  de Acreditacion de ingresos</p>
            )}
            <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
          </div>
        </Paper>
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >
        Archivos Aceptados <BackupIcon fontSize="small" />

        <ul>{acceptedFileItems}</ul>
      
               <NativeSelect
                            defaultValue={30}
                            onChange={handleChangee}
                            inputProps={{
                                name: 'tipo',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'Recibo de sueldo'}>Elegir</option>
                            <option   value={'Recibo de sueldo'}>Recibo de sueldo</option>
                            <option  value={'Constancia de Afip'}>Constancia de Afip</option>
                            <option  value={'Pago Monotributo'}>Pago del Monotributo</option>
                            <option  value={'Pago autonomo'}>Pago de autonomo</option>
                            <option  value={'DDJJ IIBB'}>DDJJ IIBB</option>
                          
                    
                         
                        </NativeSelect> 
        { enviarr ? <>  
          {loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : <Button variant="contained" color="success" onClick={enviar}>Enviar</Button>}
        
        </> : <></>}
      </Box>



        <p>Se requiere certificación de ingresos o manifestacion de bienes y/o cualquier otra documentación que permita el cálculo de la relación cuota-ingreso  </p>
        <p>En caso de ser:</p>
       
        <p><b> a. </b>Empleado en relación de dependencia: 3 últimos recibos de sueldo  </p>
        <p><b> b. </b> Monotributista:  Constancia AFIP y últimos 3 pagos de monotributo</p>
        <p><b> c. </b> Responsable inscripto: Constancia AFIP y últimos 3 pagos de autónomo </p>
        <p><b> d. </b> 12 últimas DDJJ de IIBB</p>





        <TableContainer>
                {!datos ? <Skeleton /> : <>
                  <h1>Constancias</h1>
                  <Table >
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>FECHA</b> <b /></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>Constancia</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ESTADO</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>DESCARGA</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>VER </b></TableCell>
              
                    
                      </TableRow>
                    </TableHead>
                    <TableBody>



                      {datos.map((row, index) => (
                        <StyledTableRow key={row.name}>
                           <StyledTableCell component="th" scope="row">{ row.fecha} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">{ row.tipo} </StyledTableCell>
                          <StyledTableCell component="th" scope="row"> {row.estado} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">  {downloadFile(index)} </StyledTableCell>
                          <StyledTableCell component="th" scope="row"> {verFile(index)} </StyledTableCell>
                      
                        </StyledTableRow>
                      ))}




                    </TableBody>
                  </Table>
                </>}

              </TableContainer>







    </>
  );
};

export default AcreditacionIngresos;