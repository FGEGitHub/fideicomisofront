import * as React from 'react';
import  { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import  Clientes from '../../../components/home/Blog'





const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();


  


  return (
   
<div> 
<Clientes/>
    
 </div>  
  );
}