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
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const drawerWidth = 240;
export default function MenuIzq2 ({children}) {
    const navigate = useNavigate();
  
    const [notificaciones, setNotificaciones] = useState();
    const [notificacioneslegajos, setNotificacioneslegajos] = useState();
    const [notificacionescbus, setNotificacionescbus] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      const useer = JSON.parse(loggedUserJSON)
      setUser(useer)
     
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
          text: 'Extracto', 
          icon: <GroupIcon color="primary" />, 
          path: '/usuario2/extracto' 
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
      
        {
          text: 'Agenda de novedades',
          icon:<div><Badge color="error">
          <AccountBalanceIcon color="primary" />
        </Badge></div>,
          path: '/usuario2/novedades'
        },
        {
          text: 'Consultas',
          icon:<div><Badge color="error">
          <AccountBalanceIcon color="primary" />
        </Badge></div>,
          path: '/usuario2/consultas'
        },
        
     
      ];

      const menuItems2 = [
        /*  { 
           text: 'Ver Clientes', 
           icon: <GroupIcon color="primary" />, 
           path: '/nivel3/clientes' 
         }, */
         {
           text: 'Clientes',
           icon: <NfcIcon color="primary" />,
           path:  '/nivel3/clientes',
         },
         {
           text: 'Lotes',
           icon: <NfcIcon color="primary" />,
           path:  '/nivel3/lotes',
         },
         {
           text: 'Aprobación de Pagos',
           icon: <PriceCheckIcon color="primary" />,
           path: '/nivel3/aprobacionesdepagos'
         },
         {
           text: 'Pagos Inusuales',
           icon: <AccountBalanceIcon color="primary" />,
           path: '/nivel3/pagosinusuales'
         },
      
         {
             text: 'Agregar ICC',
             icon: <QueryStatsIcon color="primary" />,
             path: '/nivel3/icc'
           },
           {
             text: 'Valor Metro Cuadrado ',
             icon: <PlagiarismIcon color="primary" />,
             path: '/nivel3/declaraciones'
           },
           {
             text: 'Agregar usuario',
             icon: <GroupAddIcon color="primary" />,
             path: '/nivel3/agregarusuario'
           },
           {
             text: 'Pagos Inusuales Mensuales',
             icon: <MoneyOffIcon color="primary" />,
             path: '/nivel3/pagosmensualesinusuales'
           },
           {
             text: 'Todos los pagos',
             icon: <MoneyOffIcon color="primary" />,
             path: '/nivel3/pagos'
           },
           {
            text: 'Agenda de novedades',
            icon:<div><Badge color="error">
            <AccountBalanceIcon color="primary" />
          </Badge></div>,
            path: '/nivel3/novedades'
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
          {user ? <>
          {user.nivel === 2 ? <> 
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
          </>: <>
          {menuItems2.map((item) => (
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
          
          </>}
          </> :  <></>}
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