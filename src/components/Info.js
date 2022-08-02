import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { Icon } from '@mui/material';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';


export default function Info() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Typography variant="subtitle1" id="tableTitle" component="div">
        Si sos una persona expuesta politicamente(PEPs) marca el casillero

        <Icon  aria-describedby={id} variant="outlined" onClick={handleClick}>
            
            <HelpSharpIcon variant="outlined" color="info" />
        </Icon>
        </Typography>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Según la Resolución 134/2018 emitida por la UIF se requiere identificar a las Personas Expuestas Políticamente (PEPs) dentro de nuestros clientes.

Fideicomiso Santa Catalina está cumpliendo con esta medida, requiriendo a sus clientes las DDJJ acerca de su condición de PEPs.</Typography>
        </Popover>
      </div>
    );
  }