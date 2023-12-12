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
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import  useNoti from '../../hooks/useNoti'
import  useInusual from '../../hooks/useInusual'
import CabinIcon from '@mui/icons-material/Cabin';
import Navbar from './Navbar'
import AssessmentIcon from '@mui/icons-material/Assessment';

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
        text: 'Clientes', 
        icon: <GroupIcon color="primary" />, 
        path: '/legales/clientes' 
      },
      { 
        text: 'Lotes', 
        icon: <CabinIcon color="primary" />, 
        path: '/legales/lotes' 
      },
      { 
        text: 'Resumen', 
        icon: <AssessmentIcon color="primary" />, 
        path: '/legales/resumen' 
      },
      { 
        text: 'Perfil y contraseña', 
        icon: <AssignmentIndIcon color="primary" />, 
        path: '/legales/perfil' 
      },
      { 
        text: 'mapas', 
        icon: <AssignmentIndIcon color="primary" />, 
        path: '/legales/mapas' 
      },
      /*   { 
          text: 'Expedientes', 
          icon: <GroupIcon color="primary" />, 
          path: '/legales/menu' 
        },
        { 
          text: 'Relevamiento', 
          icon: <GroupIcon color="primary" />, 
          path: '/legales/estadisticas1' 
        },
        { 
          text: 'Carga Relevamiento', 
          icon: <GroupIcon color="primary" />, 
          path: '/legales/cargarelev' 
        }, */
       
     
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