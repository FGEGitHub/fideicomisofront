import * as React from 'react';
import { useNavigate } from "react-router-dom";
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
import AlertaAprobaciones from '../AlertaAprobaciones'
import  useNoti from '../../hooks/useNoti'
import  useInusual from '../../hooks/useInusual'
import AlertaInusual from '../AlertaInusual'
import Navbar from './Navbar3'
import Looks3Icon from '@mui/icons-material/Looks3';

const drawerWidth = 240;
export default function MenuIzq2 ({children}) {
    const navigate = useNavigate();
    const {cantidad } = useNoti()
    const {cantidadInusual } = useInusual()
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
          text: 'Buscar Clientes',
          icon: <SearchIcon color="primary" />, 
          path: '/usuario2/clientes' 
        },
        {
          text: 'Lotes',
          icon: <NfcIcon color="primary" />,
          path:  '/usuario2/lotes',
        },
        {
          text: 'Aprobación de Pagos',
          icon: <PriceCheckIcon color="primary" />,
          path: '/usuario2/aprobacionesdepagos'
        },
        {
          text: 'Pagos Inusuales',
          icon: <AccountBalanceIcon color="primary" />,
          path: '/nivel3/pagosinusuales'
        },
        {
          text: 'Aprobación de Legajos',
          icon: <AssignmentTurnedInIcon color="primary" />,
          path: '/usuario2/aprobaciones'
        },
        {
            text: 'Agregar ICC',
            icon: <Looks3Icon color="primary" />,
            path: '/nivel3/icc'
          },
          {
            text: 'Agregar un Usuario',
            icon: <Looks3Icon color="primary" />,
            path: '/usuario2/aprobaciones'
          },
          {
            text: 'Informes',
            icon: <Looks3Icon color="primary" />,
            path: '/usuario2/aprobaciones'
          },
          {
            text: 'Pagos Inusuales Mensuales',
            icon: <Looks3Icon color="primary" />,
            path: '/nivel3/pagosinusuales'
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
       {/*  <AlertaInusual
      cantidadInusual={cantidadInusual} />
        <AlertaAprobaciones
      cantidad={cantidad} /> */}
   { children}
      </Box>
    </Box>
    
   
    </>
  );

}