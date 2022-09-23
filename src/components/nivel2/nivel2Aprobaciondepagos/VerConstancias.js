import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../../services/pagos'
import NativeSelect from '@mui/material/NativeSelect';
import useUser from '../../../hooks/useUser'
import serviciousuario1 from '../../../services/usuario1'
import Tooltip from '@material-ui/core/Tooltip';
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState, Fragment } from "react";



export default function VerConstancias(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [constancias, setConstancias] = useState(null)
  const [activo, setActivo] = useState(false)




  const traer = async () => {
console.lof('constancias')
   const not = await serviciousuario1.constanciasdelpago(props.id)
   setConstancias(not)
   console.lof(constancias)
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
        
          <Button
                onClick={() => download(index)}
            >Descargar</Button> 


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
        name: "fecha",
        label: "fecha",

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


  return (


   
   
      <div>
    
    <Box

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
        <MUIDataTable
            title={"Lista constancias"}
            data={constancias}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
           


        />
    </div>


    
         
        </DialogContent>
      </Dialog>
    </Box >

    </div>
  );
}