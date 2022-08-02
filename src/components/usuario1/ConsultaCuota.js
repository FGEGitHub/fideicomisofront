import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';

const columns = [
  { field: 'Cantidad de Cuotas liquidadas y vencidas', headerName: 'Cantidad de Cuotas liquidadas y vencidas', width: 300 },
  { field: 'Monto devengado hasta cuota', headerName: 'Monto devengado hasta cuota', width: 300 },	
    { field: 'Monto abonado hasta cuota', headerName: 'Monto abonado hasta cuota', width: 300 },
    { field: 'Deuda Exigible hasta cuota ', headerName: 'Deuda exigible hasta cuota', width: 300 },

];

const rows = [
  { id: 1 },
  
];

export default function DataTable() {
  return (


    <div style={{ height: 400, width: '100%' }}>
        <Toolbar
        >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          align='center'
          id="tableTitle"
          component="div"
          color={'primary'}
        >
          DETALLE DE DEUDA EXIGIBLE
        </Typography>
        )
        
        </Toolbar>
      <DataGrid
      components={{
        
        TableRezise: () => null,



      }}

        
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
    );
    }
  