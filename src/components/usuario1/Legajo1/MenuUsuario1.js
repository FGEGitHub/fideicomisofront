import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import NfcIcon from '@mui/icons-material/Nfc';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SubirLegajo from './SubirLegajo';
//import NavBar from '../../NavBar1';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import ContactsIcon from '@mui/icons-material/Contacts';
//import StepperIngresosDeclarados from '../ingresosDeclarados/StepperIngresosDeclarados';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function MenuUsuario1({children}) {
  
  
  const menuItems = [
    { 
      text: 'Declariones Juradas', 
      icon: <InsertDriveFileIcon color="primary" />, 
      path: '/declaraciones-juradas' 
    },
    { 
      text: 'Ingresos Declarados',
      icon: <PriceCheckIcon color="primary" />, 
      path: '/ingresos-declarados' 
    },
    {
      text: 'Datos de la Sociedad',
      icon: <FilePresentIcon color="primary" />,
      path: '/datos-sociedad'
    },
    {
      text: 'CBU Declarado',
      icon: <AccountBalanceIcon color="primary" />,
      path: '/cbu-declarado'
    },
    {
      text: 'Mensajes',
      icon: <LocalPostOfficeIcon color="primary" />,
      path: '/mensajes'
    },
    {
      text: 'Contacto',
      icon: <ContactsIcon color="primary" />,
      path: '/contacto'
    },
  ];

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
        
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
      {/*   <NavBar /> */}
        <Toolbar />
        <Toolbar />
        <Divider />
        <List>
        {menuItems.map((item) => (
            <ListItem
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
        <Divider />
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}