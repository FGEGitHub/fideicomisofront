import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import NfcIcon from '@mui/icons-material/Nfc';
import { useState, useEffect } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import servicioPagos from '../../services/pagos'
import Navbar from '../Navbar'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';

const drawerWidth = 240;
export default function MenuIzq2 ({children}) {
    const navigate = useNavigate();
  
    const [notificaciones, setNotificaciones] = useState();
    const [notificacioneslegajos, setNotificacioneslegajos] = useState();
    const [notificacionescbus, setNotificacionescbus] = useState();
 

    useEffect(() => {
      cantidadnoti()
  }, [])
  const cantidadnoti = async () => {
        
    const notis = await servicioPagos.cantidadpendientes()

    setNotificaciones(notis[0])
    setNotificacioneslegajos(notis[1])
    setNotificacionescbus(notis[2])
    /* if (notificaciones>0) {
      document.title= 'Santa Catalina ('+notificaciones+')'
   
    }   */
}

    const handleClick = (path) => {
        
        navigate(path);
      }; 
    

       const hanleLogout = () => {
       /* console.log('click')
        setUser(null)
        servicioUsuario.setToken(user.token) */
        window.localStorage.removeItem('loggedNoteAppUser')
        window.location.reload(true);
      } 
    const menuItems = [
        { 
          text: 'Ver Clientes', 
          icon: <GroupIcon color="primary" />, 
          path: '/usuario2/clientes' 
        },
    
        {
          text: 'Lotes',
          icon: <NfcIcon color="primary" />,
          path:  '/usuario2/lotes',
        },
        {
          text: 'Aprobación de Pagos',
          icon:<div><Badge badgeContent={notificaciones} color="error">
          <PaidIcon color="primary" />
        </Badge></div>,
          path: '/usuario2/aprobacionesdepagos'
        },
        { 
          text: 'Estracto', 
          icon: <GroupIcon color="primary" />, 
          path: '/usuario2/estracto' 
        },
   
        
        {
          text: 'Aprobación de Legajos',
          icon:<div><Badge badgeContent={notificacioneslegajos} color="error">
          <AccountBoxIcon color="primary" />
        </Badge></div>,
          path: '/usuario2/aprobaciones'
        },
        {
          text: 'Aprobación de CBU',
          icon:<div><Badge badgeContent={notificacionescbus} color="error">
          <AccountBalanceIcon color="primary" />
        </Badge></div>,
          path: '/usuario2/aprobacioncbu'
        },
        
     
      ];


    return(
      <>
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
        <Navbar
      logout = {{hanleLogout}}/>
        <Toolbar />

        <Toolbar />
        <Divider />
        <List>
        {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => {
                handleClick(item.path)
              }}
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
      {/*   <AlertaInusual
      cantidadInusual={cantidadInusual} />
        <AlertaAprobaciones
      cantidad={cantidad} /> */}
   { children}
      </Box>
    </Box>
    
   
    </>
  );

}