import * as React from 'react';
import { useState, useCallback } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import { useDropzone } from 'react-dropzone';

import serviciousuario1 from '../../../services/usuario1';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    id: props.id,
    tipo: '',
    detalle: ''
  });
  const [fileUpload, setFileUpload] = useState(null);
  const [enviarr, setEnviarr] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const countWords = (text) => {
    const trimmed = text.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({ id: props.id, tipo: '', detalle: '' });
    setFileUpload(null);
    setEnviarr(null);
    setWordCount(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "detalle") {
      if (value.length <= 256) {
        setForm({ ...form, detalle: value });
        setWordCount(countWords(value));
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const onDrop = useCallback((files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    setFileUpload(files[0]);
    setEnviarr(formData);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: "application/pdf"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = enviarr || new FormData();
    formData.append("id", form.id);
    formData.append("tipo", form.tipo);
    formData.append("detalle", form.detalle);

    try {
      const rta = await serviciousuario1.derivarpagoic3(formData);
      alert(rta);
      props.getPagosi();
      handleClose();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar los datos.");
    }
  };

  return (
    <div>
      <Tooltip title="Clasificar" arrow>
        <button onClick={handleClickOpen}>Atender</button>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Clasificación del pago</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              id="detalle"
              name="detalle"
              label="Detalle del motivo"
              placeholder="Ingrese una descripción (máx. 256 caracteres)"
              multiline
              rows={4}
              value={form.detalle}
              onChange={handleChange}
              fullWidth
              inputProps={{ maxLength: 256 }}
              variant="outlined"
            />
            <div style={{ textAlign: "right", fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
            |&nbsp; Caracteres: {form.detalle.length} / 256
            </div>

            <div
              {...getRootProps()}
              style={{
                border: "2px dashed #ccc",
                padding: "16px",
                textAlign: "center",
                marginTop: "16px",
                cursor: "pointer"
              }}
            >
              <input {...getInputProps()} />
              {fileUpload ? (
                <p>Archivo seleccionado: {fileUpload.name}</p>
              ) : (
                <p>Arrastrá un PDF aquí, o hacé clic para seleccionar uno</p>
              )}
            </div>

            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Confirmar clasificación
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
