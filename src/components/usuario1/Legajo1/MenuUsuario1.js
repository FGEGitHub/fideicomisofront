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
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SubirLegajo from './SubirLegajo';
import Navbar from '../../../components/usuario1/Navbar1';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import ContactsIcon from '@mui/icons-material/Contacts';
//import StepperIngresosDeclarados from '../ingresosDeclarados/StepperIngresosDeclarados';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";
const drawerWidth = 240;

export default function MenuUsuario1({children}) {
  const [empresa, setEmpresa] = useState(false);
  const [persona, setPersona] = useState(false);
  const [cargado, setCargado] = useState(false);
  useEffect(() => {

    ver()

}, [])


const ver = async (index) => {
      
  const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
 
    const userContext = JSON.parse(loggedUserJSON)
   console.log(userContext)
   if (userContext.razon == 'Empresa') {
    setEmpresa(true)
   
  } else {setPersona(true)}
  setCargado(true)

};
  const menuItemsE = [
    {
      text: 'Legajo',
      icon: <FilePresentIcon color="primary" />,
      path: '/usuario/legajos'
    },

       {
      text: 'Datos de Empresa ',
      icon: <BusinessIcon color="primary" />,
      path: '/usuario/datosadicionales'
    },
   
    {
      text: 'CBU Declarado',
      icon: <AccountBalanceIcon color="primary" />,
      path: '/usuario/cbu-declarado'
    },
    {
      text: 'constancias',
      icon: <LocalPostOfficeIcon color="primary" />,
      path: '/usuario/constancias'
    },
    {
      text: 'Contacto',
      icon: <ContactsIcon color="primary" />,
      path: '/usuario/contacto'
    },
    {
      text: 'Datos personales',
      icon: <ContactsIcon color="primary" />,
      path: '/usuario/datosPers'
    },
  ];
  const menuItemsP = [
    {
      text: 'Legajo',
      icon: <FilePresentIcon color="primary" />,
      path: '/usuario/legajos'
    },
 
   
    {
      text: 'CBU Declarado',
      icon: <AccountBalanceIcon color="primary" />,
      path: '/usuario/cbu-declarado'
    },
    {
      text: 'constancias',
      icon: <LocalPostOfficeIcon color="primary" />,
      path: '/usuario/constancias'
    },
    {
      text: 'Contacto',
      icon: <ContactsIcon color="primary" />,
      path: '/usuario/contacto'
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
      <Navbar />
        <Toolbar />
        <Toolbar />
        <Divider />
        <List>¨
        {cargado ?<div>
        {empresa ? <div>
          {menuItemsE.map((item) => (
            <ListItem
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </div> :
         <div>
          {menuItemsP.map((item) => (
            <ListItem
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}


        </div> }</div> :<div></div> }


 
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