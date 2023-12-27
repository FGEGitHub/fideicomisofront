import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

export default function InsetDividers(props) {
  return (
    
    <List
      sx={{
        width: props.width,
        height:props.height,
        //maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'fixed',
      zIndex: 1
      }}
    >
      <ListItem >
        <ListItemAvatar  >
          <Avatar sx={{color:props.color1}}>
            <ImageIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.texto1} secondary={props.texto4}  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar sx={{color:props.color2}}>
          <Avatar sx={{color:props.color2}}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.texto2}secondary={props.texto5} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem sx={{color:props.color3}}>
        <ListItemAvatar >
          <Avatar sx={{color:props.color3}}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.texto3} secondary={props.texto6}/>
      </ListItem>
    </List>
  );
}
