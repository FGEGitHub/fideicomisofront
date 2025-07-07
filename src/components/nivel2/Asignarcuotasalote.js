import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import servicioCuotas from '../../services/cuotas';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Borrarcuotas(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedLote, setSelectedLote] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRadioChange = (event) => {
    setSelectedLote(event.target.value);
    console.log("Lote seleccionado:", event.target.value);
  };

  const asignar = async () => {
    if (!selectedLote) return;
    console.log(selectedLote);
    const datos = { id: selectedLote, id_origen: props.id_origen };
    const cuotas = await servicioCuotas.asignarloteacuotas(datos);
    console.log(cuotas);
    handleClose();
  };



  return (
    <div>
      <Button   variant="outlined"
    sx={{ color: "black", borderColor: "black",fontSize: "0.70rem" }} onClick={handleClickOpen}>
        Añadir a cuadro de cuotas
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="Estas seguro"
      >
        <DialogTitle id="responsive-dialog-title">{"Estas seguro?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl component="fieldset">
              <FormLabel component="legend">Selecciona un lote</FormLabel>
              <RadioGroup
                value={selectedLote}
                onChange={handleRadioChange}
              >
                {props.lotes?.filter(item => item.tiene_cuotas === 'Si').map((item) => (
                  <FormControlLabel 
                    key={item.id_lote} 
                    value={item.id} 
                    control={<Radio />} 
                    label={`Zona: ${item.zona}, Manzana: ${item.manzana}${item.zona === 'PIT' ? `, Parcela: ${item.parcela}` : ''} - Tiene cuotas`} 
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={asignar} autoFocus disabled={!selectedLote}>
            Asignar
          </Button>
     
        </DialogActions>
      </Dialog>
    </div>
  );
}
