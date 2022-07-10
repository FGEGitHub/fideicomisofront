import React from 'react';
import { Paper } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ListaDeProgreso from './listaDeProgreso/ListaDeProgreso';
import ImageList from './ImagenList';

const AddFoto = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  });
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
            <p style={{ color: 'green' }}>Suelta aqui la foto</p>
          ) : (
            <p>Arrastra hasta aqui la foto de tu DNI</p>
          )}
          <em>(images with *.jpeg, *.png, *.jpg extenciones aceptadas)</em>
        </div>
      </Paper>
      
      <ListaDeProgreso {...{files}} />
      <ImageList />
    </>
  );
};

export default AddFoto;