import * as React from 'react';
import  { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


import  Clientes from '../../../components/home/Calculo/BlogCalculo'





const drawerWidth = 240;

export default function Calculo() {
  const navigate = useNavigate();


  


  return (
   
<div> 
<Clientes/>
    
 </div>  
  );
}