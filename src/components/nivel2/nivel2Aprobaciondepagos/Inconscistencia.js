import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ServicioPagos from '../../../services/pagos'
import Tooltip from '@material-ui/core/Tooltip';
import React, { useEffect, useState, Fragment } from "react";
import MUIDataTable from "mui-datatables";

export default function Inconscistencia(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [constancias, setConstancias] = useState([])
  const [activo, setActivo] = useState(false)



  const handleClickOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };





  ///Ver coincidencias
  async function verCoinc(index, rowIndex, data) {



    const constanciass = await ServicioPagos.verCoincidencias(props.id)

    setConstancias(constanciass)


  }
  ////////////Buscar monto del pago
  function montoDistint(index, rowIndex, data) {

    return (
      <>
        <Tooltip title="Ver coincidencia" arrow>
          <Button
            onClick={() => verCoinc()}
          >Ver Coincidencias</Button>

        </Tooltip>
      </>
    );
  }




  // definimos las columnas
  const columns = [


    {
      name: "nombre",
      label: "nombre",

    },
    {
      name: "fecha",
      label: "fecha",

    },
    {
      name: "creditos",
      label: "monto",
    },

    {
      name: "descripcion",
      label: "descripcion",
    },






  ];


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
          >Ver </Button>

        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>

            <div>
              <h3>Inconscistencia</h3>
              {props.monto_distinto === 'Si' ? <><p >Monto Distinto  </p> </> : <> </>}

              {props.cuil_cuit_distinto === 'Si' ? <> Cuil/Cuit no encontrado o CBU distinto  </> : <> </>}
              <br />
              {props.monto_inusual === 'Si' ? <>Monto Inusual</> : <> </>}

              {montoDistint()}


              {constancias === [] || constancias === null ? <>No se encontraron coincidencias</> : <>
                <MUIDataTable
                  title={"Lista de aprobaciones pendientes"}
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
              </>}
            </div>




          </DialogContent>
        </Dialog>
      </Box >

    </div>
  );
}