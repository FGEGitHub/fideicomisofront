import { useState, useEffect, useRef  } from "react";
import DialogComponent from './modalver'; 
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { Container } from "@mui/material";
import Dialog from '@mui/material/Dialog';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Arg = () => {
    //configuracion de Hooks
    const dialogRef = useRef();
    const [info, setInfo] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    function modal(dataIndex) {
        return (
            <>
               


            </>
        );
    }
    const handleOpenDialog = (p) => {
        setInfo(p)
        dialogRef.current.openDialog();

    
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <>
 <p onClick={()=>handleOpenDialog(55)}>HOLA</p>
 <p onClick={()=>handleOpenDialog(66)}>HOLA2</p>
                
                <a href="google.com" title="Tucuman"> 
                                   sfgsgd
                </a>
                <div  >
             <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={zoomIn}>Zoom In</button>
            <button onClick={zoomOut}>Zoom Out</button>
            <button onClick={resetTransform}>Reset</button>
          </div>
          <TransformComponent>
         
        
<svg width="296.926mm" version="1.2" height="209.973mm" baseProfile="tiny" viewBox="0 0 3507 2480"  xmlns="http://www.w3.org/2000/svg">
 <title>Qt SVG Document</title>
 <desc>Generated with Qt</desc>
 <defs/>
 <g stroke-linecap="square" fill="none" fill-rule="evenodd" stroke="black" stroke-linejoin="bevel" stroke-width="1">
  <g font-style="normal" stroke-linecap="square" transform="matrix(1,0,0,1,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(1,0,0,1,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="1" font-size="32.5" fill="#ffffff" stroke="none" font-family="MS Shell Dlg 2" font-weight="400">
   <path d="M-2,-2 L3510,-2 L3510,2483 L-2,2483 L-2,-2" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" transform="matrix(11.8081,0,0,11.8081,0,0)" fill-opacity="1" font-size="32.5" fill="#ffffff" stroke="none" font-family="MS Shell Dlg 2" font-weight="400">
   <path d="M0,0 L297,0 L297,210 L0,210 L0,0" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="0" font-size="32.5" fill="#000000" stroke="none" font-family="MS Shell Dlg 2" font-weight="400">
   <rect width="3508" x="0" height="2480" y="0"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M668.522,1205.38 L1631.35,1251.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.35,1251.78 L1629.78,1259.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2006.14,1318.8 L2014.71,1363.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1629.78,1259.74 L2006.14,1318.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M668.522,1205.38 L664.231,1222.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M664.231,1222.4 L659.396,1236.48" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1728.66,867.29 L743.345,720.131" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.58,851.759 L1512.06,818.992" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L1337.39,792.911" vector-effect="none" fill-rule="evenodd"/>
   <path d="M773.754,776.718 L778.632,805.302" vector-effect="none" fill-rule="evenodd"/>
   <path d="M782.154,835.363 L779.616,907.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M779.616,907.354 L771.181,947.537" vector-effect="none" fill-rule="evenodd"/>
   <path d="M771.181,947.537 L761.94,978.426" vector-effect="none" fill-rule="evenodd"/>
   <path d="M761.94,978.426 L763.22,1003.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M763.22,1003.73 L757.179,1067.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M757.179,1067.63 L740.157,1115.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M740.157,1115.71 L723.279,1137.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M723.279,1137.09 L712.696,1160.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M712.696,1160.5 L710.716,1181.66" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#bebebe" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1318.23,789.615 L1249.21,575.005" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M710.716,1181.66 L704.3,1207.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.58,851.759 L1512.06,818.992" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M704.3,1207.11 L1631.35,1251.78" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1631.35,1251.78 L1645.03,1182.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1735.08,833.121 L1686.3,825.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1675.85,824.28 L1627.06,816.999" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1645.03,1182.56 L1668.76,1186.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1620.1,815.959 L1571.31,808.677" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1668.76,1186.28 L1682.65,1112.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1682.65,1112.35 L1659.53,1108.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1564.35,807.637 L1515.56,800.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1659.53,1108.71 L1670.04,1055.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.58,851.759 L1768.91,652.956" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1682.8,844.478 L1686.3,825.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1670.04,1055.62 L1710.02,1061.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1692.63,1059.17 L1728.66,867.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.46,819.64 L1720.13,645.676" vector-effect="none" fill-rule="evenodd"/>
   <path d="M779.616,907.354 L782.429,827.556" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1672.35,842.918 L1675.85,824.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M782.429,827.556 L773.754,776.718" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1677.01,818.079 L1709.68,644.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M773.754,776.718 L778.785,720.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.91,652.956 L1549.41,620.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.06,818.992 L1549.41,620.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1710.02,1061.91 L1785.78,658.516" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1627.06,817.015 L1623.56,835.637" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1620.09,815.975 L1616.59,834.596" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L1531.99,617.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1531.99,617.59 L1268.56,578.253" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.56,800.354 L1564.34,807.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.39,792.911 L1268.56,578.253" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1571.31,808.681 L1620.09,815.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1627.06,817.007 L1675.84,824.292" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.3,825.853 L1735.08,833.137" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.73,794.142 L1677.01,818.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.46,819.64 L1736.24,826.925" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1645.03,1182.56 L2010.15,1239.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1978.4,1158.85 L2003.15,1194.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2003.15,1194.8 L2016.58,1221.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2010.15,1239.86 L2016.77,1221.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.16,1189.01 L1700.05,1115.08" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#bebebe" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1400.17,798.297 L1410,799.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.51,799.4 L1497.44,801.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.73,785.321 L1500.18,786.881" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.24,654.858 L1524.69,656.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.9,607.843 L1429.22,606.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.85,594.128 L1369.63,593.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.65,603.804 L1433.71,602.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.71,602.917 L1429.22,606.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.22,606.37 L1438.9,607.843" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.9,607.843 L1439.65,603.804" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.65,603.804 L1437.9,613.123" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.9,613.123 L1443.13,613.904" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1443.13,613.904 L1444.88,604.585" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1444.88,604.585 L1439.65,603.804" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.85,605.625 L1450.1,614.944" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.1,614.944 L1455.32,615.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.32,615.724 L1457.08,606.406" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.08,606.406 L1451.85,605.625" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.08,606.406 L1455.32,615.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.32,615.724 L1460.55,616.505" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.55,616.505 L1462.3,607.186" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.3,607.186 L1457.08,606.406" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.3,607.186 L1460.55,616.505" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.55,616.505 L1465.78,617.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.78,617.285 L1467.53,607.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.53,607.966 L1462.3,607.186" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.53,607.966 L1465.78,617.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.78,617.285 L1471,618.065" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471,618.065 L1472.75,608.747" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.75,608.747 L1467.53,607.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1527.32,642.44 L1516.86,640.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.86,640.88 L1515.99,645.539" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.99,645.539 L1526.44,647.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1526.44,647.1 L1527.32,642.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1526.44,647.1 L1515.99,645.539" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.99,645.539 L1515.11,650.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.11,650.198 L1525.57,651.759" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.57,651.759 L1526.44,647.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.57,651.759 L1515.11,650.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.11,650.198 L1514.24,654.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.24,654.858 L1524.69,656.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1524.69,656.418 L1525.57,651.759" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.08,610.437 L1479.72,609.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.72,609.787 L1477.97,619.106" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1520.55,678.473 L1506.61,676.392" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.97,619.106 L1482.33,619.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.61,676.392 L1506.03,679.498" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.33,619.756 L1484.08,610.437" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.03,679.498 L1505.91,680.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.91,680.12 L1519.85,682.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.43,611.088 L1484.08,610.437" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.85,682.2 L1520.55,678.473" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.08,610.437 L1482.33,619.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.33,619.756 L1486.68,620.406" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.25,674.745 L1507.31,672.665" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.68,620.406 L1488.43,611.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.31,672.665 L1506.73,675.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.73,675.771 L1506.61,676.392" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.79,611.738 L1488.43,611.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.43,611.088 L1486.68,620.406" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.61,676.392 L1520.55,678.473" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1520.55,678.473 L1521.25,674.745" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.68,620.406 L1491.04,621.057" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.04,621.057 L1492.79,611.738" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.95,671.018 L1508.01,668.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.14,612.388 L1492.79,611.738" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.01,668.937 L1507.43,672.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.79,611.738 L1491.04,621.057" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.43,672.043 L1507.31,672.665" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.31,672.665 L1521.25,674.745" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.04,621.057 L1495.39,621.707" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.39,621.707 L1497.14,612.388" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.25,674.745 L1521.95,671.018" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.5,613.038 L1497.14,612.388" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1522.65,667.29 L1508.71,665.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.14,612.388 L1495.39,621.707" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.71,665.21 L1508.13,668.316" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.13,668.316 L1508.01,668.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.39,621.707 L1499.75,622.357" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.01,668.937 L1521.95,671.018" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.75,622.357 L1501.5,613.038" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.95,671.018 L1522.65,667.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.85,613.689 L1501.5,613.038" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.5,613.038 L1499.75,622.357" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.88,703.323 L1501.94,701.242" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.75,622.357 L1504.1,623.007" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.94,701.242 L1501.36,704.348" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.1,623.007 L1505.85,613.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.36,704.348 L1501.24,704.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.21,614.339 L1505.85,613.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.24,704.97 L1515.18,707.051" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.18,707.051 L1515.88,703.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.85,613.689 L1504.1,623.007" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.1,623.007 L1508.46,623.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.58,699.595 L1502.64,697.515" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.46,623.658 L1510.21,614.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.64,697.515 L1502.06,700.621" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.06,700.621 L1501.94,701.242" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.56,614.989 L1510.21,614.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.94,701.242 L1515.88,703.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.21,614.339 L1508.46,623.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.88,703.323 L1516.58,699.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.46,623.658 L1512.81,624.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.81,624.308 L1514.56,614.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1517.28,695.868 L1503.34,693.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.34,693.787 L1502.76,696.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1531.99,617.59 L1514.56,614.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.76,696.893 L1502.64,697.515" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.56,614.989 L1512.81,624.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.64,697.515 L1516.58,699.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.81,624.308 L1523.27,625.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.27,625.869 L1530.23,626.909" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.58,699.595 L1517.28,695.868" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1530.23,626.909 L1531.99,617.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1517.98,692.14 L1504.04,690.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1530.23,626.909 L1523.27,625.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.04,690.06 L1503.46,693.166" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.27,625.869 L1522.39,630.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.46,693.166 L1503.34,693.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.34,693.787 L1517.28,695.868" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1522.39,630.528 L1529.36,631.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1529.36,631.568 L1530.23,626.909" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1517.28,695.868 L1517.98,692.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1529.36,631.568 L1522.39,630.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.05,734.386 L1496.11,732.305" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.11,732.305 L1495.53,735.411" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1522.39,630.528 L1521.52,635.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.52,635.187 L1528.48,636.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.53,735.411 L1495.41,736.032" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1528.48,636.228 L1529.36,631.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.41,736.032 L1509.35,738.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.35,738.113 L1510.05,734.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.75,730.658 L1496.81,728.577" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.81,728.577 L1496.23,731.684" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.23,731.684 L1496.11,732.305" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.11,732.305 L1510.05,734.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.05,734.386 L1510.75,730.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.45,726.931 L1497.51,724.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.51,724.85 L1496.93,727.956" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.93,727.956 L1496.81,728.577" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.81,728.577 L1510.75,730.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.75,730.658 L1511.45,726.931" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.15,723.203 L1498.21,721.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.21,721.122 L1497.63,724.229" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.63,724.229 L1497.51,724.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.51,724.85 L1511.45,726.931" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.45,726.931 L1512.15,723.203" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.38,759.236 L1491.44,757.155" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.44,757.155 L1490.86,760.261" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.86,760.261 L1490.74,760.882" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.74,760.882 L1504.68,762.963" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.68,762.963 L1505.38,759.236" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.08,755.508 L1492.14,753.427" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.14,753.427 L1491.56,756.534" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.56,756.534 L1491.44,757.155" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.44,757.155 L1505.38,759.236" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.38,759.236 L1506.08,755.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.78,751.781 L1492.84,749.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.84,749.7 L1492.26,752.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.26,752.806 L1492.14,753.427" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.14,753.427 L1506.08,755.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.08,755.508 L1506.78,751.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.48,748.053 L1493.54,745.972" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.54,745.972 L1492.96,749.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.96,749.079 L1492.84,749.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.84,749.7 L1506.78,751.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.78,751.781 L1507.48,748.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.81,772.903 L1492.36,771.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.36,771.343 L1491.48,776.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.48,776.002 L1501.94,777.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.94,777.563 L1502.81,772.903" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.94,777.563 L1491.48,776.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.48,776.002 L1490.61,780.661" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.61,780.661 L1501.06,782.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.06,782.222 L1501.94,777.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.18,786.881 L1489.73,785.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.73,785.321 L1488.86,789.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.86,789.98 L1499.31,791.541" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.31,791.541 L1500.18,786.881" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.34,812.663 L1481.4,810.583" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.4,810.583 L1480.82,813.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.82,813.689 L1480.7,814.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.7,814.31 L1494.64,816.391" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L1495.34,812.663" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.04,808.936 L1482.1,806.855" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.1,806.855 L1481.52,809.961" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.52,809.961 L1481.4,810.583" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.4,810.583 L1495.34,812.663" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.34,812.663 L1496.04,808.936" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.74,805.208 L1482.8,803.128" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.8,803.128 L1482.22,806.234" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.22,806.234 L1482.1,806.855" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.1,806.855 L1496.04,808.936" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.04,808.936 L1496.74,805.208" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.44,801.481 L1483.51,799.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.51,799.4 L1482.92,802.506" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.92,802.506 L1482.8,803.128" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.8,803.128 L1496.74,805.208" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.74,805.208 L1497.44,801.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.14,797.753 L1484.21,795.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.21,795.673 L1483.62,798.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.62,798.779 L1483.51,799.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.51,799.4 L1497.44,801.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.44,801.481 L1498.14,797.753" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.03,794.326 L1405.14,793.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.14,793.448 L1400.17,798.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.17,798.297 L1410,799.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410,799.765 L1411.03,794.326" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.25,795.107 L1411.03,794.326" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.03,794.326 L1409.28,803.645" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.28,803.645 L1414.5,804.426" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.5,804.426 L1416.25,795.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.48,795.887 L1416.25,795.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.25,795.107 L1414.5,804.426" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.5,804.426 L1419.73,805.206" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.73,805.206 L1421.48,795.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.71,796.668 L1421.48,795.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.48,795.887 L1419.73,805.206" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.73,805.206 L1424.95,805.986" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.95,805.986 L1426.71,796.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.93,797.448 L1426.71,796.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.71,796.668 L1424.95,805.986" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.95,805.986 L1430.18,806.767" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.18,806.767 L1431.93,797.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.16,798.228 L1431.93,797.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.93,797.448 L1430.18,806.767" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.18,806.767 L1435.41,807.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.41,807.547 L1437.16,798.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.27,786.245 L1383.8,784.831" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.8,784.831 L1382.81,790.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.81,790.113 L1388.63,790.983" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.63,790.983 L1389.57,790.247" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.57,790.247 L1393.27,786.245" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.63,790.983 L1382.81,790.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.81,790.113 L1379.32,789.593" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.32,789.593 L1377.58,789.332" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.58,789.332 L1375.83,798.651" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.83,798.651 L1378.35,799.028" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.35,799.028 L1388.63,790.983" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.58,789.332 L1372.35,788.552" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.35,788.552 L1370.6,797.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.6,797.871 L1375.83,798.651" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.83,798.651 L1377.58,789.332" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.35,788.552 L1367.13,787.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.13,787.772 L1365.38,797.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.38,797.09 L1370.6,797.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.6,797.871 L1372.35,788.552" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.13,787.772 L1361.9,786.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1361.9,786.991 L1360.15,796.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1360.15,796.31 L1365.38,797.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.38,797.09 L1367.13,787.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.72,788.428 L1335.56,787.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.56,787.21 L1337.39,792.911" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.39,792.911 L1342.73,793.708" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.73,793.708 L1343.72,788.428" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.48,784.39 L1334.16,782.849" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.16,782.849 L1335.56,787.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.56,787.21 L1343.72,788.428" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.72,788.428 L1344.48,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.71,785.17 L1344.48,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.48,784.39 L1342.73,793.708" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.73,793.708 L1347.95,794.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.95,794.489 L1349.71,785.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.94,730.527 L1316.95,729.184" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.95,729.184 L1320.18,739.247" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.18,739.247 L1324.19,739.846" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.19,739.846 L1325.94,730.527" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.93,725.246 L1315.13,723.483" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.13,723.483 L1316.95,729.184" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.95,729.184 L1325.94,730.527" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.94,730.527 L1326.93,725.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.69,721.208 L1313.73,719.123" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.73,719.123 L1315.13,723.483" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.13,723.483 L1326.93,725.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.93,725.246 L1327.69,721.208" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.4,708.154 L1309.75,706.712" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.75,706.712 L1311.58,712.415" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.58,712.415 L1318.41,713.435" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.41,713.435 L1319.4,708.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.16,704.116 L1316.67,703.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.67,703.595 L1308.35,702.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.35,702.352 L1309.75,706.712" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.75,706.712 L1319.4,708.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.4,708.154 L1320.16,704.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.67,698.315 L1306.52,696.651" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.52,696.651 L1308.35,702.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.35,702.352 L1316.67,703.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.67,703.595 L1317.67,698.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.91,694.797 L1318.43,694.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.43,694.277 L1317.67,698.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.67,698.315 L1316.67,703.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.67,703.595 L1320.16,704.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.16,704.116 L1321.91,694.797" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.43,694.277 L1305.12,692.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.12,692.29 L1306.52,696.651" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.52,696.651 L1317.67,698.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.67,698.315 L1318.43,694.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.33,661.133 L1306.84,660.613" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.84,660.613 L1306.1,664.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.1,664.627 L1305.12,669.945" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.12,669.945 L1308.57,670.452" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.57,670.452 L1310.33,661.133" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.84,660.613 L1294.37,658.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1294.37,658.75 L1295.77,663.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.77,663.111 L1306.1,664.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.1,664.627 L1306.84,660.613" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.1,664.627 L1295.77,663.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.77,663.111 L1297.6,668.842" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.6,668.842 L1305.12,669.945" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.12,669.945 L1306.1,664.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.57,670.452 L1297.6,668.842" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.6,668.842 L1299,673.202" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299,673.202 L1307.81,674.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.81,674.518 L1308.57,670.452" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.81,674.518 L1299,673.202" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299,673.202 L1300.82,678.874" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.82,678.874 L1306.82,679.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.82,679.771 L1307.81,674.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.55,647.559 L1290.39,646.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.39,646.34 L1292.22,652.042" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.22,652.042 L1297.56,652.839" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.56,652.839 L1298.55,647.559" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.31,643.521 L1295.82,643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.82,643 L1288.99,641.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1288.99,641.979 L1290.39,646.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.39,646.34 L1298.55,647.559" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.55,647.559 L1299.31,643.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.82,637.72 L1287.16,636.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.16,636.277 L1288.99,641.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1288.99,641.979 L1295.82,643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.82,643 L1296.82,637.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.57,633.682 L1285.76,631.918" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1285.76,631.918 L1287.16,636.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.16,636.277 L1296.82,637.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.82,637.72 L1297.57,633.682" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.06,634.202 L1297.57,633.682" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.57,633.682 L1295.82,643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.82,643 L1299.31,643.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.31,643.521 L1301.06,634.202" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.52,617.11 L1290.04,616.589" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.04,616.589 L1286.56,616.069" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286.56,616.069 L1280.39,615.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.39,615.147 L1281.78,619.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1281.78,619.508 L1292.76,621.148" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.76,621.148 L1293.52,617.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.27,607.791 L1291.79,607.271" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.79,607.271 L1290.04,616.589" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.04,616.589 L1293.52,617.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.52,617.11 L1295.27,607.791" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.79,607.271 L1288.31,606.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1288.31,606.75 L1287.55,610.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.55,610.789 L1286.56,616.069" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286.56,616.069 L1290.04,616.589" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.04,616.589 L1291.79,607.271" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.55,610.789 L1278.56,609.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1278.56,609.446 L1280.39,615.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.39,615.147 L1286.56,616.069" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286.56,616.069 L1287.55,610.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1288.31,606.75 L1277.16,605.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1277.16,605.085 L1278.56,609.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1278.56,609.446 L1287.55,610.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.55,610.789 L1288.31,606.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1283.5,594.216 L1273.18,592.676" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1273.18,592.676 L1275.01,598.377" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1275.01,598.377 L1282.51,599.497" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1282.51,599.497 L1283.5,594.216" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1284.26,590.178 L1280.77,589.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.77,589.658 L1275.55,588.877" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1275.55,588.877 L1271.78,588.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1271.78,588.315 L1273.18,592.676" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1273.18,592.676 L1283.5,594.216" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.96,765.783 L1390.38,768.889" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.38,768.889 L1404.2,770.953" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.2,770.953 L1405.65,767.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.94,764.975 L1395.03,763.197" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.03,763.197 L1394.44,766.303" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.44,766.303 L1405.65,767.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.65,767.977 L1406.94,764.975" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.07,761.951 L1395.61,760.091" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.61,760.091 L1395.03,763.197" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.03,763.197 L1406.94,764.975" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.94,764.975 L1408.07,761.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.04,758.902 L1396.19,756.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.19,756.985 L1395.61,760.091" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.61,760.091 L1408.07,761.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.07,761.951 L1409.04,758.902" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.96,765.783 L1387.48,765.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.48,765.263 L1385.72,774.582" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.72,774.582 L1389.21,775.102" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.21,775.102 L1390.96,765.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.48,765.263 L1383.99,764.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.99,764.743 L1382.24,774.061" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.24,774.061 L1385.72,774.582" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.72,774.582 L1387.48,765.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.99,764.743 L1380.51,764.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.51,764.222 L1378.76,773.541" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.76,773.541 L1382.24,774.061" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.24,774.061 L1383.99,764.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.51,764.222 L1377.02,763.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.02,763.702 L1376.44,766.808" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.44,766.808 L1375.85,769.914" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.85,769.914 L1375.27,773.021" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.27,773.021 L1378.76,773.541" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.76,773.541 L1380.51,764.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.19,756.985 L1392.71,756.464" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.71,756.464 L1390.96,765.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.96,765.783 L1394.44,766.303" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.44,766.303 L1396.19,756.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.71,756.464 L1389.23,755.944" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.23,755.944 L1387.48,765.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.48,765.263 L1390.96,765.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.96,765.783 L1392.71,756.464" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.23,755.944 L1385.74,755.424" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.74,755.424 L1383.99,764.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.99,764.743 L1387.48,765.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.48,765.263 L1389.23,755.944" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.74,755.424 L1382.26,754.903" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.26,754.903 L1380.51,764.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.51,764.222 L1383.99,764.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.99,764.743 L1385.74,755.424" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.26,754.903 L1378.77,754.383" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.77,754.383 L1378.19,757.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.19,757.489 L1377.61,760.596" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.61,760.596 L1377.02,763.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.02,763.702 L1380.51,764.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.51,764.222 L1382.26,754.903" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.85,769.914 L1365.4,768.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.4,768.354 L1364.82,771.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.82,771.46 L1375.27,773.021" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.27,773.021 L1375.85,769.914" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.44,766.808 L1365.99,765.247" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.99,765.247 L1365.4,768.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.4,768.354 L1375.85,769.914" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.85,769.914 L1376.44,766.808" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.02,763.702 L1366.57,762.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.57,762.141 L1365.99,765.247" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.99,765.247 L1376.44,766.808" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.44,766.808 L1377.02,763.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.61,760.596 L1367.15,759.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.15,759.035 L1366.57,762.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.57,762.141 L1377.02,763.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.02,763.702 L1377.61,760.596" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.19,757.489 L1367.74,755.929" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.74,755.929 L1367.15,759.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.15,759.035 L1377.61,760.596" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.61,760.596 L1378.19,757.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.77,754.383 L1368.32,752.822" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1781.67,654.752 L1774.97,690.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1774.97,690.263 L1768.53,724.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.53,724.277 L1754.79,797.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1754.79,797.099 L1743.46,856.946" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.96,862.598 L1742.37,862.679" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.37,862.679 L1741.75,865.864" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.75,865.864 L1741.32,865.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1743.46,856.946 L1742.32,862.669" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.7,865.854 L1734.05,909.584" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1734.05,909.584 L1724.9,961.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.9,961.46 L1716.14,1011.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1719.14,1011.48 L1727.8,962.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1727.8,962.058 L1737,909.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737,909.97 L1744.71,866.337" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1744.71,866.337 L1745.16,866.416" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.16,866.416 L1745.77,863.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.77,863.198 L1745.37,863.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.37,863.163 L1746.36,857.333" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1746.36,857.333 L1757.71,797.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1757.71,797.587 L1771.41,724.922" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1771.41,724.922 L1777.89,690.723" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1777.89,690.723 L1784.59,655.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L1531.98,617.594" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L1378.34,799.062" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1659.53,1108.71 L1978.4,1158.85" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ffff" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1249.3,1249.16 L1659.07,1268.88" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1675.92,1274.47 L1662.97,1340.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1659.07,1268.88 L1650.06,1315.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1648.85,1321.36 L1645.57,1338.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.44,1318.67 L1626.6,1343.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1600.29,1276.07 L1596.78,1294.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1558.87,1326.61 L1570.95,1264.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1669.02,1350.06 L1693.68,1353.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1666.9,1360.92 L1692.04,1364.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1738.9,1319.33 L1745.76,1284.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1569.44,1345.83 L1569.24,1345.83 L1568.94,1345.73 L1568.74,1345.73 L1568.54,1345.73 L1568.24,1345.73 L1568.04,1345.73 L1567.74,1345.73 L1567.54,1345.73 L1567.24,1345.83 L1567.04,1345.83 L1566.74,1345.93 L1566.54,1345.93 L1566.34,1346.03 L1566.04,1346.03 L1565.84,1346.13 L1565.64,1346.23 L1565.34,1346.33 L1565.14,1346.43 L1564.94,1346.53 L1564.74,1346.63 L1564.54,1346.73 L1564.34,1346.83 L1564.14,1346.93 L1563.94,1347.13 L1563.74,1347.23 L1563.54,1347.33 L1563.34,1347.53 L1563.14,1347.63 L1563.04,1347.83 L1562.84,1348.03 L1562.64,1348.13 L1562.54,1348.33 L1562.44,1348.53 L1562.24,1348.73 L1562.14,1348.93 L1562.04,1349.13 L1561.94,1349.33 L1561.84,1349.53 L1561.74,1349.73 L1561.64,1349.93 L1561.54,1350.13 L1561.44,1350.33 L1561.44,1350.53 L1561.34,1350.73 L1561.34,1350.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1569.47,1345.83 L1634.29,1355.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1547.52,1384.87 L1554.34,1349.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1566.44,1324.59 L1628.42,1334.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1579.37,1291.43 L1652.48,1302.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.29,1355.87 L1634.41,1356.41 L1634.56,1356.95 L1634.73,1357.47 L1634.91,1358 L1635.12,1358.52 L1635.35,1359.03 L1635.59,1359.53 L1635.86,1360.03 L1636.15,1360.51 L1636.45,1360.99 L1636.77,1361.46 L1637.12,1361.92 L1637.48,1362.36 L1637.85,1362.8 L1638.25,1363.22 L1638.66,1363.63 L1639.08,1364.03 L1639.52,1364.41 L1639.98,1364.79 L1640.33,1365.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1669.02,1350.06 L1668.89,1349.52 L1668.75,1348.99 L1668.58,1348.46 L1668.39,1347.94 L1668.19,1347.42 L1667.96,1346.91 L1667.71,1346.4 L1667.45,1345.91 L1667.16,1345.42 L1666.85,1344.94 L1666.53,1344.48 L1666.19,1344.02 L1665.83,1343.57 L1665.45,1343.14 L1665.06,1342.71 L1664.65,1342.3 L1664.23,1341.9 L1663.78,1341.52 L1663.33,1341.15 L1662.97,1340.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1645.57,1338.18 L1644.99,1338.38 L1644.43,1338.6 L1643.87,1338.83 L1643.32,1339.08 L1642.78,1339.35 L1642.25,1339.63 L1641.74,1339.93 L1641.23,1340.25 L1640.74,1340.58 L1640.26,1340.93 L1639.8,1341.29 L1639.35,1341.67 L1638.91,1342.06 L1638.49,1342.46 L1638.09,1342.88 L1637.7,1343.3 L1637.33,1343.74 L1636.98,1344.19 L1636.65,1344.66 L1636.41,1345.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1657.74,1367.75 L1658.31,1367.55 L1658.88,1367.34 L1659.44,1367.1 L1659.99,1366.85 L1660.53,1366.58 L1661.05,1366.3 L1661.57,1366 L1662.07,1365.68 L1662.57,1365.35 L1663.04,1365 L1663.51,1364.64 L1663.96,1364.27 L1664.39,1363.88 L1664.81,1363.47 L1665.22,1363.06 L1665.6,1362.63 L1665.97,1362.19 L1666.32,1361.74 L1666.66,1361.28 L1666.9,1360.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1747.51,1372.09 L1685.39,1384.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1606.93,1395.79 L1636.47,1396.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.15,1397.02 L1687.68,1397.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1606.93,1395.79 L1636.47,1396.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1563.71,1301.79 L1650.06,1315.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.41,1345.01 L1571.59,1334.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1565.84,1327.73 L1565.84,1327.93 L1565.74,1328.13 L1565.74,1328.33 L1565.74,1328.53 L1565.74,1328.83 L1565.74,1329.03 L1565.74,1329.23 L1565.74,1329.43 L1565.84,1329.63 L1565.84,1329.83 L1565.94,1330.13 L1565.94,1330.33 L1566.04,1330.53 L1566.04,1330.73 L1566.14,1330.93 L1566.24,1331.13 L1566.34,1331.33 L1566.44,1331.53 L1566.54,1331.73 L1566.64,1331.93 L1566.84,1332.13 L1566.94,1332.33 L1567.14,1332.53 L1567.24,1332.63 L1567.44,1332.83 L1567.54,1333.03 L1567.74,1333.13 L1567.94,1333.33 L1568.04,1333.43 L1568.24,1333.63 L1568.44,1333.73 L1568.64,1333.83 L1568.84,1334.03 L1569.04,1334.13 L1569.24,1334.23 L1569.54,1334.33 L1569.74,1334.43 L1569.94,1334.53 L1570.14,1334.63 L1570.44,1334.73 L1570.64,1334.73 L1570.84,1334.83 L1571.14,1334.93 L1571.34,1334.93 L1571.64,1334.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1565.84,1327.69 L1568.26,1315.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1576.44,1310.13 L1576.14,1310.13 L1575.94,1310.13 L1575.74,1310.03 L1575.44,1310.03 L1575.24,1310.03 L1574.94,1310.03 L1574.74,1310.03 L1574.44,1310.13 L1574.24,1310.13 L1573.94,1310.13 L1573.74,1310.23 L1573.54,1310.23 L1573.24,1310.33 L1573.04,1310.33 L1572.74,1310.43 L1572.54,1310.53 L1572.34,1310.63 L1572.14,1310.73 L1571.84,1310.83 L1571.64,1310.93 L1571.44,1311.03 L1571.24,1311.13 L1571.04,1311.23 L1570.84,1311.43 L1570.64,1311.53 L1570.44,1311.73 L1570.34,1311.83 L1570.14,1312.03 L1569.94,1312.13 L1569.84,1312.33 L1569.64,1312.53 L1569.54,1312.63 L1569.34,1312.83 L1569.24,1313.03 L1569.14,1313.23 L1568.94,1313.43 L1568.84,1313.63 L1568.74,1313.83 L1568.64,1314.03 L1568.54,1314.23 L1568.54,1314.43 L1568.44,1314.63 L1568.34,1314.83 L1568.34,1315.03 L1568.24,1315.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1576.43,1310.15 L1648.85,1321.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1630.23,1324.88 L1647.64,1327.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1570.95,1264.65 L1563.71,1301.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1563.71,1301.79 L1594.36,1306.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1594.36,1306.53 L1602.23,1266.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1755.68,1389.84 L1695.12,1401.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1752.58,1384 L1693.6,1395.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.34,1373.1 L1745.37,1385.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737.16,1374.12 L1740.19,1386.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.98,1375.13 L1735.01,1387.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1726.81,1376.14 L1729.84,1388.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721.63,1377.16 L1724.66,1389.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1716.45,1378.17 L1719.48,1390.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1711.28,1379.18 L1714.31,1391.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1706.1,1380.2 L1709.13,1392.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.92,1381.21 L1703.95,1393.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.75,1382.22 L1698.78,1394.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1690.57,1383.24 L1693.6,1395.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1685.39,1384.25 L1689.26,1364.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737.16,1374.12 L1734.92,1362.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1726.81,1376.14 L1724.42,1363.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1716.45,1378.17 L1715.01,1365.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1706.1,1380.2 L1706.35,1365.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.75,1382.22 L1698.1,1365.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1679.12,1313.27 L1668.67,1311.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1678.51,1316.37 L1668.07,1314.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.7,1325.68 L1666.25,1324.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.67,1336.07 L1664.23,1334.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1746.93,1278.13 L1738.9,1319.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1738.9,1319.33 L1741.81,1322.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1747.51,1372.09 L1685.39,1384.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1644.83,1314.35 L1647.25,1301.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1639.61,1313.54 L1642.03,1301.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.39,1312.73 L1636.81,1300.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1629.17,1311.92 L1631.59,1299.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1623.95,1311.12 L1626.37,1298.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1618.73,1310.31 L1621.14,1297.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1613.5,1309.5 L1615.92,1297.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1608.28,1308.69 L1610.7,1296.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1603.06,1307.88 L1605.48,1295.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.09,1328.78 L1665.65,1327.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1679.12,1313.27 L1668.67,1311.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1668.67,1311.65 L1662.97,1340.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1562.44,1394.63 L1636.47,1396.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1561.3,1350.96 L1554.48,1385.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1535.05,1400.84 L1535.2,1401.27 L1535.36,1401.68 L1535.53,1402.09 L1535.72,1402.5 L1535.93,1402.9 L1536.15,1403.29 L1536.39,1403.68 L1536.64,1404.05 L1536.91,1404.42 L1537.19,1404.79 L1537.48,1405.14 L1537.79,1405.48 L1538.11,1405.81 L1538.45,1406.14 L1538.8,1406.45 L1539.16,1406.75 L1539.53,1407.04 L1539.91,1407.32 L1540.3,1407.58 L1540.7,1407.84 L1541.12,1408.08 L1541.54,1408.31 L1541.97,1408.52 L1542.41,1408.72 L1542.85,1408.91 L1543.31,1409.08 L1543.77,1409.24 L1544.23,1409.39 L1544.7,1409.52 L1545.18,1409.63 L1545.66,1409.74 L1546.14,1409.82 L1546.63,1409.89 L1547.12,1409.95 L1547.61,1409.99 L1548.1,1410.01 L1548.6,1410.02 L1549.09,1410.02 L1549.58,1409.99 L1550.07,1409.96 L1550.56,1409.91 L1551.05,1409.84 L1551.54,1409.76 L1552.02,1409.66 L1552.49,1409.55 L1552.97,1409.42 L1553.43,1409.28 L1553.9,1409.12 L1554.35,1408.95 L1554.8,1408.77 L1555.24,1408.57 L1555.67,1408.36 L1556.1,1408.14 L1556.51,1407.9 L1556.92,1407.65 L1557.31,1407.38 L1557.7,1407.11 L1558.07,1406.82 L1558.43,1406.52 L1558.78,1406.21 L1559.12,1405.89 L1559.45,1405.56 L1559.76,1405.22 L1560.06,1404.87 L1560.34,1404.51 L1560.61,1404.15 L1560.87,1403.77 L1561.11,1403.39 L1561.33,1402.99 L1561.54,1402.6 L1561.74,1402.19 L1561.92,1401.78 L1562.08,1401.37 L1562.23,1400.95 L1562.23,1400.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1562.44,1394.63 L1562.32,1394.2 L1562.19,1393.78 L1562.04,1393.36 L1561.87,1392.95 L1561.69,1392.54 L1561.49,1392.14 L1561.27,1391.74 L1561.04,1391.35 L1560.8,1390.97 L1560.54,1390.6 L1560.26,1390.23 L1559.97,1389.88 L1559.67,1389.53 L1559.35,1389.19 L1559.03,1388.86 L1558.68,1388.55 L1558.33,1388.24 L1557.97,1387.94 L1557.59,1387.66 L1557.2,1387.39 L1556.8,1387.13 L1556.39,1386.88 L1555.98,1386.65 L1555.55,1386.43 L1555.12,1386.22 L1554.67,1386.02 L1554.48,1385.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.44,1318.67 L1626.6,1343.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1624.48,1317.59 L1619.64,1342.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1594.36,1306.53 L1596.78,1294.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1585.65,1305.19 L1588.07,1292.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1576.95,1303.84 L1579.37,1291.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1562.23,1400.93 L1636.29,1402.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.95,1403.31 L1682.2,1404.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.29,1402.85 L1634.93,1444.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1618.63,1402.39 L1617.51,1436.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1228.6,1320.11 L1277.03,1322.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1283.64,1329.53 L1283.64,1329.23 L1283.64,1329.03 L1283.64,1328.83 L1283.64,1328.63 L1283.64,1328.43 L1283.54,1328.13 L1283.54,1327.93 L1283.54,1327.73 L1283.44,1327.53 L1283.34,1327.33 L1283.34,1327.13 L1283.24,1326.93 L1283.14,1326.73 L1283.04,1326.53 L1282.94,1326.33 L1282.84,1326.13 L1282.64,1325.93 L1282.54,1325.73 L1282.44,1325.53 L1282.24,1325.33 L1282.14,1325.13 L1281.94,1325.03 L1281.84,1324.83 L1281.64,1324.63 L1281.44,1324.53 L1281.24,1324.33 L1281.14,1324.23 L1280.94,1324.13 L1280.74,1323.93 L1280.54,1323.83 L1280.34,1323.73 L1280.04,1323.63 L1279.84,1323.53 L1279.64,1323.43 L1279.44,1323.33 L1279.14,1323.23 L1278.94,1323.13 L1278.74,1323.13 L1278.44,1323.03 L1278.24,1322.93 L1278.04,1322.93 L1277.74,1322.83 L1277.54,1322.83 L1277.24,1322.83 L1277.04,1322.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1453.35,1332.6 L1298.19,1323.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.45,1389.58 L1459.97,1339.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1548.58,1342.6 L1501.18,1335.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.54,1333.73 L1474.24,1333.73 L1474.04,1333.73 L1473.74,1333.73 L1473.54,1333.83 L1473.24,1333.83 L1473.04,1333.83 L1472.84,1333.83 L1472.54,1333.93 L1472.34,1333.93 L1472.04,1334.03 L1471.84,1334.13 L1471.64,1334.13 L1471.34,1334.23 L1471.14,1334.33 L1470.94,1334.43 L1470.74,1334.53 L1470.54,1334.63 L1470.24,1334.73 L1470.04,1334.83 L1469.84,1335.03 L1469.64,1335.13 L1469.54,1335.23 L1469.34,1335.43 L1469.14,1335.53 L1468.94,1335.73 L1468.74,1335.93 L1468.64,1336.03 L1468.44,1336.23 L1468.34,1336.43 L1468.14,1336.63 L1468.04,1336.73 L1467.94,1336.93 L1467.84,1337.13 L1467.74,1337.33 L1467.64,1337.53 L1467.54,1337.73 L1467.44,1337.93 L1467.34,1338.13 L1467.24,1338.33 L1467.24,1338.63 L1467.14,1338.83 L1467.14,1339.03 L1467.04,1339.23 L1467.04,1339.43 L1467.04,1339.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1657.74,1367.75 L1658.31,1367.55 L1658.88,1367.34 L1659.44,1367.1 L1659.99,1366.85 L1660.53,1366.58 L1661.05,1366.3 L1661.57,1366 L1662.07,1365.68 L1662.57,1365.35 L1663.04,1365 L1663.51,1364.64 L1663.96,1364.27 L1664.39,1363.88 L1664.81,1363.47 L1665.22,1363.06 L1665.6,1362.63 L1665.97,1362.19 L1666.32,1361.74 L1666.66,1361.28 L1666.9,1360.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.95,1403.31 L1652.6,1444.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.54,1403.59 L1663.46,1436.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.95,1403.31 L1682.2,1404.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.14,1401.73 L1694.84,1401.73 L1694.64,1401.73 L1694.44,1401.83 L1694.14,1401.93 L1693.94,1401.93 L1693.64,1402.03 L1693.44,1402.13 L1693.24,1402.23 L1693.04,1402.33 L1692.84,1402.43 L1692.54,1402.53 L1692.34,1402.63 L1692.14,1402.73 L1691.94,1402.93 L1691.74,1403.03 L1691.54,1403.13 L1691.44,1403.33 L1691.24,1403.43 L1691.04,1403.63 L1690.84,1403.83 L1690.74,1403.93 L1690.54,1404.13 L1690.44,1404.33 L1690.24,1404.53 L1690.14,1404.73 L1690.04,1404.93 L1689.94,1405.03 L1689.84,1405.23 L1689.74,1405.43 L1689.64,1405.73 L1689.54,1405.93 L1689.44,1406.13 L1689.34,1406.33 L1689.34,1406.53 L1689.24,1406.73 L1689.24,1406.93 L1689.24,1407.13 L1689.14,1407.43 L1689.14,1407.63 L1689.14,1407.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1689.15,1407.74 L1688.71,1421.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.74,1421.23 L1688.74,1421.43 L1688.74,1421.63 L1688.74,1421.83 L1688.74,1422.13 L1688.74,1422.33 L1688.84,1422.53 L1688.84,1422.73 L1688.94,1422.93 L1689.04,1423.13 L1689.04,1423.43 L1689.14,1423.63 L1689.24,1423.83 L1689.34,1424.03 L1689.44,1424.23 L1689.54,1424.43 L1689.64,1424.63 L1689.84,1424.73 L1689.94,1424.93 L1690.04,1425.13 L1690.24,1425.33 L1690.34,1425.43 L1690.54,1425.63 L1690.74,1425.83 L1690.94,1425.93 L1691.04,1426.13 L1691.24,1426.23 L1691.44,1426.43 L1691.64,1426.53 L1691.84,1426.63 L1692.04,1426.73 L1692.24,1426.83 L1692.54,1427.03 L1692.74,1427.03 L1692.94,1427.13 L1693.14,1427.23 L1693.44,1427.33 L1693.64,1427.43 L1693.84,1427.43 L1694.14,1427.53 L1694.34,1427.53 L1694.54,1427.63 L1694.84,1427.63 L1695.04,1427.63 L1695.34,1427.73 L1695.54,1427.73 L1695.84,1427.73 L1696.04,1427.73 L1696.14,1427.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1681.65,1421.04 L1681.64,1421.47 L1681.65,1421.91 L1681.68,1422.35 L1681.72,1422.79 L1681.79,1423.22 L1681.87,1423.66 L1681.96,1424.09 L1682.08,1424.51 L1682.2,1424.94 L1682.35,1425.36 L1682.51,1425.77 L1682.69,1426.18 L1682.89,1426.58 L1683.1,1426.98 L1683.32,1427.37 L1683.56,1427.75 L1683.82,1428.13 L1684.09,1428.49 L1684.37,1428.85 L1684.67,1429.2 L1684.98,1429.54 L1685.31,1429.87 L1685.65,1430.19 L1686,1430.5 L1686.36,1430.8 L1686.73,1431.08 L1687.11,1431.36 L1687.51,1431.62 L1687.91,1431.87 L1688.33,1432.11 L1688.75,1432.33 L1689.18,1432.54 L1689.62,1432.74 L1690.07,1432.92 L1690.52,1433.09 L1690.98,1433.25 L1691.45,1433.39 L1691.92,1433.52 L1692.4,1433.63 L1692.88,1433.72 L1693.36,1433.81 L1693.85,1433.87 L1694.34,1433.92 L1694.83,1433.96 L1695.32,1433.98 L1695.81,1433.99 L1696.3,1433.98 L1696.8,1433.95 L1697.17,1433.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1682.2,1404.05 L1681.65,1421.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.89,1415.81 L1763.09,1401.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1746.88,1391.56 L1753.19,1417.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1752.06,1390.55 L1758.24,1415.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1760.27,1401.84 L1763.28,1414.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.71,1392.58 L1748.04,1418.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1736.53,1393.59 L1742.89,1419.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.35,1394.6 L1737.74,1420.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1726.18,1395.62 L1732.59,1421.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721,1396.63 L1727.44,1422.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1715.82,1397.64 L1722.28,1423.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1710.65,1398.65 L1717.13,1424.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1705.47,1399.67 L1711.87,1425.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.29,1400.68 L1706.61,1426.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.12,1401.69 L1701.35,1427.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1692.97,1415.01 L1696.09,1427.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.86,1416.01 L1618.2,1415.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.65,1422.31 L1617.99,1421.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.44,1428.61 L1617.78,1428.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.06,1409.72 L1618.4,1409.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.74,1409.61 L1664.34,1409.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.53,1415.9 L1664.13,1416.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.33,1422.2 L1663.92,1422.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.12,1428.5 L1663.72,1428.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.12,1428.5 L1663.72,1428.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.28,1431.43 L1635.17,1437" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.26,1402.35 L1458.28,1431.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1554.34,1349.93 L1554.34,1349.63 L1554.44,1349.43 L1554.44,1349.23 L1554.44,1349.03 L1554.44,1348.83 L1554.44,1348.53 L1554.44,1348.33 L1554.44,1348.13 L1554.34,1347.93 L1554.34,1347.73 L1554.24,1347.43 L1554.24,1347.23 L1554.14,1347.03 L1554.14,1346.83 L1554.04,1346.63 L1553.94,1346.43 L1553.84,1346.23 L1553.74,1346.03 L1553.64,1345.83 L1553.44,1345.63 L1553.34,1345.43 L1553.24,1345.23 L1553.04,1345.13 L1552.94,1344.93 L1552.74,1344.73 L1552.64,1344.53 L1552.44,1344.43 L1552.24,1344.23 L1552.14,1344.13 L1551.94,1343.93 L1551.74,1343.83 L1551.54,1343.73 L1551.34,1343.53 L1551.14,1343.43 L1550.94,1343.33 L1550.64,1343.23 L1550.44,1343.13 L1550.24,1343.03 L1550.04,1342.93 L1549.74,1342.93 L1549.54,1342.83 L1549.34,1342.73 L1549.04,1342.73 L1548.84,1342.63 L1548.54,1342.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.26,1402.35 L1535.05,1400.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.02,1339.67 L1463.68,1387.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.64,1387.43 L1463.64,1387.73 L1463.64,1387.93 L1463.64,1388.23 L1463.74,1388.53 L1463.74,1388.83 L1463.74,1389.03 L1463.84,1389.33 L1463.84,1389.63 L1463.94,1389.83 L1464.04,1390.13 L1464.14,1390.43 L1464.24,1390.63 L1464.34,1390.93 L1464.44,1391.13 L1464.64,1391.43 L1464.74,1391.63 L1464.84,1391.93 L1465.04,1392.13 L1465.24,1392.33 L1465.44,1392.63 L1465.54,1392.83 L1465.74,1393.03 L1465.94,1393.23 L1466.24,1393.43 L1466.44,1393.63 L1466.64,1393.83 L1466.84,1394.03 L1467.14,1394.13 L1467.34,1394.33 L1467.64,1394.43 L1467.84,1394.63 L1468.14,1394.73 L1468.44,1394.93 L1468.64,1395.03 L1468.94,1395.13 L1469.24,1395.23 L1469.54,1395.33 L1469.84,1395.43 L1470.14,1395.53 L1470.44,1395.53 L1470.74,1395.63 L1471.04,1395.63 L1471.34,1395.73 L1471.64,1395.73 L1471.94,1395.73 L1472.24,1395.83 L1472.54,1395.83 L1472.74,1395.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.7,1395.78 L1534.9,1394.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1547.52,1384.87 L1547.03,1384.91 L1546.54,1384.97 L1546.05,1385.04 L1545.57,1385.13 L1545.09,1385.23 L1544.61,1385.35 L1544.14,1385.49 L1543.68,1385.63 L1543.22,1385.8 L1542.77,1385.97 L1542.32,1386.16 L1541.89,1386.37 L1541.46,1386.58 L1541.04,1386.81 L1540.63,1387.06 L1540.23,1387.31 L1539.84,1387.58 L1539.46,1387.86 L1539.09,1388.15 L1538.73,1388.46 L1538.38,1388.77 L1538.05,1389.1 L1537.73,1389.43 L1537.43,1389.78 L1537.13,1390.13 L1536.85,1390.49 L1536.59,1390.86 L1536.34,1391.24 L1536.11,1391.63 L1535.89,1392.02 L1535.68,1392.42 L1535.5,1392.83 L1535.32,1393.24 L1535.17,1393.66 L1535.03,1394.08 L1534.91,1394.51 L1534.9,1394.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1547.61,1409.99 L1546.82,1434.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.8,1365.32 L1550.26,1370.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1528.93,1339.56 L1518.33,1394.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.8,1365.32 L1490.72,1395.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.32,1364.01 L1495.8,1365.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1228.6,1320.11 L1277.03,1322.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1283.64,1329.48 L1280.12,1379.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.12,1379.78 L1280.1,1380.22 L1280.1,1380.66 L1280.11,1381.1 L1280.14,1381.53 L1280.19,1381.97 L1280.25,1382.41 L1280.33,1382.84 L1280.43,1383.27 L1280.54,1383.7 L1280.67,1384.12 L1280.82,1384.54 L1280.99,1384.96 L1281.17,1385.37 L1281.36,1385.77 L1281.57,1386.17 L1281.8,1386.56 L1282.04,1386.94 L1282.3,1387.32 L1282.57,1387.68 L1282.86,1388.04 L1283.16,1388.39 L1283.47,1388.73 L1283.8,1389.06 L1284.14,1389.38 L1284.49,1389.69 L1284.85,1389.99 L1285.23,1390.27 L1285.61,1390.55 L1286.01,1390.81 L1286.42,1391.06 L1286.83,1391.29 L1287.26,1391.52 L1287.69,1391.73 L1288.13,1391.92 L1288.58,1392.11 L1289.03,1392.28 L1289.5,1392.43 L1289.96,1392.57 L1290.44,1392.7 L1290.91,1392.81 L1291.4,1392.9 L1291.88,1392.98 L1292.37,1393.05 L1292.86,1393.1 L1293.35,1393.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.35,1393.13 L1459.26,1402.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.94,1339.23 L1459.94,1339.03 L1459.94,1338.83 L1459.94,1338.63 L1459.94,1338.43 L1459.94,1338.23 L1459.94,1337.93 L1459.84,1337.73 L1459.84,1337.53 L1459.74,1337.33 L1459.74,1337.13 L1459.64,1336.93 L1459.54,1336.73 L1459.44,1336.53 L1459.34,1336.33 L1459.24,1336.13 L1459.14,1335.93 L1459.04,1335.73 L1458.84,1335.53 L1458.74,1335.33 L1458.64,1335.13 L1458.44,1334.93 L1458.34,1334.83 L1458.14,1334.63 L1457.94,1334.43 L1457.74,1334.33 L1457.64,1334.13 L1457.44,1334.03 L1457.24,1333.93 L1457.04,1333.73 L1456.84,1333.63 L1456.64,1333.53 L1456.44,1333.43 L1456.14,1333.33 L1455.94,1333.23 L1455.74,1333.13 L1455.54,1333.03 L1455.24,1332.93 L1455.04,1332.93 L1454.84,1332.83 L1454.54,1332.73 L1454.34,1332.73 L1454.14,1332.63 L1453.84,1332.63 L1453.64,1332.63 L1453.34,1332.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.24,1323.93 L1297.94,1323.93 L1297.74,1323.93 L1297.44,1323.93 L1297.24,1324.03 L1296.94,1324.03 L1296.74,1324.03 L1296.44,1324.03 L1296.24,1324.13 L1295.94,1324.13 L1295.74,1324.23 L1295.54,1324.33 L1295.24,1324.33 L1295.04,1324.43 L1294.84,1324.53 L1294.64,1324.63 L1294.34,1324.73 L1294.14,1324.83 L1293.94,1324.93 L1293.74,1325.03 L1293.54,1325.23 L1293.34,1325.33 L1293.14,1325.43 L1292.94,1325.63 L1292.84,1325.73 L1292.64,1325.93 L1292.44,1326.13 L1292.34,1326.23 L1292.14,1326.43 L1292.04,1326.63 L1291.84,1326.83 L1291.74,1326.93 L1291.64,1327.13 L1291.44,1327.33 L1291.34,1327.53 L1291.24,1327.73 L1291.14,1327.93 L1291.14,1328.13 L1291.04,1328.33 L1290.94,1328.53 L1290.84,1328.83 L1290.84,1329.03 L1290.74,1329.23 L1290.74,1329.43 L1290.74,1329.63 L1290.74,1329.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.7,1329.87 L1287.18,1380.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.14,1380.13 L1287.14,1380.43 L1287.14,1380.63 L1287.14,1380.83 L1287.14,1381.03 L1287.24,1381.23 L1287.24,1381.53 L1287.24,1381.73 L1287.34,1381.93 L1287.34,1382.13 L1287.44,1382.33 L1287.54,1382.53 L1287.64,1382.73 L1287.74,1382.93 L1287.84,1383.13 L1287.94,1383.33 L1288.04,1383.53 L1288.14,1383.73 L1288.24,1383.93 L1288.44,1384.13 L1288.54,1384.33 L1288.74,1384.43 L1288.84,1384.63 L1289.04,1384.83 L1289.14,1384.93 L1289.34,1385.13 L1289.54,1385.23 L1289.74,1385.43 L1289.94,1385.53 L1290.14,1385.73 L1290.34,1385.83 L1290.54,1385.93 L1290.74,1386.03 L1290.94,1386.13 L1291.14,1386.23 L1291.44,1386.33 L1291.64,1386.43 L1291.84,1386.53 L1292.14,1386.53 L1292.34,1386.63 L1292.54,1386.73 L1292.84,1386.73 L1293.04,1386.73 L1293.34,1386.83 L1293.54,1386.83 L1293.84,1386.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.79,1386.85 L1448.96,1395.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.94,1395.43 L1449.24,1395.43 L1449.44,1395.53 L1449.74,1395.43 L1449.94,1395.43 L1450.24,1395.43 L1450.44,1395.43 L1450.64,1395.33 L1450.94,1395.33 L1451.14,1395.33 L1451.44,1395.23 L1451.64,1395.13 L1451.84,1395.13 L1452.14,1395.03 L1452.34,1394.93 L1452.54,1394.83 L1452.74,1394.73 L1452.94,1394.63 L1453.24,1394.53 L1453.44,1394.33 L1453.64,1394.23 L1453.84,1394.13 L1453.94,1393.93 L1454.14,1393.83 L1454.34,1393.63 L1454.54,1393.53 L1454.64,1393.33 L1454.84,1393.23 L1455.04,1393.03 L1455.14,1392.83 L1455.24,1392.63 L1455.44,1392.43 L1455.54,1392.33 L1455.64,1392.13 L1455.74,1391.93 L1455.84,1391.73 L1455.94,1391.53 L1456.04,1391.33 L1456.14,1391.13 L1456.24,1390.83 L1456.24,1390.63 L1456.34,1390.43 L1456.34,1390.23 L1456.44,1390.03 L1456.44,1389.83 L1456.44,1389.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.45,1389.57 L1459.97,1339.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.36,1400.58 L1425.28,1430.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.02,1399.9 L1412.91,1430" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.67,1399.21 L1400.55,1429.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.33,1398.52 L1388.18,1429.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.99,1397.84 L1375.82,1428.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.65,1397.15 L1363.46,1428.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.3,1396.47 L1351.09,1428.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.96,1395.78 L1338.73,1427.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.62,1395.09 L1326.37,1427.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.27,1394.41 L1314,1426.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.35,1393.13 L1290.99,1426.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.64,1426.49 L1425.28,1430.39" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#828282" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1970.26,1313.17 L1974.61,1341.98" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ffff" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1230.54,1248.26 L1659.07,1268.88" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1659.07,1268.88 L1602.23,1266.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1652.48,1302.75 L1659.07,1268.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.85,1270.89 L1682.23,1270" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1675.92,1274.47 L1668.67,1311.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.23,1334.46 L1662.97,1340.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1668.67,1311.65 L1668.07,1314.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1970.26,1313.17 L1975.36,1346.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1630.23,1324.88 L1626.6,1343.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.44,1318.67 L1630.23,1324.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1624.48,1317.59 L1619.64,1342.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1617.52,1316.51 L1612.68,1341.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1610.55,1315.43 L1605.72,1340.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1603.59,1314.36 L1598.75,1339.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1596.63,1313.28 L1591.79,1338.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1589.67,1312.2 L1584.83,1337.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1582.7,1311.12 L1577.87,1335.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1713.62,1354.18 L1742.18,1350.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1715.01,1365.14 L1744.3,1361.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1602.23,1266.15 L1570.95,1264.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.85,1270.89 L1682.23,1270" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.86,1295.2 L1663.73,1295.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.88,1295.11 L1663.58,1295.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.9,1295.01 L1663.43,1295.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.92,1294.91 L1663.29,1295.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.93,1294.82 L1663.14,1295.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.95,1294.72 L1662.99,1295.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.97,1294.62 L1662.85,1295.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.99,1294.52 L1662.7,1295.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.01,1294.43 L1662.55,1295.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.03,1294.33 L1662.41,1295.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.05,1294.23 L1662.28,1295.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.07,1294.14 L1662.11,1295.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.09,1294.04 L1662.11,1294.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.02,1293.98 L1662.13,1294.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.88,1293.96 L1662.14,1294.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.73,1293.94 L1662.16,1294.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.59,1293.91 L1662.18,1294.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.44,1293.89 L1662.2,1294.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.3,1293.87 L1662.21,1294.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.15,1293.84 L1662.23,1294.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.01,1293.82 L1662.25,1294.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.86,1293.8 L1662.27,1294.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.72,1293.78 L1662.28,1293.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.57,1293.75 L1662.54,1293.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.45,1293.81 L1662.3,1293.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.41,1293.74 L1662.32,1293.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.97,1352.87 L1662.91,1351.88 L1662.74,1350.9 L1662.45,1349.94 L1662.07,1349.02 L1661.59,1348.12 L1661.01,1347.28 L1660.34,1346.49 L1659.58,1345.76 L1658.75,1345.1 L1657.85,1344.52 L1656.89,1344.02 L1655.88,1343.61 L1654.83,1343.28 L1653.75,1343.05 L1652.65,1342.92 L1651.54,1342.88 L1650.43,1342.93 L1649.34,1343.09 L1648.26,1343.34 L1647.22,1343.68 L1646.22,1344.11 L1645.27,1344.63 L1644.39,1345.23 L1643.57,1345.9 L1642.83,1346.64 L1642.18,1347.44 L1641.62,1348.3 L1641.15,1349.2 L1640.79,1350.13 L1640.53,1351.09 L1640.38,1352.07 L1640.33,1353.06 L1640.4,1354.05 L1640.57,1355.03 L1640.85,1355.99 L1641.24,1356.92 L1641.72,1357.81 L1642.3,1358.65 L1642.97,1359.44 L1643.73,1360.17 L1644.56,1360.83 L1645.45,1361.41 L1646.41,1361.91 L1647.42,1362.33 L1648.47,1362.65 L1649.55,1362.88 L1650.65,1363.02 L1651.76,1363.06 L1652.87,1363 L1653.97,1362.85 L1655.04,1362.6 L1656.09,1362.25 L1657.09,1361.82 L1658.03,1361.3 L1658.92,1360.71 L1659.74,1360.03 L1660.47,1359.29 L1661.13,1358.49 L1661.69,1357.64 L1662.15,1356.74 L1662.52,1355.8 L1662.78,1354.84 L1662.93,1353.86 L1662.97,1352.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.84,1295.28 L1664.1,1293.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.84,1295.28 L1662.09,1295.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.09,1295.02 L1662.33,1293.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.06,1293.32 L1664.55,1293.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.55,1293.7 L1664.16,1295.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1661.67,1295.3 L1664.16,1295.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1662.06,1293.32 L1661.67,1295.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.88,1293.86 L1671.1,1296.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1671.27,1295.54 L1655.04,1293.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1781.67,654.752 L1774.97,690.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1774.97,690.263 L1768.53,724.277" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.53,724.277 L1754.79,797.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1754.79,797.099 L1743.46,856.946" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.96,862.598 L1742.37,862.679" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.37,862.679 L1741.75,865.864" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.75,865.864 L1741.32,865.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1743.46,856.946 L1742.32,862.669" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.7,865.854 L1734.05,909.584" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1734.05,909.584 L1724.9,961.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1719.14,1011.48 L1727.8,962.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1727.8,962.058 L1737,909.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737,909.97 L1744.71,866.337" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1744.71,866.337 L1745.16,866.416" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.16,866.416 L1745.77,863.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.77,863.198 L1745.37,863.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1745.37,863.163 L1746.36,857.333" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1746.36,857.333 L1757.71,797.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1757.71,797.587 L1771.41,724.922" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1771.41,724.922 L1777.89,690.723" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1777.89,690.723 L1784.59,655.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1587.25,1587.02 L1626.16,1586.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.27,1578.02 L1633.73,1578.29 L1633.21,1578.59 L1632.7,1578.89 L1632.2,1579.21 L1631.71,1579.55 L1631.24,1579.9 L1630.78,1580.27 L1630.33,1580.65 L1629.9,1581.05 L1629.49,1581.45 L1629.09,1581.87 L1628.71,1582.31 L1628.35,1582.75 L1628,1583.21 L1627.67,1583.67 L1627.36,1584.15 L1627.07,1584.63 L1626.8,1585.12 L1626.55,1585.63 L1626.32,1586.14 L1626.16,1586.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.27,1578.02 L1635.74,1510.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.51,1506.38 L1651.93,1578.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1660.44,1592.69 L1660.46,1592.14 L1660.46,1591.59 L1660.44,1591.04 L1660.4,1590.5 L1660.34,1589.95 L1660.26,1589.4 L1660.15,1588.86 L1660.03,1588.33 L1659.88,1587.79 L1659.71,1587.26 L1659.52,1586.74 L1659.32,1586.22 L1659.09,1585.71 L1658.84,1585.21 L1658.57,1584.71 L1658.28,1584.23 L1657.98,1583.75 L1657.65,1583.28 L1657.31,1582.83 L1656.95,1582.38 L1656.57,1581.95 L1656.18,1581.52 L1655.76,1581.11 L1655.34,1580.72 L1654.9,1580.33 L1654.44,1579.96 L1653.97,1579.61 L1653.48,1579.27 L1652.99,1578.94 L1652.48,1578.64 L1651.95,1578.34 L1651.93,1578.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1660.44,1592.69 L1688.01,1603.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.21,1615.6 L1655.47,1602.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1626.34,1597.54 L1626.57,1598.05 L1626.83,1598.55 L1627.1,1599.04 L1627.39,1599.52 L1627.71,1600 L1628.04,1600.46 L1628.38,1600.92 L1628.75,1601.36 L1629.13,1601.79 L1629.53,1602.21 L1629.95,1602.62 L1630.38,1603.01 L1630.82,1603.39 L1631.28,1603.75 L1631.76,1604.1 L1632.25,1604.44 L1632.75,1604.76 L1633.26,1605.07 L1633.78,1605.35 L1634.32,1605.63 L1634.87,1605.88 L1635.42,1606.12 L1635.99,1606.34 L1636.56,1606.54 L1637.14,1606.73 L1637.73,1606.9 L1638.32,1607.04 L1638.92,1607.17 L1639.53,1607.29 L1640.13,1607.38 L1640.74,1607.45 L1641.36,1607.51 L1641.97,1607.54 L1642.59,1607.56 L1643.21,1607.55 L1643.82,1607.53 L1644.44,1607.49 L1645.05,1607.43 L1645.66,1607.35 L1646.27,1607.25 L1646.87,1607.13 L1647.47,1607 L1648.06,1606.84 L1648.65,1606.67 L1649.22,1606.48 L1649.79,1606.27 L1650.36,1606.04 L1650.91,1605.8 L1651.45,1605.54 L1651.98,1605.26 L1652.51,1604.97 L1653.01,1604.66 L1653.51,1604.33 L1653.99,1603.99 L1654.47,1603.64 L1654.92,1603.27 L1655.36,1602.88 L1655.47,1602.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.01,1483.83 L1653.51,1506.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.74,1510.79 L1636.33,1483.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.33,1483.93 L1636.51,1476.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.17,1476.4 L1654.01,1483.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1693.33,1605.56 L1695.41,1606.34 L1697.51,1607.05 L1699.64,1607.69 L1701.8,1608.26 L1703.98,1608.77 L1706.17,1609.21 L1708.38,1609.59 L1710.61,1609.89 L1712.84,1610.12 L1715.09,1610.29 L1717.34,1610.38 L1719.59,1610.41 L1721.84,1610.36 L1724.09,1610.25 L1726.33,1610.06 L1728.56,1609.81 L1730.78,1609.48 L1732.99,1609.09 L1735.18,1608.63 L1737.35,1608.1 L1739.5,1607.5 L1741.62,1606.84 L1742.2,1606.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.36,1615.66 L1690.83,1616.58 L1693.34,1617.42 L1695.88,1618.19 L1698.45,1618.88 L1701.05,1619.48 L1703.66,1620.01 L1706.3,1620.45 L1708.95,1620.81 L1711.62,1621.09 L1714.29,1621.29 L1716.97,1621.4 L1719.65,1621.43 L1722.33,1621.38 L1725.01,1621.24 L1727.68,1621.02 L1730.34,1620.71 L1732.99,1620.33 L1735.62,1619.86 L1738.23,1619.31 L1740.82,1618.68 L1743.38,1617.97 L1745.91,1617.18 L1747.24,1616.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.01,1603.48 L1693.33,1605.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1567.37,1598.31 L1555.45,1737.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1626.34,1597.54 L1567.37,1598.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1587.25,1587.02 L1626.16,1586.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.27,1578.02 L1635.74,1510.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1660.44,1592.69 L1688.01,1603.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.17,1476.4 L1654.01,1483.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.01,1603.48 L1693.33,1605.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.36,1615.66 L1688.21,1615.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1886.32,1664.22 L1724.8,1621.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1587.25,1587.02 L1587.43,1598.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2250.82,1324.52 L2236.68,1323.53 L2222.51,1322.99 L2208.33,1322.89 L2194.15,1323.23 L2180,1324.01 L2167.38,1325.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2254.07,1324.81 L2250.82,1324.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2257.59,1325.14 L2254.07,1324.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2260.82,1325.47 L2257.59,1325.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2264.4,1325.85 L2260.82,1325.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2267.6,1326.21 L2264.4,1325.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2271.27,1326.63 L2267.6,1326.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2274.33,1326.99 L2271.27,1326.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2278.18,1327.46 L2274.33,1326.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2280.5,1327.74 L2278.18,1327.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2285.15,1328.31 L2280.5,1327.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2285.15,1328.31 L3017.19,1418.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3021.85,1418.8 L3017.19,1418.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3024.16,1419.09 L3021.85,1418.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3028.01,1419.57 L3024.16,1419.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3031.07,1419.96 L3028.01,1419.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3034.73,1420.44 L3031.07,1419.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3037.92,1420.86 L3034.73,1420.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3041.48,1421.36 L3037.92,1420.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3044.69,1421.82 L3041.48,1421.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3048.18,1422.35 L3044.69,1421.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3051.39,1422.85 L3048.18,1422.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3122.82,1440.46 L3109.47,1436.2 L3095.96,1432.36 L3082.3,1428.94 L3068.52,1425.95 L3054.63,1423.39 L3051.39,1422.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3125.87,1441.5 L3122.82,1440.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3129.17,1442.65 L3125.87,1441.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3132.19,1443.72 L3129.17,1442.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3135.53,1444.93 L3132.19,1443.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3138.51,1446.02 L3135.53,1444.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3141.93,1447.29 L3138.51,1446.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3144.78,1448.35 L3141.93,1447.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3148.36,1449.7 L3144.78,1448.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3150.51,1450.52 L3148.36,1449.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3154.83,1452.16 L3150.51,1450.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3154.83,1452.16 L3287.99,1502.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3287.99,1502.73 L3292.33,1504.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3292.33,1504.38 L3294.52,1505.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3294.52,1505.2 L3298.17,1506.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3298.17,1506.58 L3301.11,1507.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3301.11,1507.68 L3304.66,1508.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3304.66,1508.99 L3307.78,1510.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3307.78,1510.14 L3311.3,1511.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3311.3,1511.41 L3314.53,1512.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3314.53,1512.56 L3318.06,1513.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3318.06,1513.79 L3321.37,1514.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3321.37,1514.91 L3335.88,1519.54 L3350.57,1523.72 L3365.41,1527.43 L3380.39,1530.68 L3395.49,1533.47 L3410.68,1535.78 L3424.2,1537.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2254.19,1293.17 L2238.82,1292.1 L2223.42,1291.51 L2208,1291.39 L2192.59,1291.76 L2177.2,1292.61 L2173.71,1292.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2257.71,1293.48 L2254.19,1293.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2261.48,1293.84 L2257.71,1293.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2264.93,1294.19 L2261.48,1293.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2268.7,1294.59 L2264.93,1294.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2272.05,1294.96 L2268.7,1294.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2275.86,1295.4 L2272.05,1294.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2279.02,1295.78 L2275.86,1295.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2282.95,1296.25 L2279.02,1295.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2285.3,1296.54 L2282.95,1296.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2289.98,1297.11 L2285.3,1296.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2289.98,1297.11 L3022.01,1387.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3026.69,1387.6 L3022.01,1387.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3029.04,1387.89 L3026.69,1387.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3032.97,1388.38 L3029.04,1387.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3036.12,1388.79 L3032.97,1388.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3039.92,1389.28 L3036.12,1388.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3043.26,1389.73 L3039.92,1389.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3047.01,1390.25 L3043.26,1389.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3050.44,1390.75 L3047.01,1390.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3054.18,1391.31 L3050.44,1390.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3057.67,1391.86 L3054.18,1391.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3135.31,1411 L3120.79,1406.37 L3106.11,1402.19 L3091.26,1398.48 L3076.29,1395.22 L3061.19,1392.44 L3057.67,1391.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3138.62,1412.12 L3135.31,1411" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3142.15,1413.35 L3138.62,1412.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3145.37,1414.5 L3142.15,1413.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3148.9,1415.77 L3145.37,1414.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3152.02,1416.92 L3148.9,1415.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3155.56,1418.23 L3152.02,1416.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3158.5,1419.33 L3155.56,1418.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3162.15,1420.71 L3158.5,1419.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3164.34,1421.54 L3162.15,1420.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3168.68,1423.18 L3164.34,1421.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3168.68,1423.18 L3301.84,1473.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3301.84,1473.75 L3306.16,1475.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3306.16,1475.39 L3308.31,1476.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3308.31,1476.21 L3311.89,1477.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3311.89,1477.56 L3314.74,1478.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3314.74,1478.62 L3318.16,1479.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3318.16,1479.89 L3321.14,1480.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3321.14,1480.98 L3324.48,1482.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3324.48,1482.19 L3327.5,1483.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3327.5,1483.26 L3330.8,1484.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3330.8,1484.41 L3333.85,1485.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M3333.85,1485.45 L3347.2,1489.71 L3360.72,1493.55 L3374.37,1496.97 L3388.15,1499.96 L3402.04,1502.52 L3406.64,1503.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.22,1437.19 L1611.42,1444.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1611.42,1444.58 L1616.12,1444.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1616.12,1444.7 L1618.46,1444.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1618.46,1444.76 L1622.34,1444.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1622.34,1444.85 L1625.43,1444.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1625.43,1444.92 L1629.13,1444.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1629.13,1444.98 L1632.35,1445.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1632.35,1445.03 L1635.95,1445.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.95,1445.06 L1639.21,1445.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1639.21,1445.08 L1642.75,1445.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1642.75,1445.08 L1646.01,1445.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1646.01,1445.05 L1660.19,1444.67 L1674.34,1443.85 L1688.46,1442.58 L1702.51,1440.88 L1716.49,1438.75 L1730.38,1436.18 L1744.16,1433.18 L1757.81,1429.75 L1771.32,1425.9 L1784.67,1421.63 L1788.56,1420.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1788.56,1420.3 L1791.59,1419.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1791.59,1419.23 L1794.87,1418.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1794.87,1418.05 L1797.89,1416.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1797.89,1416.95 L1801.21,1415.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1801.21,1415.71 L1804.17,1414.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1804.17,1414.59 L1807.58,1413.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1807.58,1413.29 L1810.41,1412.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1810.41,1412.19 L1813.98,1410.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1813.98,1410.81 L1816.12,1409.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1816.12,1409.97 L1820.42,1408.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1820.42,1408.29 L2018.3,1330.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2022.62,1329.15 L2018.3,1330.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2024.8,1328.3 L2022.62,1329.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2028.43,1326.89 L2024.8,1328.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2031.36,1325.76 L2028.43,1326.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2034.88,1324.41 L2031.36,1325.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2037.99,1323.23 L2034.88,1324.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2041.5,1321.93 L2037.99,1323.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2044.71,1320.75 L2041.5,1321.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2048.23,1319.48 L2044.71,1320.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2051.52,1318.33 L2048.23,1319.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2113.52,1301.31 L2098.56,1304.61 L2083.73,1308.38 L2069.06,1312.6 L2054.56,1317.28 L2051.52,1318.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2172.96,1358.34 L2170.6,1358.58 L2168.58,1358.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2168.58,1358.85 L2168.19,1358.91 L2167.79,1358.99 L2167.41,1359.07 L2167.02,1359.17 L2166.64,1359.29 L2166.26,1359.41 L2165.89,1359.55 L2165.53,1359.69 L2165.17,1359.85 L2164.82,1360.02 L2164.47,1360.2 L2164.13,1360.39 L2163.8,1360.59 L2163.48,1360.8 L2163.16,1361.03 L2162.86,1361.26 L2162.56,1361.5 L2162.27,1361.75 L2162,1362 L2161.73,1362.27 L2161.53,1362.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2156.25,1365.74 L2156.63,1365.62 L2157.01,1365.49 L2157.37,1365.35 L2157.73,1365.19 L2158.09,1365.03 L2158.44,1364.85 L2158.78,1364.67 L2159.12,1364.47 L2159.44,1364.26 L2159.76,1364.04 L2160.07,1363.82 L2160.37,1363.58 L2160.66,1363.33 L2160.94,1363.08 L2161.21,1362.82 L2161.47,1362.54 L2161.53,1362.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2156.24,1365.73 L2156.14,1365.73 L2156.04,1365.83 L2155.94,1365.83 L2155.74,1365.93 L2155.64,1365.93 L2155.54,1366.03 L2155.44,1366.13 L2155.34,1366.13 L2155.24,1366.23 L2155.14,1366.33 L2155.04,1366.33 L2154.94,1366.43 L2154.84,1366.53 L2154.74,1366.63 L2154.64,1366.73 L2154.54,1366.73 L2154.44,1366.83 L2154.44,1366.93 L2154.34,1367.03 L2154.24,1367.13 L2154.24,1367.23 L2154.14,1367.33 L2154.04,1367.43 L2154.04,1367.53 L2153.94,1367.63 L2153.94,1367.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2153.95,1367.73 L2153.17,1369.72 L2152.46,1371.74 L2151.83,1373.78 L2151.64,1374.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2144.5,1372.9 L2145.03,1370.82 L2145.47,1368.73 L2145.51,1368.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2145.51,1368.54 L2145.55,1368.27 L2145.59,1368 L2145.61,1367.72 L2145.62,1367.45 L2145.63,1367.18 L2145.62,1366.9 L2145.6,1366.63 L2145.57,1366.35 L2145.53,1366.08 L2145.48,1365.81 L2145.42,1365.54 L2145.35,1365.27 L2145.26,1365.01 L2145.17,1364.75 L2145.07,1364.49 L2144.95,1364.23 L2144.83,1363.98 L2144.7,1363.73 L2144.56,1363.49 L2144.4,1363.25 L2144.24,1363.01 L2144.07,1362.78 L2143.89,1362.56 L2143.71,1362.34 L2143.51,1362.13 L2143.31,1361.92 L2143.09,1361.73 L2142.87,1361.53 L2142.78,1361.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2142.74,1361.43 L2142.64,1361.33 L2142.54,1361.33 L2142.54,1361.23 L2142.44,1361.23 L2142.34,1361.13 L2142.24,1361.13 L2142.14,1361.13 L2142.14,1361.03 L2142.04,1361.03 L2141.94,1361.03 L2141.84,1360.93 L2141.74,1360.93 L2141.64,1360.93 L2141.54,1360.93 L2141.44,1360.83 L2141.34,1360.83 L2141.24,1360.83 L2141.14,1360.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2141.1,1360.83 L2138.73,1360.78 L2136.36,1360.79 L2133.99,1360.88 L2132.68,1360.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2132.06,1353.96 L2134.42,1353.76 L2136.77,1353.48 L2138.43,1353.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2138.43,1353.24 L2140.4,1345.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2140.4,1345.81 L2140.33,1343.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2140.33,1343.52 L2140.3,1343.03 L2140.25,1342.54 L2140.18,1342.05 L2140.09,1341.56 L2139.99,1341.07 L2139.86,1340.59 L2139.72,1340.11 L2139.55,1339.64 L2139.37,1339.17 L2139.17,1338.71 L2138.95,1338.26 L2138.72,1337.81 L2138.46,1337.37 L2138.19,1336.94 L2137.91,1336.51 L2137.6,1336.1 L2137.28,1335.69 L2136.95,1335.3 L2136.6,1334.92 L2136.23,1334.54 L2135.85,1334.18 L2135.46,1333.83 L2135.05,1333.5 L2134.63,1333.17 L2134.2,1332.86 L2133.76,1332.57 L2133.3,1332.28 L2132.83,1332.01 L2132.36,1331.76 L2131.87,1331.52 L2131.38,1331.3 L2130.87,1331.09 L2130.36,1330.9 L2129.84,1330.72 L2129.32,1330.56 L2129.12,1330.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2113.52,1301.31 L2118.06,1298.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2118.06,1298.8 L2118.98,1298.25 L2119.88,1297.67 L2120.75,1297.06 L2121.61,1296.43 L2122.43,1295.77 L2123.24,1295.08 L2124.01,1294.37 L2124.76,1293.64 L2125.47,1292.89 L2126.16,1292.11 L2126.81,1291.31 L2127.44,1290.49 L2128.03,1289.65 L2128.59,1288.8 L2129.11,1287.93 L2129.6,1287.04 L2130.06,1286.14 L2130.48,1285.22 L2130.86,1284.29 L2131.21,1283.35 L2131.52,1282.4 L2131.79,1281.44 L2132.02,1280.48 L2132.22,1279.5 L2132.38,1278.52 L2132.5,1277.54 L2132.58,1276.55 L2132.62,1275.56 L2132.62,1274.57 L2132.62,1274.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2132.62,1274.26 L2132.49,1269.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2141.88,1230.83 L2146.31,1236.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2146.34,1236.93 L2146.44,1237.13 L2146.64,1237.43 L2146.84,1237.63 L2147.04,1237.83 L2147.24,1238.03 L2147.44,1238.23 L2147.64,1238.43 L2147.94,1238.63 L2148.14,1238.73 L2148.44,1238.93 L2148.64,1239.13 L2148.74,1239.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2153.46,1257.01 L2153.71,1256.6 L2153.95,1256.17 L2154.17,1255.74 L2154.37,1255.31 L2154.55,1254.86 L2154.72,1254.41 L2154.87,1253.96 L2155,1253.5 L2155.11,1253.04 L2155.21,1252.58 L2155.29,1252.11 L2155.34,1251.64 L2155.38,1251.17 L2155.41,1250.69 L2155.41,1250.22 L2155.39,1249.75 L2155.36,1249.28 L2155.31,1248.81 L2155.24,1248.34 L2155.15,1247.87 L2155.04,1247.41 L2154.92,1246.95 L2154.77,1246.49 L2154.61,1246.04 L2154.43,1245.6 L2154.24,1245.16 L2154.03,1244.73 L2153.8,1244.3 L2153.55,1243.88 L2153.29,1243.47 L2153.01,1243.07 L2152.72,1242.67 L2152.41,1242.29 L2152.08,1241.92 L2151.74,1241.55 L2151.39,1241.2 L2151.03,1240.86 L2150.65,1240.53 L2150.25,1240.21 L2149.85,1239.9 L2149.43,1239.61 L2149.01,1239.33 L2148.76,1239.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2153.46,1257.01 L2152.33,1261.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2152.33,1261.63 L2152.53,1265.26 L2152.87,1268.87 L2152.9,1269.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2152.9,1269.16 L2153.04,1270.14 L2153.21,1271.12 L2153.42,1272.09 L2153.67,1273.06 L2153.96,1274.01 L2154.28,1274.96 L2154.64,1275.89 L2155.04,1276.82 L2155.47,1277.73 L2155.94,1278.63 L2156.44,1279.51 L2156.98,1280.37 L2157.55,1281.22 L2158.16,1282.05 L2158.79,1282.86 L2159.46,1283.65 L2160.16,1284.42 L2160.89,1285.17 L2161.64,1285.89 L2162.43,1286.59 L2163.24,1287.27 L2164.08,1287.92 L2164.94,1288.54 L2165.83,1289.14 L2166.73,1289.7 L2167.66,1290.24 L2168.62,1290.75 L2169.59,1291.23 L2170.58,1291.68 L2171.58,1292.1 L2172.6,1292.49 L2173.64,1292.84 L2173.71,1292.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2128.97,1241.27 L2128.62,1241.62 L2128.29,1241.99 L2127.97,1242.36 L2127.66,1242.75 L2127.37,1243.15 L2127.09,1243.55 L2126.84,1243.96 L2126.59,1244.38 L2126.37,1244.81 L2126.16,1245.24 L2125.96,1245.68 L2125.79,1246.13 L2125.63,1246.58 L2125.49,1247.04 L2125.37,1247.5 L2125.27,1247.96 L2125.18,1248.43 L2125.11,1248.9 L2125.07,1249.37 L2125.04,1249.84 L2125.02,1250.31 L2125.03,1250.78 L2125.06,1251.26 L2125.1,1251.73 L2125.16,1252.2 L2125.24,1252.66 L2125.34,1253.13 L2125.46,1253.59 L2125.59,1254.05 L2125.75,1254.5 L2125.92,1254.95 L2126.1,1255.39 L2126.31,1255.83 L2126.53,1256.26 L2126.77,1256.68 L2127.02,1257.09 L2127.3,1257.5 L2127.58,1257.9 L2127.88,1258.28 L2128.2,1258.66 L2128.53,1259.03 L2128.88,1259.39 L2129.24,1259.74 L2129.61,1260.07 L2130,1260.4 L2130.4,1260.71 L2130.81,1261.01 L2131.23,1261.29 L2131.48,1261.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2165.65,1351.63 L2168.02,1351.59 L2170.39,1351.48 L2172.19,1351.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2165.65,1351.63 L2160.23,1344.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2160.23,1344.54 L2160.13,1338.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2167.38,1325.07 L2166.86,1325.46 L2166.36,1325.86 L2165.87,1326.28 L2165.4,1326.72 L2164.94,1327.16 L2164.5,1327.63 L2164.08,1328.1 L2163.68,1328.59 L2163.3,1329.09 L2162.94,1329.6 L2162.6,1330.12 L2162.28,1330.66 L2161.98,1331.2 L2161.7,1331.75 L2161.44,1332.31 L2161.21,1332.88 L2161,1333.45 L2160.81,1334.03 L2160.64,1334.62 L2160.5,1335.21 L2160.38,1335.81 L2160.28,1336.4 L2160.21,1337 L2160.16,1337.61 L2160.14,1338.21 L2160.13,1338.82 L2160.13,1338.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.099,1362.96 L538.518,1362.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.006,1362.92 L547.493,1362.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M551.98,1362.84 L556.467,1362.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M560.955,1362.77 L565.442,1362.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M569.929,1362.69 L574.416,1362.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M578.904,1362.62 L583.391,1362.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M587.878,1362.54 L592.365,1362.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M596.852,1362.47 L601.34,1362.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M605.827,1362.39 L610.314,1362.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M614.801,1362.32 L619.289,1362.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M623.776,1362.24 L628.263,1362.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.841,1367.78 L444.329,1367.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.816,1367.71 L453.303,1367.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M457.79,1367.63 L462.278,1367.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M466.765,1367.56 L471.252,1367.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M475.739,1367.48 L480.226,1367.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M484.714,1367.41 L489.201,1367.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M493.688,1367.33 L498.175,1367.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M502.663,1367.26 L507.15,1367.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M511.637,1367.18 L516.124,1367.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M520.612,1367.11 L525.099,1367.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M529.586,1367.03 L534.073,1366.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.561,1366.96 L543.048,1366.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.535,1366.88 L552.022,1366.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.51,1366.8 L560.997,1366.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.484,1366.73 L569.971,1366.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.458,1366.65 L578.946,1366.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.433,1366.58 L587.92,1366.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.407,1366.5 L596.895,1366.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.382,1366.43 L605.869,1366.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.356,1366.35 L614.844,1366.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.331,1366.28 L623.818,1366.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M438.689,1371.79 L439.883,1371.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.371,1371.74 L448.858,1371.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.345,1371.67 L457.832,1371.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.32,1371.59 L466.807,1371.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.294,1371.52 L475.781,1371.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.269,1371.44 L484.756,1371.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.243,1371.37 L493.73,1371.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.218,1371.29 L502.705,1371.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.192,1371.22 L511.679,1371.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.167,1371.14 L520.654,1371.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.141,1371.07 L529.628,1371.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.115,1370.99 L538.603,1370.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.09,1370.92 L547.577,1370.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.064,1370.84 L556.552,1370.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.039,1370.77 L565.526,1370.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.013,1370.69 L574.501,1370.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M578.988,1370.62 L583.475,1370.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M587.962,1370.54 L592.45,1370.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M596.937,1370.47 L601.424,1370.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M605.911,1370.39 L610.399,1370.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M614.886,1370.32 L619.373,1370.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M623.86,1370.24 L627.266,1370.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.925,1375.78 L444.413,1375.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.9,1375.71 L453.387,1375.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M457.874,1375.63 L462.362,1375.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M466.849,1375.56 L471.336,1375.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M475.823,1375.48 L480.311,1375.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M484.798,1375.41 L489.285,1375.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M493.772,1375.33 L498.26,1375.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M502.747,1375.26 L507.234,1375.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M511.721,1375.18 L516.209,1375.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M520.696,1375.1 L525.183,1375.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M529.67,1375.03 L534.158,1374.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.645,1374.95 L543.132,1374.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.619,1374.88 L552.107,1374.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.594,1374.8 L561.081,1374.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.568,1374.73 L570.056,1374.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.543,1374.65 L579.03,1374.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.517,1374.58 L588.005,1374.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.492,1374.5 L596.979,1374.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.466,1374.43 L605.954,1374.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.441,1374.35 L614.928,1374.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.415,1374.28 L623.903,1374.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.455,1379.74 L448.942,1379.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.429,1379.67 L457.916,1379.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.404,1379.59 L466.891,1379.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.378,1379.52 L475.865,1379.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.353,1379.44 L484.84,1379.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.327,1379.37 L493.815,1379.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.302,1379.29 L502.789,1379.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.276,1379.22 L511.764,1379.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.251,1379.14 L520.738,1379.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.225,1379.07 L529.713,1379.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.2,1378.99 L538.687,1378.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.174,1378.92 L547.662,1378.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.149,1378.84 L556.636,1378.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.123,1378.77 L565.611,1378.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.098,1378.69 L574.585,1378.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.072,1378.62 L583.56,1378.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.047,1378.54 L592.534,1378.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.021,1378.47 L601.509,1378.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M605.996,1378.39 L610.483,1378.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M614.97,1378.32 L619.458,1378.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M623.945,1378.24 L626.845,1378.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.165,1383.77 L444.497,1383.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.984,1383.7 L453.471,1383.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M457.959,1383.63 L462.446,1383.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M466.933,1383.55 L471.42,1383.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M475.908,1383.48 L480.395,1383.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M484.882,1383.4 L489.369,1383.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M493.857,1383.33 L498.344,1383.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M502.831,1383.25 L507.318,1383.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M511.806,1383.18 L516.293,1383.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M520.78,1383.1 L525.267,1383.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M529.755,1383.03 L534.242,1382.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.729,1382.95 L543.216,1382.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.704,1382.88 L552.191,1382.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.678,1382.8 L561.165,1382.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.653,1382.73 L570.14,1382.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.627,1382.65 L579.115,1382.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.602,1382.58 L588.089,1382.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.576,1382.5 L597.064,1382.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.551,1382.43 L606.038,1382.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.525,1382.35 L615.013,1382.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.5,1382.28 L623.987,1382.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.539,1387.74 L449.026,1387.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.513,1387.67 L458.001,1387.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.488,1387.59 L466.975,1387.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.462,1387.52 L475.95,1387.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.437,1387.44 L484.924,1387.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.411,1387.37 L493.899,1387.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.386,1387.29 L502.873,1387.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.361,1387.22 L511.848,1387.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.335,1387.14 L520.822,1387.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.31,1387.07 L529.797,1387.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.284,1386.99 L538.771,1386.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.259,1386.92 L547.746,1386.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.233,1386.84 L556.72,1386.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.208,1386.77 L565.695,1386.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.182,1386.69 L574.669,1386.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.157,1386.62 L583.644,1386.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.131,1386.54 L592.618,1386.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.106,1386.47 L601.593,1386.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.08,1386.39 L610.568,1386.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.055,1386.31 L619.542,1386.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.029,1386.24 L626.845,1386.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.979,1391.76 L444.581,1391.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.068,1391.7 L453.555,1391.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.043,1391.63 L462.53,1391.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.017,1391.55 L471.505,1391.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M475.992,1391.48 L480.479,1391.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M484.966,1391.4 L489.454,1391.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M493.941,1391.33 L498.428,1391.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M502.915,1391.25 L507.403,1391.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M511.89,1391.18 L516.377,1391.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M520.864,1391.1 L525.352,1391.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M529.839,1391.03 L534.326,1390.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.814,1390.95 L543.301,1390.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.788,1390.88 L552.275,1390.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.763,1390.8 L561.25,1390.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.737,1390.73 L570.224,1390.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.712,1390.65 L579.199,1390.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.686,1390.58 L588.173,1390.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.661,1390.5 L597.148,1390.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.635,1390.43 L606.122,1390.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.61,1390.35 L615.097,1390.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.584,1390.28 L624.072,1390.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.623,1395.74 L449.11,1395.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.597,1395.67 L458.085,1395.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.572,1395.59 L467.059,1395.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.547,1395.52 L476.034,1395.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.521,1395.44 L485.008,1395.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.496,1395.37 L493.983,1395.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.47,1395.29 L502.958,1395.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.445,1395.22 L511.932,1395.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.419,1395.14 L520.907,1395.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.394,1395.07 L529.881,1395.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.368,1394.99 L538.856,1394.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.343,1394.92 L547.83,1394.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.317,1394.84 L556.805,1394.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.292,1394.77 L565.779,1394.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.267,1394.69 L574.754,1394.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.241,1394.62 L583.728,1394.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.216,1394.54 L592.703,1394.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.19,1394.46 L601.677,1394.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.165,1394.39 L610.652,1394.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.139,1394.31 L619.627,1394.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.114,1394.24 L626.866,1394.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.152,1399.7 L453.64,1399.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.127,1399.63 L462.614,1399.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.101,1399.55 L471.589,1399.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.076,1399.48 L480.563,1399.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.051,1399.4 L489.538,1399.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.025,1399.33 L498.512,1399.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503,1399.25 L507.487,1399.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M511.974,1399.18 L516.461,1399.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M520.949,1399.1 L525.436,1399.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M529.923,1399.03 L534.411,1398.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.898,1398.95 L543.385,1398.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.872,1398.88 L552.36,1398.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.847,1398.8 L561.334,1398.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.821,1398.73 L570.309,1398.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.796,1398.65 L579.283,1398.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.771,1398.58 L588.258,1398.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.745,1398.5 L597.232,1398.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.72,1398.43 L606.207,1398.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.694,1398.35 L615.181,1398.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.669,1398.28 L624.156,1398.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.568,1403.73 L449.194,1403.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.682,1403.67 L458.169,1403.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.656,1403.59 L467.143,1403.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.631,1403.52 L476.118,1403.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.605,1403.44 L485.093,1403.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.58,1403.37 L494.067,1403.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.554,1403.29 L503.042,1403.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.529,1403.22 L512.016,1403.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.504,1403.14 L520.991,1403.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.478,1403.07 L529.965,1403.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.453,1402.99 L538.94,1402.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.427,1402.92 L547.915,1402.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.402,1402.84 L556.889,1402.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.376,1402.76 L565.864,1402.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.351,1402.69 L574.838,1402.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.326,1402.61 L583.813,1402.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.3,1402.54 L592.787,1402.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.275,1402.46 L601.762,1402.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.249,1402.39 L610.736,1402.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.224,1402.31 L619.711,1402.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.198,1402.24 L626.268,1402.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.236,1407.7 L453.724,1407.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.211,1407.63 L462.698,1407.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.186,1407.55 L471.673,1407.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.16,1407.48 L480.647,1407.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.135,1407.4 L489.622,1407.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.109,1407.33 L498.597,1407.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.084,1407.25 L507.571,1407.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.058,1407.18 L516.546,1407.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.033,1407.1 L525.52,1407.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.008,1407.03 L534.495,1406.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M538.982,1406.95 L543.469,1406.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M547.957,1406.88 L552.444,1406.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M556.931,1406.8 L561.419,1406.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.906,1406.73 L570.393,1406.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.88,1406.65 L579.368,1406.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.855,1406.58 L588.342,1406.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.83,1406.5 L597.317,1406.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.804,1406.43 L606.291,1406.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.779,1406.35 L615.266,1406.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.753,1406.28 L624.241,1406.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.928,1411.72 L449.278,1411.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.766,1411.67 L458.253,1411.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.74,1411.59 L467.228,1411.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.715,1411.52 L476.202,1411.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.69,1411.44 L485.177,1411.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.664,1411.37 L494.151,1411.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.639,1411.29 L503.126,1411.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.613,1411.22 L512.101,1411.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.588,1411.14 L521.075,1411.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.562,1411.07 L530.05,1411.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.537,1410.99 L539.024,1410.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.512,1410.91 L547.999,1410.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.486,1410.84 L556.973,1410.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.461,1410.76 L565.948,1410.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.435,1410.69 L574.923,1410.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.41,1410.61 L583.897,1410.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.384,1410.54 L592.872,1410.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.359,1410.46 L601.846,1410.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.334,1410.39 L610.821,1410.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.308,1410.31 L619.795,1410.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.283,1410.24 L627.348,1410.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.321,1415.7 L453.808,1415.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.295,1415.63 L462.782,1415.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.27,1415.55 L471.757,1415.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.244,1415.48 L480.732,1415.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.219,1415.4 L489.706,1415.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.194,1415.33 L498.681,1415.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.168,1415.25 L507.655,1415.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.143,1415.18 L516.63,1415.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.117,1415.1 L525.605,1415.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.092,1415.03 L534.579,1414.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.066,1414.95 L543.554,1414.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.041,1414.88 L552.528,1414.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.016,1414.8 L561.503,1414.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M565.99,1414.73 L570.478,1414.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M574.965,1414.65 L579.452,1414.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M583.939,1414.58 L588.427,1414.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.914,1414.5 L597.401,1414.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.889,1414.43 L606.376,1414.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.863,1414.35 L615.35,1414.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.838,1414.27 L624.325,1414.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.234,1419.7 L449.363,1419.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.85,1419.67 L458.337,1419.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.825,1419.59 L467.312,1419.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.799,1419.51 L476.286,1419.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.774,1419.44 L485.261,1419.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.748,1419.36 L494.236,1419.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.723,1419.29 L503.21,1419.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.698,1419.21 L512.185,1419.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.672,1419.14 L521.159,1419.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.647,1419.06 L530.134,1419.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.621,1418.99 L539.109,1418.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.596,1418.91 L548.083,1418.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.571,1418.84 L557.058,1418.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.545,1418.76 L566.032,1418.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.52,1418.69 L575.007,1418.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.494,1418.61 L583.982,1418.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.469,1418.54 L592.956,1418.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.443,1418.46 L601.931,1418.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.418,1418.39 L610.905,1418.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.393,1418.31 L619.88,1418.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.367,1418.24 L628.463,1418.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.63,1423.69 L453.892,1423.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.379,1423.63 L462.867,1423.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.354,1423.55 L471.841,1423.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.329,1423.48 L480.816,1423.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.303,1423.4 L489.79,1423.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.278,1423.33 L498.765,1423.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.252,1423.25 L507.74,1423.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.227,1423.18 L516.714,1423.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.202,1423.1 L525.689,1423.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.176,1423.03 L534.663,1422.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.151,1422.95 L543.638,1422.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.125,1422.88 L552.613,1422.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.1,1422.8 L561.587,1422.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.075,1422.73 L570.562,1422.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.049,1422.65 L579.537,1422.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.024,1422.58 L588.511,1422.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M592.998,1422.5 L597.486,1422.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M601.973,1422.43 L606.46,1422.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M610.948,1422.35 L615.435,1422.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M619.922,1422.27 L624.41,1422.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.897,1422.2 L629.401,1422.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M453.934,1427.66 L458.421,1427.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.909,1427.59 L467.396,1427.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.883,1427.51 L476.371,1427.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.858,1427.44 L485.345,1427.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.833,1427.36 L494.32,1427.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.807,1427.29 L503.294,1427.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.782,1427.21 L512.269,1427.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.756,1427.14 L521.244,1427.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.731,1427.06 L530.218,1427.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.706,1426.99 L539.193,1426.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.68,1426.91 L548.168,1426.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.655,1426.84 L557.142,1426.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.629,1426.76 L566.117,1426.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.604,1426.69 L575.091,1426.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.579,1426.61 L584.066,1426.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.553,1426.54 L593.041,1426.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.528,1426.46 L602.015,1426.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.503,1426.39 L610.99,1426.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.477,1426.31 L619.964,1426.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.452,1426.24 L628.939,1426.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.988,1431.69 L453.976,1431.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.463,1431.63 L462.951,1431.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.438,1431.55 L471.925,1431.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.413,1431.48 L480.9,1431.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.387,1431.4 L489.875,1431.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.362,1431.33 L498.849,1431.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.337,1431.25 L507.824,1431.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.311,1431.18 L516.799,1431.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.286,1431.1 L525.773,1431.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.26,1431.03 L534.748,1430.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.235,1430.95 L543.722,1430.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.21,1430.88 L552.697,1430.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.184,1430.8 L561.672,1430.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.159,1430.73 L570.646,1430.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.134,1430.65 L579.621,1430.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.108,1430.57 L588.596,1430.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.083,1430.5 L597.57,1430.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.057,1430.42 L606.545,1430.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.032,1430.35 L615.519,1430.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.007,1430.27 L624.494,1430.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.981,1430.2 L629.806,1430.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.018,1435.66 L458.506,1435.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M462.993,1435.59 L467.48,1435.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M471.967,1435.51 L476.455,1435.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M480.942,1435.44 L485.429,1435.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M489.917,1435.36 L494.404,1435.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.891,1435.29 L503.379,1435.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.866,1435.21 L512.353,1435.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.841,1435.14 L521.328,1435.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.815,1435.06 L530.303,1435.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.79,1434.99 L539.277,1434.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.765,1434.91 L548.252,1434.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.739,1434.84 L557.227,1434.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.714,1434.76 L566.201,1434.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.688,1434.69 L575.176,1434.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.663,1434.61 L584.15,1434.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.638,1434.54 L593.125,1434.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.612,1434.46 L602.1,1434.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.587,1434.39 L611.074,1434.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.562,1434.31 L620.049,1434.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.536,1434.24 L629.024,1434.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.926,1439.69 L454.06,1439.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.548,1439.63 L463.035,1439.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.522,1439.55 L472.01,1439.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.497,1439.48 L480.984,1439.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.472,1439.4 L489.959,1439.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.446,1439.33 L498.934,1439.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.421,1439.25 L507.908,1439.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.395,1439.18 L516.883,1439.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.37,1439.1 L525.857,1439.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.345,1439.03 L534.832,1438.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.319,1438.95 L543.807,1438.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.294,1438.88 L552.781,1438.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.269,1438.8 L561.756,1438.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.243,1438.72 L570.731,1438.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.218,1438.65 L579.705,1438.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.193,1438.57 L588.68,1438.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.167,1438.5 L597.655,1438.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.142,1438.42 L606.629,1438.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.117,1438.35 L615.604,1438.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.091,1438.27 L624.578,1438.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.102,1443.66 L458.59,1443.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.077,1443.59 L467.564,1443.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.052,1443.51 L476.539,1443.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.026,1443.44 L485.514,1443.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.001,1443.36 L494.488,1443.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M498.976,1443.29 L503.463,1443.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M507.95,1443.21 L512.438,1443.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M516.925,1443.14 L521.412,1443.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.9,1443.06 L530.387,1443.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.874,1442.99 L539.362,1442.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.849,1442.91 L548.336,1442.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.824,1442.84 L557.311,1442.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.798,1442.76 L566.286,1442.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.773,1442.69 L575.26,1442.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.748,1442.61 L584.235,1442.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.722,1442.54 L593.209,1442.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.697,1442.46 L602.184,1442.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.671,1442.39 L611.159,1442.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.646,1442.31 L620.133,1442.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.621,1442.24 L628.286,1442.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.079,1447.7 L454.144,1447.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.632,1447.63 L463.119,1447.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.606,1447.55 L472.094,1447.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.581,1447.48 L481.068,1447.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.556,1447.4 L490.043,1447.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.53,1447.33 L499.018,1447.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.505,1447.25 L507.992,1447.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.48,1447.18 L516.967,1447.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.454,1447.1 L525.942,1447.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.429,1447.03 L534.916,1446.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.404,1446.95 L543.891,1446.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.378,1446.87 L552.866,1446.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.353,1446.8 L561.84,1446.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.328,1446.72 L570.815,1446.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.302,1446.65 L579.79,1446.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.277,1446.57 L588.764,1446.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.252,1446.5 L597.739,1446.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.226,1446.42 L606.714,1446.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.201,1446.35 L615.688,1446.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.176,1446.27 L624.663,1446.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.387,1451.7 L449.699,1451.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.186,1451.66 L458.674,1451.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.161,1451.59 L467.648,1451.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.136,1451.51 L476.623,1451.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.111,1451.44 L485.598,1451.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.085,1451.36 L494.573,1451.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.06,1451.29 L503.547,1451.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.035,1451.21 L512.522,1451.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.009,1451.14 L521.497,1451.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M525.984,1451.06 L530.471,1451.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M534.959,1450.99 L539.446,1450.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M543.933,1450.91 L548.421,1450.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.908,1450.84 L557.395,1450.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.883,1450.76 L566.37,1450.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.857,1450.69 L575.345,1450.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.832,1450.61 L584.319,1450.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.807,1450.54 L593.294,1450.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.781,1450.46 L602.269,1450.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.756,1450.39 L611.243,1450.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.731,1450.31 L620.218,1450.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.705,1450.23 L626.594,1450.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.741,1455.7 L454.229,1455.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.716,1455.63 L463.203,1455.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.691,1455.55 L472.178,1455.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.665,1455.48 L481.153,1455.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.64,1455.4 L490.127,1455.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.615,1455.32 L499.102,1455.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.589,1455.25 L508.077,1455.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.564,1455.17 L517.051,1455.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.539,1455.1 L526.026,1455.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.513,1455.02 L535.001,1454.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.488,1454.95 L543.975,1454.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.463,1454.87 L552.95,1454.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.437,1454.8 L561.925,1454.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.412,1454.72 L570.899,1454.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.387,1454.65 L579.874,1454.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.361,1454.57 L588.849,1454.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.336,1454.5 L597.823,1454.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.311,1454.42 L606.798,1454.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.285,1454.35 L615.773,1454.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.26,1454.27 L624.747,1454.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.114,1459.71 L449.783,1459.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.271,1459.66 L458.758,1459.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.245,1459.59 L467.733,1459.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.22,1459.51 L476.707,1459.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.195,1459.44 L485.682,1459.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.169,1459.36 L494.657,1459.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.144,1459.29 L503.631,1459.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.119,1459.21 L512.606,1459.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.093,1459.14 L521.581,1459.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.068,1459.06 L530.556,1459.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.043,1458.99 L539.53,1458.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.018,1458.91 L548.505,1458.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M552.992,1458.84 L557.48,1458.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M561.967,1458.76 L566.454,1458.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M570.942,1458.69 L575.429,1458.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M579.916,1458.61 L584.404,1458.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.891,1458.54 L593.378,1458.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.866,1458.46 L602.353,1458.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.84,1458.38 L611.328,1458.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.815,1458.31 L620.302,1458.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.79,1458.23 L629.277,1458.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.825,1463.7 L454.313,1463.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.8,1463.62 L463.287,1463.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.775,1463.55 L472.262,1463.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.749,1463.47 L481.237,1463.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.724,1463.4 L490.212,1463.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.699,1463.32 L499.186,1463.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.674,1463.25 L508.161,1463.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.648,1463.17 L517.136,1463.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.623,1463.1 L526.11,1463.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.598,1463.02 L535.085,1462.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.572,1462.95 L544.06,1462.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.547,1462.87 L553.034,1462.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.522,1462.8 L562.009,1462.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.496,1462.72 L570.984,1462.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.471,1462.65 L579.959,1462.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.446,1462.57 L588.933,1462.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.421,1462.5 L597.908,1462.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.395,1462.42 L606.883,1462.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.37,1462.35 L615.857,1462.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.345,1462.27 L624.832,1462.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.319,1462.2 L631.546,1462.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.551,1467.72 L449.867,1467.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.355,1467.66 L458.842,1467.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.329,1467.59 L467.817,1467.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.304,1467.51 L476.792,1467.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.279,1467.44 L485.766,1467.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.254,1467.36 L494.741,1467.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.228,1467.29 L503.716,1467.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.203,1467.21 L512.69,1467.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.178,1467.14 L521.665,1467.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.152,1467.06 L530.64,1467.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.127,1466.99 L539.615,1466.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.102,1466.91 L548.589,1466.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.077,1466.84 L557.564,1466.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.051,1466.76 L566.539,1466.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.026,1466.69 L575.513,1466.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.001,1466.61 L584.488,1466.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M588.975,1466.53 L593.463,1466.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M597.95,1466.46 L602.437,1466.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M606.925,1466.38 L611.412,1466.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.9,1466.31 L620.387,1466.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.874,1466.23 L629.362,1466.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.909,1471.7 L454.397,1471.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.884,1471.62 L463.372,1471.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.859,1471.55 L472.346,1471.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.834,1471.47 L481.321,1471.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.808,1471.4 L490.296,1471.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.783,1471.32 L499.27,1471.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.758,1471.25 L508.245,1471.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.733,1471.17 L517.22,1471.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.707,1471.1 L526.195,1471.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.682,1471.02 L535.169,1470.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.657,1470.95 L544.144,1470.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.631,1470.87 L553.119,1470.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.606,1470.8 L562.094,1470.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.581,1470.72 L571.068,1470.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.556,1470.65 L580.043,1470.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.53,1470.57 L589.018,1470.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.505,1470.5 L597.992,1470.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.48,1470.42 L606.967,1470.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.454,1470.35 L615.942,1470.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.429,1470.27 L624.916,1470.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.404,1470.2 L630.272,1470.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.556,1475.73 L449.952,1475.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.439,1475.66 L458.926,1475.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.414,1475.59 L467.901,1475.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.388,1475.51 L476.876,1475.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.363,1475.44 L485.85,1475.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.338,1475.36 L494.825,1475.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.313,1475.29 L503.8,1475.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.287,1475.21 L512.775,1475.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.262,1475.14 L521.749,1475.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.237,1475.06 L530.724,1475.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.212,1474.99 L539.699,1474.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.186,1474.91 L548.674,1474.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.161,1474.84 L557.648,1474.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.136,1474.76 L566.623,1474.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.11,1474.68 L575.598,1474.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.085,1474.61 L584.573,1474.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.06,1474.53 L593.547,1474.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.035,1474.46 L602.522,1474.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.009,1474.38 L611.497,1474.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M615.984,1474.31 L620.471,1474.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M624.959,1474.23 L629.446,1474.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.994,1479.7 L454.481,1479.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M458.968,1479.62 L463.456,1479.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M467.943,1479.55 L472.43,1479.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M476.918,1479.47 L481.405,1479.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.893,1479.4 L490.38,1479.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.867,1479.32 L499.355,1479.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.842,1479.25 L508.329,1479.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.817,1479.17 L517.304,1479.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.792,1479.1 L526.279,1479.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.766,1479.02 L535.254,1478.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.741,1478.95 L544.228,1478.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.716,1478.87 L553.203,1478.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.691,1478.8 L562.178,1478.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.665,1478.72 L571.153,1478.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.64,1478.65 L580.127,1478.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.615,1478.57 L589.102,1478.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.589,1478.5 L598.077,1478.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.564,1478.42 L607.052,1478.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.539,1478.35 L616.026,1478.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.514,1478.27 L625.001,1478.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.488,1478.2 L631.653,1478.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.548,1483.74 L450.036,1483.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.523,1483.66 L459.01,1483.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.498,1483.59 L467.985,1483.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.473,1483.51 L476.96,1483.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.447,1483.44 L485.935,1483.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.422,1483.36 L494.909,1483.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.397,1483.29 L503.884,1483.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.372,1483.21 L512.859,1483.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.346,1483.14 L521.834,1483.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.321,1483.06 L530.808,1483.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.296,1482.99 L539.783,1482.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.271,1482.91 L548.758,1482.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.245,1482.83 L557.733,1482.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.22,1482.76 L566.707,1482.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.195,1482.68 L575.682,1482.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.17,1482.61 L584.657,1482.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.144,1482.53 L593.632,1482.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.119,1482.46 L602.606,1482.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.094,1482.38 L611.581,1482.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.069,1482.31 L620.556,1482.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.043,1482.23 L629.531,1482.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.181,1487.75 L445.59,1487.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.078,1487.7 L454.565,1487.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.053,1487.62 L463.54,1487.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.027,1487.55 L472.515,1487.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M477.002,1487.47 L481.489,1487.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M485.977,1487.4 L490.464,1487.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M494.952,1487.32 L499.439,1487.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M503.926,1487.25 L508.414,1487.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.901,1487.17 L517.388,1487.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.876,1487.1 L526.363,1487.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.851,1487.02 L535.338,1486.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.825,1486.95 L544.313,1486.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.8,1486.87 L553.287,1486.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.775,1486.8 L562.262,1486.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.75,1486.72 L571.237,1486.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.724,1486.65 L580.212,1486.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.699,1486.57 L589.187,1486.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.674,1486.5 L598.161,1486.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.649,1486.42 L607.136,1486.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.623,1486.35 L616.111,1486.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.598,1486.27 L625.085,1486.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.573,1486.19 L634.06,1486.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.632,1491.74 L450.12,1491.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.607,1491.66 L459.095,1491.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.582,1491.59 L468.069,1491.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.557,1491.51 L477.044,1491.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.532,1491.44 L486.019,1491.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.506,1491.36 L494.994,1491.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.481,1491.29 L503.968,1491.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.456,1491.21 L512.943,1491.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.431,1491.13 L521.918,1491.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.405,1491.06 L530.893,1491.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.38,1490.98 L539.868,1490.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.355,1490.91 L548.842,1490.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.33,1490.83 L557.817,1490.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.304,1490.76 L566.792,1490.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.279,1490.68 L575.767,1490.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.254,1490.61 L584.741,1490.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.229,1490.53 L593.716,1490.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.203,1490.46 L602.691,1490.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.178,1490.38 L611.666,1490.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.153,1490.31 L620.64,1490.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.128,1490.23 L629.615,1490.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.103,1490.16 L635.08,1490.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.06,1495.77 L445.675,1495.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.162,1495.7 L454.649,1495.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.137,1495.62 L463.624,1495.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.111,1495.55 L472.599,1495.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M477.086,1495.47 L481.574,1495.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M486.061,1495.4 L490.548,1495.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M495.036,1495.32 L499.523,1495.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M504.011,1495.25 L508.498,1495.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M512.985,1495.17 L517.473,1495.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M521.96,1495.1 L526.448,1495.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M530.935,1495.02 L535.422,1494.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.91,1494.95 L544.397,1494.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.884,1494.87 L553.372,1494.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.859,1494.8 L562.347,1494.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.834,1494.72 L571.321,1494.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.809,1494.65 L580.296,1494.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.784,1494.57 L589.271,1494.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.758,1494.5 L598.246,1494.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.733,1494.42 L607.22,1494.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.708,1494.34 L616.195,1494.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.683,1494.27 L625.17,1494.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.657,1494.19 L634.145,1494.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.717,1499.73 L450.204,1499.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.691,1499.66 L459.179,1499.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.666,1499.58 L468.154,1499.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.641,1499.51 L477.128,1499.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.616,1499.43 L486.103,1499.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.591,1499.36 L495.078,1499.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.565,1499.28 L504.053,1499.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.54,1499.21 L513.027,1499.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.515,1499.13 L522.002,1499.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.49,1499.06 L530.977,1499.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.464,1498.98 L539.952,1498.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.439,1498.91 L548.927,1498.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.414,1498.83 L557.901,1498.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.389,1498.76 L566.876,1498.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.364,1498.68 L575.851,1498.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.338,1498.61 L584.826,1498.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.313,1498.53 L593.801,1498.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.288,1498.46 L602.775,1498.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.263,1498.38 L611.75,1498.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.237,1498.31 L620.725,1498.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.212,1498.23 L629.7,1498.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.187,1498.16 L635.17,1498.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.271,1503.77 L445.759,1503.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.246,1503.7 L454.733,1503.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.221,1503.62 L463.708,1503.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.196,1503.55 L472.683,1503.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M477.17,1503.47 L481.658,1503.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M486.145,1503.4 L490.633,1503.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M495.12,1503.32 L499.607,1503.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M504.095,1503.25 L508.582,1503.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M513.07,1503.17 L517.557,1503.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M522.044,1503.1 L526.532,1503.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M531.019,1503.02 L535.507,1502.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M539.994,1502.95 L544.481,1502.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M548.969,1502.87 L553.456,1502.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M557.944,1502.8 L562.431,1502.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M566.918,1502.72 L571.406,1502.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.893,1502.65 L580.381,1502.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.868,1502.57 L589.355,1502.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.843,1502.49 L598.33,1502.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.818,1502.42 L607.305,1502.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.792,1502.34 L616.28,1502.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.767,1502.27 L625.255,1502.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.742,1502.19 L634.229,1502.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.242,1507.79 L441.313,1507.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.801,1507.73 L450.288,1507.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.776,1507.66 L459.263,1507.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.75,1507.58 L468.238,1507.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.725,1507.51 L477.213,1507.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.7,1507.43 L486.187,1507.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.675,1507.36 L495.162,1507.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.65,1507.28 L504.137,1507.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.624,1507.21 L513.112,1507.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.599,1507.13 L522.087,1507.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.574,1507.06 L531.061,1507.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.549,1506.98 L540.036,1506.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.524,1506.91 L549.011,1506.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.498,1506.83 L557.986,1506.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.473,1506.76 L566.961,1506.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.448,1506.68 L575.935,1506.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.423,1506.61 L584.91,1506.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.398,1506.53 L593.885,1506.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.372,1506.46 L602.86,1506.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.347,1506.38 L611.835,1506.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.322,1506.31 L620.809,1506.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.297,1506.23 L629.784,1506.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.272,1506.16 L636.788,1506.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.355,1511.77 L445.843,1511.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.33,1511.7 L454.818,1511.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.305,1511.62 L463.792,1511.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.28,1511.55 L472.767,1511.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M477.255,1511.47 L481.742,1511.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M486.229,1511.4 L490.717,1511.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M495.204,1511.32 L499.692,1511.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M504.179,1511.25 L508.666,1511.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M513.154,1511.17 L517.641,1511.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M522.129,1511.1 L526.616,1511.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M531.104,1511.02 L535.591,1510.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M540.078,1510.95 L544.566,1510.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M549.053,1510.87 L553.541,1510.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M558.028,1510.8 L562.515,1510.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M567.003,1510.72 L571.49,1510.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M575.978,1510.64 L580.465,1510.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M584.952,1510.57 L589.44,1510.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M593.927,1510.49 L598.415,1510.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.902,1510.42 L607.389,1510.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.877,1510.34 L616.364,1510.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.852,1510.27 L625.339,1510.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.826,1510.19 L634.314,1510.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M437.12,1515.81 L441.397,1515.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.885,1515.73 L450.372,1515.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.86,1515.66 L459.347,1515.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.834,1515.58 L468.322,1515.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.809,1515.51 L477.297,1515.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.784,1515.43 L486.272,1515.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.759,1515.36 L495.246,1515.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.734,1515.28 L504.221,1515.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.709,1515.21 L513.196,1515.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.683,1515.13 L522.171,1515.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.658,1515.06 L531.146,1515.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.633,1514.98 L540.121,1514.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.608,1514.91 L549.095,1514.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.583,1514.83 L558.07,1514.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.558,1514.76 L567.045,1514.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.532,1514.68 L576.02,1514.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.507,1514.61 L584.995,1514.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.482,1514.53 L593.969,1514.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.457,1514.46 L602.944,1514.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.432,1514.38 L611.919,1514.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.406,1514.31 L620.894,1514.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.381,1514.23 L629.869,1514.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.356,1514.16 L636.618,1514.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M436.284,1519.81 L436.952,1519.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.439,1519.77 L445.927,1519.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.414,1519.7 L454.902,1519.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.389,1519.62 L463.877,1519.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.364,1519.55 L472.851,1519.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M477.339,1519.47 L481.826,1519.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M486.314,1519.4 L490.801,1519.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M495.289,1519.32 L499.776,1519.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M504.263,1519.25 L508.751,1519.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M513.238,1519.17 L517.726,1519.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M522.213,1519.1 L526.7,1519.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M531.188,1519.02 L535.675,1518.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M540.163,1518.95 L544.65,1518.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M549.138,1518.87 L553.625,1518.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M558.112,1518.79 L562.6,1518.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M567.087,1518.72 L571.575,1518.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M576.062,1518.64 L580.549,1518.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M585.037,1518.57 L589.524,1518.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M594.012,1518.49 L598.499,1518.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M602.986,1518.42 L607.474,1518.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M611.961,1518.34 L616.449,1518.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M620.936,1518.27 L625.424,1518.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.911,1518.19 L634.398,1518.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M436.994,1523.81 L441.482,1523.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.969,1523.73 L450.456,1523.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M454.944,1523.66 L459.431,1523.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M463.919,1523.58 L468.406,1523.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M472.894,1523.51 L477.381,1523.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M481.868,1523.43 L486.356,1523.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M490.843,1523.36 L495.331,1523.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M499.818,1523.28 L504.305,1523.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M508.793,1523.21 L513.28,1523.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M517.768,1523.13 L522.255,1523.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M526.743,1523.06 L531.23,1523.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M535.717,1522.98 L540.205,1522.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M544.692,1522.91 L549.18,1522.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M553.667,1522.83 L558.155,1522.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M562.642,1522.76 L567.129,1522.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M571.617,1522.68 L576.104,1522.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M580.592,1522.61 L585.079,1522.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M589.566,1522.53 L594.054,1522.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M598.541,1522.46 L603.029,1522.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M607.516,1522.38 L612.004,1522.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M616.491,1522.31 L620.978,1522.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M625.466,1522.23 L629.953,1522.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.441,1522.15 L637.989,1522.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M433.898,1527.83 L437.036,1527.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.524,1527.77 L446.011,1527.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.498,1527.7 L454.986,1527.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M459.473,1527.62 L463.961,1527.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M468.448,1527.55 L472.936,1527.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M278.3,1369.13 L282.788,1369.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.275,1369.05 L291.762,1369.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.249,1368.98 L296.809,1368.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.57,1373.13 L278.342,1373.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.829,1373.09 L287.317,1373.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M291.804,1373.02 L296.291,1372.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M278.384,1377.13 L282.871,1377.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.359,1377.05 L291.846,1377.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.333,1376.98 L300.82,1376.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.995,1381.14 L278.426,1381.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.913,1381.09 L287.401,1381.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M291.888,1381.01 L296.375,1380.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.862,1380.94 L302.581,1380.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M279.422,1385.12 L282.955,1385.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.442,1385.05 L291.93,1385.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.417,1384.98 L300.904,1384.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.997,1389.09 L287.484,1389.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M291.972,1389.01 L296.459,1388.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.946,1388.94 L305.433,1388.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M281.209,1393.1 L283.039,1393.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.526,1393.05 L292.014,1393.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.501,1392.98 L300.988,1392.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.475,1392.9 L308.983,1392.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M283.081,1397.09 L287.568,1397.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.055,1397.01 L296.543,1396.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.03,1396.94 L305.517,1396.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.005,1396.86 L311.337,1396.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.61,1401.05 L292.097,1401.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.585,1400.98 L301.072,1400.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.559,1400.9 L310.046,1400.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M285.148,1405.07 L287.652,1405.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.139,1405.01 L296.627,1404.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.114,1404.94 L305.601,1404.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.088,1404.86 L314.196,1404.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.694,1409.05 L292.181,1409.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.668,1408.98 L301.156,1408.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.643,1408.9 L310.13,1408.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.618,1408.83 L315.17,1408.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.441,1413.05 L287.736,1413.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.223,1413.01 L296.71,1412.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.198,1412.94 L305.685,1412.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.172,1412.86 L314.66,1412.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M288.276,1417.05 L292.265,1417.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.752,1416.98 L301.24,1416.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.727,1416.9 L310.214,1416.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.701,1416.83 L318.488,1416.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.307,1421.01 L296.794,1420.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.281,1420.94 L305.769,1420.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.256,1420.86 L314.743,1420.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M290.425,1425.03 L292.349,1425.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.836,1424.97 L301.323,1424.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.811,1424.9 L310.298,1424.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.785,1424.83 L319.273,1424.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.391,1429.01 L296.878,1428.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.365,1428.94 L305.853,1428.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.34,1428.86 L314.827,1428.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.315,1428.79 L322.703,1428.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.92,1432.97 L301.407,1432.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.895,1432.9 L310.382,1432.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.869,1432.82 L319.356,1432.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.844,1432.75 L324.271,1432.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M294.18,1437 L296.962,1436.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.449,1436.94 L305.936,1436.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.424,1436.86 L314.911,1436.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.398,1436.79 L323.886,1436.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.004,1440.97 L301.491,1440.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.978,1440.9 L310.466,1440.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.953,1440.82 L319.44,1440.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.928,1440.75 L326.57,1440.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.953,1444.97 L297.046,1444.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.533,1444.94 L306.02,1444.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.508,1444.86 L314.995,1444.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.482,1444.79 L323.97,1444.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.872,1448.97 L301.575,1448.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.062,1448.9 L310.55,1448.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.037,1448.82 L319.524,1448.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.012,1448.75 L328.499,1448.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.617,1452.94 L306.104,1452.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.591,1452.86 L315.079,1452.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.566,1452.79 L324.053,1452.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.541,1452.71 L329.051,1452.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M299.919,1456.95 L301.659,1456.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.146,1456.9 L310.633,1456.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.121,1456.82 L319.608,1456.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.095,1456.75 L328.583,1456.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.701,1460.94 L306.188,1460.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.675,1460.86 L315.163,1460.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.65,1460.79 L324.137,1460.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.625,1460.71 L331.105,1460.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.23,1464.9 L310.717,1464.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.205,1464.82 L319.692,1464.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.179,1464.75 L328.667,1464.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M303.965,1468.92 L306.272,1468.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.759,1468.86 L315.247,1468.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.734,1468.79 L324.221,1468.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.709,1468.71 L330.665,1468.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.314,1472.9 L310.801,1472.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.288,1472.82 L319.776,1472.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.263,1472.75 L328.751,1472.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.843,1476.86 L315.33,1476.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.818,1476.78 L324.305,1476.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.792,1476.71 L330.994,1476.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.401,1480.88 L310.885,1480.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.372,1480.82 L319.86,1480.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.347,1480.75 L328.834,1480.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.927,1484.86 L315.414,1484.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.902,1484.78 L324.389,1484.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.876,1484.71 L330.675,1484.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M309.985,1488.87 L310.969,1488.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.456,1488.82 L319.944,1488.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.431,1488.75 L328.918,1488.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.439,1492.85 L315.498,1492.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.985,1492.78 L324.473,1492.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.96,1492.71 L329.177,1492.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.54,1496.82 L320.027,1496.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.515,1496.75 L328.651,1496.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.128,1500.83 L315.582,1500.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M320.069,1500.78 L324.557,1500.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.624,1504.82 L320.111,1504.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.599,1504.75 L325.42,1504.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.858,1508.76 L323.843,1508.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.629,1516.75 L324.198,1516.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.687,1524.75 L324.224,1524.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.078,1375.23 L439.766,1378.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.766,1378.27 L440.467,1380.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M440.467,1380.5 L440.877,1382.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M440.877,1382.04 L441.181,1383.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.181,1383.87 L441.622,1386.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.622,1386.3 L441.817,1388.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.817,1388.23 L442.159,1389.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.159,1389.51 L442.59,1390.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.59,1390.99 L443.193,1392.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M443.193,1392.18 L443.421,1393.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M443.421,1393.03 L443.54,1394.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M443.54,1394.01 L443.922,1394.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M443.922,1394.98 L444.128,1395.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.128,1395.83 L444.313,1396.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.313,1396.79 L444.913,1397.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.913,1397.72 L445.557,1398.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.557,1398.63 L445.74,1399.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.74,1399.37 L445.665,1400.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.665,1400.54 L445.963,1401.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.963,1401.88 L446.435,1403.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.435,1403.07 L446.666,1404.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.666,1404.21 L446.771,1405.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.771,1405.85 L446.677,1407.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.677,1407.33 L446.65,1408.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.65,1408.97 L446.714,1410.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.714,1410.84 L447.217,1412.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.217,1412.91 L448.076,1415.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.076,1415.63 L448.667,1417.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.667,1417.69 L448.895,1418.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.895,1418.6 L449.145,1419.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.145,1419.48 L449.459,1420.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.459,1420.28 L450.314,1422.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.314,1422.49 L450.724,1424.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.724,1424.05 L450.968,1426.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.968,1426.5 L450.948,1428.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.948,1428.74 L451.013,1430.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M451.013,1430.75 L450.951,1433.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.951,1433.11 L450.64,1434.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.64,1434.79 L450.675,1436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.675,1436 L450.897,1438.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.897,1438.45 L450.938,1440.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.938,1440.21 L450.684,1443.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.684,1443.13 L450.366,1446.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M450.366,1446.16 L449.621,1450.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.621,1450.16 L449.334,1452.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.334,1452.05 L449.14,1454.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M449.14,1454.4 L448.447,1457.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.447,1457.09 L448.225,1458.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M448.225,1458.87 L447.921,1461.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.921,1461.19 L447.653,1464.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.653,1464.76 L447.519,1468.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.519,1468.66 L447.074,1472.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M447.074,1472.13 L446.483,1476.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M446.483,1476.23 L445.941,1480.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M445.941,1480.88 L444.81,1485.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M444.81,1485.6 L443.754,1489.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M443.754,1489.2 L442.718,1492.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.718,1492.64 L442.052,1495.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M442.052,1495.8 L441.388,1499.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M441.388,1499.22 L440.827,1502.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M440.827,1502.09 L439.838,1505.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M439.838,1505.73 L438.55,1510.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M438.55,1510.18 L437.226,1515.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M437.226,1515.3 L436.247,1519.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M436.247,1519.99 L435.389,1523.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M435.389,1523.6 L433.881,1527.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M433.881,1527.88 L639.178,1525.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M639.178,1525.91 L638.414,1523.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M638.414,1523.93 L637.955,1521.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M637.955,1521.98 L637.644,1519.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M637.644,1519.37 L637.114,1516.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M637.114,1516.84 L636.533,1513.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.533,1513.67 L636.382,1511.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.382,1511.78 L636.633,1510.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.633,1510.63 L636.903,1509.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.903,1509.28 L636.891,1508.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.891,1508.17 L636.941,1506.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.941,1506.73 L636.508,1505.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.508,1505.05 L636.007,1503.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.007,1503.19 L635.27,1499.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M635.27,1499.68 L635.035,1496.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M635.035,1496.06 L635.233,1494.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M635.233,1494.07 L635.389,1492.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M635.389,1492.29 L635.128,1490.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M635.128,1490.37 L634.439,1487.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M634.439,1487.23 L633.961,1485.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M633.961,1485.54 L633.82,1484.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M633.82,1484.57 L633.83,1483.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M633.83,1483.5 L633.645,1482.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M633.645,1482.52 L633.111,1481.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M633.111,1481.69 L632.093,1480.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.093,1480.55 L631.667,1479.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.667,1479.5 L631.652,1478.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.652,1478.07 L631.392,1476.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.392,1476.26 L630.863,1473.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M630.863,1473.81 L630.218,1470.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M630.218,1470.76 L630.317,1469.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M630.317,1469.72 L630.832,1468.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M630.832,1468.86 L631.304,1467.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.304,1467.94 L631.383,1467.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.383,1467.14 L631.287,1466.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.287,1466.32 L631.079,1465.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.079,1465.27 L631.381,1462.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.381,1462.79 L631.781,1461.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.781,1461.31 L632.403,1460.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.403,1460.19 L632.786,1459.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.786,1459.13 L632.755,1458.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.755,1458.3 L632.396,1457.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.396,1457.44 L631.158,1456.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M631.158,1456.19 L629.706,1455.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.706,1455.36 L628.074,1454.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.074,1454.12 L627.056,1453.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.056,1453.04 L626.514,1451.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.514,1451.37 L626.647,1449.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.647,1449.46 L627.283,1447.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.283,1447.56 L627.749,1444.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.749,1444.07 L628.213,1442.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.213,1442.47 L628.677,1440.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.677,1440.8 L628.999,1438.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.999,1438.15 L629.567,1433.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.567,1433.97 L629.848,1429.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.848,1429.53 L629.8,1424.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.8,1424.98 L629.399,1422.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.399,1422.18 L628.802,1419.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.802,1419.51 L627.479,1414.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.479,1414.4 L627.217,1412.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.217,1412.35 L627.35,1410.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.35,1410.44 L627.326,1408.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.326,1408.2 L627.151,1406.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.151,1406.06 L626.402,1403.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.402,1403.47 L626.183,1401.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.183,1401.42 L626.5,1398.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.5,1398.3 L626.828,1396.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.828,1396.19 L626.899,1394.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.899,1394.62 L626.798,1393.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.798,1393.39 L626.713,1392.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.713,1392.59 L626.589,1391.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.589,1391.17 L626.442,1389.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.442,1389.71 L626.696,1388.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.696,1388.89 L626.906,1388.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.906,1388.1 L626.723,1387.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.723,1387.31 L626.843,1386.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.843,1386.29 L626.871,1384.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.871,1384.77 L626.897,1383.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.897,1383.05 L626.957,1380.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.957,1380.52 L626.828,1378.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.828,1378.65 L626.897,1376.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M626.897,1376.89 L627.047,1374.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.047,1374.46 L627.117,1372.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.117,1372.82 L627.102,1371.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.102,1371.47 L627.345,1369.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.345,1369.6 L627.978,1367.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M627.978,1367.43 L628.793,1363.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M628.793,1363.82 L629.14,1361.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M629.14,1361.47 L437.522,1364.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M437.522,1364.6 L438.088,1368.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M438.088,1368.49 L438.808,1372.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M438.808,1372.44 L439.078,1375.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.989,1371.96 L298.689,1373.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M298.689,1373.17 L299.585,1374.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M299.585,1374.08 L300.282,1375.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.282,1375.01 L300.8,1376.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.8,1376.09 L301.195,1377.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.195,1377.52 L301.659,1378.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.659,1378.64 L301.773,1379.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.773,1379.21 L301.889,1379.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.889,1379.88 L302.22,1380.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M302.22,1380.39 L302.624,1380.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M302.624,1380.99 L303.197,1382.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M303.197,1382.16 L303.513,1383.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M303.513,1383.03 L304.142,1384.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M304.142,1384.3 L304.751,1385.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M304.751,1385.49 L305.704,1386.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.704,1386.62 L306.693,1387.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.693,1387.76 L307.482,1388.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M307.482,1388.83 L308.2,1390.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.2,1390.07 L308.743,1391.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.743,1391.85 L309.084,1393.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M309.084,1393.3 L309.475,1394.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M309.475,1394.38 L310.302,1395.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.302,1395.63 L311.089,1396.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.089,1396.43 L311.549,1397.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.549,1397.22 L311.976,1398.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.976,1398.21 L312.426,1399.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.426,1399.72 L312.768,1401.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.768,1401.37 L313.233,1402.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M313.233,1402.57 L313.768,1403.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M313.768,1403.5 L314.083,1404.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.083,1404.29 L314.331,1405.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.331,1405.48 L314.877,1407.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.877,1407.51 L315.257,1409.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.257,1409.21 L315.721,1410.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.721,1410.37 L316.424,1411.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M316.424,1411.88 L316.836,1413.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M316.836,1413.15 L317.484,1414.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M317.484,1414.61 L318.058,1415.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.058,1415.83 L318.483,1416.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.483,1416.7 L318.55,1417.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.55,1417.94 L318.652,1419" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.652,1419 L318.969,1419.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.969,1419.97 L319.104,1420.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.104,1420.77 L319.437,1421.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M319.437,1421.46 L320.151,1422.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M320.151,1422.23 L320.808,1422.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M320.808,1422.79 L321.14,1423.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M321.14,1423.45 L321.422,1424.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M321.422,1424.43 L321.703,1425.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M321.703,1425.4 L322.187,1426.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.187,1426.63 L322.651,1427.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.651,1427.74 L322.749,1428.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.749,1428.5 L322.595,1429.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.595,1429.37 L322.549,1430.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.549,1430.18 L322.79,1430.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.79,1430.69 L323.106,1431.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.106,1431.46 L323.727,1432.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.727,1432.04 L324.442,1432.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.442,1432.97 L324.869,1434" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.869,1434 L325.104,1435.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.104,1435.74 L325.374,1437.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.374,1437.31 L325.565,1438.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.565,1438.3 L325.666,1439.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.666,1439.29 L325.961,1439.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.961,1439.78 L326.511,1440.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M326.511,1440.56 L326.996,1441.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M326.996,1441.94 L327.227,1443.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.227,1443.28 L327.374,1445.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.374,1445.18 L327.529,1446.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.529,1446.21 L327.592,1446.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.592,1446.97 L327.98,1447.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.98,1447.76 L328.569,1448.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.569,1448.75 L328.887,1449.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.887,1449.72 L329.104,1451.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.104,1451.47 L329.046,1452.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.046,1452.83 L329.075,1453.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.075,1453.86 L329.465,1454.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.465,1454.84 L330.153,1456.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.153,1456.65 L330.664,1458.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.664,1458.76 L331.024,1460.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.024,1460.28 L331.272,1461.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.272,1461.55 L331.285,1462.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.285,1462.79 L331.099,1463.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.099,1463.98 L330.737,1465.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.737,1465.74 L330.668,1467.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.668,1467.76 L330.663,1469.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.663,1469.05 L330.693,1470.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.693,1470.15 L330.579,1471.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.579,1471.37 L330.393,1472.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.393,1472.6 L330.155,1474.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.155,1474.1 L330.217,1474.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.217,1474.75 L330.626,1475.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.626,1475.87 L331.145,1477.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.145,1477.03 L331.642,1477.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.642,1477.88 L331.741,1478.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.741,1478.68 L331.285,1480.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.285,1480.03 L330.957,1481.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.957,1481.58 L330.881,1482.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.881,1482.88 L330.697,1484.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.697,1484.37 L330.619,1485.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.619,1485.53 L330.395,1486.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.395,1486.61 L330.077,1487.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M330.077,1487.36 L329.852,1488.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.852,1488.29 L329.591,1490.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.591,1490.96 L329.106,1493.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M329.106,1493.01 L328.989,1494.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.989,1494.01 L328.915,1495.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.915,1495.54 L328.638,1496.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M328.638,1496.77 L327.887,1497.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.887,1497.56 L327.554,1497.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.554,1497.69 L327.276,1497.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.276,1497.97 L327.163,1498.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.163,1498.37 L327.165,1499.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.165,1499.41 L327.15,1500.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M327.15,1500.56 L326.844,1501.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M326.844,1501.58 L326.381,1502.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M326.381,1502.33 L325.829,1503.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.829,1503.1 L325.512,1503.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.512,1503.98 L325.379,1505.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.379,1505.08 L325.194,1506.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.194,1506.43 L324.969,1507.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.969,1507.42 L324.63,1507.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.63,1507.87 L324.022,1508.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.022,1508.49 L323.559,1509.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.559,1509.17 L323.332,1509.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.332,1509.96 L323.5,1510.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.5,1510.52 L323.494,1511.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.494,1511.64 L323.834,1513.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.834,1513.04 L323.968,1513.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.968,1513.73 L324.247,1514.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.247,1514.47 L324.417,1515.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.417,1515.16 L324.551,1515.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.551,1515.8 L324.43,1516.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.43,1516.4 L323.985,1517.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.985,1517.07 L323.703,1517.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.703,1517.79 L323.675,1518.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.675,1518.57 L323.738,1519.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.738,1519.41 L323.963,1520.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.963,1520.16 L324.025,1520.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.025,1520.9 L323.819,1521.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.819,1521.95 L323.738,1522.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.738,1522.81 L323.946,1523.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.946,1523.69 L324.116,1524.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.116,1524.42 L324.341,1525.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.341,1525.11 L324.619,1525.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.619,1525.75 L325.187,1526.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M325.187,1526.41 L324.792,1526.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.792,1526.73 L324.408,1526.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.408,1526.33 L324.129,1525.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M324.129,1525.66 L323.705,1524.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.705,1524.84 L323.418,1523.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.418,1523.41 L323.389,1522.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.389,1522.28 L323.362,1521.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.362,1521.44 L323.383,1520.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.383,1520.01 L323.296,1518.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.296,1518.6 L323.304,1517.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.304,1517.62 L323.655,1516.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.655,1516.68 L323.809,1515.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.809,1515.84 L323.56,1514.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.56,1514.51 L323.239,1513.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.239,1513.2 L323.081,1511.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.081,1511.88 L322.929,1511.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.929,1511.25 L322.916,1509.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.916,1509.95 L322.98,1509.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.98,1509.21 L322.773,1508.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.773,1508.45 L322.226,1508.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M322.226,1508.07 L321.391,1507.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M321.391,1507.72 L320.538,1507.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M320.538,1507.45 L318.853,1507.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M318.853,1507.21 L317.676,1507.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M317.676,1507.09 L316.966,1506.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M316.966,1506.66 L316.108,1505.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M316.108,1505.91 L315.629,1505.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.629,1505.16 L315.203,1504.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M315.203,1504.21 L314.923,1503.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.923,1503.32 L314.654,1501.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.654,1501.83 L314.192,1500.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M314.192,1500.96 L313.638,1499.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M313.638,1499.87 L313.449,1499.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M313.449,1499.11 L313.028,1498.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M313.028,1498.62 L312.714,1497.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.714,1497.99 L312.471,1497.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.471,1497.25 L312.156,1496.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.156,1496.57 L312.079,1496.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.079,1496.09 L312.088,1495.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.088,1495.24 L312.153,1494.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M312.153,1494.48 L311.781,1493.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.781,1493.58 L311.06,1492.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M311.06,1492.05 L310.243,1490.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.243,1490.04 L309.96,1488.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M309.96,1488.97 L310.186,1488.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.186,1488.06 L310.325,1487.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.325,1487.5 L310.374,1487" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.374,1487 L310.171,1486.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M310.171,1486.59 L309.604,1486" vector-effect="none" fill-rule="evenodd"/>
   <path d="M309.604,1486 L308.999,1485.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.999,1485.25 L308.661,1484.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.661,1484.08 L308.543,1483.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.543,1483.21 L308.411,1480.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.411,1480.95 L308.236,1479.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M308.236,1479.76 L307.642,1478.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M307.642,1478.31 L307.09,1477.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M307.09,1477.51 L306.467,1476.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.467,1476.66 L306.096,1475.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M306.096,1475.87 L305.836,1475.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.836,1475.2 L305.486,1474.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.486,1474.59 L305.297,1473.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.297,1473.83 L305.391,1472.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.391,1472.45 L305.331,1471.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.331,1471.87 L305.217,1471.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M305.217,1471.38 L304.701,1470.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M304.701,1470.48 L303.924,1468.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M303.924,1468.83 L303.365,1467.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M303.365,1467.22 L302.367,1465.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M302.367,1465.25 L301.184,1462.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M301.184,1462.81 L300.361,1460.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.361,1460.23 L300.113,1459.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.113,1459.04 L300.026,1457.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M300.026,1457.66 L299.813,1456.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M299.813,1456.25 L299.619,1455.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M299.619,1455.03 L298.969,1453.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M298.969,1453.46 L298.237,1450.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M298.237,1450.9 L297.854,1448.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.854,1448.87 L297.564,1447.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.564,1447.1 L297.151,1445.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.151,1445.63 L296.645,1443.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.645,1443.95 L295.955,1442.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M295.955,1442.05 L294.996,1440.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M294.996,1440.22 L294.435,1438.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M294.435,1438.51 L294.241,1437.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M294.241,1437.26 L293.976,1436.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M293.976,1436.12 L293.513,1435.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M293.513,1435.12 L292.903,1433.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.903,1433.9 L292.511,1432.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.511,1432.74 L292.182,1430.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M292.182,1430.66 L291.878,1429.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M291.878,1429.23 L291.264,1427.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M291.264,1427.66 L290.616,1426.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M290.616,1426.18 L290.384,1424.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M290.384,1424.78 L290.322,1424.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M290.322,1424.05 L289.792,1421.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M289.792,1421.82 L289.548,1421" vector-effect="none" fill-rule="evenodd"/>
   <path d="M289.548,1421 L288.826,1419.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M288.826,1419.39 L288.315,1417.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M288.315,1417.25 L287.875,1414.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.875,1414.98 L287.662,1413.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.662,1413.63 L287.179,1412.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M287.179,1412.37 L286.449,1410.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M286.449,1410.11 L286.163,1408.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M286.163,1408.66 L285.93,1407.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M285.93,1407.13 L285.427,1405.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M285.427,1405.74 L284.814,1404.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M284.814,1404.27 L283.797,1402.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M283.797,1402.1 L282.851,1399.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.851,1399.88 L282.678,1398.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.678,1398.9 L282.396,1397.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.396,1397.9 L282.117,1397.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.117,1397.18 L282.128,1396.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M282.128,1396.5 L281.939,1395.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M281.939,1395.68 L281.801,1394.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M281.801,1394.6 L281.392,1393.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M281.392,1393.62 L281.038,1392.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M281.038,1392.62 L280.449,1391.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M280.449,1391.65 L280.184,1390.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M280.184,1390.47 L280.002,1388.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M280.002,1388.68 L279.969,1387.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M279.969,1387.26 L279.667,1386.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M279.667,1386.09 L279.403,1385.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M279.403,1385.04 L278.797,1384.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M278.797,1384.15 L278.158,1383.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M278.158,1383.63 L277.57,1382.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.57,1382.69 L277.067,1381.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.067,1381.37 L276.637,1380" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.637,1380 L276.587,1378.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.587,1378.71 L276.843,1377.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.843,1377.24 L277.133,1375.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.133,1375.56 L277.53,1373.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.53,1373.72 L277.593,1372.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.593,1372.8 L277.137,1370.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M277.137,1370.74 L276.763,1369.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.763,1369.6 L276.681,1368.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.681,1368.68 L276.902,1367.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M276.902,1367.34 L296.334,1367.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.334,1367.67 L296.799,1368.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M296.799,1368.94 L297.342,1370.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M297.342,1370.63 L297.989,1371.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M86.0349,1465.67 L301.413,1463.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M331.26,1462.95 L447.887,1461.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M83.7959,1434.2 L292.375,1431.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M323.188,1431.54 L450.993,1430.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1679.72,1310.16 L1669.28,1308.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1675.34,1351.04 L1678.15,1336.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.67,1336.07 L1678.15,1336.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1685.39,1384.25 L1684.19,1397.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.53,1381.01 L1685.81,1382.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.01,1483.83 L1669.72,1483.23 L1685.4,1482.16 L1689.39,1481.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.32,1515.31 L1688.64,1515.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.64,1515.93 L1689.39,1481.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.84,1477.25 L1740.25,1474.46 L1747.52,1472.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.84,1477.25 L1723.97,1516.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.97,1516.55 L1743.56,1516.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1743.56,1516.89 L1746.03,1516.9 L1748.5,1516.82 L1750.96,1516.67 L1753.41,1516.45 L1755.85,1516.15 L1758.28,1515.77 L1758.96,1515.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1758.96,1515.65 L1747.52,1472.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1747.52,1472.96 L1762.75,1469.47 L1772.95,1466.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1758.96,1515.65 L1761.37,1515.18 L1763.76,1514.63 L1766.12,1514.01 L1768.46,1513.31 L1770.77,1512.55 L1773.05,1511.71 L1773.68,1511.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.68,1511.46 L1785.79,1506.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1789.07,1499.11 L1788.8,1499.34 L1788.55,1499.58 L1788.3,1499.83 L1788.07,1500.08 L1787.84,1500.34 L1787.63,1500.61 L1787.42,1500.88 L1787.23,1501.17 L1787.05,1501.45 L1786.87,1501.75 L1786.72,1502.04 L1786.57,1502.35 L1786.43,1502.65 L1786.31,1502.96 L1786.2,1503.28 L1786.1,1503.6 L1786.01,1503.92 L1785.94,1504.24 L1785.88,1504.56 L1785.83,1504.89 L1785.79,1505.22 L1785.77,1505.55 L1785.76,1505.88 L1785.76,1506.21 L1785.78,1506.54 L1785.79,1506.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1789.07,1499.11 L1772.95,1466.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.51,1522.23 L1653.18,1521.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1652.48,1553.1 L1687.81,1553.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.81,1553.72 L1688.51,1522.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.83,1522.85 L1688.51,1522.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.81,1553.72 L1723.14,1554.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.14,1554.34 L1723.83,1522.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1743.42,1523.19 L1746.14,1523.19 L1748.85,1523.11 L1751.56,1522.95 L1754.26,1522.7 L1756.94,1522.37 L1759.62,1521.96 L1760.6,1521.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1743.42,1523.19 L1723.83,1522.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.14,1554.34 L1768.05,1555.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.05,1555.12 L1760.6,1521.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1788.62,1512.43 L1788.88,1512.66 L1789.15,1512.89 L1789.42,1513.11 L1789.71,1513.32 L1790,1513.53 L1790.3,1513.72 L1790.61,1513.9 L1790.92,1514.08 L1791.24,1514.24 L1791.57,1514.4 L1791.9,1514.54 L1792.24,1514.67 L1792.58,1514.8 L1792.93,1514.91 L1793.28,1515.01 L1793.64,1515.1 L1794,1515.18 L1794.36,1515.25 L1794.73,1515.3 L1795.09,1515.35 L1795.46,1515.38 L1795.83,1515.4 L1796.2,1515.41 L1796.57,1515.41 L1796.94,1515.4 L1797.31,1515.38 L1797.68,1515.34 L1798.04,1515.3 L1798.41,1515.24 L1798.77,1515.17 L1799.13,1515.09 L1799.48,1515 L1799.83,1514.89 L1800.18,1514.78 L1800.52,1514.65 L1800.86,1514.52 L1801.19,1514.37 L1801.52,1514.22 L1801.84,1514.05 L1802.15,1513.88 L1802.46,1513.69 L1802.76,1513.5 L1802.91,1513.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1788.62,1512.43 L1776.55,1517.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1760.6,1521.78 L1763.25,1521.25 L1765.87,1520.64 L1768.47,1519.95 L1771.05,1519.18 L1773.58,1518.33 L1776.09,1517.4 L1776.55,1517.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.05,1555.12 L1831.92,1529.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1831.92,1529.78 L1802.91,1513.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.73,1602.98 L1687.81,1553.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.73,1602.98 L1693.33,1605.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721.91,1610.36 L1723.14,1554.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.2,1606.64 L1785.26,1589.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1785.26,1589.6 L1768.05,1555.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1785.26,1589.6 L1817.18,1576.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1817.18,1576.96 L1799.98,1542.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1817.18,1576.96 L1869.89,1556.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1869.71,1551.13 L1869.64,1551.57 L1869.58,1552 L1869.54,1552.44 L1869.52,1552.88 L1869.52,1553.32 L1869.53,1553.76 L1869.56,1554.2 L1869.61,1554.64 L1869.67,1555.07 L1869.75,1555.51 L1869.85,1555.94 L1869.89,1556.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1869.71,1551.13 L1831.92,1529.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1689.39,1481.8 L1705,1480.11 L1720.54,1477.94 L1724.84,1477.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.64,1515.93 L1723.97,1516.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1878.23,1564.84 L1750.5,1615.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.36,1615.66 L1688.21,1615.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.22,1363.43 L1438.03,1394.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.79,1331.01 L1420.39,1393.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1407.16,1330.04 L1402.76,1392.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.53,1329.06 L1385.13,1391.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.67,1327.34 L1354.27,1390.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,1335.26 L1474.51,1333.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.15,1366.16 L1509.81,1336.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.85,1334.46 L1484.73,1364.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.32,1335.1 L1494.44,1365.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.4,1401.61 L1495.35,1432.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.22,1363.43 L1422.59,1362.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.33,1360.49 L1404.96,1361.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.96,1361.47 L1422.59,1362.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.33,1360.49 L1356.47,1358.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.25,1401.32 L1510.18,1433.06" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ffff" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1682.23,1270 L1771.76,1274.3" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1683.91,1195.35 L1674.64,1248.18" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#7eadbd" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1676.16,1195.45 L1666.84,1248.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1673.15,1195.49 L1663.91,1248.23" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1671.06,1195.51 L1661.61,1249.4" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1686.92,1195.31 L1677.58,1248.59" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1689.06,1195.28 L1679.34,1250.74" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1670.42,1275.07 L1666.78,1293.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1673.55,1275.55 L1670.02,1293.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1675.92,1274.47 L1672.17,1293.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.46,1273.96 L1659.59,1293.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1660.33,1273.48 L1656.36,1293.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1658.52,1271.75 L1654.2,1293.91" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1773.87,1258.63 L1683.18,1254.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.03,1264.9 L1685.19,1260.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1772.61,1268.03 L1685,1263.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.2,1255.72 L1522.19,1249.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.49,1261.45 L1685.4,1257.22" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#56816b" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1654,1259.18 L1521.73,1252.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.8,1262.32 L1521.31,1255.95" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1653.6,1265.78 L1520.84,1259.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1772.14,1271.48 L1684.8,1267.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1680.1,1261.41 L1680.04,1260.48 L1679.88,1259.57 L1679.61,1258.67 L1679.25,1257.8 L1678.8,1256.97 L1678.26,1256.17 L1677.63,1255.44 L1676.92,1254.75 L1676.14,1254.14 L1675.3,1253.59 L1674.41,1253.12 L1673.46,1252.74 L1672.48,1252.43 L1671.47,1252.22 L1670.44,1252.09 L1669.4,1252.05 L1668.36,1252.11 L1667.33,1252.25 L1666.33,1252.48 L1665.35,1252.81 L1664.41,1253.21 L1663.53,1253.69 L1662.7,1254.25 L1661.93,1254.88 L1661.24,1255.58 L1660.63,1256.33 L1660.1,1257.13 L1659.67,1257.97 L1659.33,1258.84 L1659.08,1259.75 L1658.94,1260.66 L1658.9,1261.59 L1658.96,1262.52 L1659.12,1263.43 L1659.39,1264.33 L1659.75,1265.2 L1660.2,1266.03 L1660.74,1266.82 L1661.37,1267.56 L1662.08,1268.24 L1662.85,1268.86 L1663.7,1269.41 L1664.59,1269.87 L1665.54,1270.26 L1666.52,1270.57 L1667.53,1270.78 L1668.56,1270.91 L1669.6,1270.95 L1670.64,1270.89 L1671.67,1270.75 L1672.67,1270.51 L1673.65,1270.19 L1674.59,1269.79 L1675.47,1269.3 L1676.3,1268.75 L1677.07,1268.12 L1677.76,1267.42 L1678.37,1266.67 L1678.9,1265.87 L1679.33,1265.03 L1679.67,1264.15 L1679.92,1263.25 L1680.06,1262.33 L1680.1,1261.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1673.85,1249.84 L1673.39,1249.72 L1672.93,1249.6 L1672.46,1249.5 L1671.99,1249.42 L1671.51,1249.35 L1671.04,1249.29 L1670.56,1249.25 L1670.08,1249.23 L1669.6,1249.22 L1669.11,1249.22 L1668.63,1249.24 L1668.15,1249.28 L1667.68,1249.32 L1667.41,1249.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1661.68,1251.39 L1661.29,1251.64 L1660.91,1251.9 L1660.54,1252.17 L1660.18,1252.45 L1659.83,1252.75 L1659.49,1253.06 L1659.17,1253.37 L1658.86,1253.7 L1658.66,1253.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1661.61,1249.4 L1661.22,1249.57 L1660.83,1249.76 L1660.45,1249.96 L1660.08,1250.17 L1659.72,1250.39 L1659.36,1250.62 L1659.02,1250.87 L1658.68,1251.12 L1658.36,1251.38 L1658.04,1251.66 L1657.74,1251.94 L1657.45,1252.24 L1657.17,1252.54 L1656.9,1252.85 L1656.77,1253" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1661.64,1251.43 L1661.84,1251.33 L1661.94,1251.23 L1662.14,1251.13 L1662.24,1250.93 L1662.44,1250.83 L1662.54,1250.73 L1662.64,1250.63 L1662.74,1250.53 L1662.84,1250.33 L1663.04,1250.23 L1663.14,1250.13 L1663.24,1249.93 L1663.34,1249.83 L1663.34,1249.63 L1663.44,1249.53 L1663.54,1249.33 L1663.64,1249.23 L1663.64,1249.03 L1663.74,1248.93 L1663.74,1248.73 L1663.84,1248.63 L1663.84,1248.43 L1663.94,1248.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1666.81,1248.81 L1666.84,1248.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1666.84,1248.83 L1666.84,1248.93 L1666.84,1249.03 L1666.84,1249.13 L1666.94,1249.13 L1666.94,1249.23 L1667.04,1249.23 L1667.04,1249.33 L1667.14,1249.33 L1667.24,1249.33 L1667.34,1249.33 L1667.44,1249.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.24,1255.73 L1654.44,1255.73 L1654.54,1255.73 L1654.74,1255.73 L1654.94,1255.73 L1655.14,1255.73 L1655.34,1255.63 L1655.54,1255.63 L1655.64,1255.63 L1655.84,1255.53 L1656.04,1255.53 L1656.24,1255.43 L1656.34,1255.43 L1656.54,1255.33 L1656.74,1255.33 L1656.94,1255.23 L1657.04,1255.13 L1657.24,1255.03 L1657.34,1254.93 L1657.54,1254.83 L1657.64,1254.73 L1657.84,1254.63 L1657.94,1254.53 L1658.14,1254.43 L1658.24,1254.33 L1658.34,1254.23 L1658.44,1254.13 L1658.64,1253.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1681.19,1255 L1680.93,1254.64 L1680.66,1254.29 L1680.37,1253.95 L1680.06,1253.61 L1679.75,1253.29 L1679.42,1252.98 L1679.12,1252.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1683.18,1254.27 L1682.99,1253.99 L1682.79,1253.71 L1682.59,1253.43 L1682.37,1253.16 L1682.14,1252.9 L1681.9,1252.65 L1681.65,1252.41 L1681.39,1252.17 L1681.13,1251.94 L1680.85,1251.72 L1680.57,1251.51 L1680.28,1251.3 L1679.97,1251.11 L1679.67,1250.92 L1679.35,1250.75 L1679.34,1250.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1681.24,1255.03 L1681.34,1255.13 L1681.44,1255.23 L1681.54,1255.43 L1681.64,1255.53 L1681.74,1255.63 L1681.84,1255.73 L1682.04,1255.93 L1682.14,1256.03 L1682.24,1256.13 L1682.44,1256.23 L1682.54,1256.33 L1682.74,1256.43 L1682.84,1256.53 L1683.04,1256.63 L1683.24,1256.63 L1683.34,1256.73 L1683.54,1256.83 L1683.74,1256.83 L1683.84,1256.93 L1684.04,1257.03 L1684.24,1257.03 L1684.44,1257.13 L1684.54,1257.13 L1684.74,1257.13 L1684.94,1257.13 L1685.14,1257.23 L1685.34,1257.23 L1685.44,1257.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1677.54,1248.63 L1677.54,1248.73 L1677.54,1248.93 L1677.54,1249.03 L1677.54,1249.23 L1677.54,1249.43 L1677.54,1249.53 L1677.54,1249.73 L1677.54,1249.93 L1677.54,1250.03 L1677.64,1250.23 L1677.64,1250.43 L1677.74,1250.53 L1677.74,1250.73 L1677.84,1250.83 L1677.84,1251.03 L1677.94,1251.13 L1678.04,1251.33 L1678.14,1251.43 L1678.14,1251.63 L1678.24,1251.73 L1678.34,1251.93 L1678.44,1252.03 L1678.54,1252.13 L1678.74,1252.33 L1678.84,1252.43 L1678.94,1252.53 L1679.04,1252.63 L1679.14,1252.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.64,1248.18 L1674.61,1248.43 L1674.58,1248.69 L1674.56,1248.95 L1674.55,1249.2 L1674.55,1249.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1673.84,1249.83 L1673.94,1249.83 L1674.04,1249.83 L1674.14,1249.83 L1674.24,1249.83 L1674.34,1249.83 L1674.34,1249.73 L1674.44,1249.73 L1674.44,1249.63 L1674.54,1249.63 L1674.54,1249.53 L1674.54,1249.43" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1681.69,1261.39 L1681.62,1260.33 L1681.43,1259.28 L1681.13,1258.25 L1680.72,1257.24 L1680.19,1256.29 L1679.57,1255.38 L1678.85,1254.53 L1678.04,1253.74 L1677.14,1253.03 L1676.17,1252.41 L1675.14,1251.87 L1674.06,1251.42 L1672.93,1251.07 L1671.76,1250.82 L1670.58,1250.68 L1669.38,1250.63 L1668.19,1250.7 L1667.01,1250.86 L1665.85,1251.13 L1664.73,1251.5 L1663.65,1251.97 L1662.63,1252.52 L1661.68,1253.17 L1660.8,1253.89 L1660,1254.69 L1659.3,1255.55 L1658.69,1256.47 L1658.19,1257.44 L1657.8,1258.45 L1657.52,1259.48 L1657.36,1260.54 L1657.31,1261.6 L1657.38,1262.67 L1657.57,1263.72 L1657.87,1264.75 L1658.28,1265.75 L1658.81,1266.71 L1659.43,1267.62 L1660.15,1268.47 L1660.96,1269.26 L1661.86,1269.97 L1662.83,1270.59 L1663.86,1271.13 L1664.94,1271.58 L1666.07,1271.93 L1667.24,1272.18 L1668.42,1272.32 L1669.62,1272.36 L1670.81,1272.3 L1671.99,1272.14 L1673.15,1271.87 L1674.27,1271.5 L1675.35,1271.03 L1676.37,1270.48 L1677.32,1269.83 L1678.2,1269.11 L1679,1268.31 L1679.7,1267.45 L1680.31,1266.53 L1680.81,1265.56 L1681.2,1264.55 L1681.48,1263.52 L1681.64,1262.46 L1681.69,1261.39" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1683.9,1260.53 L1684.22,1260.58 L1684.53,1260.62 L1684.85,1260.66 L1685.17,1260.68 L1685.19,1260.68" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#56816b" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1654,1259.18 L1654.32,1259.19 L1654.64,1259.19 L1654.96,1259.18 L1655.28,1259.16 L1655.3,1259.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.87,1259.7 L1655.81,1260.12 L1655.76,1260.55 L1655.73,1260.98 L1655.72,1261.41 L1655.73,1261.83 L1655.73,1261.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.14,1262.43 L1655.24,1262.43 L1655.34,1262.43 L1655.44,1262.43 L1655.54,1262.43 L1655.54,1262.33 L1655.64,1262.33 L1655.64,1262.23 L1655.74,1262.23 L1655.74,1262.13 L1655.74,1262.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.84,1259.73 L1655.84,1259.63 L1655.84,1259.53 L1655.84,1259.43 L1655.84,1259.33 L1655.74,1259.33 L1655.74,1259.23 L1655.64,1259.23 L1655.54,1259.23 L1655.54,1259.13 L1655.44,1259.13 L1655.34,1259.13" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1663.44,1273.93 L1663.54,1273.73 L1663.54,1273.43 L1663.54,1273.23" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#56816b" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1655.1,1262.47 L1654.78,1262.42 L1654.47,1262.37 L1654.15,1262.34 L1653.83,1262.32 L1653.8,1262.32" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1664.29,1272.87 L1664.74,1273.03 L1665.19,1273.17 L1665.65,1273.29 L1666.12,1273.41 L1666.59,1273.5 L1667.06,1273.59 L1667.53,1273.66 L1668.01,1273.71 L1668.49,1273.75 L1668.97,1273.77 L1669.45,1273.78 L1669.93,1273.78 L1670.06,1273.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1670.64,1274.33 L1670.64,1274.23 L1670.64,1274.13 L1670.54,1274.13 L1670.54,1274.03 L1670.54,1273.93 L1670.44,1273.93 L1670.44,1273.83 L1670.34,1273.83 L1670.24,1273.83 L1670.14,1273.73 L1670.04,1273.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.34,1272.83 L1664.24,1272.83 L1664.14,1272.83 L1664.04,1272.83 L1663.94,1272.83 L1663.84,1272.83 L1663.84,1272.93 L1663.74,1272.93 L1663.74,1273.03 L1663.64,1273.03 L1663.64,1273.13 L1663.54,1273.13 L1663.54,1273.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.2,1272.23 L1676.62,1272.02 L1677.02,1271.79 L1677.42,1271.55 L1677.81,1271.3 L1678.19,1271.03 L1678.56,1270.76 L1678.91,1270.47 L1679.26,1270.17 L1679.59,1269.86 L1679.91,1269.54 L1680.22,1269.21 L1680.34,1269.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1684.84,1267.33 L1684.64,1267.23 L1684.44,1267.23 L1684.24,1267.23 L1684.04,1267.33 L1683.84,1267.33 L1683.74,1267.33 L1683.54,1267.33 L1683.34,1267.43 L1683.14,1267.43 L1682.94,1267.43 L1682.84,1267.53 L1682.64,1267.63 L1682.44,1267.63 L1682.24,1267.73 L1682.14,1267.83 L1681.94,1267.83 L1681.74,1267.93 L1681.64,1268.03 L1681.44,1268.13 L1681.34,1268.23 L1681.14,1268.33 L1681.04,1268.43 L1680.94,1268.53 L1680.74,1268.63 L1680.64,1268.73 L1680.54,1268.93 L1680.44,1269.03 L1680.34,1269.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1685,1263.82 L1684.68,1263.81 L1684.36,1263.81 L1684.04,1263.82 L1683.72,1263.84 L1683.7,1263.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1683.14,1263.33 L1683.14,1263.43 L1683.14,1263.53 L1683.14,1263.63 L1683.24,1263.63 L1683.24,1263.73 L1683.34,1263.73 L1683.44,1263.83 L1683.54,1263.83 L1683.64,1263.83 L1683.74,1263.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.24,1272.23 L1676.04,1272.33 L1675.84,1272.43 L1675.74,1272.53 L1675.54,1272.63 L1675.44,1272.73 L1675.34,1272.83 L1675.14,1272.93 L1675.04,1273.03 L1674.94,1273.13 L1674.74,1273.23 L1674.64,1273.43 L1674.54,1273.53 L1674.44,1273.63 L1674.34,1273.83 L1674.24,1273.93 L1674.14,1274.03 L1674.04,1274.23 L1673.94,1274.33 L1673.94,1274.53 L1673.84,1274.63 L1673.74,1274.83 L1673.74,1275.03 L1673.64,1275.13 L1673.64,1275.33 L1673.54,1275.43 L1673.54,1275.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1670.64,1274.33 L1670.54,1274.63 L1670.44,1274.93 L1670.44,1275.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1683.13,1263.3 L1683.19,1262.88 L1683.24,1262.45 L1683.27,1262.02 L1683.28,1261.59 L1683.27,1261.16 L1683.27,1261.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1683.94,1260.53 L1683.84,1260.53 L1683.74,1260.53 L1683.64,1260.53 L1683.54,1260.53 L1683.54,1260.63 L1683.44,1260.63 L1683.44,1260.73 L1683.34,1260.73 L1683.34,1260.83 L1683.24,1260.83 L1683.24,1260.93 L1683.24,1261.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.82,1268.73 L1656.11,1269.15 L1656.42,1269.56 L1656.75,1269.96 L1657.08,1270.35 L1657.44,1270.73 L1657.81,1271.1 L1658.19,1271.46 L1658.52,1271.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1675.92,1274.47 L1676.42,1274.26 L1676.92,1274.04 L1677.4,1273.8 L1677.88,1273.54 L1678.35,1273.28 L1678.8,1272.99 L1679.25,1272.7 L1679.68,1272.39 L1680.1,1272.06 L1680.51,1271.73 L1680.9,1271.38 L1681.28,1271.02 L1681.65,1270.65 L1682,1270.26 L1682.23,1270" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1588.28,1348.75 L1578.15,1395.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1582.73,1374.09 L1557.44,1370.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1601.57,1395.65 L1610.1,1352.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1583.8,1369.22 L1638.43,1376.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.15,1378.83 L1457.13,1379.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.21,1364.43 L1440.22,1363.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1671.79,1295.63 L1741.42,1306.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1670.58,1301.84 L1740.21,1312.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1701.69,1332.74 L1706.62,1307.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.09,1328.78 L1701.69,1332.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1228.9,1309.08 L1502.63,1324.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.63,1324.29 L1550.7,1331.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1692.03,1270.47 L1682.23,1270" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.67,1297.94 L1692.03,1270.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1730.41,1275.53 L1724.89,1303.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1589.67,1312.2 L1582.7,1311.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1582.7,1311.12 L1579.68,1326.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1586.64,1327.72 L1589.67,1312.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1621.45,1333.11 L1619.64,1342.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1626.6,1343.49 L1628.42,1334.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1577.87,1335.95 L1579.68,1326.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1230.54,1248.26 L1700.85,1270.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1792.48,1419.14 L1757.98,1429.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1757.98,1429.74 L1721.97,1437.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721.97,1437.6 L1686.49,1442.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.49,1442.49 L1650.07,1444.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1650.07,1444.52 L1329.24,1438.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.24,1438.09 L1317.1,1435.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.1,1435.92 L1246.2,1411.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1246.2,1411.27 L1236.84,1398.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1236.84,1398.73 L1237.64,1368.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1237.64,1368.83 L1227.43,1363.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1227.43,1363.45 L1230.54,1248.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1550.74,1331.73 L1550.94,1331.73 L1551.24,1331.83 L1551.44,1331.83 L1551.64,1331.83 L1551.94,1331.83 L1552.14,1331.83 L1552.44,1331.83 L1552.64,1331.83 L1552.94,1331.73 L1553.14,1331.73 L1553.44,1331.73 L1553.64,1331.63 L1553.84,1331.63 L1554.14,1331.53 L1554.34,1331.43 L1554.54,1331.33 L1554.84,1331.33 L1555.04,1331.23 L1555.24,1331.13 L1555.44,1330.93 L1555.64,1330.83 L1555.84,1330.73 L1556.04,1330.63 L1556.24,1330.53 L1556.44,1330.33 L1556.64,1330.23 L1556.84,1330.03 L1557.04,1329.93 L1557.14,1329.73 L1557.34,1329.53 L1557.54,1329.43 L1557.64,1329.23 L1557.74,1329.03 L1557.94,1328.83 L1558.04,1328.63 L1558.14,1328.43 L1558.24,1328.23 L1558.34,1328.03 L1558.44,1327.83 L1558.54,1327.63 L1558.64,1327.43 L1558.74,1327.23 L1558.74,1327.03 L1558.84,1326.83 L1558.84,1326.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1792.81,1411.66 L1755.19,1423.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1771.5,1411.55 L1753.19,1417.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1753.19,1417.18 L1717.13,1424.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1755.19,1423.23 L1718.48,1431.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1717.13,1424.99 L1696.09,1427.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1718.48,1431.18 L1697.17,1433.92" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff00ff" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1792.81,1411.66 L1974.61,1341.98" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1771.5,1411.55 L1763.09,1401.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1763.09,1401.29 L1755.68,1389.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1755.68,1389.84 L1752.58,1384" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1752.58,1384 L1747.51,1372.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1747.51,1372.09 L1744.3,1361.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.18,1350.65 L1741.1,1336.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.1,1336.82 L1741.81,1322.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1771.5,1411.55 L1776.47,1416.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1693.68,1353.88 L1703.64,1354.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1692.04,1364.81 L1703.35,1365.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1703.64,1354.72 L1713.62,1354.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1703.35,1365.77 L1715.01,1365.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.67,1336.07 L1681.03,1303.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1657.74,1367.75 L1655.53,1381.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1640.33,1365.05 L1637.96,1379.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.53,1381.01 L1654.15,1397.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1637.96,1379.25 L1636.47,1396.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.68,1397.89 L1690.29,1396.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1690.29,1396.49 L1693.6,1395.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1663.46,1436.64 L1652.87,1436.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1583.31,1401.48 L1582.2,1435.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1600.97,1401.93 L1599.86,1435.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1547.61,1409.99 L1547.61,1409.99" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1301.64,1426.49 L1291.27,1422.89" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1664.23,1334.46 L1664.23,1334.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1576.44,1310.13 L1576.14,1310.13 L1575.94,1310.13 L1575.74,1310.03 L1575.44,1310.03 L1575.24,1310.03 L1574.94,1310.03 L1574.74,1310.03 L1574.44,1310.13 L1574.24,1310.13 L1573.94,1310.13 L1573.74,1310.23 L1573.54,1310.23 L1573.24,1310.33 L1573.04,1310.33 L1572.74,1310.43 L1572.54,1310.53 L1572.34,1310.63 L1572.14,1310.73 L1571.84,1310.83 L1571.64,1310.93 L1571.44,1311.03 L1571.24,1311.13 L1571.04,1311.23 L1570.84,1311.43 L1570.64,1311.53 L1570.44,1311.73 L1570.34,1311.83 L1570.14,1312.03 L1569.94,1312.13 L1569.84,1312.33 L1569.64,1312.53 L1569.54,1312.63 L1569.34,1312.83 L1569.24,1313.03 L1569.14,1313.23 L1568.94,1313.43 L1568.84,1313.63 L1568.74,1313.83 L1568.64,1314.03 L1568.54,1314.23 L1568.54,1314.43 L1568.44,1314.63 L1568.34,1314.83 L1568.34,1315.03 L1568.24,1315.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1528.93,1339.56 L1528.93,1339.56" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#0000ff" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M2013.89,1366.23 L2009.91,1378.15" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1631.35,1251.78 L1629.78,1259.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M672.846,1221.36 L979.63,1236.16" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1317.1,1435.92 L1329.24,1438.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721.97,1437.6 L1757.98,1429.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.85,1270.89 L1230.54,1248.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.067,1380.26 L647.261,1307.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M647.261,1307.13 L667.109,1232.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M667.109,1232.14 L681.03,1205.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M672.846,1221.36 L1700.85,1270.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2013.89,1366.23 L2009.91,1378.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2009.91,1378.15 L2002.54,1384.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2002.54,1384.73 L2000.72,1399.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2000.72,1399.57 L2015.48,1417.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2015.48,1417.76 L2040.99,1433.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2040.99,1433.92 L2063.9,1438.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2063.9,1438.87 L2071.1,1443.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2071.1,1443.33 L2078.69,1453.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2078.69,1453.91 L2080.32,1468.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2080.32,1468.03 L2043.85,1482.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2043.85,1482.92 L2031.01,1493.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2031.01,1493.24 L2026.04,1499.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2026.04,1499.69 L2021.31,1511.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2021.31,1511.97 L2022.74,1529.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2022.74,1529.14 L2031.62,1545.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2031.62,1545.19 L2043.04,1560.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2043.04,1560.76 L2068.43,1584.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2068.43,1584.3 L2063.99,1626.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2063.99,1626.57 L2063.94,1650.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2063.94,1650.42 L2061.82,1662" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2061.82,1662 L2063.28,1676.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2063.28,1676.87 L2059.24,1683.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2059.24,1683.38 L2037.11,1680.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2037.11,1680.15 L2012.73,1671.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2012.73,1671.78 L1995.64,1674.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1995.64,1674.48 L1927.07,1708.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1927.07,1708.26 L1912.32,1710.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1912.32,1710.21 L1855.63,1734.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1855.63,1734.94 L1823.13,1776.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1823.13,1776.72 L1802.14,1786.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1802.14,1786.25 L1769.57,1791.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1769.57,1791.3 L1737.76,1789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737.76,1789 L1658.25,1804.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1658.25,1804.19 L1565.52,1830.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1565.52,1830.45 L1541.56,1845.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1541.56,1845.75 L1329.32,1900.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.32,1900.53 L1256.16,1857.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1256.16,1857.98 L1134.08,1826.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1134.08,1826.77 L1045.05,1820.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1045.05,1820.89 L1006.53,1846.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1006.53,1846.7 L961.557,1926.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M961.557,1926.55 L915.391,1869.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M915.391,1869.77 L894.148,1861.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M894.148,1861.61 L872.45,1846.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M872.45,1846.39 L824.372,1804.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M824.372,1804.57 L781.701,1777.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M781.701,1777.92 L732.774,1713.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M732.774,1713.31 L692.243,1655.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M692.243,1655.27 L675.391,1595.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M675.391,1595.55 L671.959,1557.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M671.959,1557.02 L665.11,1523.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M665.11,1523.96 L648.41,1513.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M648.41,1513.43 L647.926,1468.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M647.926,1468.1 L636.95,1453.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.95,1453.34 L643.076,1436.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M643.076,1436.43 L632.067,1380.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M638.959,1447.79 L786.263,1445.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M963.236,1446 L815.237,1445.12 L786.263,1445.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M963.236,1446 L1615.06,1459.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1615.06,1459.95 L1616.2,1459.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1616.2,1459.98 L1617.34,1460" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1617.34,1460 L1618.48,1460.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1618.48,1460.02 L1619.62,1460.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1619.62,1460.05 L1620.75,1460.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1620.75,1460.07 L1621.89,1460.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1621.89,1460.09 L1623.03,1460.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1623.03,1460.12 L1624.17,1460.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1624.17,1460.14 L1625.31,1460.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1625.31,1460.16 L1626.45,1460.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1626.45,1460.18 L1627.59,1460.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1627.59,1460.2 L1628.73,1460.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1628.73,1460.22 L1629.87,1460.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1629.87,1460.24 L1631.01,1460.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.01,1460.25 L1632.15,1460.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1632.15,1460.27 L1633.29,1460.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1633.29,1460.28 L1634.43,1460.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1634.43,1460.29 L1635.57,1460.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.57,1460.3 L1636.71,1460.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.71,1460.31 L1637.85,1460.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1637.85,1460.32 L1638.99,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1638.99,1460.33 L1640.13,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1640.13,1460.33 L1641.27,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1641.27,1460.33 L1642.41,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1642.41,1460.33 L1643.55,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1643.55,1460.33 L1644.69,1460.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1644.69,1460.33 L1645.83,1460.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1645.83,1460.32 L1646.97,1460.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1646.97,1460.31 L1648.11,1460.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1648.11,1460.3 L1649.25,1460.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1649.25,1460.28 L1650.39,1460.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1650.39,1460.27 L1665.18,1459.8 L1679.94,1458.88 L1694.66,1457.5 L1709.32,1455.66 L1723.89,1453.36 L1738.37,1450.62 L1752.73,1447.42 L1766.95,1443.78 L1781.03,1439.7 L1794.93,1435.18 L1798.98,1433.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1798.98,1433.78 L1800.04,1433.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1800.04,1433.4 L1801.1,1433.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1801.1,1433.02 L1802.16,1432.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1802.16,1432.64 L1803.21,1432.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1803.21,1432.26 L1804.27,1431.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1804.27,1431.88 L1805.32,1431.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1805.32,1431.49 L1806.37,1431.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1806.37,1431.1 L1807.43,1430.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1807.43,1430.71 L1808.48,1430.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1808.48,1430.32 L1809.53,1429.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1809.53,1429.92 L1810.58,1429.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1810.58,1429.53 L1811.63,1429.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1811.63,1429.13 L1812.67,1428.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1812.67,1428.73 L1813.72,1428.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1813.72,1428.33 L1814.77,1427.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1814.77,1427.93 L1815.81,1427.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1815.81,1427.52 L1816.86,1427.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1816.86,1427.12 L1817.91,1426.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1817.91,1426.71 L1818.95,1426.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1818.95,1426.31 L1819.99,1425.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1819.99,1425.9 L1821.04,1425.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1821.04,1425.49 L1822.08,1425.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1822.08,1425.08 L1823.12,1424.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1823.12,1424.67 L1824.17,1424.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1824.17,1424.26 L1825.21,1423.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1825.21,1423.85 L1826.25,1423.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1826.25,1423.44 L1827.29,1423.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1827.29,1423.02 L1828.33,1422.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1828.33,1422.61 L1829.37,1422.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1829.37,1422.2 L1830.42,1421.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1830.42,1421.78 L1831.46,1421.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1831.46,1421.37 L2028.9,1343.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2028.9,1343.04 L2029.94,1342.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2029.94,1342.62 L2030.98,1342.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2030.98,1342.21 L2032.02,1341.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2032.02,1341.8 L2033.06,1341.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2033.06,1341.38 L2034.1,1340.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2034.1,1340.97 L2035.15,1340.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2035.15,1340.56 L2036.19,1340.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2036.19,1340.15 L2037.23,1339.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2037.23,1339.74 L2038.27,1339.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2038.27,1339.33 L2039.32,1338.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2039.32,1338.92 L2040.36,1338.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2040.36,1338.51 L2041.4,1338.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2041.4,1338.1 L2042.45,1337.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2042.45,1337.69 L2043.49,1337.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2043.49,1337.29 L2044.54,1336.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2044.54,1336.88 L2045.58,1336.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2045.58,1336.48 L2046.63,1336.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2046.63,1336.08 L2047.68,1335.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2047.68,1335.68 L2048.73,1335.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2048.73,1335.28 L2049.77,1334.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2049.77,1334.88 L2050.82,1334.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2050.82,1334.48 L2051.87,1334.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2051.87,1334.09 L2052.93,1333.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2052.93,1333.7 L2053.98,1333.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2053.98,1333.31 L2055.03,1332.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2055.03,1332.92 L2056.08,1332.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2056.08,1332.53 L2057.14,1332.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2057.14,1332.15 L2058.2,1331.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2058.2,1331.76 L2059.25,1331.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2059.25,1331.38 L2060.31,1331.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2060.31,1331.01 L2061.37,1330.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2255.79,1305.61 L2241.03,1304.65 L2226.24,1304.15 L2211.44,1304.1 L2196.65,1304.52 L2181.89,1305.4 L2167.16,1306.74 L2152.5,1308.54 L2137.92,1310.79 L2123.43,1313.49 L2109.06,1316.64 L2094.82,1320.24 L2080.73,1324.27 L2066.81,1328.75 L2061.37,1330.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2255.79,1305.61 L2256.93,1305.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2256.93,1305.7 L2258.06,1305.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2258.06,1305.8 L2259.2,1305.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2259.2,1305.89 L2260.33,1306" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2260.33,1306 L2261.46,1306.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2261.46,1306.1 L2262.6,1306.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2262.6,1306.2 L2263.73,1306.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2263.73,1306.31 L2264.87,1306.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2264.87,1306.42 L2266,1306.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2266,1306.53 L2267.13,1306.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2267.13,1306.65 L2268.26,1306.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2268.26,1306.76 L2269.4,1306.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2269.4,1306.88 L2270.53,1307" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2270.53,1307 L2271.66,1307.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2271.66,1307.12 L2272.79,1307.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2272.79,1307.24 L2273.92,1307.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2273.92,1307.36 L2275.05,1307.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2275.05,1307.49 L2276.18,1307.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2276.18,1307.61 L2277.31,1307.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2277.31,1307.74 L2278.45,1307.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2278.45,1307.87 L2279.58,1308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2279.58,1308 L2280.71,1308.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2280.71,1308.13 L2281.84,1308.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2281.84,1308.26 L2282.97,1308.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2282.97,1308.39 L2284.1,1308.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2284.1,1308.52 L2285.23,1308.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2285.23,1308.65 L2286.36,1308.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2286.36,1308.79 L2287.49,1308.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2287.49,1308.92 L2288.62,1309.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2288.62,1309.05 L2289.75,1309.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2289.75,1309.19 L2290.88,1309.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2290.88,1309.32 L2336.53,1314.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.65,1740.36 L1674.19,1726.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.19,1726.72 L1733.69,1727.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1733.69,1727.11 L1773.7,1719.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.7,1719.7 L1825.49,1692.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1825.49,1692.69 L1883.56,1667.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1883.56,1667.62 L1970.87,1560.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1970.87,1560.15 L1998.42,1510.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1998.42,1510.6 L2013.43,1488.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2013.43,1488.01 L2033.56,1465.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2033.56,1465.36 L2031.77,1447.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2031.77,1447.35 L2002.87,1429.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2002.87,1429.09 L1982.42,1403.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1982.42,1403.88 L1985.67,1377.41" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1326.37,1655.92 L1329.59,1592.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.59,1592.04 L1383.37,1596.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.37,1596.65 L1387.01,1655.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.01,1655.88 L1448.88,1674.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.88,1674.07 L1525.65,1740.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.65,1740.36 L1674.19,1726.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.19,1726.72 L1733.69,1727.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1733.69,1727.11 L1773.7,1719.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.7,1719.7 L1825.49,1692.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1825.49,1692.69 L1883.56,1667.62" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1985.67,1377.41 L1805.49,1448.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1805.49,1448.42 L1729.49,1468.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1729.49,1468.43 L1650.7,1476.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1650.7,1476.01 L1614.63,1475.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1614.63,1475.69 L1328.39,1469.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.39,1469.58 L1316.15,1471.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.15,1471.23 L1244,1492.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1244,1492.82 L1233.97,1504.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1233.97,1504.94 L1233.17,1534.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1233.17,1534.84 L1222.68,1539.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1222.68,1539.77 L1219.61,1653.63" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1219.61,1653.63 L1326.37,1655.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M644.477,1463.46 L786.574,1461.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M786.574,1461.23 L962.81,1461.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M962.81,1461.74 L1103.21,1464.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1103.21,1464.75 L1115.35,1466.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1115.35,1466.92 L1186.25,1491.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1186.25,1491.58 L1195.61,1504.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1195.61,1504.11 L1194.8,1534.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1194.8,1534.02 L1205.01,1539.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1205.01,1539.39 L1201.94,1653.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1201.94,1653.25 L1326.37,1655.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.37,1655.92 L1329.59,1592.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.59,1592.04 L1383.37,1596.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.37,1596.65 L1387.01,1655.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.01,1655.88 L1448.88,1674.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.88,1674.07 L1525.65,1740.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.65,1740.36 L1674.19,1726.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1674.19,1726.72 L1733.69,1727.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1733.69,1727.11 L1773.7,1719.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1773.7,1719.7 L1825.49,1692.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1825.49,1692.69 L1883.56,1667.62" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1985.67,1377.41 L2013.89,1366.23" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1970.13,1313.15 L1977.64,1362.38" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1977.64,1362.38 L1968.77,1370.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1968.77,1370.32 L1964.12,1408.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1964.12,1408.19 L1990.26,1440.43" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1990.26,1440.43 L2020.29,1459.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2020.29,1459.45 L2004.26,1472.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2004.26,1472.34 L1994.19,1485.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1994.19,1485.39 L1985.53,1507.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1985.53,1507.87 L1988.02,1537.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1988.02,1537.59 L2000.88,1560.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2000.88,1560.83 L2015.27,1580.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2015.27,1580.46 L2031.74,1595.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2031.74,1595.73 L2028.66,1625.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2028.66,1625.07 L2028.62,1643.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2028.62,1643.48 L2016.24,1639.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M2016.24,1639.24 L1983.68,1644.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1983.68,1644.39 L1915.56,1677.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1915.56,1677.94 L1901.71,1679.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1901.71,1679.78 L1831.83,1710.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1831.83,1710.26 L1799.16,1752.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1799.16,1752.26 L1790.84,1756.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1790.84,1756.03 L1767.94,1759.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1767.94,1759.58 L1735.43,1757.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1735.43,1757.24 L1649.18,1773.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1649.18,1773.72 L1549.48,1801.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1549.48,1801.94 L1525.9,1817.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1525.9,1817.01 L1335.06,1866.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.06,1866.26 L1271.02,1829.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1271.02,1829.02 L1140.33,1795.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1140.33,1795.6 L1034.43,1788.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1034.43,1788.61 L978.664,1825.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M978.664,1825.96 L956.055,1866.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M956.055,1866.11 L938.304,1844.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M938.304,1844.28 L912.374,1834.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M912.374,1834.31 L895.785,1822.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M895.785,1822.68 L847.002,1780.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M847.002,1780.24 L807.335,1755.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M807.335,1755.47 L762.429,1696.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M762.429,1696.17 L725.164,1642.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M725.164,1642.81 L710.382,1590.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M710.382,1590.42 L707.04,1552.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M707.04,1552.91 L697.248,1505.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M697.248,1505.64 L683.572,1497.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M683.572,1497.02 L683.16,1458.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M683.16,1458.47 L675.806,1448.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M675.806,1448.58 L679.389,1438.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M679.389,1438.7 L677.013,1426.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M677.013,1426.57 L667.968,1380.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M667.968,1380.42 L681.847,1313.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M681.847,1313.61 L700.637,1242.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M700.637,1242.62 L719.158,1207.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M979.63,1236.16 L945.768,1430.2" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1212.89,1247.41 L1209.77,1363.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1209.77,1363.07 L1199.28,1368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1199.28,1368 L1198.47,1397.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1198.47,1397.91 L1188.45,1410.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1188.45,1410.03 L1116.3,1431.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1116.3,1431.62 L1104.06,1433.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1104.06,1433.27 L945.768,1430.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M945.768,1430.2 L979.63,1236.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M929.849,1233.76 L906.412,1393.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M906.412,1393.51 L636.098,1360.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M636.098,1360.85 L632.067,1380.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M632.067,1380.26 L642.205,1431.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M642.205,1431.99 L785.952,1429.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M785.952,1429.74 L945.768,1430.2" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1791.94,1362.05 L1894.73,1372.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1793.96,1346.4 L1927.35,1360.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1793.96,1346.4 L1791.94,1362.05" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1742.18,1350.65 L1744.3,1361.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1701.69,1332.74 L1706.62,1307.42" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1117.87,555.745 L992.816,1221.03" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#bebebe" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1115.83,555.441 L990.74,1220.93" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#00ff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1111.41,554.78 L986.231,1220.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1106.91,554.108 L981.651,1220.49" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#bebebe" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1102.49,553.447 L977.142,1220.27" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ff0000" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1099.94,555.864 L975.065,1220.17" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#a47158" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1117.87,555.76 L1138.77,558.883 L1130.59,602.354 L1109.7,599.232 L1117.87,555.745" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1145.74,559.907 L1180.58,565.119 L1177.09,583.742 L1142.25,578.545 L1145.74,559.907" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1192.49,566.893 L1188.99,585.533 L1253.69,595.175 L1247.23,575.052 L1192.49,566.894" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1138.81,585.757 L1173.73,590.567 L1170.49,609.243 L1135.58,604.432 L1138.81,585.757" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1187.69,592.492 L1208.64,595.378 L1201.08,638.954 L1180.14,636.068 L1187.69,592.492" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1255.84,601.882 L1229.58,598.264 L1226.21,616.92 L1262.43,621.973 L1255.84,601.882" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1264.63,628.686 L1225.06,623.131 L1221.59,641.773 L1271.09,648.752 L1264.34,628.647" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1273.25,655.272 L1234.36,649.906 L1231.12,668.581 L1279.98,675.323 L1273.25,655.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1227.38,648.942 L1178.5,642.197 L1175.26,660.872 L1224.13,667.617 L1227.38,648.942" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1147.88,612.508 L1168.83,615.395 L1161.27,658.971 L1140.33,656.084 L1147.88,612.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1108.53,605.445 L1143.37,610.65 L1139.87,629.287 L1105.03,624.082 L1108.53,605.445" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1103.86,630.295 L1138.7,635.499 L1135.2,654.137 L1100.36,648.932 L1103.86,630.295" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1098.02,661.357 L1132.86,666.562 L1129.36,685.199 L1094.52,679.994 L1098.02,661.357" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1093.35,686.207 L1128.19,691.411 L1124.69,710.049 L1089.85,704.844 L1093.35,686.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1088.68,711.056 L1109.59,714.179 L1101.4,757.727 L1080.51,754.544 L1088.68,711.056" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1138.17,668.534 L1159.12,671.421 L1151.56,714.997 L1130.61,712.11 L1138.17,668.534" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1115.57,716.411 L1150.48,721.222 L1147.24,739.898 L1112.33,735.087 L1115.57,716.411" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1111.25,741.312 L1146.16,746.123 L1144.01,758.573 L1133.53,757.13 L1134.07,754.017 L1120.11,752.093 L1119.57,755.205 L1109.09,753.762 L1111.25,741.312" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1173.1,673.321 L1221.97,680.065 L1218.73,698.74 L1169.85,691.995 L1173.1,673.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1168.76,698.254 L1189.71,701.139 L1182.16,744.715 L1161.21,741.83 L1168.76,698.254" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1210.66,704.024 L1231.6,706.909 L1224.05,750.485 L1203.11,747.6 L1210.66,704.024" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1284.47,688.689 L1291.2,708.741 L1225.71,699.704 L1228.95,681.029 L1284.47,688.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.45,715.424 L1300.18,735.475 L1235.36,726.532 L1238.6,707.857 L1293.45,715.424" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.43,742.157 L1309.17,762.207 L1231.04,751.447 L1234.27,732.771 L1302.43,742.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1157.97,760.497 L1168.45,761.94 L1168.99,758.828 L1196.92,762.676 L1196.38,765.789 L1206.85,767.232 L1209.01,754.782 L1160.13,748.047 L1157.97,760.497" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1213.83,768.194 L1215.99,755.744 L1264.87,762.478 L1262.71,774.928 L1252.24,773.485 L1252.78,770.373 L1224.85,766.525 L1224.31,769.637 L1213.83,768.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1269.7,775.89 L1271.85,763.44 L1303.28,767.769 L1301.66,777.106 L1280.71,774.221 L1280.17,777.333 L1269.7,775.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.64,816.391 L746.266,704.6" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#ffff00" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M761.616,826.142 L769.733,905.651" vector-effect="none" fill-rule="evenodd"/>
   <path d="M762.816,837.892 L812.989,828.995" vector-effect="none" fill-rule="evenodd"/>
   <path d="M812.989,828.995 L813.265,803.393" vector-effect="none" fill-rule="evenodd"/>
   <path d="M813.265,803.393 L874.182,804.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M874.182,804.23 L874.655,859.754" vector-effect="none" fill-rule="evenodd"/>
   <path d="M874.655,859.754 L765.777,866.798" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="butt" transform="matrix(0.999751,0,0,0.999751,0,0)" stroke-miterlimit="2" font-size="32.5" stroke-opacity="1" fill="none" stroke="#bebebe" stroke-linejoin="miter" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1441.96,620.116 L1431.51,618.555" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.51,618.555 L1430.93,621.662" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.93,621.662 L1441.38,623.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.38,623.222 L1441.96,620.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.55,617.01 L1432.09,615.449" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.09,615.449 L1431.51,618.555" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.51,618.555 L1441.96,620.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.96,620.116 L1442.55,617.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1443.13,613.904 L1432.68,612.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.68,612.343 L1432.09,615.449" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.09,615.449 L1442.55,617.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.55,617.01 L1443.13,613.904" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.76,597.25 L1394.01,606.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.01,606.568 L1399.23,607.349" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.23,607.349 L1400.98,598.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.98,598.03 L1395.76,597.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.53,596.469 L1388.78,605.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.78,605.788 L1394.01,606.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.01,606.568 L1395.76,597.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.76,597.25 L1390.53,596.469" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.31,595.689 L1383.55,605.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.55,605.008 L1388.78,605.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.78,605.788 L1390.53,596.469" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.53,596.469 L1385.31,595.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.08,594.908 L1378.33,604.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.33,604.227 L1383.55,605.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.55,605.008 L1385.31,595.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.31,595.689 L1380.08,594.908" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.85,594.128 L1373.1,603.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.1,603.447 L1378.33,604.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.33,604.227 L1380.08,594.908" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.08,594.908 L1374.85,594.128" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.63,593.347 L1367.88,602.666" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.88,602.666 L1373.1,603.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.1,603.447 L1374.85,594.128" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1283.5,594.216 L1284.26,590.178" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.74,590.699 L1286,590.438" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286,590.438 L1284.26,590.178" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1284.26,590.178 L1282.51,599.497" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1282.51,599.497 L1285.99,600.017" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1285.99,600.017 L1287.74,590.699" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1277.3,579.559 L1268.56,578.253" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1268.56,578.253 L1271.78,588.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1271.78,588.315 L1275.55,588.877" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1275.55,588.877 L1277.3,579.559" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1282.52,580.339 L1277.3,579.559" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1277.3,579.559 L1275.55,588.877" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1275.55,588.877 L1280.77,589.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.77,589.658 L1282.52,580.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.75,581.12 L1282.52,580.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1282.52,580.339 L1280.77,589.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.77,589.658 L1286,590.438" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286,590.438 L1287.75,581.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.98,581.9 L1287.75,581.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.75,581.12 L1286,590.438" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1286,590.438 L1291.22,591.219" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.22,591.219 L1292.98,581.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.2,582.681 L1292.98,581.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.98,581.9 L1291.22,591.219" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.22,591.219 L1296.45,592" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.45,592 L1298.2,582.681" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.43,583.461 L1298.2,582.681" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.2,582.681 L1296.45,592" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.45,592 L1301.68,592.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.68,592.78 L1303.43,583.461" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.65,584.242 L1303.43,583.461" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.43,583.461 L1301.68,592.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.68,592.78 L1306.9,593.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.9,593.561 L1308.65,584.242" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.88,585.022 L1308.65,584.242" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.65,584.242 L1306.9,593.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.9,593.561 L1312.13,594.341" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.13,594.341 L1313.88,585.022" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.11,585.803 L1313.88,585.022" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.88,585.022 L1312.13,594.341" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.13,594.341 L1317.36,595.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.36,595.122 L1319.11,585.803" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.33,586.583 L1319.11,585.803" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.11,585.803 L1317.36,595.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.36,595.122 L1322.58,595.902" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.58,595.902 L1324.33,586.583" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.56,587.364 L1324.33,586.583" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.33,586.583 L1322.58,595.902" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.58,595.902 L1327.81,596.683" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.81,596.683 L1329.56,587.364" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.79,588.144 L1329.56,587.364" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.56,587.364 L1327.81,596.683" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.81,596.683 L1333.03,597.463" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1333.03,597.463 L1334.79,588.144" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.29,811.204 L1470.83,809.643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.83,809.643 L1470.25,812.749" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.25,812.749 L1480.7,814.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.7,814.31 L1481.29,811.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.87,808.098 L1471.42,806.537" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471.42,806.537 L1470.83,809.643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.83,809.643 L1481.29,811.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.29,811.204 L1481.87,808.098" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.45,804.991 L1472,803.431" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472,803.431 L1471.42,806.537" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471.42,806.537 L1481.87,808.098" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.87,808.098 L1482.45,804.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.04,801.885 L1472.59,800.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.59,800.324 L1472,803.431" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472,803.431 L1482.45,804.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.45,804.991 L1483.04,801.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.62,798.779 L1473.17,797.218" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.17,797.218 L1472.59,800.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.59,800.324 L1483.04,801.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.04,801.885 L1483.62,798.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.21,795.673 L1473.75,794.112" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.75,794.112 L1473.17,797.218" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.17,797.218 L1483.62,798.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.62,798.779 L1484.21,795.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.61,780.661 L1487.12,780.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.12,780.141 L1486.54,783.248" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.54,783.248 L1485.96,786.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.96,786.354 L1485.37,789.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.37,789.46 L1488.86,789.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.86,789.98 L1490.61,780.661" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.36,771.343 L1488.87,770.822" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.87,770.822 L1488.29,773.929" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.29,773.929 L1487.71,777.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.71,777.035 L1487.12,780.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.12,780.141 L1490.61,780.661" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.61,780.661 L1492.36,771.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.96,786.354 L1475.5,784.793" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.5,784.793 L1474.92,787.899" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.92,787.899 L1485.37,789.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.37,789.46 L1485.96,786.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.54,783.248 L1476.09,781.687" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.09,781.687 L1475.5,784.793" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.5,784.793 L1485.96,786.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.96,786.354 L1486.54,783.248" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.12,780.141 L1476.67,778.581" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.67,778.581 L1476.09,781.687" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.09,781.687 L1486.54,783.248" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.54,783.248 L1487.12,780.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.71,777.035 L1477.25,775.474" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.25,775.474 L1476.67,778.581" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.67,778.581 L1487.12,780.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.12,780.141 L1487.71,777.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.29,773.929 L1477.84,772.368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.84,772.368 L1477.25,775.474" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.25,775.474 L1487.71,777.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.71,777.035 L1488.29,773.929" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.87,770.822 L1478.42,769.262" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.42,769.262 L1477.84,772.368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.84,772.368 L1488.29,773.929" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.29,773.929 L1488.87,770.822" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471.45,768.221 L1450.55,765.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.55,765.1 L1442.38,808.588" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.38,808.588 L1463.28,811.709" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.28,811.709 L1471.45,768.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.74,795.122 L1427.29,793.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.29,793.561 L1426.71,796.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.71,796.668 L1437.16,798.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.16,798.228 L1437.74,795.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.33,792.016 L1427.87,790.455" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.87,790.455 L1427.29,793.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.29,793.561 L1437.74,795.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.74,795.122 L1438.33,792.016" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.46,787.349 L1427.87,790.455" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.87,790.455 L1438.33,792.016" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.33,792.016 L1438.91,788.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.91,788.91 L1428.46,787.349" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.46,787.349 L1424.97,786.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.97,786.829 L1423.22,796.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.22,796.147 L1426.71,796.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.71,796.668 L1428.46,787.349" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.97,786.829 L1421.49,786.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.49,786.308 L1419.74,795.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.74,795.627 L1423.22,796.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.22,796.147 L1424.97,786.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.49,786.308 L1418,785.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418,785.788 L1416.25,795.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.25,795.107 L1419.74,795.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.74,795.627 L1421.49,786.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418,785.788 L1414.52,785.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.52,785.268 L1412.77,794.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.77,794.587 L1416.25,795.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.25,795.107 L1418,785.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.52,785.268 L1411.87,784.873" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.87,784.873 L1405.14,793.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.14,793.448 L1412.77,794.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.77,794.587 L1414.52,785.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.66,779.591 L1430.21,778.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.21,778.03 L1429.62,781.136" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.62,781.136 L1440.08,782.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.08,782.697 L1440.66,779.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.24,776.485 L1430.79,774.924" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.79,774.924 L1430.21,778.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.21,778.03 L1440.66,779.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.66,779.591 L1441.24,776.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.83,773.378 L1431.37,771.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.37,771.818 L1430.79,774.924" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.79,774.924 L1441.24,776.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.24,776.485 L1441.83,773.378" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.41,770.272 L1431.96,768.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.96,768.711 L1431.37,771.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.37,771.818 L1441.83,773.378" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.83,773.378 L1442.41,770.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.99,767.166 L1432.54,765.605" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.54,765.605 L1431.96,768.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.96,768.711 L1442.41,770.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.41,770.272 L1442.99,767.166" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1443.58,764.06 L1433.12,762.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.12,762.499 L1432.54,765.605" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.54,765.605 L1442.99,767.166" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.99,767.166 L1443.58,764.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.37,771.818 L1427.89,771.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.89,771.297 L1427.31,774.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.31,774.404 L1426.72,777.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.72,777.51 L1426.14,780.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.14,780.616 L1429.62,781.136" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.62,781.136 L1431.37,771.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.72,777.51 L1417.11,776.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.11,776.074 L1415.51,779.029" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.51,779.029 L1426.14,780.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.14,780.616 L1426.72,777.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.31,774.404 L1418.57,773.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.57,773.099 L1417.11,776.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.11,776.074 L1426.72,777.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.72,777.51 L1427.31,774.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.89,771.297 L1419.88,770.102" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.88,770.102 L1418.57,773.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.57,773.099 L1427.31,774.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.31,774.404 L1427.89,771.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.07,767.085 L1419.88,770.102" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.88,770.102 L1431.37,771.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.37,771.818 L1431.96,768.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.96,768.711 L1421.07,767.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.54,765.605 L1422.11,764.047" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.11,764.047 L1421.07,767.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.07,767.085 L1431.96,768.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.96,768.711 L1432.54,765.605" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.12,762.499 L1423.02,760.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.02,760.99 L1422.11,764.047" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.11,764.047 L1432.54,765.605" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.54,765.605 L1433.12,762.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1384.56,780.794 L1381.07,780.274" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.07,780.274 L1379.32,789.593" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.32,789.593 L1382.81,790.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.81,790.113 L1384.56,780.794" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.07,780.274 L1377.59,779.753" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.59,779.753 L1375.84,789.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.84,789.072 L1379.32,789.593" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.32,789.593 L1381.07,780.274" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.59,779.753 L1374.1,779.233" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.1,779.233 L1373.52,782.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.52,782.339 L1372.94,785.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.94,785.446 L1372.35,788.552" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.35,788.552 L1375.84,789.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.84,789.072 L1377.59,779.753" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.94,785.446 L1362.48,783.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.48,783.885 L1361.9,786.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1361.9,786.991 L1372.35,788.552" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.35,788.552 L1372.94,785.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.52,782.339 L1363.07,780.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.07,780.779 L1362.48,783.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.48,783.885 L1372.94,785.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.94,785.446 L1373.52,782.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.1,779.233 L1363.65,777.672" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.65,777.672 L1363.07,780.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.07,780.779 L1373.52,782.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.52,782.339 L1374.1,779.233" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.57,773.904 L1389.79,771.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.79,771.996 L1389.21,775.102" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.21,775.102 L1400.77,776.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.77,776.829 L1402.57,773.904" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.2,770.953 L1390.38,768.889" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.38,768.889 L1389.79,771.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.79,771.996 L1402.57,773.904" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.57,773.904 L1404.2,770.953" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.65,767.977 L1394.44,766.303" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.44,766.303 L1390.96,765.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.32,752.822 L1367.74,755.929" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.74,755.929 L1378.19,757.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.19,757.489 L1378.77,754.383" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.52,782.844 L1345.06,781.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.06,781.283 L1344.48,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.48,784.39 L1354.93,785.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.93,785.95 L1355.52,782.844" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.1,779.738 L1345.65,778.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.65,778.177 L1345.06,781.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.06,781.283 L1355.52,782.844" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.52,782.844 L1356.1,779.738" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.68,776.632 L1346.23,775.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.23,775.071 L1345.65,778.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.65,778.177 L1356.1,779.738" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.1,779.738 L1356.68,776.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.27,773.525 L1346.81,771.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.81,771.965 L1346.23,775.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.23,775.071 L1356.68,776.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.68,776.632 L1357.27,773.525" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.85,770.419 L1347.4,768.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.4,768.858 L1346.81,771.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.81,771.965 L1357.27,773.525" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.27,773.525 L1357.85,770.419" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.43,767.313 L1347.98,765.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.98,765.752 L1347.4,768.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.4,768.858 L1357.85,770.419" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.85,770.419 L1358.43,767.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.02,764.207 L1348.56,762.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.56,762.646 L1347.98,765.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.98,765.752 L1358.43,767.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.43,767.313 L1359.02,764.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.6,761.1 L1356.12,760.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.12,760.58 L1352.63,760.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.63,760.06 L1349.15,759.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.15,759.54 L1348.56,762.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.56,762.646 L1359.02,764.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.02,764.207 L1359.6,761.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.06,781.283 L1334.61,779.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.61,779.722 L1334.07,782.572" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.07,782.572 L1334.16,782.849" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.16,782.849 L1344.48,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.48,784.39 L1345.06,781.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.65,778.177 L1335.19,776.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.19,776.616 L1334.61,779.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.61,779.722 L1345.06,781.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.06,781.283 L1345.65,778.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.23,775.071 L1335.78,773.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.78,773.51 L1335.19,776.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.19,776.616 L1345.65,778.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.65,778.177 L1346.23,775.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.81,771.965 L1336.36,770.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.36,770.404 L1335.78,773.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.78,773.51 L1346.23,775.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.23,775.071 L1346.81,771.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.4,768.858 L1336.94,767.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.94,767.297 L1336.36,770.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.36,770.404 L1346.81,771.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.81,771.965 L1347.4,768.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.98,765.752 L1337.53,764.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.53,764.191 L1336.94,767.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.94,767.297 L1347.4,768.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.4,768.858 L1347.98,765.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.11,761.085 L1337.53,764.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.53,764.191 L1347.98,765.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.98,765.752 L1348.56,762.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.56,762.646 L1338.11,761.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.15,759.54 L1345.66,759.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.66,759.019 L1342.18,758.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.18,758.499 L1338.69,757.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.69,757.979 L1338.11,761.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.11,761.085 L1348.56,762.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.56,762.646 L1349.15,759.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1361.35,751.782 L1357.87,751.261" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.87,751.261 L1356.12,760.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.12,760.58 L1359.6,761.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.6,761.1 L1361.35,751.782" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.87,751.261 L1354.38,750.741" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.38,750.741 L1352.63,760.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.63,760.06 L1356.12,760.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.12,760.58 L1357.87,751.261" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.38,750.741 L1350.9,750.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.9,750.221 L1349.15,759.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.15,759.54 L1352.63,760.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.63,760.06 L1354.38,750.741" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.9,750.221 L1347.41,749.701" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.41,749.701 L1345.66,759.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.66,759.019 L1349.15,759.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.15,759.54 L1350.9,750.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.41,749.701 L1343.93,749.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.93,749.18 L1342.18,758.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.18,758.499 L1345.66,759.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.66,759.019 L1347.41,749.701" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.93,749.18 L1340.45,748.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.45,748.66 L1338.69,757.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.69,757.979 L1342.18,758.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.18,758.499 L1343.93,749.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1333.48,747.619 L1322.33,745.955" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.33,745.955 L1329.56,768.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.56,768.485 L1333.48,747.619" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.62,761.504 L1480.17,759.943" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.17,759.943 L1479.59,763.049" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.59,763.049 L1490.04,764.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.04,764.61 L1490.62,761.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.21,758.397 L1480.75,756.837" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.75,756.837 L1480.17,759.943" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.17,759.943 L1490.62,761.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.62,761.504 L1491.21,758.397" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.79,755.291 L1481.34,753.731" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.34,753.731 L1480.75,756.837" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.75,756.837 L1491.21,758.397" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.21,758.397 L1491.79,755.291" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.37,752.185 L1481.92,750.624" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.92,750.624 L1481.34,753.731" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.34,753.731 L1491.79,755.291" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.79,755.291 L1492.37,752.185" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.96,749.079 L1482.51,747.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.51,747.518 L1481.92,750.624" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.92,750.624 L1492.37,752.185" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.37,752.185 L1492.96,749.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.54,745.972 L1483.09,744.412" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.09,744.412 L1482.51,747.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.51,747.518 L1492.96,749.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.96,749.079 L1493.54,745.972" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.84,735.093 L1484.26,738.199" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.26,738.199 L1494.71,739.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.71,739.76 L1495.29,736.654" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.29,736.654 L1484.84,735.093" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.88,733.547 L1485.42,731.987" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.42,731.987 L1484.84,735.093" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.84,735.093 L1495.29,736.654" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.29,736.654 L1495.88,733.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.46,730.441 L1486.01,728.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.01,728.88 L1485.42,731.987" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.42,731.987 L1495.88,733.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.88,733.547 L1496.46,730.441" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.04,727.335 L1486.59,725.774" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.59,725.774 L1486.01,728.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.01,728.88 L1496.46,730.441" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.46,730.441 L1497.04,727.335" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.63,724.229 L1487.17,722.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.17,722.668 L1486.59,725.774" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.59,725.774 L1497.04,727.335" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.04,727.335 L1497.63,724.229" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.21,721.122 L1487.76,719.562" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.76,719.562 L1487.17,722.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.17,722.668 L1497.63,724.229" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.63,724.229 L1498.21,721.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.37,752.69 L1470.89,752.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.89,752.17 L1469.13,761.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.13,761.489 L1472.62,762.009" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.62,762.009 L1474.37,752.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.89,752.17 L1467.4,751.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.4,751.65 L1465.65,760.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.65,760.968 L1469.13,761.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.13,761.489 L1470.89,752.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.4,751.65 L1463.92,751.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.92,751.129 L1462.17,760.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.17,760.448 L1465.65,760.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.65,760.968 L1467.4,751.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.92,751.129 L1460.43,750.609" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.43,750.609 L1458.68,759.928" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.68,759.928 L1462.17,760.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.17,760.448 L1463.92,751.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.95,750.089 L1453.46,749.569" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1453.46,749.569 L1451.71,758.888" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.71,758.888 L1455.2,759.408" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.2,759.408 L1456.95,750.089" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.43,750.609 L1456.95,750.089" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.95,750.089 L1455.2,759.408" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.2,759.408 L1458.68,759.928" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.68,759.928 L1460.43,750.609" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.5,748.023 L1454.05,746.463" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.05,746.463 L1453.46,749.569" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1453.46,749.569 L1463.92,751.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.92,751.129 L1464.5,748.023" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.08,744.917 L1454.63,743.356" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.63,743.356 L1454.05,746.463" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.05,746.463 L1464.5,748.023" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.5,748.023 L1465.08,744.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.67,741.811 L1455.21,740.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.21,740.25 L1454.63,743.356" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.63,743.356 L1465.08,744.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.08,744.917 L1465.67,741.811" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.25,738.704 L1455.8,737.144" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.8,737.144 L1455.21,740.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.21,740.25 L1465.67,741.811" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.67,741.811 L1466.25,738.704" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.83,735.598 L1456.38,734.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.38,734.037 L1455.8,737.144" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.8,737.144 L1466.25,738.704" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.25,738.704 L1466.83,735.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.42,732.492 L1456.97,730.931" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.97,730.931 L1456.38,734.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.38,734.037 L1466.83,735.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.83,735.598 L1467.42,732.492" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468,729.386 L1457.55,727.825" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.55,727.825 L1456.97,730.931" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.97,730.931 L1467.42,732.492" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.42,732.492 L1468,729.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.58,726.279 L1465.1,725.759" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.1,725.759 L1461.62,725.239" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.62,725.239 L1458.13,724.719" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.13,724.719 L1457.55,727.825" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.55,727.825 L1468,729.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468,729.386 L1468.58,726.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.95,749.584 L1464.5,748.023" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.5,748.023 L1463.92,751.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.92,751.129 L1474.37,752.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.37,752.69 L1474.95,749.584" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.54,746.478 L1465.08,744.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.08,744.917 L1464.5,748.023" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.5,748.023 L1474.95,749.584" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.95,749.584 L1475.54,746.478" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.12,743.371 L1465.67,741.811" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.67,741.811 L1465.08,744.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.08,744.917 L1475.54,746.478" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.54,746.478 L1476.12,743.371" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.7,740.265 L1466.25,738.704" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.25,738.704 L1465.67,741.811" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.67,741.811 L1476.12,743.371" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.12,743.371 L1476.7,740.265" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.29,737.159 L1466.83,735.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.83,735.598 L1466.25,738.704" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.25,738.704 L1476.7,740.265" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.7,740.265 L1477.29,737.159" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.87,734.053 L1467.42,732.492" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.42,732.492 L1466.83,735.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.83,735.598 L1477.29,737.159" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.29,737.159 L1477.87,734.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.45,730.946 L1468,729.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468,729.386 L1467.42,732.492" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.42,732.492 L1477.87,734.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.87,734.053 L1478.45,730.946" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.04,727.84 L1475.55,727.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.55,727.32 L1472.07,726.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.07,726.8 L1468.58,726.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.58,726.279 L1468,729.386" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468,729.386 L1478.45,730.946" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.45,730.946 L1479.04,727.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.79,718.521 L1477.3,718.001" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.3,718.001 L1475.55,727.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.55,727.32 L1479.04,727.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.04,727.84 L1480.79,718.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.3,718.001 L1473.82,717.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.82,717.481 L1472.07,726.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.07,726.8 L1475.55,727.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.55,727.32 L1477.3,718.001" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.82,717.481 L1470.34,716.961" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.34,716.961 L1468.58,726.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.58,726.279 L1472.07,726.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.07,726.8 L1473.82,717.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.34,716.961 L1466.85,716.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.85,716.44 L1465.1,725.759" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.1,725.759 L1468.58,726.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.58,726.279 L1470.34,716.961" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.85,716.44 L1463.37,715.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.37,715.92 L1461.62,725.239" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.62,725.239 L1465.1,725.759" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.1,725.759 L1466.85,716.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.37,715.92 L1459.88,715.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.88,715.4 L1458.13,724.719" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.13,724.719 L1461.62,725.239" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.62,725.239 L1463.37,715.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.88,753.18 L1424.98,751.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.98,751.702 L1424.46,754.819" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.46,754.819 L1434.29,756.286" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.29,756.286 L1434.88,753.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.33,754.741 L1434.88,753.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.88,753.18 L1434.29,756.286" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.29,756.286 L1444.74,757.847" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1444.74,757.847 L1445.33,754.741" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.46,750.074 L1434.88,753.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.88,753.18 L1445.33,754.741" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.33,754.741 L1445.91,751.635" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.91,751.635 L1435.46,750.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.46,750.074 L1425.37,748.567" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.37,748.567 L1424.98,751.702" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.98,751.702 L1434.88,753.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.88,753.18 L1435.46,750.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.04,746.968 L1425.63,745.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.63,745.413 L1425.37,748.567" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.37,748.567 L1435.46,750.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.46,750.074 L1436.04,746.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.5,748.528 L1436.04,746.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.04,746.968 L1435.46,750.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.46,750.074 L1445.91,751.635" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.91,751.635 L1446.5,748.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.08,745.422 L1436.63,743.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.63,743.861 L1436.04,746.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.04,746.968 L1446.5,748.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.5,748.528 L1447.08,745.422" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.63,743.861 L1425.76,742.239" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.76,742.239 L1425.63,745.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.63,745.413 L1436.04,746.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.04,746.968 L1436.63,743.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.21,740.755 L1425.75,739.044" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.75,739.044 L1425.76,742.239" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.76,742.239 L1436.63,743.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.63,743.861 L1437.21,740.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.66,742.316 L1437.21,740.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.21,740.755 L1436.63,743.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.63,743.861 L1447.08,745.422" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.08,745.422 L1447.66,742.316" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.25,739.21 L1437.79,737.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.79,737.649 L1437.21,740.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.21,740.755 L1447.66,742.316" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.66,742.316 L1448.25,739.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.79,737.649 L1425.61,735.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.61,735.83 L1425.75,739.044" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.75,739.044 L1437.21,740.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.21,740.755 L1437.79,737.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450,729.891 L1439.54,728.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.54,728.33 L1438.96,731.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.96,731.436 L1449.41,732.997" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1449.41,732.997 L1450,729.891" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.58,726.784 L1440.13,725.224" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.13,725.224 L1439.54,728.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.54,728.33 L1450,729.891" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450,729.891 L1450.58,726.784" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.16,723.678 L1440.71,722.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.71,722.118 L1440.13,725.224" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.13,725.224 L1450.58,726.784" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.58,726.784 L1451.16,723.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.71,722.118 L1437.23,721.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.23,721.597 L1435.48,730.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.48,730.916 L1438.96,731.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.96,731.436 L1440.71,722.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.23,721.597 L1433.74,721.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.74,721.077 L1433.16,724.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.16,724.183 L1432.58,727.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.58,727.29 L1431.99,730.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.99,730.396 L1435.48,730.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.48,730.916 L1437.23,721.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.58,727.29 L1424.33,726.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.33,726.058 L1424.9,729.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.9,729.338 L1431.99,730.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.99,730.396 L1432.58,727.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.16,724.183 L1423.6,722.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.6,722.756 L1424.33,726.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.33,726.058 L1432.58,727.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.58,727.29 L1433.16,724.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.74,721.077 L1430.26,720.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.26,720.557 L1422.7,719.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.7,719.429 L1423.6,722.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.6,722.756 L1433.16,724.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.16,724.183 L1433.74,721.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.75,720.572 L1441.29,719.011" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.29,719.011 L1440.71,722.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.71,722.118 L1451.16,723.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.16,723.678 L1451.75,720.572" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1452.33,717.466 L1441.88,715.905" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.88,715.905 L1441.29,719.011" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.29,719.011 L1451.75,720.572" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.75,720.572 L1452.33,717.466" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1452.91,714.359 L1442.46,712.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.46,712.799 L1441.88,715.905" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.88,715.905 L1452.33,717.466" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1452.33,717.466 L1452.91,714.359" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.46,712.799 L1438.98,712.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.98,712.279 L1437.23,721.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.23,721.597 L1440.71,722.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.71,722.118 L1442.46,712.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.98,712.279 L1435.49,711.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.49,711.758 L1433.74,721.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.74,721.077 L1437.23,721.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.23,721.597 L1438.98,712.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.49,711.758 L1432.01,711.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.01,711.238 L1431.43,714.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.43,714.344 L1430.84,717.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.84,717.451 L1430.26,720.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.26,720.557 L1433.74,721.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.74,721.077 L1435.49,711.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.84,717.451 L1421.64,716.076" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.64,716.076 L1422.7,719.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.7,719.429 L1430.26,720.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.26,720.557 L1430.84,717.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.43,714.344 L1420.41,712.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.41,712.7 L1421.64,716.076" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.64,716.076 L1430.84,717.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.84,717.451 L1431.43,714.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.01,711.238 L1418.94,709.287" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.94,709.287 L1420.41,712.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.41,712.7 L1431.43,714.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.43,714.344 L1432.01,711.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.03,749.619 L1397.95,747.666" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.95,747.666 L1397.36,750.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.36,750.772 L1410.52,752.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410.52,752.737 L1411.03,749.619" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.39,746.48 L1398.53,744.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.53,744.56 L1397.95,747.666" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.95,747.666 L1411.03,749.619" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.03,749.619 L1411.39,746.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.59,743.317 L1399.11,741.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.11,741.453 L1398.53,744.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.53,744.56 L1411.39,746.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.39,746.48 L1411.59,743.317" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.64,740.131 L1399.7,738.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.7,738.347 L1399.11,741.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.11,741.453 L1411.59,743.317" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.59,743.317 L1411.64,740.131" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.53,736.92 L1400.28,735.241" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.28,735.241 L1399.7,738.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.7,738.347 L1411.64,740.131" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.64,740.131 L1411.53,736.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.25,733.686 L1400.86,732.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.86,732.135 L1400.28,735.241" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.28,735.241 L1411.53,736.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.53,736.92 L1411.25,733.686" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.11,741.453 L1395.63,740.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.63,740.933 L1393.88,750.252" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.88,750.252 L1397.36,750.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.36,750.772 L1399.11,741.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.63,740.933 L1392.14,740.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,740.413 L1390.39,749.732" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.39,749.732 L1393.88,750.252" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.88,750.252 L1395.63,740.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,740.413 L1388.66,739.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.66,739.893 L1386.91,749.211" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.91,749.211 L1390.39,749.732" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.39,749.732 L1392.14,740.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.66,739.893 L1385.18,739.372" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.372 L1383.42,748.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.42,748.691 L1386.91,749.211" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.91,749.211 L1388.66,739.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.372 L1381.69,738.852" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.69,738.852 L1381.11,741.958" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.11,741.958 L1380.52,745.064" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.52,745.064 L1379.94,748.171" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.94,748.171 L1383.42,748.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.42,748.691 L1385.18,739.372" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.86,732.135 L1397.38,731.614" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.38,731.614 L1395.63,740.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.63,740.933 L1399.11,741.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.11,741.453 L1400.86,732.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.38,731.614 L1393.89,731.094" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.89,731.094 L1392.14,740.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,740.413 L1395.63,740.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.63,740.933 L1397.38,731.614" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.89,731.094 L1390.41,730.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.41,730.574 L1388.66,739.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.66,739.893 L1392.14,740.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,740.413 L1393.89,731.094" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.41,730.574 L1386.93,730.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.93,730.053 L1385.18,739.372" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.372 L1388.66,739.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.66,739.893 L1390.41,730.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.93,730.053 L1383.44,729.533" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.44,729.533 L1382.86,732.639" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.86,732.639 L1382.27,735.746" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.27,735.746 L1381.69,738.852" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.69,738.852 L1385.18,739.372" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.372 L1386.93,730.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.07,743.504 L1369.49,746.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.49,746.61 L1379.94,748.171" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.94,748.171 L1380.52,745.064" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.52,745.064 L1370.07,743.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.11,741.958 L1370.65,740.397" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.65,740.397 L1370.07,743.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.07,743.504 L1380.52,745.064" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.52,745.064 L1381.11,741.958" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.69,738.852 L1371.24,737.291" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.24,737.291 L1370.65,740.397" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.65,740.397 L1381.11,741.958" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.11,741.958 L1381.69,738.852" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.27,735.746 L1371.82,734.185" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.82,734.185 L1371.24,737.291" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.24,737.291 L1381.69,738.852" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.69,738.852 L1382.27,735.746" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.86,732.639 L1372.41,731.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.41,731.079 L1371.82,734.185" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.82,734.185 L1382.27,735.746" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.27,735.746 L1382.86,732.639" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.44,729.533 L1372.99,727.972" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.99,727.972 L1372.41,731.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.41,731.079 L1382.86,732.639" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.86,732.639 L1383.44,729.533" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.37,723.825 L1395.65,721.775" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.65,721.775 L1395.06,724.882" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.06,724.882 L1410.18,727.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410.18,727.14 L1409.37,723.825" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.36,720.481 L1396.23,718.669" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.23,718.669 L1395.65,721.775" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.65,721.775 L1409.37,723.825" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.37,723.825 L1408.36,720.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1407.18,717.111 L1396.81,715.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.81,715.563 L1396.23,718.669" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.23,718.669 L1408.36,720.481" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.36,720.481 L1407.18,717.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.49,713.187 L1397.48,711.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.48,711.991 L1396.81,715.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.81,715.563 L1407.18,717.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1407.18,717.111 L1405.49,713.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.05,706.764 L1398.56,706.244" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.56,706.244 L1397.48,711.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.48,711.991 L1405.49,713.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.49,713.187 L1402.05,706.764" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.81,715.563 L1393.33,715.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.33,715.043 L1391.58,724.361" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.58,724.361 L1395.06,724.882" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.06,724.882 L1396.81,715.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.33,715.043 L1389.84,714.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.84,714.522 L1388.09,723.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.09,723.841 L1391.58,724.361" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.58,724.361 L1393.33,715.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.84,714.522 L1386.36,714.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.36,714.002 L1385.78,717.108" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.78,717.108 L1385.19,720.214" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.19,720.214 L1384.61,723.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1384.61,723.321 L1388.09,723.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.09,723.841 L1389.84,714.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.56,706.244 L1395.08,705.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.08,705.724 L1393.33,715.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.33,715.043 L1396.81,715.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.81,715.563 L1398.56,706.244" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.08,705.724 L1391.59,705.203" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.59,705.203 L1389.84,714.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.84,714.522 L1393.33,715.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.33,715.043 L1395.08,705.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.59,705.203 L1388.11,704.683" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.11,704.683 L1387.53,707.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.53,707.789 L1386.94,710.896" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.94,710.896 L1386.36,714.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.36,714.002 L1389.84,714.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.84,714.522 L1391.59,705.203" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.19,720.214 L1374.74,718.654" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.74,718.654 L1374.16,721.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.16,721.76 L1384.61,723.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1384.61,723.321 L1385.19,720.214" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.78,717.108 L1375.32,715.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.32,715.547 L1374.74,718.654" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.74,718.654 L1385.19,720.214" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.19,720.214 L1385.78,717.108" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.36,714.002 L1375.91,712.441" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.91,712.441 L1375.32,715.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.32,715.547 L1385.78,717.108" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.78,717.108 L1386.36,714.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.94,710.896 L1376.49,709.335" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.49,709.335 L1375.91,712.441" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.91,712.441 L1386.36,714.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.36,714.002 L1386.94,710.896" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.53,707.789 L1377.07,706.229" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.07,706.229 L1376.49,709.335" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.49,709.335 L1386.94,710.896" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.94,710.896 L1387.53,707.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.11,704.683 L1377.66,703.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.66,703.122 L1377.07,706.229" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.07,706.229 L1387.53,707.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.53,707.789 L1388.11,704.683" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.69,702.082 L1349.78,698.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.78,698.96 L1341.61,742.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.61,742.447 L1362.52,745.569" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.52,745.569 L1370.69,702.082" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.23,738.301 L1324.78,736.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.78,736.74 L1324.19,739.846" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.19,739.846 L1334.64,741.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.64,741.407 L1335.23,738.301" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.81,735.194 L1325.36,733.633" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.36,733.633 L1324.78,736.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.78,736.74 L1335.23,738.301" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.23,738.301 L1335.81,735.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.4,732.088 L1325.94,730.527" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.94,730.527 L1325.36,733.633" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.36,733.633 L1335.81,735.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.81,735.194 L1336.4,732.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.98,728.982 L1326.53,727.421" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.53,727.421 L1325.94,730.527" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.94,730.527 L1336.4,732.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.4,732.088 L1336.98,728.982" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.56,725.876 L1327.11,724.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.11,724.315 L1326.53,727.421" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.53,727.421 L1336.98,728.982" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.98,728.982 L1337.56,725.876" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.15,722.769 L1327.69,721.208" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.69,721.208 L1327.11,724.315" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.11,724.315 L1337.56,725.876" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.56,725.876 L1338.15,722.769" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.9,713.451 L1329.44,711.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.44,711.89 L1328.86,714.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.86,714.996 L1339.31,716.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.31,716.557 L1339.9,713.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.48,710.344 L1330.03,708.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.03,708.783 L1329.44,711.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.44,711.89 L1339.9,713.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.9,713.451 L1340.48,710.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.06,707.238 L1330.61,705.677" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.61,705.677 L1330.03,708.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.03,708.783 L1340.48,710.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.48,710.344 L1341.06,707.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.65,704.132 L1331.2,702.571" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.2,702.571 L1330.61,705.677" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.61,705.677 L1341.06,707.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.06,707.238 L1341.65,704.132" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.23,701.026 L1331.78,699.465" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.78,699.465 L1331.2,702.571" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.2,702.571 L1341.65,704.132" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.65,704.132 L1342.23,701.026" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.82,697.919 L1332.36,696.358" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.36,696.358 L1331.78,699.465" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.78,699.465 L1342.23,701.026" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.23,701.026 L1342.82,697.919" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.61,705.677 L1327.13,705.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.13,705.157 L1325.38,714.476" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.38,714.476 L1328.86,714.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.86,714.996 L1330.61,705.677" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.13,705.157 L1323.64,704.636" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.64,704.636 L1321.89,713.955" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.89,713.955 L1325.38,714.476" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.38,714.476 L1327.13,705.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.64,704.636 L1320.16,704.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.16,704.116 L1318.41,713.435" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.41,713.435 L1321.89,713.955" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.89,713.955 L1323.64,704.636" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.36,696.358 L1328.88,695.838" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.88,695.838 L1327.13,705.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.13,705.157 L1330.61,705.677" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.61,705.677 L1332.36,696.358" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.88,695.838 L1325.39,695.318" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.39,695.318 L1323.64,704.636" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.64,704.636 L1327.13,705.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.13,705.157 L1328.88,695.838" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.39,695.318 L1321.91,694.797" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.91,694.797 L1320.16,704.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.16,704.116 L1323.64,704.636" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.64,704.636 L1325.39,695.318" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.29,699.378 L1498.81,698.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.81,698.858 L1497.06,708.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.06,708.177 L1500.54,708.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.54,708.697 L1502.29,699.378" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.81,698.858 L1495.33,698.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.33,698.338 L1493.58,707.657" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.58,707.657 L1497.06,708.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.06,708.177 L1498.81,698.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.33,698.338 L1491.84,697.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.84,697.818 L1490.09,707.137" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.09,707.137 L1493.58,707.657" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.58,707.657 L1495.33,698.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.84,697.818 L1488.36,697.298" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.36,697.298 L1486.61,706.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.61,706.616 L1490.09,707.137" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.09,707.137 L1491.84,697.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.36,697.298 L1484.87,696.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.87,696.777 L1483.12,706.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.12,706.096 L1486.61,706.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.61,706.616 L1488.36,697.298" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.87,696.777 L1481.39,696.257" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.39,696.257 L1479.64,705.576" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.64,705.576 L1483.12,706.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.12,706.096 L1484.87,696.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.39,696.257 L1477.9,695.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.9,695.737 L1476.15,705.056" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.15,705.056 L1479.64,705.576" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.64,705.576 L1481.39,696.257" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.9,695.737 L1474.42,695.217" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.42,695.217 L1473.84,698.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.84,698.323 L1473.25,701.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.25,701.429 L1472.67,704.536" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.67,704.536 L1476.15,705.056" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.15,705.056 L1477.9,695.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.04,690.06 L1500.56,689.539" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.56,689.539 L1498.81,698.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.81,698.858 L1502.29,699.378" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.29,699.378 L1504.04,690.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.56,689.539 L1497.08,689.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.08,689.019 L1495.33,698.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.33,698.338 L1498.81,698.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.81,698.858 L1500.56,689.539" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.08,689.019 L1493.59,688.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.59,688.499 L1491.84,697.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.84,697.818 L1495.33,698.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.33,698.338 L1497.08,689.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.59,688.499 L1490.11,687.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.11,687.979 L1488.36,697.298" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.36,697.298 L1491.84,697.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.84,697.818 L1493.59,688.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.11,687.979 L1486.62,687.459" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.62,687.459 L1484.87,696.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.87,696.777 L1488.36,697.298" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.36,697.298 L1490.11,687.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.62,687.459 L1483.14,686.938" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.14,686.938 L1481.39,696.257" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.39,696.257 L1484.87,696.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.87,696.777 L1486.62,687.459" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.14,686.938 L1479.66,686.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.66,686.418 L1477.9,695.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.9,695.737 L1481.39,696.257" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.39,696.257 L1483.14,686.938" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.66,686.418 L1476.17,685.898" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.17,685.898 L1475.59,689.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.59,689.004 L1475,692.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475,692.111 L1474.42,695.217" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.42,695.217 L1477.9,695.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.9,695.737 L1479.66,686.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.25,701.429 L1462.8,699.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.8,699.869 L1462.22,702.975" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.22,702.975 L1472.67,704.536" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.67,704.536 L1473.25,701.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.84,698.323 L1463.38,696.762" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.38,696.762 L1462.8,699.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.8,699.869 L1473.25,701.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.25,701.429 L1473.84,698.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.42,695.217 L1463.97,693.656" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.97,693.656 L1463.38,696.762" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.38,696.762 L1473.84,698.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.84,698.323 L1474.42,695.217" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475,692.111 L1464.55,690.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.55,690.55 L1463.97,693.656" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.97,693.656 L1474.42,695.217" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.42,695.217 L1475,692.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.59,689.004 L1465.13,687.444" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.13,687.444 L1464.55,690.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.55,690.55 L1475,692.111" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475,692.111 L1475.59,689.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.17,685.898 L1465.72,684.337" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.72,684.337 L1465.13,687.444" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.13,687.444 L1475.59,689.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.59,689.004 L1476.17,685.898" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.96,674.528 L1503.48,674.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.48,674.008 L1501.73,683.327" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.73,683.327 L1505.21,683.847" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.21,683.847 L1506.96,674.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.48,674.008 L1499.99,673.488" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.99,673.488 L1498.24,682.807" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.24,682.807 L1501.73,683.327" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.73,683.327 L1503.48,674.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.99,673.488 L1496.51,672.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.51,672.968 L1494.76,682.287" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.76,682.287 L1498.24,682.807" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.24,682.807 L1499.99,673.488" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.51,672.968 L1493.03,672.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.03,672.448 L1491.27,681.766" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.27,681.766 L1494.76,682.287" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.76,682.287 L1496.51,672.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.03,672.448 L1489.54,671.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.54,671.927 L1487.79,681.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.79,681.246 L1491.27,681.766" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.27,681.766 L1493.03,672.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.54,671.927 L1486.06,671.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.06,671.407 L1484.31,680.726" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.31,680.726 L1487.79,681.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.79,681.246 L1489.54,671.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.06,671.407 L1482.57,670.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.57,670.887 L1480.82,680.206" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.82,680.206 L1484.31,680.726" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.31,680.726 L1486.06,671.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.57,670.887 L1479.09,670.367" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.09,670.367 L1478.5,673.473" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.5,673.473 L1477.92,676.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.92,676.579 L1477.34,679.685" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.34,679.685 L1480.82,680.206" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.82,680.206 L1482.57,670.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.71,665.21 L1505.23,664.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.23,664.689 L1503.48,674.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.48,674.008 L1506.96,674.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.96,674.528 L1508.71,665.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.23,664.689 L1501.74,664.169" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.74,664.169 L1499.99,673.488" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.99,673.488 L1503.48,674.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.48,674.008 L1505.23,664.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.74,664.169 L1498.26,663.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.26,663.649 L1496.51,672.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.51,672.968 L1499.99,673.488" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.99,673.488 L1501.74,664.169" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.26,663.649 L1494.78,663.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.78,663.129 L1493.03,672.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.03,672.448 L1496.51,672.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.51,672.968 L1498.26,663.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.78,663.129 L1491.29,662.609" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.29,662.609 L1489.54,671.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.54,671.927 L1493.03,672.448" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.03,672.448 L1494.78,663.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.29,662.609 L1487.81,662.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.81,662.088 L1486.06,671.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.06,671.407 L1489.54,671.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.54,671.927 L1491.29,662.609" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.81,662.088 L1484.32,661.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.32,661.568 L1482.57,670.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.57,670.887 L1486.06,671.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.06,671.407 L1487.81,662.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.32,661.568 L1480.84,661.048" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.84,661.048 L1480.26,664.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.26,664.154 L1479.67,667.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.67,667.26 L1479.09,670.367" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.09,670.367 L1482.57,670.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.57,670.887 L1484.32,661.568" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.92,676.579 L1467.47,675.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.47,675.019 L1466.89,678.125" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.89,678.125 L1477.34,679.685" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.34,679.685 L1477.92,676.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.5,673.473 L1468.05,671.912" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.05,671.912 L1467.47,675.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.47,675.019 L1477.92,676.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.92,676.579 L1478.5,673.473" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.09,670.367 L1468.64,668.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.64,668.806 L1468.05,671.912" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.05,671.912 L1478.5,673.473" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.5,673.473 L1479.09,670.367" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.67,667.26 L1469.22,665.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.22,665.7 L1468.64,668.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.64,668.806 L1479.09,670.367" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.09,670.367 L1479.67,667.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.26,664.154 L1469.8,662.594" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.8,662.594 L1469.22,665.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.22,665.7 L1479.67,667.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.67,667.26 L1480.26,664.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.39,659.487 L1469.8,662.594" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.8,662.594 L1480.26,664.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.26,664.154 L1480.84,661.048" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.84,661.048 L1470.39,659.487" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.42,658.447 L1442.51,655.325" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.51,655.325 L1434.34,698.813" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.34,698.813 L1455.25,701.934" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.25,701.934 L1463.42,658.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.13,688.454 L1418.67,686.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.67,686.893 L1416.92,696.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.92,696.212 L1427.37,697.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.37,697.772 L1429.13,688.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.71,685.347 L1419.26,683.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.26,683.787 L1418.67,686.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.67,686.893 L1429.13,688.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.13,688.454 L1429.71,685.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.29,682.241 L1419.84,680.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.84,680.68 L1419.26,683.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.26,683.787 L1429.71,685.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.71,685.347 L1430.29,682.241" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.88,679.135 L1420.42,677.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.42,677.574 L1419.84,680.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.84,680.68 L1430.29,682.241" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.29,682.241 L1430.88,679.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.67,686.893 L1415.19,686.373" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.19,686.373 L1414.49,690.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.49,690.1 L1413.44,695.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1413.44,695.691 L1416.92,696.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.92,696.212 L1418.67,686.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.42,677.574 L1416.94,677.054" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.94,677.054 L1416.36,680.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.36,680.16 L1415.77,683.266" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.77,683.266 L1415.19,686.373" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.19,686.373 L1418.67,686.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.67,686.893 L1420.42,677.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.49,690.1 L1406.6,688.923" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.6,688.923 L1409.93,695.167" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.93,695.167 L1413.44,695.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1413.44,695.691 L1414.49,690.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.19,686.373 L1404.85,684.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.85,684.829 L1406.6,688.923" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.6,688.923 L1414.49,690.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.49,690.1 L1415.19,686.373" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.77,683.266 L1403.63,681.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1403.63,681.454 L1404.85,684.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.85,684.829 L1415.19,686.373" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.19,686.373 L1415.77,683.266" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.36,680.16 L1402.62,678.109" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.62,678.109 L1403.63,681.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1403.63,681.454 L1415.77,683.266" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.77,683.266 L1416.36,680.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.94,677.054 L1401.82,674.796" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1401.82,674.796 L1402.62,678.109" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.62,678.109 L1416.36,680.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.36,680.16 L1416.94,677.054" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.63,669.816 L1422.17,668.255" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.17,668.255 L1421.59,671.362" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.59,671.362 L1432.04,672.922" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.04,672.922 L1432.63,669.816" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.21,666.71 L1422.76,665.149" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.76,665.149 L1422.17,668.255" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.17,668.255 L1432.63,669.816" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.63,669.816 L1433.21,666.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.79,663.604 L1423.34,662.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.34,662.043 L1422.76,665.149" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.76,665.149 L1433.21,666.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.21,666.71 L1433.79,663.604" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.38,660.497 L1423.92,658.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.92,658.937 L1423.34,662.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.34,662.043 L1433.79,663.604" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.79,663.604 L1434.38,660.497" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.96,657.391 L1424.51,655.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.51,655.83 L1423.92,658.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.92,658.937 L1434.38,660.497" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.38,660.497 L1434.96,657.391" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1435.54,654.285 L1425.09,652.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.09,652.724 L1424.51,655.83" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.51,655.83 L1434.96,657.391" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.96,657.391 L1435.54,654.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.34,662.043 L1419.86,661.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.86,661.523 L1418.11,670.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.11,670.841 L1421.59,671.362" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.59,671.362 L1423.34,662.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.86,661.523 L1416.37,661.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.37,661.002 L1414.62,670.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.62,670.321 L1418.11,670.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.11,670.841 L1419.86,661.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.37,661.002 L1412.89,660.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.482 L1412.3,663.588" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.3,663.588 L1411.72,666.695" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.72,666.695 L1411.14,669.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.14,669.801 L1414.62,670.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.62,670.321 L1416.37,661.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.72,666.695 L1400.47,665.015" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.47,665.015 L1400.77,668.253" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.77,668.253 L1411.14,669.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.14,669.801 L1411.72,666.695" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.3,663.588 L1400.36,661.804" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.36,661.804 L1400.47,665.015" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.47,665.015 L1411.72,666.695" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.72,666.695 L1412.3,663.588" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.482 L1409.4,659.962" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.4,659.962 L1400.42,658.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.42,658.62 L1400.36,661.804" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.36,661.804 L1412.3,663.588" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.3,663.588 L1412.89,660.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.09,652.724 L1421.61,652.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.61,652.204 L1419.86,661.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.86,661.523 L1423.34,662.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.34,662.043 L1425.09,652.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.61,652.204 L1418.12,651.684" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.12,651.684 L1416.37,661.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.37,661.002 L1419.86,661.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.86,661.523 L1421.61,652.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.12,651.684 L1414.64,651.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.64,651.163 L1412.89,660.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.482 L1416.37,661.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.37,661.002 L1418.12,651.684" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.64,651.163 L1411.15,650.643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.15,650.643 L1410.57,653.749" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410.57,653.749 L1409.99,656.856" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.99,656.856 L1409.4,659.962" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.4,659.962 L1412.89,660.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.482 L1414.64,651.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.99,656.856 L1400.61,655.456" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.61,655.456 L1400.42,658.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.42,658.62 L1409.4,659.962" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.4,659.962 L1409.99,656.856" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410.57,653.749 L1400.97,652.316" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.97,652.316 L1400.61,655.456" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.61,655.456 L1409.99,656.856" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.99,656.856 L1410.57,653.749" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.15,650.643 L1401.48,649.199" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1401.48,649.199 L1400.97,652.316" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.97,652.316 L1410.57,653.749" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410.57,653.749 L1411.15,650.643" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.61,689.238 L1380.58,687.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.58,687.591 L1379.99,690.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.99,690.697 L1393.04,692.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.04,692.646 L1391.61,689.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.36,685.858 L1381.16,684.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.16,684.485 L1380.58,687.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.58,687.591 L1391.61,689.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.61,689.238 L1390.36,685.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.31,682.509 L1381.74,681.379" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.74,681.379 L1381.16,684.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.16,684.485 L1390.36,685.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.36,685.858 L1389.31,682.509" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.39,679.178 L1378.84,677.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.84,677.752 L1378.26,680.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.26,680.858 L1381.74,681.379" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.74,681.379 L1389.31,682.509" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.31,682.509 L1388.39,679.178" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.67,675.877 L1379.43,674.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.43,674.646 L1378.84,677.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.84,677.752 L1388.39,679.178" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.39,679.178 L1387.67,675.877" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.1,672.598 L1380.01,671.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.01,671.54 L1379.43,674.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.43,674.646 L1387.67,675.877" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.67,675.877 L1387.1,672.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.74,681.379 L1378.26,680.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.26,680.858 L1376.51,690.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.51,690.177 L1379.99,690.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.99,690.697 L1381.74,681.379" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.26,680.858 L1374.77,680.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.77,680.338 L1373.02,689.657" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.02,689.657 L1376.51,690.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.51,690.177 L1378.26,680.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.77,680.338 L1371.29,679.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.29,679.818 L1369.54,689.136" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.54,689.136 L1373.02,689.657" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.02,689.657 L1374.77,680.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.29,679.818 L1367.81,679.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.81,679.297 L1366.06,688.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.06,688.616 L1369.54,689.136" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.54,689.136 L1371.29,679.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.81,679.297 L1364.32,678.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.32,678.777 L1363.74,681.883" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.74,681.883 L1363.15,684.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.15,684.99 L1362.57,688.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.57,688.096 L1366.06,688.616" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.06,688.616 L1367.81,679.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.01,671.54 L1376.53,671.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.53,671.019 L1374.77,680.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.77,680.338 L1378.26,680.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.26,680.858 L1380.01,671.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.53,671.019 L1373.04,670.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.04,670.499 L1371.29,679.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.29,679.818 L1374.77,680.338" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.77,680.338 L1376.53,671.019" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.04,670.499 L1369.56,669.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.56,669.979 L1367.81,679.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.81,679.297 L1371.29,679.818" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.29,679.818 L1373.04,670.499" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.56,669.979 L1366.07,669.458" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.07,669.458 L1365.49,672.565" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.49,672.565 L1364.91,675.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.91,675.671 L1364.32,678.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.32,678.777 L1367.81,679.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.81,679.297 L1369.56,669.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.15,684.99 L1352.7,683.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.7,683.429 L1352.12,686.535" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.12,686.535 L1362.57,688.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.57,688.096 L1363.15,684.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.74,681.883 L1353.29,680.322" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.29,680.322 L1352.7,683.429" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1352.7,683.429 L1363.15,684.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.15,684.99 L1363.74,681.883" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.32,678.777 L1353.87,677.216" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.87,677.216 L1353.29,680.322" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.29,680.322 L1363.74,681.883" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.74,681.883 L1364.32,678.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.91,675.671 L1354.45,674.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.45,674.11 L1353.87,677.216" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.87,677.216 L1364.32,678.777" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.32,678.777 L1364.91,675.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.49,672.565 L1355.04,671.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.04,671.004 L1354.45,674.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.45,674.11 L1364.91,675.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.91,675.671 L1365.49,672.565" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.07,669.458 L1355.62,667.897" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.62,667.897 L1355.04,671.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.04,671.004 L1365.49,672.565" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.49,672.565 L1366.07,669.458" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.25,662.891 L1374.79,661.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.79,661.18 L1374.21,664.286" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.21,664.286 L1386.39,666.105" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.39,666.105 L1386.25,662.891" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.24,659.697 L1375.38,658.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.38,658.074 L1374.79,661.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.79,661.18 L1386.25,662.891" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.25,662.891 L1386.24,659.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.37,656.522 L1375.96,654.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.96,654.968 L1375.38,658.074" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.38,658.074 L1386.24,659.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.24,659.697 L1386.37,656.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.63,653.368 L1376.54,651.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.54,651.861 L1375.96,654.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.96,654.968 L1386.37,656.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.37,656.522 L1386.63,653.368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.02,650.233 L1377.13,648.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.13,648.755 L1376.54,651.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.54,651.861 L1386.63,653.368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.63,653.368 L1387.02,650.233" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.55,647.118 L1377.71,645.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.71,645.649 L1377.13,648.755" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.13,648.755 L1387.02,650.233" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.02,650.233 L1387.55,647.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.96,654.968 L1372.47,654.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.47,654.447 L1370.72,663.766" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.72,663.766 L1374.21,664.286" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.21,664.286 L1375.96,654.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.47,654.447 L1368.99,653.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.99,653.927 L1368.41,657.033" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.41,657.033 L1367.82,660.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.82,660.14 L1367.24,663.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.24,663.246 L1370.72,663.766" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.72,663.766 L1372.47,654.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.71,645.649 L1374.23,645.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.23,645.129 L1372.47,654.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.47,654.447 L1375.96,654.968" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.96,654.968 L1377.71,645.649" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.23,645.129 L1370.74,644.608" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.74,644.608 L1370.16,647.715" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.16,647.715 L1369.57,650.821" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.57,650.821 L1368.99,653.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.99,653.927 L1372.47,654.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.47,654.447 L1374.23,645.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.82,660.14 L1357.37,658.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.37,658.579 L1356.79,661.685" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1356.79,661.685 L1367.24,663.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.24,663.246 L1367.82,660.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.41,657.033 L1357.95,655.472" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.95,655.472 L1357.37,658.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.37,658.579 L1367.82,660.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.82,660.14 L1368.41,657.033" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.99,653.927 L1358.54,652.366" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.54,652.366 L1357.95,655.472" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.95,655.472 L1368.41,657.033" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.41,657.033 L1368.99,653.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.57,650.821 L1359.12,649.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.12,649.26 L1358.54,652.366" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.54,652.366 L1368.99,653.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.99,653.927 L1369.57,650.821" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.16,647.715 L1359.71,646.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.71,646.154 L1359.12,649.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.12,649.26 L1369.57,650.821" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.57,650.821 L1370.16,647.715" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.74,644.608 L1360.29,643.047" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1360.29,643.047 L1359.71,646.154" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.71,646.154 L1370.16,647.715" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.16,647.715 L1370.74,644.608" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.9,676.176 L1343.42,675.655" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.42,675.655 L1341.67,684.974" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.67,684.974 L1345.15,685.494" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.15,685.494 L1346.9,676.176" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.42,675.655 L1339.93,675.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.93,675.135 L1338.18,684.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.18,684.454 L1341.67,684.974" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.67,684.974 L1343.42,675.655" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.93,675.135 L1336.45,674.615" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.45,674.615 L1334.7,683.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.7,683.933 L1338.18,684.454" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.18,684.454 L1339.93,675.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.45,674.615 L1332.96,674.094" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.96,674.094 L1331.21,683.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.21,683.413 L1334.7,683.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.7,683.933 L1336.45,674.615" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.96,674.094 L1329.48,673.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.48,673.574 L1327.73,682.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.73,682.893 L1331.21,683.413" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.21,683.413 L1332.96,674.094" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.48,673.574 L1326,673.054" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326,673.054 L1324.24,682.372" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.24,682.372 L1327.73,682.893" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.73,682.893 L1329.48,673.574" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.48,673.069 L1337.03,671.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.03,671.508 L1336.45,674.615" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.45,674.615 L1346.9,676.176" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.9,676.176 L1347.48,673.069" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.07,669.963 L1337.62,668.402" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.62,668.402 L1337.03,671.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.03,671.508 L1347.48,673.069" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.48,673.069 L1348.07,669.963" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.65,666.857 L1338.2,665.296" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.2,665.296 L1337.62,668.402" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.62,668.402 L1348.07,669.963" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.07,669.963 L1348.65,666.857" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.24,663.751 L1338.78,662.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.78,662.19 L1338.2,665.296" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.2,665.296 L1348.65,666.857" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.65,666.857 L1349.24,663.751" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.82,660.644 L1339.37,659.083" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.37,659.083 L1338.78,662.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.78,662.19 L1349.24,663.751" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.24,663.751 L1349.82,660.644" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.4,657.538 L1339.95,655.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.95,655.977 L1339.37,659.083" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.37,659.083 L1349.82,660.644" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.82,660.644 L1350.4,657.538" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.99,654.432 L1340.53,652.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.53,652.871 L1339.95,655.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.95,655.977 L1350.4,657.538" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.4,657.538 L1350.99,654.432" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1351.57,651.326 L1348.09,650.805" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.09,650.805 L1344.6,650.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.6,650.285 L1341.12,649.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.12,649.765 L1340.53,652.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.53,652.871 L1350.99,654.432" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.99,654.432 L1351.57,651.326" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.03,671.508 L1326.58,669.947" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.58,669.947 L1326,673.054" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326,673.054 L1336.45,674.615" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.45,674.615 L1337.03,671.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.62,668.402 L1327.16,666.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.16,666.841 L1326.58,669.947" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.58,669.947 L1337.03,671.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.03,671.508 L1337.62,668.402" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.2,665.296 L1327.75,663.735" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.75,663.735 L1327.16,666.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.16,666.841 L1337.62,668.402" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.62,668.402 L1338.2,665.296" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.78,662.19 L1328.33,660.629" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.33,660.629 L1327.75,663.735" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.75,663.735 L1338.2,665.296" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.2,665.296 L1338.78,662.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.37,659.083 L1328.91,657.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.91,657.522 L1328.33,660.629" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.33,660.629 L1338.78,662.19" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.78,662.19 L1339.37,659.083" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.95,655.977 L1329.5,654.416" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.5,654.416 L1328.91,657.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.91,657.522 L1339.37,659.083" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.37,659.083 L1339.95,655.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.53,652.871 L1330.08,651.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.08,651.31 L1329.5,654.416" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.5,654.416 L1339.95,655.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.95,655.977 L1340.53,652.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.12,649.765 L1337.63,649.244" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.63,649.244 L1334.15,648.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.15,648.724 L1330.66,648.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.66,648.204 L1330.08,651.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.08,651.31 L1340.53,652.871" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.53,652.871 L1341.12,649.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.32,642.007 L1349.84,641.487" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.84,641.487 L1348.09,650.805" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.09,650.805 L1351.57,651.326" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1351.57,651.326 L1353.32,642.007" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.84,641.487 L1346.35,640.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.35,640.966 L1344.6,650.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.6,650.285 L1348.09,650.805" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.09,650.805 L1349.84,641.487" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.35,640.966 L1342.87,640.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.87,640.446 L1341.12,649.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.12,649.765 L1344.6,650.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.6,650.285 L1346.35,640.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.87,640.446 L1339.38,639.926" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.38,639.926 L1337.63,649.244" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.63,649.244 L1341.12,649.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.12,649.765 L1342.87,640.446" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.38,639.926 L1335.9,639.405" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.9,639.405 L1334.15,648.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.15,648.724 L1337.63,649.244" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.63,649.244 L1339.38,639.926" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.9,639.405 L1332.42,638.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.42,638.885 L1330.66,648.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.66,648.204 L1334.15,648.724" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1334.15,648.724 L1335.9,639.405" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.86,678.226 L1307.41,676.664" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.41,676.664 L1306.82,679.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.82,679.771 L1317.28,681.332" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.28,681.332 L1317.86,678.226" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.44,675.119 L1307.99,673.558" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.99,673.558 L1307.41,676.664" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.41,676.664 L1317.86,678.226" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.86,678.226 L1318.44,675.119" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.03,672.013 L1308.57,670.452" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.57,670.452 L1307.99,673.558" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.99,673.558 L1318.44,675.119" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.44,675.119 L1319.03,672.013" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.61,668.907 L1309.16,667.346" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.16,667.346 L1308.57,670.452" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.57,670.452 L1319.03,672.013" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.03,672.013 L1319.61,668.907" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.19,665.801 L1309.74,664.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.74,664.24 L1309.16,667.346" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.16,667.346 L1319.61,668.907" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.61,668.907 L1320.19,665.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.78,662.694 L1310.33,661.133" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.33,661.133 L1309.74,664.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.74,664.24 L1320.19,665.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.19,665.801 L1320.78,662.694" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.53,653.376 L1312.08,651.815" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.08,651.815 L1311.49,654.921" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.49,654.921 L1321.95,656.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.95,656.482 L1322.53,653.376" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.11,650.269 L1312.66,648.708" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.66,648.708 L1312.08,651.815" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.08,651.815 L1322.53,653.376" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.53,653.376 L1323.11,650.269" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.7,647.163 L1313.24,645.602" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.24,645.602 L1312.66,648.708" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.66,648.708 L1323.11,650.269" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.11,650.269 L1323.7,647.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.28,644.057 L1313.83,642.496" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.83,642.496 L1313.24,645.602" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.24,645.602 L1323.7,647.163" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.7,647.163 L1324.28,644.057" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.86,640.951 L1314.41,639.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.41,639.39 L1313.83,642.496" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.83,642.496 L1324.28,644.057" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.28,644.057 L1324.86,640.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.45,637.844 L1314.99,636.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.99,636.283 L1314.41,639.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.41,639.39 L1324.86,640.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.86,640.951 L1325.45,637.844" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.24,645.602 L1309.76,645.082" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,645.082 L1308.01,654.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.01,654.4 L1311.49,654.921" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.49,654.921 L1313.24,645.602" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,645.082 L1306.28,644.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.28,644.561 L1304.52,653.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1304.52,653.88 L1308.01,654.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.01,654.4 L1309.76,645.082" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.28,644.561 L1302.79,644.041" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.79,644.041 L1301.04,653.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.04,653.36 L1304.52,653.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1304.52,653.88 L1306.28,644.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.79,644.041 L1299.31,643.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.31,643.521 L1297.56,652.839" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.56,652.839 L1301.04,653.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.04,653.36 L1302.79,644.041" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.99,636.283 L1311.51,635.763" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.51,635.763 L1309.76,645.082" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,645.082 L1313.24,645.602" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.24,645.602 L1314.99,636.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.51,635.763 L1308.03,635.243" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.03,635.243 L1306.28,644.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.28,644.561 L1309.76,645.082" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,645.082 L1311.51,635.763" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.03,635.243 L1304.54,634.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1304.54,634.722 L1302.79,644.041" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.79,644.041 L1306.28,644.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.28,644.561 L1308.03,635.243" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1304.54,634.722 L1301.06,634.202" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.06,634.202 L1299.31,643.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.31,643.521 L1302.79,644.041" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.79,644.041 L1304.54,634.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.11,650.198 L1511.63,649.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.63,649.678 L1509.88,658.997" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.88,658.997 L1513.36,659.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1513.36,659.517 L1515.11,650.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.63,649.678 L1508.15,649.158" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.15,649.158 L1506.4,658.477" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.4,658.477 L1509.88,658.997" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.88,658.997 L1511.63,649.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.15,649.158 L1504.66,648.638" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.66,648.638 L1502.91,657.957" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.91,657.957 L1506.4,658.477" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.4,658.477 L1508.15,649.158" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.66,648.638 L1501.18,648.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,648.118 L1499.43,657.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.43,657.436 L1502.91,657.957" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.91,657.957 L1504.66,648.638" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,648.118 L1497.69,647.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.69,647.597 L1495.94,656.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.94,656.916 L1499.43,657.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.43,657.436 L1501.18,648.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.69,647.597 L1494.21,647.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.21,647.077 L1492.46,656.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.46,656.396 L1495.94,656.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.94,656.916 L1497.69,647.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.21,647.077 L1490.72,646.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.72,646.557 L1488.97,655.876" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.97,655.876 L1492.46,656.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.46,656.396 L1494.21,647.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.72,646.557 L1487.24,646.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.24,646.037 L1485.49,655.356" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.49,655.356 L1488.97,655.876" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.97,655.876 L1490.72,646.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.24,646.037 L1483.76,645.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.76,645.517 L1483.17,648.623" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.17,648.623 L1482.59,651.729" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.59,651.729 L1482.01,654.835" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.01,654.835 L1485.49,655.356" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.49,655.356 L1487.24,646.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.86,640.88 L1513.38,640.359" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1513.38,640.359 L1511.63,649.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.63,649.678 L1515.11,650.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.11,650.198 L1516.86,640.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1513.38,640.359 L1509.9,639.839" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.9,639.839 L1508.15,649.158" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.15,649.158 L1511.63,649.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.63,649.678 L1513.38,640.359" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.9,639.839 L1506.41,639.319" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.41,639.319 L1504.66,648.638" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.66,648.638 L1508.15,649.158" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.15,649.158 L1509.9,639.839" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.41,639.319 L1502.93,638.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.93,638.799 L1501.18,648.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,648.118 L1504.66,648.638" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.66,648.638 L1506.41,639.319" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.93,638.799 L1499.44,638.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.44,638.279 L1497.69,647.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.69,647.597 L1501.18,648.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,648.118 L1502.93,638.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.44,638.279 L1495.96,637.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.96,637.758 L1494.21,647.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.21,647.077 L1497.69,647.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.69,647.597 L1499.44,638.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.96,637.758 L1492.48,637.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.48,637.238 L1490.72,646.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.72,646.557 L1494.21,647.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.21,647.077 L1495.96,637.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.48,637.238 L1488.99,636.718" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.99,636.718 L1487.24,646.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.24,646.037 L1490.72,646.557" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.72,646.557 L1492.48,637.238" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.99,636.718 L1485.51,636.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.51,636.198 L1484.92,639.304" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.92,639.304 L1484.34,642.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.34,642.41 L1483.76,645.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.76,645.517 L1487.24,646.037" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.24,646.037 L1488.99,636.718" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.59,651.729 L1472.14,650.168" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.14,650.168 L1471.55,653.275" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471.55,653.275 L1482.01,654.835" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.01,654.835 L1482.59,651.729" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.17,648.623 L1472.72,647.062" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.72,647.062 L1472.14,650.168" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.14,650.168 L1482.59,651.729" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.59,651.729 L1483.17,648.623" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.76,645.517 L1473.3,643.956" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.3,643.956 L1472.72,647.062" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.72,647.062 L1483.17,648.623" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.17,648.623 L1483.76,645.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.34,642.41 L1473.89,640.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.89,640.85 L1473.3,643.956" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.3,643.956 L1483.76,645.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.76,645.517 L1484.34,642.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.92,639.304 L1474.47,637.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.47,637.743 L1473.89,640.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.89,640.85 L1484.34,642.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.34,642.41 L1484.92,639.304" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.51,636.198 L1475.05,634.637" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.05,634.637 L1474.47,637.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.47,637.743 L1484.92,639.304" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.92,639.304 L1485.51,636.198" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.27,625.869 L1519.78,625.348" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.78,625.348 L1518.03,634.667" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1518.03,634.667 L1521.52,635.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.52,635.187 L1523.27,625.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.78,625.348 L1516.3,624.828" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.3,624.828 L1514.55,634.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.55,634.147 L1518.03,634.667" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1518.03,634.667 L1519.78,625.348" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.3,624.828 L1512.81,624.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.81,624.308 L1511.06,633.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.06,633.627 L1514.55,634.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.55,634.147 L1516.3,624.828" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.81,624.308 L1509.33,623.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.33,623.788 L1507.58,633.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.58,633.107 L1511.06,633.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.06,633.627 L1512.81,624.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.33,623.788 L1505.85,623.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.85,623.268 L1504.09,632.586" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.09,632.586 L1507.58,633.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.58,633.107 L1509.33,623.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.85,623.268 L1502.36,622.747" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.36,622.747 L1500.61,632.066" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.61,632.066 L1504.09,632.586" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.09,632.586 L1505.85,623.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.36,622.747 L1498.88,622.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.88,622.227 L1497.13,631.546" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.13,631.546 L1500.61,632.066" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.61,632.066 L1502.36,622.747" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.88,622.227 L1495.39,621.707" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.39,621.707 L1493.64,631.026" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.64,631.026 L1497.13,631.546" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.13,631.546 L1498.88,622.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.39,621.707 L1491.91,621.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.91,621.187 L1490.16,630.506" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.16,630.506 L1493.64,631.026" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.64,631.026 L1495.39,621.707" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.91,621.187 L1488.42,620.667" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.42,620.667 L1487.84,623.773" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.84,623.773 L1487.26,626.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.26,626.879 L1486.67,629.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.67,629.985 L1490.16,630.506" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.16,630.506 L1491.91,621.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.26,626.879 L1476.8,625.318" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.8,625.318 L1476.22,628.425" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.22,628.425 L1486.67,629.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.67,629.985 L1487.26,626.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.84,623.773 L1477.39,622.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.39,622.212 L1476.8,625.318" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.8,625.318 L1487.26,626.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.26,626.879 L1487.84,623.773" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.42,620.667 L1477.97,619.106" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.97,619.106 L1477.39,622.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.39,622.212 L1487.84,623.773" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.84,623.773 L1488.42,620.667" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1531.99,617.59 L1479.72,609.787" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.72,609.787 L1477.97,619.106" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.97,619.106 L1523.27,625.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.27,625.869 L1521.52,635.187" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1521.52,635.187 L1528.48,636.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1528.48,636.228 L1531.99,617.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.34,642.916 L1462.85,642.395" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.85,642.395 L1461.1,651.714" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.1,651.714 L1464.58,652.234" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.58,652.234 L1466.34,642.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.85,642.395 L1459.37,641.875" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.37,641.875 L1457.62,651.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.62,651.194 L1461.1,651.714" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.1,651.714 L1462.85,642.395" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.37,641.875 L1455.88,641.355" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.88,641.355 L1454.13,650.674" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.13,650.674 L1457.62,651.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.62,651.194 L1459.37,641.875" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.92,639.809 L1456.47,638.249" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.47,638.249 L1455.88,641.355" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.88,641.355 L1466.34,642.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.34,642.916 L1466.92,639.809" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.5,636.703 L1457.05,635.142" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.05,635.142 L1456.47,638.249" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.47,638.249 L1466.92,639.809" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.92,639.809 L1467.5,636.703" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.09,633.597 L1457.63,632.036" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.63,632.036 L1457.05,635.142" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.05,635.142 L1467.5,636.703" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.5,636.703 L1468.09,633.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.67,630.49 L1458.22,628.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.22,628.93 L1457.63,632.036" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.63,632.036 L1468.09,633.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.09,633.597 L1468.67,630.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.25,627.384 L1458.8,625.824" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.8,625.824 L1458.22,628.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.22,628.93 L1468.67,630.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.67,630.49 L1469.25,627.384" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.84,624.278 L1459.38,622.717" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.38,622.717 L1458.8,625.824" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.8,625.824 L1469.25,627.384" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.25,627.384 L1469.84,624.278" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.42,621.172 L1459.97,619.611" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.97,619.611 L1459.38,622.717" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.38,622.717 L1469.84,624.278" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.84,624.278 L1470.42,621.172" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471,618.065 L1460.55,616.505" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.55,616.505 L1459.97,619.611" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.97,619.611 L1470.42,621.172" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.42,621.172 L1471,618.065" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.88,641.355 L1452.4,640.835" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1452.4,640.835 L1450.65,650.153" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.65,650.153 L1454.13,650.674" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.13,650.674 L1455.88,641.355" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1452.4,640.835 L1448.91,640.314" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.91,640.314 L1447.16,649.633" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.16,649.633 L1450.65,650.153" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.65,650.153 L1452.4,640.835" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.91,640.314 L1445.43,639.794" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.43,639.794 L1443.68,649.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1443.68,649.113 L1447.16,649.633" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.16,649.633 L1448.91,640.314" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.47,638.249 L1446.01,636.688" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.01,636.688 L1445.43,639.794" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.43,639.794 L1455.88,641.355" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.88,641.355 L1456.47,638.249" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.05,635.142 L1446.6,633.582" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.6,633.582 L1446.01,636.688" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.01,636.688 L1456.47,638.249" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.47,638.249 L1457.05,635.142" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.63,632.036 L1447.18,630.475" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.18,630.475 L1446.6,633.582" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.6,633.582 L1457.05,635.142" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.05,635.142 L1457.63,632.036" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.22,628.93 L1447.76,627.369" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.76,627.369 L1447.18,630.475" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.18,630.475 L1457.63,632.036" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.63,632.036 L1458.22,628.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.8,625.824 L1448.35,624.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.35,624.263 L1447.76,627.369" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.76,627.369 L1458.22,628.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.22,628.93 L1458.8,625.824" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.38,622.717 L1448.93,621.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.93,621.157 L1448.35,624.263" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.35,624.263 L1458.8,625.824" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.8,625.824 L1459.38,622.717" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.97,619.611 L1449.52,618.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1449.52,618.05 L1448.93,621.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.93,621.157 L1459.38,622.717" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.38,622.717 L1459.97,619.611" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.55,616.505 L1450.1,614.944" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.1,614.944 L1449.52,618.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1449.52,618.05 L1459.97,619.611" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.97,619.611 L1460.55,616.505" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.29,644.966 L1426.84,643.405" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.84,643.405 L1426.26,646.512" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.26,646.512 L1436.71,648.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1436.71,648.072 L1437.29,644.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.88,641.86 L1427.43,640.299" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.43,640.299 L1426.84,643.405" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.84,643.405 L1437.29,644.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.29,644.966 L1437.88,641.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.46,638.754 L1428.01,637.193" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.01,637.193 L1427.43,640.299" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.43,640.299 L1437.88,641.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.88,641.86 L1438.46,638.754" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.05,635.647 L1428.59,634.087" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.59,634.087 L1428.01,637.193" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.01,637.193 L1438.46,638.754" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.46,638.754 L1439.05,635.647" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.63,632.541 L1429.18,630.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.18,630.98 L1428.59,634.087" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.59,634.087 L1439.05,635.647" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.05,635.647 L1439.63,632.541" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.21,629.435 L1429.76,627.874" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.76,627.874 L1429.18,630.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.18,630.98 L1439.63,632.541" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.63,632.541 L1440.21,629.435" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.79,626.834 L1419.31,626.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.31,626.313 L1418.37,631.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.37,631.283 L1417.56,635.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.56,635.632 L1421.04,636.152" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.04,636.152 L1422.79,626.834" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.28,627.354 L1422.79,626.834" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.79,626.834 L1421.04,636.152" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.04,636.152 L1424.53,636.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.53,636.673 L1426.28,627.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.76,627.874 L1426.28,627.354" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.28,627.354 L1424.53,636.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.53,636.673 L1428.01,637.193" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.01,637.193 L1429.76,627.874" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.01,637.193 L1424.53,636.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.53,636.673 L1422.77,645.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.77,645.991 L1426.26,646.512" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.26,646.512 L1428.01,637.193" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.53,636.673 L1421.04,636.152" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.04,636.152 L1419.29,645.471" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.29,645.471 L1422.77,645.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.77,645.991 L1424.53,636.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.04,636.152 L1417.56,635.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.56,635.632 L1415.81,644.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.81,644.951 L1419.29,645.471" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.29,645.471 L1421.04,636.152" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.56,635.632 L1414.07,635.112" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.07,635.112 L1413.2,639.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1413.2,639.771 L1412.32,644.431" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.32,644.431 L1415.81,644.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.81,644.951 L1417.56,635.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1413.2,639.771 L1404.47,638.468" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.47,638.468 L1402.96,643.032" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.96,643.032 L1412.32,644.431" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.32,644.431 L1413.2,639.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.07,635.112 L1406.36,633.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.36,633.96 L1404.47,638.468" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.47,638.468 L1413.2,639.771" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1413.2,639.771 L1414.07,635.112" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.37,631.283 L1408.44,629.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.44,629.801 L1406.36,633.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.36,633.96 L1417.56,635.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.56,635.632 L1418.37,631.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.31,626.313 L1411.24,625.108" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.24,625.108 L1408.44,629.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.44,629.801 L1418.37,631.283" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.37,631.283 L1419.31,626.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.68,612.343 L1429.19,611.823" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.19,611.823 L1428.32,616.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.32,616.482 L1427.44,621.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.44,621.141 L1430.93,621.662" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.93,621.662 L1432.68,612.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.32,616.482 L1419.17,615.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.17,615.116 L1415.37,619.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.37,619.339 L1427.44,621.141" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.44,621.141 L1428.32,616.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.19,611.823 L1423.26,610.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.26,610.937 L1419.17,615.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.17,615.116 L1428.32,616.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.32,616.482 L1429.19,611.823" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.89,637.888 L1379.46,636.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.46,636.33 L1378.88,639.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.88,639.436 L1388.98,640.945" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.98,640.945 L1389.89,637.888" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.94,634.85 L1380.04,633.224" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.04,633.224 L1379.46,636.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.46,636.33 L1389.89,637.888" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.89,637.888 L1390.94,634.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,631.837 L1380.63,630.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.63,630.118 L1380.04,633.224" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.04,633.224 L1390.94,634.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.94,634.85 L1392.14,631.837" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.44,628.838 L1381.21,627.011" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.21,627.011 L1380.63,630.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.63,630.118 L1392.14,631.837" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,631.837 L1393.44,628.838" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.9,625.863 L1381.8,623.905" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.8,623.905 L1381.21,627.011" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.21,627.011 L1393.44,628.838" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.44,628.838 L1394.9,625.863" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.5,622.908 L1382.38,620.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.38,620.799 L1381.8,623.905" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.8,623.905 L1394.9,625.863" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.9,625.863 L1396.5,622.908" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.63,630.118 L1377.14,629.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.14,629.597 L1375.39,638.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.39,638.916 L1378.88,639.436" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.88,639.436 L1380.63,630.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.14,629.597 L1373.66,629.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.66,629.077 L1373.08,632.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.08,632.183 L1372.49,635.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.49,635.29 L1371.91,638.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.91,638.396 L1375.39,638.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.39,638.916 L1377.14,629.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.38,620.799 L1378.89,620.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.89,620.279 L1377.14,629.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.14,629.597 L1380.63,630.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.63,630.118 L1382.38,620.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.89,620.279 L1375.41,619.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.41,619.758 L1374.83,622.865" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.83,622.865 L1374.24,625.971" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.24,625.971 L1373.66,629.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.66,629.077 L1377.14,629.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.14,629.597 L1378.89,620.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.49,635.29 L1362.04,633.729" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.04,633.729 L1361.46,636.835" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1361.46,636.835 L1371.91,638.396" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.91,638.396 L1372.49,635.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.08,632.183 L1362.62,630.622" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.62,630.622 L1362.04,633.729" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.04,633.729 L1372.49,635.29" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.49,635.29 L1373.08,632.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.66,629.077 L1363.21,627.516" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.21,627.516 L1362.62,630.622" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.62,630.622 L1373.08,632.183" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.08,632.183 L1373.66,629.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.24,625.971 L1363.79,624.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.79,624.41 L1363.21,627.516" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.21,627.516 L1373.66,629.077" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.66,629.077 L1374.24,625.971" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.83,622.865 L1364.37,621.304" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.37,621.304 L1363.79,624.41" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.79,624.41 L1374.24,625.971" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.24,625.971 L1374.83,622.865" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.41,619.758 L1364.96,618.197" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.96,618.197 L1364.37,621.304" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.37,621.304 L1374.83,622.865" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.83,622.865 L1375.41,619.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.22,614.181 L1391.1,612.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.1,612.521 L1390.51,615.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.51,615.627 L1400.15,617.066" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.15,617.066 L1402.22,614.181" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.46,611.323 L1391.68,609.415" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.68,609.415 L1391.1,612.521" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.1,612.521 L1402.22,614.181" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.22,614.181 L1404.46,611.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.87,608.49 L1392.26,606.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.26,606.308 L1391.68,609.415" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.68,609.415 L1404.46,611.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.46,611.323 L1406.87,608.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.26,606.308 L1388.78,605.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.78,605.788 L1387.03,615.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.03,615.107 L1390.51,615.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.51,615.627 L1392.26,606.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.78,605.788 L1385.3,605.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.3,605.268 L1383.55,614.586" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.55,614.586 L1387.03,615.107" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.03,615.107 L1388.78,605.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.3,605.268 L1381.81,604.747" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.81,604.747 L1380.06,614.066" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.06,614.066 L1383.55,614.586" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.55,614.586 L1385.3,605.268" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.81,604.747 L1378.33,604.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.33,604.227 L1377.74,607.333" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.74,607.333 L1377.16,610.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.16,610.44 L1376.58,613.546" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.58,613.546 L1380.06,614.066" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.06,614.066 L1381.81,604.747" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.16,610.44 L1366.71,608.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.71,608.879 L1366.13,611.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.13,611.985 L1376.58,613.546" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.58,613.546 L1377.16,610.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.74,607.333 L1367.29,605.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.29,605.772 L1366.71,608.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.71,608.879 L1377.16,610.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.16,610.44 L1377.74,607.333" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.33,604.227 L1367.88,602.666" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.88,602.666 L1367.29,605.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.29,605.772 L1377.74,607.333" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.74,607.333 L1378.33,604.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.66,592.307 L1341.75,589.185" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.75,589.185 L1333.58,632.672" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1333.58,632.672 L1354.49,635.794" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.49,635.794 L1362.66,592.307" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.2,628.526 L1316.75,626.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.75,626.965 L1316.16,630.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.16,630.071 L1326.61,631.632" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.61,631.632 L1327.2,628.526" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.78,625.419 L1317.33,623.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.33,623.858 L1316.75,626.965" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.75,626.965 L1327.2,628.526" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.2,628.526 L1327.78,625.419" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.37,622.313 L1317.91,620.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.91,620.752 L1317.33,623.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.33,623.858 L1327.78,625.419" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.78,625.419 L1328.37,622.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.91,620.752 L1314.43,620.232" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.43,620.232 L1312.68,629.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.68,629.55 L1316.16,630.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.16,630.071 L1317.91,620.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.43,620.232 L1310.94,619.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.94,619.711 L1309.19,629.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.19,629.03 L1312.68,629.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.68,629.55 L1314.43,620.232" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.94,619.711 L1307.46,619.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.46,619.191 L1305.71,628.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.71,628.51 L1309.19,629.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.19,629.03 L1310.94,619.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.46,619.191 L1303.98,618.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.98,618.671 L1302.23,627.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.23,627.989 L1305.71,628.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.71,628.51 L1307.46,619.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.98,618.671 L1300.49,618.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.49,618.15 L1298.74,627.469" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.74,627.469 L1302.23,627.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.23,627.989 L1303.98,618.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.49,618.15 L1297.01,617.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.01,617.63 L1295.26,626.949" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.26,626.949 L1298.74,627.469" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.74,627.469 L1300.49,618.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.01,617.63 L1293.52,617.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.52,617.11 L1291.77,626.428" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.77,626.428 L1295.26,626.949" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.26,626.949 L1297.01,617.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.95,619.207 L1318.5,617.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.5,617.646 L1317.91,620.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.91,620.752 L1328.37,622.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.37,622.313 L1328.95,619.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.53,616.101 L1319.08,614.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.08,614.54 L1318.5,617.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.5,617.646 L1328.95,619.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.95,619.207 L1329.53,616.101" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.12,612.994 L1319.66,611.433" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.66,611.433 L1319.08,614.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.08,614.54 L1329.53,616.101" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.53,616.101 L1330.12,612.994" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.66,611.433 L1316.18,610.913" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.18,610.913 L1314.43,620.232" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.43,620.232 L1317.91,620.752" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.91,620.752 L1319.66,611.433" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.18,610.913 L1312.7,610.393" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.7,610.393 L1310.94,619.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.94,619.711 L1314.43,620.232" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.43,620.232 L1316.18,610.913" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.7,610.393 L1309.21,609.872" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.21,609.872 L1307.46,619.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.46,619.191 L1310.94,619.711" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.94,619.711 L1312.7,610.393" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.21,609.872 L1305.73,609.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.73,609.352 L1303.98,618.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.98,618.671 L1307.46,619.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.46,619.191 L1309.21,609.872" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.73,609.352 L1302.24,608.832" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.24,608.832 L1300.49,618.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.49,618.15 L1303.98,618.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.98,618.671 L1305.73,609.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.24,608.832 L1298.76,608.311" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.76,608.311 L1297.01,617.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.01,617.63 L1300.49,618.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.49,618.15 L1302.24,608.832" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.76,608.311 L1295.27,607.791" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.27,607.791 L1293.52,617.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.52,617.11 L1297.01,617.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.01,617.63 L1298.76,608.311" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.87,603.676 L1321.41,602.115" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.41,602.115 L1320.83,605.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.83,605.221 L1331.28,606.782" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.28,606.782 L1331.87,603.676" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.45,600.569 L1322,599.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322,599.008 L1321.41,602.115" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.41,602.115 L1331.87,603.676" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.87,603.676 L1332.45,600.569" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1333.03,597.463 L1322.58,595.902" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.58,595.902 L1322,599.008" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322,599.008 L1332.45,600.569" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.45,600.569 L1333.03,597.463" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.58,595.902 L1319.1,595.382" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.1,595.382 L1317.35,604.701" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.35,604.701 L1320.83,605.221" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.83,605.221 L1322.58,595.902" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.1,595.382 L1315.61,594.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.61,594.861 L1313.86,604.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.86,604.18 L1317.35,604.701" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.35,604.701 L1319.1,595.382" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.61,594.861 L1312.13,594.341" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.13,594.341 L1310.38,603.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.38,603.66 L1313.86,604.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.86,604.18 L1315.61,594.861" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.13,594.341 L1308.65,593.821" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.65,593.821 L1306.89,603.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.89,603.14 L1310.38,603.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.38,603.66 L1312.13,594.341" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.65,593.821 L1305.16,593.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.16,593.3 L1303.41,602.619" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.41,602.619 L1306.89,603.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.89,603.14 L1308.65,593.821" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.16,593.3 L1301.68,592.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.68,592.78 L1299.93,602.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.93,602.099 L1303.41,602.619" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.41,602.619 L1305.16,593.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.68,592.78 L1298.19,592.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.19,592.26 L1296.44,601.578" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.44,601.578 L1299.93,602.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.93,602.099 L1301.68,592.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.19,592.26 L1294.71,591.739" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1294.71,591.739 L1292.96,601.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.96,601.058 L1296.44,601.578" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1296.44,601.578 L1298.19,592.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1294.71,591.739 L1291.22,591.219" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.22,591.219 L1289.47,600.538" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1289.47,600.538 L1292.96,601.058" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.96,601.058 L1294.71,591.739" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.22,591.219 L1287.74,590.699" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.74,590.699 L1285.99,600.017" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1285.99,600.017 L1289.47,600.538" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1289.47,600.538 L1291.22,591.219" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.76,621.148 L1281.78,619.508" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1281.78,619.508 L1283.61,625.21" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1283.61,625.21 L1291.77,626.428" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.77,626.428 L1292.76,621.148" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.93,785.95 L1349.71,785.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.71,785.17 L1347.95,794.489" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.95,794.489 L1353.18,795.269" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.18,795.269 L1354.93,785.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.63,782.597 L1384.56,780.794" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1384.56,780.794 L1383.8,784.831" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.8,784.831 L1393.27,786.245" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.27,786.245 L1396.63,782.597" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1410,799.765 L1400.17,798.297" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.17,798.297 L1396.63,801.757" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.63,801.757 L1409.28,803.645" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.28,803.645 L1410,799.765" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.06,782.222 L1490.61,780.661" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.61,780.661 L1489.73,785.321" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.73,785.321 L1500.18,786.881" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.18,786.881 L1501.06,782.222" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.68,762.963 L1490.74,760.882" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.74,760.882 L1490.16,763.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.16,763.989 L1490.04,764.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.04,764.61 L1503.98,766.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.98,766.691 L1504.68,762.963" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.35,738.113 L1495.41,736.032" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.41,736.032 L1494.83,739.139" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.83,739.139 L1494.71,739.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.71,739.76 L1508.65,741.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.65,741.841 L1509.35,738.113" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.18,707.051 L1501.24,704.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.24,704.97 L1500.66,708.076" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.66,708.076 L1500.54,708.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.54,708.697 L1514.48,710.778" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.48,710.778 L1515.18,707.051" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.85,682.2 L1505.91,680.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.91,680.12 L1505.33,683.226" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.33,683.226 L1505.21,683.847" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.21,683.847 L1519.15,685.928" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.15,685.928 L1519.85,682.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1524.69,656.418 L1514.24,654.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.24,654.858 L1513.36,659.517" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1513.36,659.517 L1523.82,661.078" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.82,661.078 L1524.69,656.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.9,607.843 L1429.22,606.37" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.22,606.37 L1423.26,610.937" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.26,610.937 L1429.19,611.823" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.19,611.823 L1432.68,612.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.68,612.343 L1437.9,613.123" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.9,613.123 L1438.9,607.843" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.98,598.03 L1399.23,607.349" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.23,607.349 L1404.46,608.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.46,608.129 L1406.21,598.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.21,598.81 L1400.98,598.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.4,600.182 L1406.21,598.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.21,598.81 L1404.46,608.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.46,608.129 L1406.87,608.49" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.87,608.49 L1415.4,600.182" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" fill-opacity="0" font-size="32.5" stroke-opacity="0" fill="#ffffff" stroke="#232323" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="3.07087">
   <path d="M1117.96,555.587 L1109.72,599.322 L1130.59,602.431 L1138.7,558.856 L1117.96,555.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1229.59,1319.05 L1278.65,1322.59 L1282.17,1325.45 L1283.63,1328.27 L1280.79,1382.99 L1280.93,1385.85 L1285.9,1390.64 L1293.19,1393.66 L1291.15,1426.88 L1246.68,1411.41 L1237.23,1398.24 L1237.44,1368.78 L1227.49,1364.51 L1229.62,1320.46 L1229.59,1319.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.7,1329.31 L1291.59,1326.91 L1294.08,1324.87 L1296.03,1324.16 L1297.81,1323.8 L1358.65,1327.27 L1354.12,1390.24 L1292.74,1386.87 L1290.08,1385.89 L1288.84,1384.74 L1287.24,1382.25 L1287.41,1381.18 L1290.7,1329.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.56,1327.18 L1389.47,1329.04 L1387.25,1360.49 L1356.34,1358.8 L1358.56,1327.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.47,1329.04 L1407.15,1329.93 L1405.02,1361.64 L1387.16,1360.58 L1389.47,1329.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1407.15,1329.93 L1424.82,1331.09 L1422.43,1362.62 L1405.02,1361.55 L1407.15,1329.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.82,1331.09 L1454.22,1332.69 L1456.18,1333.31 L1458.31,1334.55 L1459.64,1336.59 L1459.91,1339.08 L1458.13,1364.31 L1422.51,1362.53 L1424.82,1331.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.22,1364.31 L1457.07,1379.85 L1439.12,1378.79 L1440.1,1363.51 L1458.22,1364.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.15,1379.85 L1456.4,1390.02 L1455.96,1391.53 L1455.25,1392.73 L1454.05,1394.06 L1452.62,1394.82 L1451.03,1395.4 L1449.92,1395.48 L1438.06,1394.82 L1439.17,1378.83 L1457.15,1379.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.01,1394.73 L1420.34,1393.93 L1422.56,1362.22 L1440.15,1363.64 L1438.01,1394.73" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.38,1362.58 L1420.43,1393.93 L1402.75,1392.95 L1404.97,1361.42 L1422.38,1362.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.84,1392.86 L1385.08,1391.98 L1387.38,1360.44 L1404.88,1361.69 L1402.84,1392.86" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.08,1391.8 L1354.08,1390.11 L1356.39,1358.76 L1387.38,1360.44 L1385.08,1391.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.32,1393.13 L1316.28,1394.42 L1314.02,1426.88 L1301.6,1426.48 L1291.37,1422.93 L1293.32,1393.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.28,1394.33 L1328.58,1395.13 L1326.36,1427.24 L1313.99,1426.91 L1316.28,1394.33" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.61,1395.08 L1340.95,1395.77 L1338.73,1427.65 L1326.36,1427.27 L1328.61,1395.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.93,1395.78 L1353.3,1396.47 L1351.09,1428.05 L1338.73,1427.66 L1340.93,1395.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.3,1396.46 L1365.65,1397.15 L1363.46,1428.44 L1351.09,1428.05 L1353.3,1396.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.65,1397.15 L1377.99,1397.84 L1375.82,1428.83 L1363.46,1428.44 L1365.65,1397.15" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.99,1397.84 L1390.33,1398.52 L1388.18,1429.22 L1375.82,1428.83 L1377.99,1397.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.33,1398.52 L1402.67,1399.21 L1400.55,1429.61 L1388.18,1429.22 L1390.33,1398.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.67,1399.2 L1415.02,1399.89 L1412.91,1430 L1400.55,1429.61 L1402.67,1399.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.21,1338.59 L1467.37,1338.13 L1467.61,1337.42 L1468.17,1336.51 L1469.3,1335.37 L1469.72,1335.13 L1470.66,1334.49 L1471.19,1334.31 L1472.3,1333.95 L1472.63,1333.89 L1473.41,1333.77 L1473.7,1333.77 L1486.85,1334.46 L1484.73,1364.84 L1465.32,1364.01 L1467.21,1338.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.32,1364.01 L1463.67,1387.7 L1463.67,1388.23 L1463.69,1388.53 L1463.73,1388.8 L1463.75,1389.06 L1463.84,1389.48 L1463.92,1389.77 L1463.98,1389.98 L1464.16,1390.52 L1464.32,1390.89 L1464.44,1391.15 L1464.69,1391.59 L1464.84,1391.84 L1465.42,1392.62 L1465.5,1392.71 L1465.78,1393.02 L1466.42,1393.65 L1467.41,1394.38 L1468.88,1395.11 L1470.41,1395.57 L1471.86,1395.76 L1472.11,1395.78 L1472.41,1395.79 L1490.72,1395.42 L1495.8,1365.32 L1465.32,1364.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.8,1365.32 L1523.46,1368.11 L1518.33,1394.85 L1490.7,1395.38 L1495.8,1365.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.84,1334.45 L1498.3,1335.09 L1494.41,1365.22 L1484.73,1364.82 L1486.84,1334.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.31,1335.1 L1501.17,1335.26 L1509.8,1336.62 L1504.14,1366.16 L1495.8,1365.32 L1494.4,1365.25 L1498.31,1335.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.81,1336.61 L1528.93,1339.56 L1523.46,1368.11 L1504.14,1366.15 L1509.81,1336.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1528.93,1339.56 L1549.04,1342.67 L1549.99,1342.93 L1550.96,1343.37 L1551.74,1343.84 L1552.28,1344.26 L1552.71,1344.66 L1553.08,1345.12 L1553.48,1345.62 L1553.74,1346.12 L1554.01,1346.58 L1554.21,1347.19 L1554.36,1347.72 L1554.42,1348.53 L1554.4,1349.51 L1554.11,1351.08 L1550.26,1370.81 L1523.46,1368.11 L1528.93,1339.56" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.44,1368.02 L1550.27,1370.8 L1547.52,1384.87 L1547.29,1384.89 L1546.75,1384.94 L1546.04,1385.05 L1545.01,1385.24 L1544.6,1385.35 L1543.89,1385.56 L1543.13,1385.83 L1542.35,1386.15 L1541.67,1386.47 L1541.13,1386.76 L1540.51,1387.13 L1539.91,1387.53 L1539.27,1388.01 L1538.65,1388.52 L1538.08,1389.06 L1537.6,1389.57 L1536.93,1390.39 L1536.58,1390.88 L1536.19,1391.48 L1536.08,1391.68 L1535.91,1391.99 L1535.76,1392.27 L1535.68,1392.42 L1535.56,1392.7 L1535.4,1393.05 L1535.32,1393.26 L1535.19,1393.6 L1535.12,1393.82 L1535,1394.18 L1534.96,1394.32 L1534.91,1394.48 L1534.9,1394.52 L1534.9,1394.55 L1518.32,1394.88 L1523.44,1368.02" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1230.49,1248.26 L1228.89,1309.06 L1502.58,1324.3 L1550.46,1331.75 L1551.92,1331.83 L1553.26,1331.72 L1554.07,1331.53 L1554.49,1331.4 L1555.02,1331.19 L1555.58,1330.92 L1555.97,1330.69 L1556.63,1330.23 L1557.2,1329.72 L1557.56,1329.32 L1557.79,1329.04 L1558.13,1328.52 L1558.37,1328.09 L1558.62,1327.52 L1558.73,1327.2 L1558.82,1326.89 L1558.96,1326.19 L1570.95,1264.64 L1230.49,1248.26" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.02,1399.89 L1427.36,1400.58 L1425.28,1430.39 L1412.91,1430 L1415.02,1399.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.26,1402.35 L1496.4,1401.61 L1495.35,1432.59 L1458.29,1431.41 L1459.26,1402.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.4,1401.61 L1511.25,1401.32 L1510.18,1433.06 L1495.35,1432.59 L1496.4,1401.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.24,1401.32 L1535.06,1400.84 L1535.08,1400.92 L1535.1,1400.99 L1535.16,1401.14 L1535.2,1401.27 L1535.3,1401.52 L1535.47,1401.96 L1535.69,1402.44 L1535.9,1402.86 L1536.17,1403.32 L1536.35,1403.62 L1536.98,1404.5 L1537.76,1405.5 L1538.74,1406.45 L1539.94,1407.38 L1541.96,1408.51 L1543.12,1409.03 L1544.7,1409.54 L1546.3,1409.88 L1547.18,1409.99 L1547.61,1409.99 L1546.82,1434.22 L1510.16,1433.05 L1511.24,1401.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1547.61,1409.98 L1548.09,1410.02 L1548.63,1410.03 L1549.26,1410.02 L1549.68,1409.99 L1550.11,1409.97 L1550.93,1409.86 L1551.6,1409.75 L1552.37,1409.58 L1553.09,1409.39 L1553.86,1409.14 L1554.62,1408.85 L1555.63,1408.38 L1556.19,1408.08 L1556.96,1407.63 L1557.77,1407.06 L1558.53,1406.44 L1559.21,1405.81 L1559.84,1405.12 L1560.47,1404.34 L1560.99,1403.58 L1561.39,1402.9 L1561.96,1401.67 L1562.13,1401.26 L1562.17,1401.12 L1562.22,1400.97 L1562.23,1400.93 L1583.31,1401.48 L1582.2,1435.33 L1546.82,1434.21 L1547.61,1409.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1557.44,1370.76 L1554.48,1385.95 L1554.49,1385.95 L1554.49,1385.95 L1554.5,1385.95 L1554.5,1385.95 L1554.5,1385.95 L1554.5,1385.95 L1554.51,1385.96 L1554.51,1385.96 L1554.51,1385.96 L1554.52,1385.96 L1554.52,1385.96 L1554.53,1385.96 L1554.53,1385.97 L1554.54,1385.97 L1554.56,1385.98 L1554.58,1385.99 L1554.59,1385.99 L1554.6,1385.99 L1554.6,1385.99 L1554.6,1386 L1554.61,1386 L1554.61,1386 L1554.61,1386 L1554.61,1386 L1554.62,1386 L1554.62,1386 L1554.62,1386 L1554.63,1386.01 L1554.63,1386.01 L1554.64,1386.01 L1554.64,1386.01 L1554.64,1386.01 L1554.65,1386.01 L1554.65,1386.02 L1554.66,1386.02 L1554.67,1386.02 L1554.67,1386.02 L1554.68,1386.03 L1554.96,1386.15 L1555.53,1386.42 L1555.94,1386.63 L1556.29,1386.82 L1556.74,1387.09 L1557.22,1387.4 L1557.52,1387.61 L1558.2,1388.13 L1558.7,1388.56 L1559.39,1389.22 L1560.11,1390.04 L1560.53,1390.59 L1560.85,1391.06 L1561.46,1392.09 L1561.8,1392.73 L1562.26,1393.99 L1562.43,1394.59 L1562.44,1394.63 L1578.15,1395.04 L1582.73,1374.09 L1557.44,1370.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1557.44,1370.76 L1561.35,1350.7 L1561.54,1350.05 L1561.75,1349.61 L1562.03,1349.07 L1562.35,1348.58 L1562.81,1348.03 L1563.2,1347.64 L1563.7,1347.23 L1564.3,1346.82 L1564.96,1346.47 L1565.69,1346.17 L1566.37,1345.95 L1567.34,1345.79 L1568.23,1345.74 L1568.94,1345.78 L1569.43,1345.82 L1588.28,1348.75 L1582.73,1374.09 L1557.44,1370.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1588.28,1348.75 L1610.1,1352.13 L1606.18,1372.17 L1583.8,1369.22 L1588.28,1348.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1583.8,1369.22 L1606.18,1372.17 L1601.57,1395.65 L1578.15,1395.04 L1583.8,1369.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1610.1,1352.13 L1634.29,1355.87 L1634.29,1355.88 L1634.29,1355.88 L1634.29,1355.88 L1634.29,1355.89 L1634.29,1355.89 L1634.29,1355.89 L1634.3,1355.91 L1634.3,1355.92 L1634.3,1355.93 L1634.31,1355.94 L1634.31,1355.96 L1634.32,1356.01 L1634.33,1356.04 L1634.34,1356.09 L1634.35,1356.14 L1634.36,1356.17 L1634.37,1356.22 L1634.38,1356.25 L1634.41,1356.41 L1634.47,1356.63 L1634.52,1356.82 L1634.65,1357.24 L1634.77,1357.59 L1634.87,1357.87 L1635.08,1358.41 L1635.28,1358.88 L1635.41,1359.15 L1635.7,1359.75 L1636.01,1360.27 L1636.24,1360.66 L1636.5,1361.06 L1636.89,1361.61 L1637.76,1362.73 L1638.73,1363.66 L1639.43,1364.35 L1639.91,1364.76 L1640.15,1364.92 L1640.33,1365.05 L1638.43,1376.41 L1606.18,1372.17 L1610.1,1352.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1606.18,1372.17 L1638.43,1376.41 L1636.47,1396.56 L1601.57,1395.65 L1606.18,1372.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1583.31,1401.48 L1600.97,1401.93 L1599.86,1435.88 L1582.2,1435.33 L1583.31,1401.48" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1600.97,1401.94 L1618.63,1402.39 L1617.51,1436.44 L1599.86,1435.88 L1600.97,1401.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1618.63,1402.39 L1636.29,1402.85 L1636.06,1409.72 L1618.4,1409.26 L1618.63,1402.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.06,1409.72 L1635.86,1416.01 L1618.2,1415.55 L1618.4,1409.26 L1636.06,1409.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.86,1416.01 L1635.65,1422.31 L1617.99,1421.85 L1618.2,1415.55 L1635.86,1416.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.65,1422.31 L1635.44,1428.61 L1617.78,1428.15 L1617.99,1421.85 L1635.65,1422.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1635.44,1428.6 L1635.17,1437 L1617.51,1436.44 L1617.78,1428.15 L1635.44,1428.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1563.71,1301.79 L1576.94,1303.83 L1579.37,1291.43 L1596.78,1294.12 L1602.23,1266.15 L1570.95,1264.64 L1563.71,1301.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1579.37,1291.42 L1588.07,1292.77 L1585.65,1305.19 L1576.95,1303.84 L1579.37,1291.42" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1588.07,1292.77 L1596.77,1294.13 L1594.36,1306.53 L1585.65,1305.18 L1588.07,1292.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1596.78,1294.12 L1652.47,1302.75 L1659.08,1268.88 L1602.23,1266.14 L1596.78,1294.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1596.77,1294.13 L1605.48,1295.47 L1603.06,1307.88 L1594.36,1306.53 L1596.77,1294.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1605.47,1295.47 L1610.7,1296.28 L1608.28,1308.69 L1603.06,1307.88 L1605.47,1295.47" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1610.7,1296.28 L1615.92,1297.09 L1613.5,1309.5 L1608.28,1308.69 L1610.7,1296.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1615.92,1297.09 L1621.14,1297.89 L1618.73,1310.31 L1613.5,1309.5 L1615.92,1297.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1621.14,1297.89 L1626.37,1298.7 L1623.95,1311.12 L1618.73,1310.31 L1621.14,1297.89" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1626.37,1298.7 L1631.59,1299.51 L1629.17,1311.92 L1623.95,1311.12 L1626.37,1298.7" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.59,1299.51 L1636.81,1300.32 L1634.39,1312.73 L1629.17,1311.92 L1631.59,1299.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1636.81,1300.32 L1642.03,1301.13 L1639.61,1313.54 L1634.39,1312.73 L1636.81,1300.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1642.03,1301.13 L1647.25,1301.94 L1644.83,1314.35 L1639.61,1313.54 L1642.03,1301.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1647.25,1301.94 L1652.48,1302.75 L1650.06,1315.16 L1644.83,1314.35 L1647.25,1301.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1566.44,1324.59 L1568.32,1314.9 L1568.79,1313.61 L1569.62,1312.47 L1570.22,1311.88 L1570.87,1311.37 L1571.64,1310.91 L1572.78,1310.42 L1573.9,1310.16 L1574.44,1310.11 L1575.14,1310.03 L1575.83,1310.07 L1576.7,1310.2 L1577.19,1310.28 L1577.94,1310.38 L1582.7,1311.12 L1579.68,1326.64 L1566.44,1324.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1566.44,1324.59 L1565.95,1327.08 L1565.85,1327.63 L1565.79,1327.96 L1565.76,1328.31 L1565.73,1328.69 L1565.74,1328.92 L1565.75,1329.26 L1565.8,1329.69 L1565.87,1329.98 L1565.96,1330.36 L1566.04,1330.61 L1566.13,1330.84 L1566.29,1331.22 L1566.47,1331.58 L1566.58,1331.76 L1566.71,1331.96 L1566.93,1332.29 L1567.19,1332.6 L1567.39,1332.83 L1567.65,1333.09 L1567.89,1333.3 L1568.15,1333.52 L1568.33,1333.65 L1568.7,1333.9 L1569.02,1334.1 L1569.36,1334.27 L1569.68,1334.42 L1570.02,1334.56 L1570.33,1334.67 L1570.73,1334.79 L1571.2,1334.9 L1571.54,1334.97 L1572.28,1335.08 L1577.87,1335.95 L1579.68,1326.64 L1566.44,1324.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1579.68,1326.64 L1586.64,1327.72 L1584.83,1337.02 L1577.87,1335.95 L1579.68,1326.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1582.7,1311.12 L1589.67,1312.2 L1586.64,1327.72 L1579.68,1326.64 L1582.7,1311.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1589.67,1312.2 L1596.63,1313.28 L1593.6,1328.79 L1586.64,1327.71 L1589.67,1312.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1586.64,1327.72 L1593.6,1328.79 L1591.79,1338.1 L1584.83,1337.02 L1586.64,1327.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1596.63,1313.28 L1603.59,1314.36 L1600.57,1329.87 L1593.6,1328.79 L1596.63,1313.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1593.6,1328.79 L1600.57,1329.87 L1598.75,1339.18 L1591.79,1338.1 L1593.6,1328.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1603.59,1314.36 L1610.55,1315.44 L1607.53,1330.95 L1600.57,1329.88 L1603.59,1314.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1600.56,1329.88 L1607.53,1330.95 L1605.72,1340.26 L1598.75,1339.18 L1600.56,1329.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1610.55,1315.44 L1617.52,1316.51 L1614.49,1332.03 L1607.53,1330.95 L1610.55,1315.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1607.53,1330.95 L1614.49,1332.03 L1612.68,1341.34 L1605.71,1340.26 L1607.53,1330.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1617.52,1316.51 L1624.48,1317.59 L1621.45,1333.11 L1614.49,1332.03 L1617.52,1316.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1614.49,1332.03 L1621.45,1333.11 L1619.64,1342.41 L1612.68,1341.34 L1614.49,1332.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1624.48,1317.59 L1631.44,1318.67 L1628.42,1334.18 L1628.42,1334.18 L1621.45,1333.11 L1624.48,1317.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1621.45,1333.11 L1628.42,1334.18 L1626.6,1343.49 L1619.64,1342.42 L1621.45,1333.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1631.44,1318.67 L1648.85,1321.36 L1647.64,1327.57 L1630.23,1324.87 L1631.44,1318.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1630.23,1324.87 L1647.64,1327.57 L1645.57,1338.18 L1645.53,1338.2 L1645.48,1338.21 L1645.36,1338.25 L1645.24,1338.3 L1645.18,1338.32 L1645.14,1338.33 L1645.09,1338.35 L1645,1338.38 L1644.93,1338.41 L1644.85,1338.44 L1644.77,1338.47 L1644.68,1338.5 L1644.6,1338.53 L1644.53,1338.56 L1644.46,1338.59 L1644.35,1338.63 L1644.27,1338.66 L1644.21,1338.69 L1644.15,1338.71 L1644.05,1338.76 L1643.96,1338.79 L1643.91,1338.81 L1643.86,1338.83 L1643.79,1338.86 L1643.76,1338.88 L1643.7,1338.91 L1643.62,1338.94 L1643.55,1338.97 L1643.47,1339.01 L1643.38,1339.06 L1643.21,1339.13 L1642.87,1339.31 L1642.55,1339.47 L1642.07,1339.74 L1641.79,1339.9 L1640.93,1340.45 L1640.15,1341.02 L1639.69,1341.35 L1638.74,1342.19 L1638.16,1342.79 L1637.83,1343.16 L1637.14,1344 L1636.57,1344.76 L1636.41,1345.01 L1636.41,1345.01 L1626.6,1343.49 L1630.23,1324.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1670.58,1301.84 L1681.03,1303.46 L1679.72,1310.16 L1669.28,1308.55 L1670.58,1301.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1669.28,1308.55 L1668.67,1311.65 L1679.12,1313.27 L1679.72,1310.16 L1669.28,1308.55" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1668.67,1311.65 L1668.07,1314.75 L1668.07,1314.75 L1678.51,1316.37 L1679.12,1313.27 L1668.67,1311.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1668.07,1314.75 L1678.51,1316.37 L1676.7,1325.68 L1666.25,1324.06 L1668.07,1314.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1666.25,1324.06 L1676.7,1325.68 L1676.09,1328.78 L1665.65,1327.16 L1666.25,1324.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1665.65,1327.16 L1676.09,1328.78 L1674.67,1336.07 L1664.23,1334.46 L1665.65,1327.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1664.22,1334.46 L1678.15,1336.61 L1675.34,1351.04 L1669.02,1350.06 L1669.01,1350.04 L1668.9,1349.52 L1668.78,1349.11 L1668.54,1348.34 L1668.38,1347.88 L1668.05,1347.11 L1667.97,1346.93 L1667.45,1345.92 L1667.22,1345.53 L1666.98,1345.15 L1666.69,1344.7 L1666.59,1344.56 L1666.27,1344.13 L1665.8,1343.54 L1665.48,1343.17 L1665.23,1342.9 L1664.85,1342.5 L1664.66,1342.31 L1664.08,1341.77 L1663.46,1341.25 L1663.17,1341.03 L1663.03,1340.92 L1662.97,1340.88 L1664.22,1334.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1681.03,1303.46 L1706.63,1307.41 L1701.68,1332.75 L1676.09,1328.78 L1681.03,1303.46" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1676.09,1328.78 L1701.65,1332.74 L1706.62,1307.42 L1740.19,1312.63 L1738.88,1319.29 L1741.79,1322.97 L1741.35,1331.36 L1741.01,1337.18 L1741.43,1342.07 L1741.85,1346.62 L1742.18,1350.64 L1713.87,1354.17 L1710.71,1354.34 L1703.46,1354.76 L1694.14,1353.96 L1675.34,1351.04 L1678.13,1336.6 L1674.61,1336.07 L1676.09,1328.78" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1657.74,1367.75 L1657.84,1367.72 L1658.13,1367.62 L1658.35,1367.54 L1658.72,1367.4 L1658.89,1367.33 L1659.19,1367.21 L1659.47,1367.09 L1659.77,1366.95 L1660.14,1366.78 L1660.5,1366.6 L1661.04,1366.31 L1661.47,1366.06 L1661.76,1365.88 L1662.28,1365.55 L1662.5,1365.4 L1662.58,1365.34 L1662.75,1365.22 L1662.97,1365.06 L1662.97,1365.06 L1663.07,1364.99 L1663.23,1364.86 L1663.72,1364.47 L1663.88,1364.33 L1664.09,1364.15 L1664.39,1363.88 L1664.75,1363.53 L1664.92,1363.36 L1665.14,1363.14 L1665.33,1362.93 L1665.58,1362.66 L1665.86,1362.32 L1665.99,1362.17 L1666.31,1361.75 L1666.71,1361.21 L1666.9,1360.92 L1666.9,1360.92 L1689.26,1364.39 L1685.81,1382.09 L1655.53,1381.01 L1657.74,1367.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1655.53,1381 L1654.15,1397.02 L1684.19,1397.8 L1685.39,1384.25 L1685.81,1382.1 L1655.53,1381" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1685.81,1382.09 L1685.53,1383.52 L1685.39,1384.24 L1685.39,1384.25 L1695.75,1382.22 L1698.1,1365.33 L1691.96,1364.81 L1689.26,1364.39 L1685.81,1382.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1684.2,1397.79 L1687.68,1397.88 L1690.29,1396.49 L1693.6,1395.54 L1690.57,1383.24 L1685.39,1384.25 L1684.2,1397.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1690.57,1383.23 L1695.75,1382.22 L1698.78,1394.53 L1693.58,1395.52 L1690.57,1383.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.75,1382.23 L1700.92,1381.22 L1703.96,1393.52 L1698.78,1394.53 L1695.75,1382.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1706.37,1365.63 L1706.4,1365.63 L1715.01,1365.13 L1716.45,1378.17 L1706.1,1380.2 L1706.31,1366.64 L1706.37,1365.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1698.44,1365.35 L1703.21,1365.76 L1703.35,1365.76 L1706.35,1365.6 L1706.1,1380.19 L1695.76,1382.26 L1697.16,1371.58 L1698.1,1365.32 L1698.44,1365.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.93,1381.24 L1706.1,1380.19 L1709.13,1392.5 L1703.95,1393.51 L1700.93,1381.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1706.1,1380.2 L1711.28,1379.18 L1714.31,1391.49 L1709.13,1392.5 L1706.1,1380.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1711.28,1379.18 L1716.45,1378.17 L1719.48,1390.48 L1714.28,1391.47 L1711.28,1379.18" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1716.45,1378.17 L1721.63,1377.16 L1724.66,1389.46 L1719.48,1390.48 L1716.45,1378.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1715.01,1365.14 L1724.42,1363.97 L1726.81,1376.14 L1716.45,1378.17 L1715.01,1365.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721.63,1377.16 L1726.81,1376.14 L1729.84,1388.45 L1724.66,1389.47 L1721.63,1377.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.42,1363.97 L1734.92,1362.66 L1737.15,1374.12 L1726.81,1376.14 L1724.42,1363.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1726.81,1376.14 L1731.98,1375.13 L1735.01,1387.44 L1729.84,1388.45 L1726.81,1376.14" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.98,1375.13 L1737.15,1374.1 L1740.19,1386.42 L1735.02,1387.43 L1731.98,1375.13" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1734.92,1362.66 L1744.3,1361.5 L1747.52,1372.09 L1737.15,1374.12 L1734.92,1362.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1737.16,1374.12 L1742.33,1373.11 L1745.36,1385.41 L1740.19,1386.42 L1737.16,1374.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1742.34,1373.11 L1747.51,1372.09 L1752.55,1383.99 L1745.33,1385.41 L1742.34,1373.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.95,1403.31 L1664.54,1403.59 L1664.34,1409.88 L1653.74,1409.62 L1653.95,1403.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.74,1409.62 L1653.53,1415.9 L1664.13,1416.18 L1664.33,1409.88 L1653.74,1409.62" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.54,1415.9 L1653.33,1422.2 L1663.92,1422.48 L1664.13,1416.18 L1653.54,1415.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.33,1422.2 L1653.12,1428.5 L1663.72,1428.77 L1663.92,1422.48 L1653.33,1422.2" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.12,1428.5 L1652.86,1436.37 L1663.48,1436.64 L1663.71,1428.77 L1653.12,1428.5" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.89,1415.81 L1689.15,1407.59 L1689.18,1407.31 L1689.24,1406.89 L1689.28,1406.71 L1689.33,1406.5 L1689.44,1406.14 L1689.63,1405.67 L1689.74,1405.41 L1689.85,1405.19 L1690.06,1404.83 L1690.25,1404.55 L1690.41,1404.33 L1690.64,1404.06 L1690.96,1403.72 L1691.22,1403.47 L1691.57,1403.17 L1691.88,1402.95 L1692.24,1402.71 L1692.52,1402.55 L1692.82,1402.39 L1693.19,1402.23 L1693.41,1402.14 L1693.69,1402.03 L1693.84,1401.99 L1694.02,1401.93 L1694.25,1401.87 L1694.61,1401.78 L1694.91,1401.73 L1695.12,1401.69 L1698.15,1414 L1688.89,1415.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.89,1415.81 L1688.72,1421.04 L1688.71,1421.36 L1688.71,1421.66 L1688.72,1421.84 L1688.75,1422.09 L1688.78,1422.33 L1688.86,1422.7 L1688.97,1423.12 L1689.1,1423.47 L1689.19,1423.68 L1689.4,1424.12 L1689.56,1424.41 L1689.78,1424.74 L1690.05,1425.1 L1690.32,1425.4 L1690.32,1425.4 L1690.41,1425.5 L1690.6,1425.7 L1690.79,1425.87 L1690.95,1426.01 L1691.14,1426.16 L1691.33,1426.3 L1691.51,1426.42 L1691.76,1426.58 L1692.01,1426.73 L1692.23,1426.85 L1692.56,1427.01 L1692.91,1427.16 L1693.23,1427.28 L1693.55,1427.38 L1693.88,1427.47 L1694.21,1427.55 L1694.36,1427.57 L1694.59,1427.61 L1694.85,1427.65 L1694.96,1427.66 L1695.11,1427.67 L1695.3,1427.69 L1695.58,1427.7 L1695.84,1427.7 L1696.1,1427.69 L1692.97,1415.01 L1688.89,1415.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1692.97,1415.01 L1698.15,1414 L1701.35,1427.02 L1696.09,1427.69 L1692.97,1415.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1695.12,1401.69 L1700.29,1400.68 L1703.33,1412.98 L1698.15,1414 L1695.12,1401.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1698.15,1414 L1703.32,1412.98 L1706.61,1426.34 L1701.36,1427.01 L1698.15,1414" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1700.29,1400.68 L1705.47,1399.67 L1708.5,1411.97 L1703.33,1412.99 L1700.29,1400.68" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1703.43,1412.98 L1708.5,1411.97 L1711.87,1425.66 L1706.61,1426.34 L1703.43,1412.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1705.51,1399.66 L1710.65,1398.64 L1713.68,1410.97 L1708.5,1411.98 L1705.51,1399.66" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1708.5,1411.97 L1713.68,1410.96 L1717.13,1424.99 L1711.87,1425.66 L1708.5,1411.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1710.66,1398.65 L1715.82,1397.64 L1718.85,1409.95 L1713.67,1410.95 L1710.66,1398.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1713.69,1410.95 L1718.85,1409.95 L1722.28,1423.88 L1717.13,1424.99 L1713.69,1410.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1715.82,1397.64 L1721,1396.63 L1724.03,1408.93 L1718.82,1409.93 L1715.82,1397.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1718.85,1409.91 L1724.03,1408.92 L1727.44,1422.76 L1722.28,1423.9 L1718.85,1409.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1721,1396.63 L1726.18,1395.62 L1729.21,1407.92 L1724.03,1408.92 L1721,1396.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.03,1408.92 L1729.2,1407.91 L1732.58,1421.64 L1727.44,1422.76 L1724.03,1408.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1726.18,1395.61 L1731.35,1394.6 L1734.38,1406.92 L1729.21,1407.91 L1726.18,1395.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1729.21,1407.92 L1734.38,1406.92 L1737.74,1420.52 L1732.59,1421.63 L1729.21,1407.92" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1731.35,1394.6 L1736.53,1393.59 L1739.56,1405.89 L1734.38,1406.92 L1731.35,1394.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1734.38,1406.91 L1739.56,1405.89 L1742.89,1419.41 L1737.73,1420.53 L1734.38,1406.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1736.53,1393.59 L1741.71,1392.58 L1744.74,1404.88 L1739.55,1405.89 L1736.53,1393.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1739.57,1405.88 L1744.74,1404.88 L1748.05,1418.27 L1742.89,1419.4 L1739.57,1405.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1741.71,1392.58 L1746.88,1391.56 L1749.91,1403.87 L1744.74,1404.88 L1741.71,1392.58" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1744.74,1404.88 L1749.92,1403.86 L1753.2,1417.17 L1748.04,1418.29 L1744.74,1404.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1746.88,1391.57 L1752.07,1390.54 L1755.09,1402.86 L1749.92,1403.86 L1746.88,1391.57" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1749.92,1403.87 L1755.09,1402.86 L1758.21,1415.61 L1753.19,1417.19 L1749.92,1403.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1752.05,1390.51 L1755.68,1389.85 L1763.09,1401.3 L1755.1,1402.86 L1752.05,1390.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1755.09,1402.85 L1760.28,1401.85 L1763.28,1414.08 L1758.2,1415.64 L1755.09,1402.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1760.28,1401.85 L1763.1,1401.3 L1771.49,1411.55 L1763.29,1414.06 L1760.28,1401.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1671.79,1295.63 L1675.9,1274.49 L1677.3,1273.85 L1679.07,1272.88 L1680.76,1271.51 L1681.55,1270.77 L1682.23,1270 L1692.03,1270.47 L1686.67,1297.94 L1671.79,1295.63" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1686.67,1297.94 L1724.87,1303.87 L1730.4,1275.53 L1700.85,1270.89 L1692,1270.46 L1686.67,1297.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1730.41,1275.53 L1746.93,1278.12 L1741.39,1306.42 L1724.86,1303.86 L1730.41,1275.53" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1654.01,1483.82 L1653.32,1515.3 L1688.64,1515.93 L1689.39,1481.82 L1684.1,1482.22 L1669.78,1483.24 L1654.01,1483.82" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1689.47,1481.8 L1699.81,1480.69 L1703.51,1480.29 L1705.18,1480.09 L1706.44,1479.91 L1708.38,1479.63 L1710.51,1479.34 L1716.07,1478.59 L1720.33,1477.97 L1724.82,1477.26 L1723.97,1516.56 L1688.64,1515.93 L1689.47,1481.8" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1724.89,1477.25 L1740.23,1474.45 L1747.52,1472.96 L1758.94,1515.64 L1757.84,1515.83 L1755.94,1516.13 L1754.96,1516.24 L1753.2,1516.46 L1751.03,1516.67 L1749.86,1516.73 L1748.21,1516.84 L1746.27,1516.89 L1743.73,1516.89 L1723.97,1516.56 L1724.89,1477.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1747.52,1472.96 L1757.35,1470.7 L1762.85,1469.44 L1765.65,1468.73 L1769.64,1467.68 L1772.96,1466.85 L1789.08,1499.13 L1788.42,1499.67 L1787.52,1500.72 L1786.8,1501.88 L1786.57,1502.35 L1786.28,1503 L1786.06,1503.69 L1785.96,1504.17 L1785.84,1504.72 L1785.81,1505.17 L1785.76,1505.71 L1785.76,1506.26 L1785.77,1506.64 L1785.78,1506.66 L1778.44,1509.58 L1776.16,1510.48 L1774.41,1511.17 L1773.21,1511.65 L1770.89,1512.49 L1769.25,1513.05 L1767.2,1513.7 L1763.7,1514.65 L1761.98,1515.04 L1761.38,1515.17 L1758.92,1515.65 L1747.52,1472.96" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1653.18,1521.61 L1688.51,1522.23 L1687.81,1553.71 L1652.5,1553.13 L1653.18,1521.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1652.5,1553.1 L1651.92,1578.32 L1652.57,1578.69 L1653.01,1578.97 L1653.89,1579.54 L1654.4,1579.93 L1655.24,1580.61 L1655.81,1581.16 L1656.79,1582.19 L1657.52,1583.09 L1658.31,1584.26 L1659.05,1585.63 L1659.58,1586.9 L1660.05,1588.37 L1660.31,1589.66 L1660.43,1590.77 L1660.46,1592.33 L1660.44,1592.7 L1686.73,1602.98 L1687.81,1553.72 L1652.5,1553.1" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1688.51,1522.23 L1723.83,1522.85 L1723.14,1554.33 L1687.81,1553.72 L1688.51,1522.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1687.81,1553.71 L1723.16,1554.33 L1721.91,1610.36 L1719.93,1610.4 L1717.32,1610.38 L1715.08,1610.28 L1714.56,1610.26 L1712.83,1610.12 L1710.55,1609.89 L1708.37,1609.59 L1707.66,1609.46 L1706.11,1609.21 L1703.96,1608.78 L1701.85,1608.28 L1700.95,1608.04 L1699.96,1607.77 L1697.48,1607.03 L1695.41,1606.34 L1694.03,1605.82 L1693.2,1605.52 L1691.1,1604.69 L1686.72,1602.98 L1687.81,1553.71" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.83,1522.85 L1746.23,1523.21 L1749.83,1523.09 L1754.13,1522.71 L1760.62,1521.79 L1768.05,1555.11 L1723.16,1554.28 L1723.83,1522.85" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1723.16,1554.28 L1768.02,1555.09 L1785.28,1589.57 L1745.33,1605.41 L1742.13,1606.67 L1739.95,1607.35 L1737.08,1608.18 L1734.92,1608.68 L1731.24,1609.39 L1729.09,1609.7 L1728.37,1609.82 L1727.28,1609.96 L1726.43,1610.03 L1724.94,1610.15 L1723.7,1610.26 L1723.34,1610.28 L1721.91,1610.36 L1723.16,1554.28" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1760.62,1521.75 L1764.61,1520.96 L1767.03,1520.37 L1770.63,1519.3 L1773.9,1518.24 L1780.76,1515.56 L1788.63,1512.43 L1789.96,1513.52 L1791.09,1514.18 L1792.33,1514.7 L1793.32,1515.04 L1795.24,1515.37 L1796.41,1515.42 L1797.31,1515.37 L1798.75,1515.18 L1800.01,1514.85 L1801.01,1514.47 L1801.58,1514.18 L1802.45,1513.73 L1802.9,1513.42 L1831.92,1529.78 L1768.04,1555.13 L1760.62,1521.75" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1768.04,1555.12 L1799.99,1542.44 L1817,1576.96 L1785.27,1589.59 L1768.04,1555.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1219.48,1653.64 L1326.1,1656.1 L1329.51,1591.79 L1383.2,1596.54 L1387.18,1656.1 L1449.02,1673.94 L1525.76,1740.43 L1555.54,1737.58 L1567.37,1598.3 L1587.38,1597.94 L1587.25,1587.01 L1626.16,1586.52 L1626.32,1586.13 L1626.55,1585.61 L1626.85,1585.04 L1627.14,1584.52 L1627.52,1583.92 L1628.13,1583.04 L1629.08,1581.86 L1630.65,1580.36 L1632.07,1579.29 L1633.22,1578.56 L1634.26,1578.01 L1636.51,1475.89 L1328.35,1469.56 L1316.17,1471.22 L1244.01,1492.79 L1233.98,1504.91 L1233.16,1534.84 L1222.67,1539.77 L1219.48,1653.64" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1212.9,1247.39 L1209.72,1363.08 L1199.28,1368.02 L1198.48,1397.9 L1188.45,1410.02 L1116.27,1431.66 L1103.75,1433.37 L945.819,1430.14 L979.651,1236.15 L1212.9,1247.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M929.854,1233.76 L906.378,1393.48 L636.1,1360.9 L646.249,1311.53 L652.319,1289.15 L666.926,1232.05 L672.807,1221.23 L929.854,1233.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1555.59,1737.51 L1567.35,1598.22 L1567.35,1598.22 L1626.35,1597.51 L1626.77,1598.51 L1627.53,1599.69 L1628.43,1601.02 L1629.52,1602.3 L1631.28,1603.77 L1632.61,1604.72 L1634.55,1605.71 L1636.45,1606.52 L1637.44,1606.85 L1639.29,1607.33 L1641.19,1607.52 L1642.42,1607.52 L1643.66,1607.56 L1646.5,1607.28 L1648.92,1606.71 L1650.87,1605.95 L1652.76,1604.91 L1654.94,1603.34 L1655.49,1602.76 L1681.98,1613.11 L1686.34,1614.87 L1690.75,1616.57 L1696.06,1618.28 L1700.99,1619.47 L1704.22,1620.18 L1708.44,1620.84 L1713.14,1621.18 L1716.5,1621.41 L1721.15,1621.41 L1724.9,1621.32 L1886.29,1664.19 L1883.44,1667.65 L1824.21,1693.45 L1773.37,1719.82 L1733.72,1727.03 L1674.01,1726.7 L1555.59,1737.51" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1117.8,555.806 L1138.67,558.841 L1130.59,602.431 L1109.67,599.322 L1117.8,555.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1145.88,559.789 L1180.59,564.911 L1177.37,584.071 L1142.08,578.38 L1145.88,559.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1138.76,585.779 L1173.67,590.711 L1170.54,609.302 L1135.73,604.369 L1138.76,585.779" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1192.57,566.903 L1247.23,575.037 L1253.7,595.193 L1188.92,585.542 L1192.57,566.903" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1187.64,592.513 L1208.6,595.359 L1200.49,638.895 L1180,636.05 L1187.64,592.513" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1229.58,598.252 L1226.17,616.842 L1262.45,621.964 L1255.81,601.856 L1229.58,598.252" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1224.65,624.241 L1221.52,641.788 L1270.94,648.618 L1264.3,628.699 L1225.03,623.103 L1224.65,624.241" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1108.54,605.395 L1143.39,610.659 L1139.93,629.298 L1104.93,623.986 L1108.54,605.395" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1147.8,612.414 L1168.86,615.354 L1161.18,658.986 L1140.31,656.046 L1147.8,612.414" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1103.85,630.282 L1138.66,635.498 L1135.19,654.137 L1100.34,648.932 L1103.85,630.282" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1178.49,642.197 L1227.37,648.967 L1224.15,667.606 L1175.16,660.966 L1178.49,642.197" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1234.34,649.916 L1273.14,655.275 L1279.92,675.241 L1279.98,675.324 L1231.11,668.605 L1234.34,649.916" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1098.02,661.362 L1132.83,666.555 L1129.36,685.22 L1094.51,680.009 L1098.02,661.362" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1138.17,668.538 L1159.12,671.419 L1151.59,715.018 L1130.56,712.101 L1138.17,668.538" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1173.07,673.331 L1222.01,679.982 L1218.67,698.692 L1169.73,692.076 L1173.07,673.331" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1228.98,681.049 L1284.47,688.679 L1291.2,708.731 L1225.71,699.705 L1228.98,681.049" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1168.76,698.256 L1189.71,701.139 L1182.16,744.712 L1182.16,744.715 L1161.21,741.83 L1168.76,698.256" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1093.34,686.226 L1089.78,704.816 L1124.69,710.051 L1128.19,691.413 L1093.34,686.226" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1210.64,704.016 L1231.6,706.903 L1224.04,750.475 L1203.1,747.606 L1210.64,704.016" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1238.6,707.852 L1293.47,715.44 L1300.17,735.489 L1235.33,726.537 L1238.6,707.852" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1088.68,711.053 L1109.59,714.177 L1101.42,757.666 L1080.51,754.53 L1088.68,711.053" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1115.57,716.409 L1150.48,721.211 L1147.24,739.898 L1112.33,735.089 L1115.57,716.409" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1111.25,741.313 L1146.16,746.12 L1144.01,758.579 L1133.54,757.12 L1134.07,754.019 L1120.11,752.093 L1119.57,755.204 L1109.07,753.793 L1111.25,741.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1160.12,748.055 L1209.02,754.789 L1206.85,767.239 L1196.39,765.78 L1196.91,762.674 L1168.99,758.821 L1168.44,761.927 L1158.01,760.48 L1160.12,748.055" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1234.25,732.808 L1302.42,742.15 L1309.17,762.211 L1231.04,751.452 L1234.25,732.808" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1215.99,755.744 L1213.84,768.199 L1224.31,769.657 L1224.83,766.527 L1252.78,770.369 L1252.24,773.475 L1262.7,774.933 L1264.86,762.472 L1215.99,755.744" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1271.85,763.44 L1269.69,775.882 L1280.17,777.334 L1280.7,774.228 L1301.66,777.103 L1303.29,767.772 L1271.85,763.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1268.57,578.236 L1277.29,579.563 L1275.55,588.877 L1271.78,588.311 L1268.57,578.236" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1277.29,579.563 L1282.52,580.339 L1280.77,589.658 L1275.52,588.866 L1277.29,579.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1282.52,580.339 L1287.75,581.112 L1286,590.438 L1280.77,589.658 L1282.52,580.339" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.75,581.122 L1292.98,581.9 L1291.22,591.219 L1285.99,590.437 L1287.75,581.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1292.98,581.9 L1298.2,582.681 L1296.45,592.003 L1291.2,591.208 L1292.98,581.9" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.21,582.678 L1303.43,583.46 L1301.68,592.776 L1296.45,592.018 L1298.21,582.678" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.43,583.463 L1308.66,584.252 L1306.91,593.547 L1301.67,592.788 L1303.43,583.463" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.65,584.24 L1313.87,585.022 L1312.12,594.347 L1306.89,593.553 L1308.65,584.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.88,585.022 L1319.1,585.799 L1317.36,595.118 L1312.13,594.336 L1313.88,585.022" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.09,585.799 L1324.34,586.587 L1322.58,595.891 L1317.34,595.137 L1319.09,585.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.35,586.587 L1329.55,587.342 L1327.82,596.691 L1322.6,595.914 L1324.35,586.587" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.56,587.353 L1334.79,588.131 L1333.05,597.501 L1327.83,596.702 L1329.56,587.353" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1271.77,588.308 L1273.18,592.683 L1283.5,594.204 L1284.25,590.162 L1271.77,588.308" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1284.25,590.174 L1287.73,590.706 L1285.97,600.011 L1282.51,599.489 L1284.25,590.174" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1273.19,592.672 L1275.01,598.373 L1282.51,599.489 L1283.47,594.198 L1273.19,592.672" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.74,590.69 L1291.22,591.201 L1289.47,600.527 L1285.97,600.038 L1287.74,590.69" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.21,591.223 L1294.7,591.733 L1292.94,601.049 L1289.47,600.538 L1291.21,591.223" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1294.7,591.739 L1298.2,592.261 L1296.44,601.571 L1292.95,601.065 L1294.7,591.739" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.2,592.272 L1301.68,592.783 L1299.92,602.104 L1296.43,601.576 L1298.2,592.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.68,592.791 L1305.17,593.296 L1303.41,602.617 L1299.96,602.106 L1301.68,592.791" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.17,593.302 L1308.65,593.824 L1306.89,603.128 L1303.4,602.617 L1305.17,593.302" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.67,593.812 L1312.14,594.323 L1310.38,603.672 L1306.92,603.139 L1308.67,593.812" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.13,594.343 L1315.61,594.859 L1313.86,604.18 L1310.39,603.662 L1312.13,594.343" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.72,594.855 L1319.1,595.388 L1317.36,604.692 L1313.9,604.159 L1315.72,594.855" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.1,595.393 L1322.58,595.898 L1320.82,605.236 L1317.38,604.703 L1319.1,595.393" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.59,595.904 L1333.02,597.508 L1332.46,600.573 L1322.01,598.996 L1322.59,595.904" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.99,598.996 L1332.45,600.573 L1331.86,603.67 L1321.4,602.122 L1321.99,598.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.41,602.116 L1331.86,603.676 L1331.31,606.76 L1320.87,605.25 L1321.41,602.116" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1277.44,605.072 L1288.34,606.76 L1287.52,610.823 L1278.5,609.447 L1277.17,605.028 L1277.46,605.094 L1277.44,605.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1278.73,609.758 L1280.37,615.131 L1286.54,616.042 L1287.5,610.801 L1278.48,609.402 L1278.73,609.869 L1278.73,609.758" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1288.33,606.754 L1291.79,607.276 L1290.03,616.597 L1286.54,616.064 L1288.33,606.754" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1291.84,607.293 L1295.27,607.803 L1293.52,617.108 L1290.03,616.591 L1291.84,607.293" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.28,607.79 L1298.76,608.317 L1297,617.632 L1293.52,617.099 L1295.28,607.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1298.76,608.317 L1302.24,608.83 L1300.49,618.143 L1297,617.632 L1298.76,608.317" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.25,608.828 L1305.73,609.352 L1303.97,618.656 L1300.48,618.157 L1302.25,608.828" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.72,609.352 L1309.22,609.863 L1307.47,619.2 L1303.97,618.668 L1305.72,609.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.21,609.874 L1312.68,610.396 L1310.93,619.7 L1307.44,619.189 L1309.21,609.874" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.68,610.385 L1316.18,610.918 L1314.42,620.233 L1310.93,619.717 L1312.68,610.385" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.18,610.912 L1319.66,611.429 L1317.9,620.749 L1314.43,620.239 L1316.18,610.912" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.66,611.434 L1330.12,613 L1329.53,616.097 L1319.06,614.543 L1319.66,611.434" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1319.06,614.543 L1329.53,616.075 L1328.94,619.217 L1318.49,617.652 L1319.06,614.543" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.49,617.652 L1328.93,619.228 L1328.36,622.315 L1317.93,620.749 L1318.49,617.652" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318,620.749 L1328.35,622.315 L1327.8,625.401 L1317.34,623.88 L1317.91,620.727 L1318,620.749" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.31,623.869 L1316.75,626.945 L1327.18,628.521 L1327.77,625.413 L1317.31,623.869" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.7,627.067 L1316.17,630.054 L1326.62,631.619 L1327.21,628.521 L1316.72,626.945 L1316.68,627.167 L1316.7,627.067" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1280.39,615.131 L1281.78,619.506 L1292.77,621.143 L1293.52,617.108 L1280.39,615.131" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1281.78,619.511 L1283.61,625.207 L1291.77,626.426 L1292.76,621.143 L1281.78,619.511" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1293.51,617.099 L1297,617.632 L1295.26,626.964 L1291.76,626.442 L1293.51,617.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.02,617.638 L1300.48,618.149 L1298.7,627.475 L1295.24,626.964 L1297.02,617.638" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1300.46,618.171 L1303.99,618.659 L1302.21,627.986 L1298.7,627.43 L1300.46,618.171" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1303.97,618.67 L1307.46,619.192 L1305.71,628.507 L1302.21,627.986 L1303.97,618.67" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.46,619.203 L1310.95,619.714 L1309.19,629.035 L1305.71,628.507 L1307.46,619.203" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.96,619.72 L1314.44,620.23 L1312.67,629.551 L1309.18,629.029 L1310.96,619.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.65,629.534 L1316.16,630.045 L1317.91,620.741 L1314.43,620.23 L1312.65,629.534" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.76,589.209 L1333.57,632.621 L1354.57,635.819 L1362.77,592.318 L1341.76,589.209" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1285.78,631.933 L1287.15,636.263 L1296.82,637.717 L1297.56,633.676 L1285.78,631.933" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1287.12,636.252 L1288.99,641.97 L1295.82,642.991 L1296.83,637.751 L1287.12,636.252" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1289,641.992 L1290.4,646.333 L1298.54,647.543 L1299.29,643.535 L1289,641.992" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1290.39,646.327 L1292.22,652.023 L1297.55,652.845 L1298.54,647.549 L1290.39,646.327" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.55,633.681 L1301.06,634.203 L1299.25,643.496 L1295.81,643.03 L1297.55,633.681" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1301.06,634.192 L1304.54,634.719 L1302.79,644.038 L1299.29,643.527 L1301.06,634.192" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.28,643.516 L1302.77,644.049 L1301.06,653.353 L1297.55,652.82 L1299.28,643.516" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1304.54,634.722 L1308.03,635.255 L1306.27,644.565 L1302.78,644.038 L1304.54,634.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1302.78,644.043 L1306.28,644.57 L1304.52,653.886 L1301.05,653.369 L1302.78,644.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.02,635.25 L1311.5,635.771 L1309.76,645.087 L1306.29,644.559 L1308.02,635.25" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.28,644.559 L1309.76,645.092 L1308.01,654.402 L1304.53,653.891 L1306.28,644.559" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1311.53,635.76 L1315,636.316 L1313.24,645.6 L1309.76,645.087 L1311.53,635.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,645.087 L1313.24,645.597 L1311.5,654.918 L1308.03,654.43 L1309.76,645.087" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.98,636.288 L1325.46,637.842 L1324.89,640.951 L1314.45,639.397 L1314.98,636.288" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1314.63,639.397 L1324.86,640.973 L1324.29,644.06 L1313.83,642.505 L1314.38,639.352 L1314.63,639.397" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.82,642.505 L1324.28,644.06 L1323.71,647.169 L1313.26,645.592 L1313.82,642.505" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.17,645.614 L1323.65,647.169 L1323.17,650.277 L1312.68,648.679 L1313.17,645.614" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.66,648.701 L1323.11,650.277 L1322.51,653.364 L1322.51,653.364 L1312.07,651.832 L1312.66,648.701" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1312.09,651.832 L1322.52,653.386 L1321.97,656.495 L1311.47,654.918 L1312.09,651.832" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1294.4,658.76 L1306.83,660.647 L1306.08,664.644 L1295.75,663.09 L1294.4,658.76" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1295.8,663.112 L1306.1,664.622 L1305.12,669.952 L1297.57,668.863 L1295.8,663.112" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1297.57,668.886 L1308.59,670.484 L1307.79,674.57 L1298.99,673.216 L1297.57,668.886" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1299.02,673.216 L1307.8,674.581 L1306.82,679.766 L1300.8,678.867 L1299.02,673.216" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1306.81,660.625 L1310.32,661.136 L1308.55,670.462 L1305.1,669.952 L1306.81,660.625" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1310.32,661.147 L1320.78,662.701 L1320.19,665.821 L1309.74,664.234 L1310.32,661.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.78,664.234 L1320.19,665.788 L1319.61,668.919 L1309.15,667.309 L1309.78,664.234" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.15,667.365 L1319.61,668.913 L1319.02,672.028 L1308.56,670.462 L1309.15,667.365" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.57,670.484 L1319.01,672.028 L1318.44,675.125 L1307.98,673.56 L1308.57,670.484" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1307.99,673.563 L1318.44,675.128 L1317.86,678.229 L1307.41,676.669 L1307.99,673.563" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1317.86,678.226 L1317.27,681.332 L1306.8,679.786 L1307.4,676.677 L1317.86,678.226" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.41,638.889 L1335.9,639.402 L1334.15,648.706 L1330.67,648.207 L1332.41,638.889" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.9,639.408 L1339.39,639.924 L1337.63,649.245 L1334.16,648.717 L1335.9,639.408" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.39,639.927 L1342.86,640.454 L1341.12,649.767 L1337.63,649.245 L1339.39,639.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.87,640.451 L1346.35,640.973 L1344.61,650.311 L1341.11,649.772 L1342.87,640.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.35,640.973 L1349.84,641.487 L1348.09,650.813 L1344.57,650.291 L1346.35,640.973" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.87,641.487 L1353.32,642.008 L1351.56,651.379 L1348.07,650.846 L1349.87,641.487" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.67,648.207 L1330.08,651.315 L1340.53,652.873 L1341.12,649.772 L1330.67,648.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1341.12,649.772 L1340.53,652.873 L1350.98,654.435 L1351.56,651.377 L1341.12,649.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.09,651.322 L1329.5,654.415 L1339.95,655.974 L1340.53,652.866 L1330.09,651.322" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.53,652.866 L1339.95,655.975 L1350.41,657.535 L1350.99,654.426 L1340.53,652.866" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.5,654.415 L1328.93,657.524 L1339.38,659.056 L1339.98,655.97 L1329.5,654.415" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.96,655.967 L1339.37,659.08 L1349.83,660.655 L1350.39,657.524 L1339.96,655.967" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.92,657.527 L1328.33,660.63 L1338.78,662.19 L1339.36,659.08 L1328.92,657.527" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.38,659.08 L1338.79,662.189 L1349.23,663.751 L1349.77,660.645 L1339.38,659.08" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.33,660.634 L1327.76,663.726 L1338.21,665.292 L1338.8,662.216 L1328.33,660.634" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.78,662.177 L1338.2,665.295 L1348.65,666.857 L1349.24,663.751 L1338.78,662.177" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.74,663.743 L1327.16,666.841 L1337.61,668.403 L1338.2,665.296 L1327.74,663.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.2,665.295 L1337.62,668.403 L1337.62,668.403 L1348.07,669.965 L1348.65,666.86 L1338.2,665.295" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.16,666.84 L1326.58,669.948 L1337.03,671.508 L1337.62,668.407 L1327.16,666.84" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.62,668.401 L1337.03,671.506 L1347.49,673.077 L1348.06,669.968 L1337.62,668.401" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.58,669.951 L1326,673.049 L1336.45,674.614 L1337.03,671.51 L1326.58,669.951" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.03,671.504 L1336.45,674.613 L1346.89,676.166 L1347.48,673.079 L1337.03,671.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1326.01,673.046 L1324.25,682.361 L1327.74,682.894 L1329.48,673.568 L1326.01,673.046" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.47,673.573 L1327.74,682.894 L1331.21,683.413 L1332.96,674.095 L1329.47,673.573" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.96,674.095 L1331.21,683.412 L1334.7,683.935 L1336.45,674.606 L1332.96,674.095" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.46,674.612 L1334.69,683.935 L1338.18,684.453 L1339.93,675.135 L1336.46,674.612" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1339.93,675.135 L1338.18,684.456 L1341.67,684.973 L1343.42,675.655 L1343.42,675.655 L1339.93,675.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.42,675.657 L1341.67,684.972 L1345.15,685.494 L1346.91,676.145 L1343.42,675.657" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.64,593.344 L1374.86,594.115 L1373.12,603.458 L1367.88,602.658 L1369.64,593.344" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.88,594.115 L1380.08,594.895 L1378.33,604.226 L1373.08,603.458 L1374.88,594.115" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.06,594.915 L1385.3,595.675 L1383.52,604.999 L1378.33,604.228 L1380.06,594.915" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.29,595.705 L1390.53,596.466 L1388.78,605.789 L1383.55,605.009 L1385.29,595.705" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.51,596.456 L1395.75,597.256 L1394,606.56 L1388.77,605.779 L1390.51,596.456" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.74,597.246 L1400.98,598.036 L1399.23,607.347 L1394.01,606.56 L1395.74,597.246" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.99,598.021 L1406.21,598.822 L1404.46,608.13 L1399.24,607.345 L1400.99,598.021" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.21,598.807 L1415.4,600.187 L1406.86,608.485 L1404.46,608.13 L1406.21,598.807" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.88,608.495 L1392.26,606.301 L1391.68,609.414 L1404.46,611.323 L1406.88,608.495" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.46,611.324 L1402.22,614.181 L1391.1,612.521 L1391.68,609.414 L1404.46,611.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.22,614.181 L1400.15,617.066 L1390.51,615.629 L1391.1,612.508 L1402.22,614.181" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.78,605.791 L1392.26,606.301 L1390.51,615.628 L1387.03,615.107 L1388.78,605.791" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.3,605.272 L1388.78,605.788 L1387.03,615.107 L1383.55,614.586 L1385.3,605.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.29,605.281 L1383.55,614.586 L1380.06,614.066 L1381.81,604.748 L1385.29,605.281" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.81,604.748 L1378.33,604.227 L1376.58,613.545 L1380.06,614.066 L1381.81,604.748" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.33,604.228 L1367.88,602.665 L1367.29,605.773 L1377.74,607.334 L1378.33,604.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.74,607.334 L1377.16,610.44 L1366.71,608.879 L1367.29,605.773 L1377.74,607.334" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.71,608.879 L1377.16,610.44 L1376.58,613.546 L1366.13,611.985 L1366.71,608.879" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.95,618.194 L1375.41,619.758 L1374.84,622.876 L1364.38,621.323 L1364.95,618.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.38,621.323 L1374.81,622.887 L1374.25,625.96 L1363.79,624.406 L1364.38,621.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.78,624.418 L1374.27,625.948 L1373.65,629.088 L1363.21,627.524 L1363.78,624.418" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.22,627.513 L1373.66,629.088 L1373.06,632.161 L1362.61,630.63 L1363.22,627.513" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.61,630.641 L1362.05,633.725 L1372.49,635.289 L1373.07,632.172 L1362.61,630.641" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1362.04,633.736 L1372.51,635.289 L1371.89,638.401 L1361.45,636.842 L1362.04,633.736" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.4,619.77 L1378.88,620.287 L1377.13,629.617 L1373.67,629.1 L1375.4,619.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.89,620.282 L1382.38,620.811 L1380.63,630.119 L1377.13,629.612 L1378.89,620.282" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.35,620.788 L1396.51,622.893 L1394.9,625.864 L1381.79,623.917 L1382.35,620.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.79,623.928 L1394.9,625.864 L1393.44,628.846 L1381.23,627.001 L1381.79,623.928" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.21,626.989 L1393.44,628.835 L1392.13,631.851 L1380.63,630.119 L1381.21,626.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.74,629.094 L1377.14,629.612 L1375.38,638.908 L1371.93,638.401 L1371.9,638.39 L1373.74,629.094" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.39,638.896 L1378.88,639.428 L1380.63,630.119 L1377.13,629.623 L1375.39,638.896" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.63,630.119 L1392.13,631.851 L1390.93,634.845 L1380.06,633.213 L1380.63,630.119" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.05,633.224 L1390.94,634.849 L1389.89,637.888 L1379.47,636.333 L1380.05,633.224" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.88,639.434 L1379.46,636.33 L1389.89,637.888 L1388.97,640.941 L1388.97,640.941 L1378.88,639.434" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1360.27,643.05 L1370.74,644.615 L1370.18,647.721 L1359.71,646.157 L1360.27,643.05" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.72,646.157 L1359.1,649.274 L1369.57,650.805 L1370.17,647.721 L1359.72,646.157" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1359.11,649.285 L1358.54,652.369 L1369,653.932 L1369.55,650.805 L1359.11,649.285" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1358.54,652.369 L1357.94,655.475 L1368.41,657.028 L1368.99,653.932 L1358.54,652.369" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.93,655.475 L1357.35,658.57 L1367.81,660.146 L1368.42,657.017 L1357.93,655.475" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.38,658.581 L1356.76,661.676 L1367.24,663.252 L1367.82,660.134 L1357.38,658.581" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.74,644.615 L1374.23,645.127 L1372.47,654.447 L1368.99,653.929 L1370.74,644.615" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.98,653.932 L1372.47,654.447 L1370.73,663.76 L1367.23,663.254 L1368.98,653.932" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.22,645.127 L1377.71,645.65 L1375.96,654.967 L1372.47,654.448 L1374.22,645.127" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.48,654.45 L1375.96,654.965 L1374.21,664.292 L1370.73,663.773 L1372.48,654.45" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.7,645.684 L1387.56,647.136 L1387.02,650.259 L1377.16,648.774 L1377.7,645.684" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.13,648.757 L1387.02,650.242 L1386.62,653.374 L1376.55,651.854 L1377.13,648.757" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.55,651.846 L1386.61,653.374 L1386.37,656.522 L1375.96,654.969 L1376.55,651.846" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.96,654.973 L1386.36,656.518 L1386.24,659.7 L1375.38,658.075 L1375.96,654.973" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.38,658.079 L1386.24,659.696 L1386.24,662.891 L1374.8,661.181 L1375.38,658.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.79,661.181 L1386.24,662.895 L1386.39,666.102 L1374.22,664.283 L1374.79,661.181" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.62,667.896 L1366.07,669.449 L1365.5,672.572 L1355.05,670.994 L1355.62,667.896" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.05,671.002 L1354.43,674.108 L1364.91,675.662 L1365.49,672.581 L1355.05,671.002" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.92,675.662 L1364.33,678.768 L1353.87,677.215 L1354.45,674.1 L1364.92,675.662" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.87,677.215 L1364.31,678.776 L1363.73,681.882 L1353.28,680.321 L1353.87,677.215" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1353.28,680.312 L1352.69,683.431 L1363.14,684.997 L1363.72,681.866 L1353.28,680.312" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.14,684.989 L1362.58,688.095 L1352.13,686.529 L1352.7,683.436 L1363.14,684.989" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.06,669.462 L1369.56,669.977 L1367.81,679.295 L1364.32,678.785 L1366.06,669.462" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1364.32,678.789 L1367.8,679.304 L1366.06,688.62 L1362.57,688.097 L1364.32,678.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1369.56,669.979 L1373.04,670.502 L1371.29,679.825 L1367.81,679.306 L1369.56,669.979" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.81,679.302 L1371.29,679.825 L1369.54,689.135 L1366.06,688.624 L1367.81,679.302" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1373.04,670.494 L1376.53,671.025 L1374.78,680.353 L1371.28,679.821 L1373.04,670.494" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.29,679.829 L1374.77,680.353 L1373.04,689.663 L1369.55,689.139 L1371.29,679.829" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.53,671.023 L1380,671.54 L1378.25,680.859 L1374.79,680.327 L1376.53,671.023" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.79,680.348 L1378.25,680.867 L1376.51,690.178 L1373.04,689.663 L1374.79,680.348" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380,671.54 L1387.11,672.595 L1387.67,675.887 L1379.41,674.655 L1380,671.54" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.42,674.655 L1387.66,675.87 L1388.38,679.179 L1378.85,677.761 L1379.42,674.655" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.84,677.757 L1388.37,679.183 L1389.3,682.501 L1378.26,680.872 L1378.84,677.757" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1378.25,680.88 L1381.74,681.395 L1380,690.688 L1376.5,690.19 L1378.25,680.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.74,681.387 L1389.29,682.501 L1390.37,685.86 L1381.15,684.493 L1381.74,681.387" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.15,684.501 L1390.36,685.86 L1391.62,689.253 L1380.56,687.574 L1381.15,684.501" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.58,687.59 L1391.62,689.245 L1393.04,692.638 L1380.01,690.688 L1380.58,687.59" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.71,602.917 L1439.65,603.801 L1438.88,607.838 L1429.22,606.369 L1433.71,602.917" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.22,606.365 L1438.88,607.851 L1437.9,613.122 L1423.26,610.931 L1429.22,606.365" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.26,610.936 L1419.17,615.118 L1428.32,616.483 L1429.19,611.822 L1423.26,610.936" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.17,615.122 L1415.37,619.334 L1427.44,621.132 L1428.31,616.473 L1419.17,615.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.19,611.822 L1432.67,612.345 L1430.92,621.668 L1427.44,621.145 L1429.19,611.822" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.67,612.35 L1443.12,613.907 L1442.54,617.021 L1432.09,615.451 L1432.67,612.35" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.09,615.451 L1442.53,617.021 L1441.95,620.111 L1431.5,618.558 L1432.09,615.451" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1431.52,618.566 L1441.95,620.111 L1441.37,623.225 L1430.93,621.647 L1431.52,618.566" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.65,603.799 L1444.88,604.582 L1443.13,613.902 L1437.91,613.125 L1439.65,603.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.24,625.11 L1419.31,626.317 L1418.38,631.284 L1408.44,629.803 L1411.24,625.11" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1408.44,629.803 L1406.36,633.96 L1417.55,635.635 L1418.37,631.28 L1408.44,629.803" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.36,633.961 L1404.47,638.465 L1413.18,639.79 L1414.05,635.106 L1406.36,633.961" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.47,638.466 L1402.95,643.023 L1412.32,644.431 L1413.19,639.765 L1404.47,638.466" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.07,635.121 L1417.56,635.635 L1415.81,644.951 L1412.32,644.43 L1414.07,635.121" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.3,626.317 L1422.79,626.836 L1421.04,636.155 L1417.56,635.642 L1419.3,626.317" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.55,635.642 L1421.04,636.161 L1419.29,645.473 L1415.81,644.954 L1417.55,635.642" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.79,626.842 L1426.27,627.368 L1424.53,636.668 L1421.04,636.155 L1422.79,626.842" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.05,636.167 L1424.52,636.674 L1422.77,645.992 L1419.3,645.473 L1421.05,636.167" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.26,627.362 L1429.76,627.887 L1428.01,637.199 L1424.52,636.668 L1426.26,627.362" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.51,636.668 L1428.01,637.193 L1426.26,646.499 L1422.77,645.999 L1424.51,636.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.76,627.887 L1440.21,629.425 L1439.64,632.54 L1429.17,630.97 L1429.76,627.887" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.17,630.97 L1439.62,632.527 L1439.04,635.655 L1428.58,634.11 L1429.17,630.97" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.58,634.123 L1439.06,635.655 L1438.43,638.769 L1428,637.199 L1428.58,634.123" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.01,637.212 L1438.43,638.782 L1437.86,641.859 L1427.41,640.301 L1428.01,637.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.43,640.301 L1437.87,641.859 L1437.28,644.961 L1426.84,643.391 L1427.43,640.301" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.84,643.391 L1437.26,644.961 L1436.67,648.05 L1426.26,646.505 L1426.84,643.391" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1451.82,605.648 L1457.08,606.433 L1455.31,615.777 L1450.12,614.966 L1451.82,605.648" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.08,606.407 L1462.3,607.192 L1460.53,616.511 L1455.31,615.777 L1457.08,606.407" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.33,607.218 L1467.52,607.977 L1465.8,617.296 L1460.53,616.536 L1462.33,607.218" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.49,607.977 L1472.73,608.712 L1470.99,618.056 L1465.8,617.245 L1467.49,607.977" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.1,614.941 L1460.54,616.524 L1459.99,619.575 L1449.49,618.106 L1450.1,614.941" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1449.46,618.081 L1459.97,619.6 L1459.36,622.74 L1448.93,621.17 L1449.46,618.081" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.91,621.17 L1448.34,624.272 L1458.78,625.855 L1459.39,622.69 L1448.91,621.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.34,624.275 L1447.77,627.374 L1458.2,628.919 L1458.78,625.779 L1448.34,624.275" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.77,627.368 L1447.19,630.483 L1457.62,632.04 L1458.2,628.913 L1447.77,627.368" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.19,630.483 L1446.6,633.623 L1457.06,635.142 L1457.61,632.015 L1447.19,630.483" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.59,633.623 L1446,636.674 L1456.48,638.231 L1457.05,635.129 L1446.59,633.623" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446,636.636 L1445.4,639.776 L1455.88,641.346 L1456.45,638.219 L1446,636.636" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.4,639.795 L1443.68,649.113 L1447.17,649.633 L1448.9,640.314 L1445.4,639.795" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1448.9,640.314 L1452.4,640.833 L1450.64,650.152 L1447.17,649.639 L1448.9,640.314" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1450.64,650.145 L1454.13,650.658 L1455.88,641.34 L1452.39,640.827 L1450.64,650.145" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.14,650.658 L1457.62,651.177 L1459.37,641.884 L1455.86,641.34 L1454.14,650.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.35,641.884 L1462.85,642.403 L1461.09,651.709 L1457.62,651.203 L1459.35,641.884" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.09,651.684 L1464.6,652.228 L1466.32,642.922 L1462.82,642.403 L1461.09,651.684" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.47,638.212 L1466.93,639.833 L1466.32,642.973 L1455.88,641.377 L1456.47,638.212" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.05,635.123 L1467.51,636.693 L1466.9,639.883 L1456.47,638.238 L1457.05,635.123" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.62,632.04 L1468.04,633.604 L1467.48,636.693 L1457.08,635.123 L1457.62,632.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.62,632.04 L1468.07,633.616 L1468.67,630.476 L1458.18,628.919 L1457.62,632.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.2,628.906 L1468.67,630.464 L1469.24,627.387 L1458.75,625.83 L1458.2,628.906" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.75,625.817 L1459.38,622.664 L1469.84,624.285 L1469.23,627.387 L1458.75,625.817" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.97,619.6 L1470.41,621.158 L1469.82,624.26 L1459.38,622.69 L1459.97,619.6" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1460.51,616.536 L1471.02,618.043 L1470.42,621.17 L1459.99,619.613 L1460.51,616.536" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.73,609.788 L1484.07,610.434 L1482.32,619.765 L1477.97,619.119 L1479.73,609.788" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.06,610.44 L1488.43,611.092 L1486.68,620.404 L1482.33,619.759 L1484.06,610.44" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.43,611.09 L1492.79,611.736 L1491.04,621.058 L1486.68,620.407 L1488.43,611.09" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.77,611.756 L1497.14,612.389 L1495.39,621.711 L1491.04,621.059 L1492.77,611.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.14,612.392 L1501.49,613.044 L1499.75,622.356 L1495.38,621.704 L1497.14,612.392" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.49,613.041 L1505.85,613.687 L1504.1,623.008 L1499.75,622.356 L1501.49,613.041" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.84,613.687 L1510.21,614.342 L1508.46,623.656 L1504.1,623.007 L1505.84,613.687" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1510.21,614.34 L1514.56,614.989 L1512.81,624.307 L1508.45,623.668 L1510.21,614.34" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.56,614.987 L1531.98,617.592 L1530.23,626.908 L1512.81,624.308 L1514.56,614.987" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.96,619.118 L1477.39,622.219 L1487.84,623.774 L1488.43,620.669 L1477.96,619.118" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.38,622.223 L1476.8,625.318 L1487.25,626.878 L1487.84,623.776 L1477.38,622.223" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.8,625.324 L1476.22,628.442 L1486.68,629.974 L1487.23,626.872 L1476.8,625.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.42,620.674 L1491.9,621.187 L1490.16,630.499 L1486.67,629.987 L1488.42,620.674" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.9,621.193 L1495.39,621.719 L1493.64,631.025 L1490.16,630.509 L1491.9,621.193" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.38,621.722 L1498.88,622.235 L1497.13,631.546 L1493.64,631.025 L1495.38,621.722" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.87,622.228 L1502.37,622.754 L1500.61,632.066 L1497.13,631.546 L1498.87,622.228" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.37,622.74 L1505.84,623.285 L1504.09,632.584 L1500.61,632.065 L1502.37,622.74" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.82,623.278 L1509.31,623.798 L1507.58,633.104 L1504.1,632.578 L1505.82,623.278" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.34,623.823 L1512.79,624.317 L1511.06,633.629 L1507.58,633.104 L1509.34,623.823" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1512.79,624.291 L1516.29,624.836 L1514.54,634.148 L1511.06,633.629 L1512.79,624.291" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.29,624.833 L1519.78,625.347 L1518.03,634.667 L1514.55,634.148 L1516.29,624.833" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1519.78,625.347 L1523.27,625.869 L1521.52,635.187 L1518.03,634.667 L1519.78,625.347" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1523.26,625.873 L1530.23,626.909 L1529.36,631.568 L1522.39,630.528 L1523.26,625.873" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1522.39,630.528 L1529.36,631.568 L1528.48,636.228 L1521.52,635.187 L1522.39,630.528" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.04,634.645 L1485.51,636.202 L1484.92,639.308 L1474.47,637.731 L1475.04,634.645" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.46,637.741 L1473.89,640.846 L1484.33,642.394 L1484.91,639.308 L1474.46,637.741" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.88,640.846 L1473.31,643.97 L1483.76,645.508 L1484.33,642.394 L1473.88,640.846" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.3,643.961 L1472.73,647.066 L1483.18,648.623 L1483.75,645.518 L1473.3,643.961" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.73,647.056 L1472.14,650.152 L1482.57,651.719 L1483.16,648.613 L1472.73,647.056" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.14,650.171 L1471.53,653.285 L1482.01,654.833 L1482.55,651.709 L1472.14,650.171" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.5,636.202 L1488.98,636.725 L1487.24,646.04 L1483.74,645.518 L1485.5,636.202" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.73,645.518 L1487.24,646.04 L1485.5,655.365 L1481.98,654.814 L1483.73,645.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.98,636.72 L1492.48,637.237 L1490.72,646.553 L1487.24,646.045 L1488.98,636.72" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.23,646.04 L1490.73,646.558 L1488.97,655.868 L1485.5,655.356 L1487.23,646.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.47,637.237 L1495.95,637.769 L1494.2,647.066 L1490.73,646.553 L1492.47,637.237" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.73,646.553 L1494.21,647.066 L1492.46,656.396 L1488.96,655.887 L1490.73,646.553" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.94,637.764 L1499.44,638.282 L1497.69,647.598 L1494.21,647.08 L1495.94,637.764" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.2,647.07 L1497.69,647.598 L1495.94,656.915 L1492.46,656.396 L1494.2,647.07" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1499.44,638.269 L1502.93,638.799 L1501.18,648.116 L1497.69,647.598 L1499.44,638.269" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.69,647.598 L1501.18,648.117 L1499.43,657.436 L1495.94,656.916 L1497.69,647.598" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.93,638.799 L1506.41,639.317 L1504.66,648.639 L1501.18,648.117 L1502.93,638.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.18,648.117 L1504.66,648.638 L1502.91,657.956 L1499.43,657.436 L1501.18,648.117" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.4,639.322 L1509.85,639.873 L1508.14,649.16 L1504.69,648.628 L1506.4,639.322" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1509.85,639.854 L1513.39,640.386 L1511.6,649.673 L1508.12,649.179 L1509.85,639.854" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1513.35,640.367 L1516.84,640.899 L1515.11,650.2 L1511.62,649.673 L1513.35,640.367" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.63,648.628 L1508.14,649.179 L1506.38,658.466 L1502.9,657.991 L1504.63,648.628" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.09,649.179 L1511.64,649.654 L1509.87,659.036 L1506.38,658.466 L1508.09,649.179" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1511.6,649.654 L1515.11,650.202 L1513.36,659.513 L1509.89,658.979 L1511.6,649.654" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1516.86,640.88 L1527.31,642.456 L1526.43,647.109 L1515.97,645.552 L1516.86,640.88" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.97,645.533 L1526.43,647.109 L1525.58,651.743 L1515.11,650.2 L1515.97,645.533" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1515.11,650.197 L1525.57,651.759 L1524.69,656.417 L1514.24,654.857 L1515.11,650.197" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1514.25,654.841 L1524.68,656.417 L1523.79,661.089 L1513.38,659.551 L1514.25,654.841" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1401.47,649.191 L1411.15,650.644 L1410.55,653.758 L1400.95,652.324 L1401.47,649.191" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.97,652.324 L1400.6,655.439 L1409.98,656.844 L1410.56,653.758 L1400.97,652.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.61,655.453 L1400.42,658.618 L1409.4,659.962 L1409.99,656.847 L1400.61,655.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.42,658.627 L1400.34,661.789 L1412.3,663.575 L1412.89,660.483 L1400.42,658.627" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.35,661.789 L1400.46,665.009 L1411.72,666.689 L1412.29,663.575 L1400.35,661.789" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.47,665.009 L1400.77,668.237 L1411.13,669.8 L1411.72,666.699 L1400.47,665.009" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.15,650.646 L1414.63,651.164 L1412.89,660.483 L1409.4,659.962 L1411.15,650.646" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.483 L1414.64,651.163 L1418.12,651.684 L1416.37,661.002 L1412.89,660.483" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.37,661.003 L1419.86,661.523 L1421.61,652.203 L1418.12,651.684 L1416.37,661.003" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.61,652.204 L1425.09,652.724 L1423.34,662.043 L1419.86,661.523 L1421.61,652.204" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.89,660.482 L1416.37,661.005 L1414.62,670.322 L1411.14,669.805 L1412.89,660.482" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1414.62,670.32 L1418.1,670.838 L1419.85,661.523 L1416.37,661 L1414.62,670.32" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.85,661.522 L1423.34,662.042 L1421.59,671.362 L1418.1,670.839 L1419.85,661.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.09,652.723 L1435.53,654.295 L1434.96,657.428 L1424.5,655.814 L1425.09,652.723" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.5,655.814 L1434.94,657.428 L1434.35,660.505 L1423.93,658.948 L1424.5,655.814" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.93,658.948 L1434.37,660.505 L1433.77,663.601 L1423.36,662.043 L1423.93,658.948" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.36,662.043 L1422.75,665.12 L1433.23,666.715 L1433.75,663.62 L1423.36,662.043" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.21,666.715 L1432.63,669.811 L1422.18,668.273 L1422.75,665.12 L1433.21,666.715" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.2,668.273 L1432.63,669.816 L1432.04,672.924 L1421.59,671.362 L1422.2,668.273" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.51,655.334 L1463.41,658.449 L1455.25,701.935 L1434.35,698.806 L1442.51,655.334" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.37,659.493 L1480.84,661.041 L1480.25,664.156 L1469.79,662.608 L1470.37,659.493" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.79,662.617 L1480.27,664.156 L1479.67,667.266 L1469.22,665.699 L1469.79,662.617" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1469.22,665.708 L1479.67,667.266 L1479.08,670.38 L1468.64,668.809 L1469.22,665.708" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.63,668.806 L1479.08,670.364 L1478.51,673.478 L1468.04,671.921 L1468.63,668.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.03,671.911 L1467.47,675.007 L1477.93,676.574 L1478.51,673.488 L1468.03,671.911" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.47,675.007 L1466.89,678.112 L1477.35,679.679 L1477.93,676.574 L1467.47,675.007" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.85,661.067 L1484.3,661.561 L1482.57,670.886 L1479.08,670.368 L1480.85,661.067" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.09,670.373 L1482.58,670.891 L1480.81,680.201 L1477.35,679.698 L1479.09,670.373" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.31,661.542 L1487.78,662.112 L1486.03,671.418 L1482.56,670.905 L1484.31,661.542" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.78,662.093 L1491.28,662.615 L1489.53,671.945 L1486.03,671.408 L1487.78,662.093" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.29,662.61 L1494.77,663.132 L1493.03,672.457 L1489.52,671.945 L1491.29,662.61" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.77,663.135 L1498.26,663.652 L1496.51,672.968 L1493.03,672.455 L1494.77,663.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.26,663.652 L1501.74,664.17 L1499.99,673.488 L1496.5,672.969 L1498.26,663.652" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.74,664.169 L1505.23,664.69 L1503.49,674.006 L1500,673.493 L1501.74,664.169" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.21,664.681 L1508.72,665.212 L1506.96,674.528 L1503.49,674.025 L1505.21,664.681" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.57,670.91 L1486.05,671.432 L1484.3,680.738 L1480.81,680.206 L1482.57,670.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.03,671.404 L1489.53,671.945 L1487.79,681.241 L1484.32,680.738 L1486.03,671.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.53,671.95 L1493.02,672.455 L1491.27,681.767 L1487.78,681.245 L1489.53,671.95" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.02,672.452 L1496.51,672.969 L1494.76,682.289 L1491.27,681.772 L1493.02,672.452" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.76,682.289 L1498.25,682.807 L1499.99,673.487 L1496.51,672.965 L1494.76,682.289" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.25,682.802 L1501.73,683.325 L1503.48,674.004 L1499.99,673.492 L1498.25,682.802" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.48,674 L1506.96,674.531 L1505.21,683.842 L1501.73,683.325 L1503.48,674" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.65,665.23 L1522.59,667.281 L1521.94,671.023 L1508.02,668.955 L1508.65,665.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1508.02,668.964 L1521.94,671.016 L1521.24,674.747 L1507.31,672.668 L1508.02,668.964" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1507.31,672.658 L1521.24,674.747 L1520.53,678.479 L1506.6,676.39 L1507.31,672.658" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.61,676.4 L1520.55,678.47 L1519.84,682.187 L1505.91,680.117 L1506.61,676.4" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.9,680.122 L1505.21,683.84 L1519.15,685.929 L1519.85,682.178 L1505.9,680.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1401.81,674.781 L1416.93,677.06 L1416.32,680.155 L1402.63,678.104 L1401.81,674.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1402.63,678.104 L1403.65,681.504 L1415.79,683.213 L1416.32,680.155 L1402.63,678.104" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1403.63,681.485 L1404.83,684.808 L1415.16,686.366 L1415.73,683.232 L1403.63,681.485" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.81,684.808 L1406.62,688.948 L1414.52,690.107 L1415.16,686.347 L1404.81,684.808" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.6,688.91 L1409.9,695.159 L1413.47,695.672 L1414.48,690.126 L1406.6,688.91" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1415.16,686.366 L1418.66,686.916 L1416.89,696.241 L1413.47,695.672 L1415.16,686.366" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.93,677.06 L1420.42,677.629 L1418.66,686.897 L1415.18,686.366 L1416.93,677.06" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.4,677.591 L1430.85,679.111 L1430.28,682.301 L1419.83,680.706 L1420.4,677.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.83,680.706 L1430.3,682.301 L1429.65,685.359 L1419.26,683.802 L1419.83,680.706" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.26,683.783 L1429.69,685.378 L1429.1,688.474 L1418.67,686.916 L1419.26,683.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.67,686.897 L1429.1,688.474 L1427.37,697.799 L1416.91,696.241 L1418.67,686.897" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.72,684.324 L1476.16,685.919 L1475.57,688.996 L1465.15,687.477 L1465.72,684.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.15,687.477 L1464.58,690.553 L1474.99,692.111 L1475.59,689.015 L1465.15,687.477" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.56,690.591 L1463.95,693.649 L1474.43,695.206 L1475.01,692.054 L1464.56,690.591" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.97,693.668 L1463.36,696.749 L1473.85,698.359 L1474.45,695.187 L1463.97,693.668" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.36,696.745 L1462.77,699.859 L1473.25,701.45 L1473.83,698.321 L1463.36,696.745" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1462.81,699.878 L1462.21,702.974 L1472.67,704.522 L1473.24,701.445 L1462.81,699.878" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.17,685.891 L1479.64,686.413 L1477.91,695.747 L1474.43,695.22 L1476.17,685.891" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.64,686.423 L1483.14,686.94 L1481.39,696.256 L1477.9,695.743 L1479.64,686.423" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.13,686.94 L1486.62,687.458 L1484.87,696.778 L1481.39,696.251 L1483.13,686.94" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.62,687.453 L1490.1,687.98 L1488.35,697.31 L1484.87,696.778 L1486.62,687.453" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.11,687.98 L1493.6,688.502 L1491.82,697.799 L1488.37,697.305 L1490.11,687.98" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1493.59,688.502 L1497.06,689.015 L1495.32,698.349 L1491.83,697.818 L1493.59,688.502" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.06,689.024 L1500.55,689.528 L1498.81,698.881 L1495.32,698.349 L1497.06,689.024" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1500.55,689.518 L1504.03,690.059 L1502.28,699.384 L1498.82,698.862 L1500.55,689.518" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1504.02,690.04 L1517.96,692.149 L1517.28,695.871 L1503.34,693.801 L1504.02,690.04" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1503.34,693.801 L1517.28,695.871 L1516.56,699.612 L1502.66,697.523 L1503.34,693.801" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1502.66,697.523 L1516.6,699.612 L1515.87,703.316 L1501.95,701.246 L1502.66,697.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.93,701.227 L1515.87,703.278 L1515.17,707.038 L1501.27,704.968 L1501.93,701.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1501.23,704.93 L1515.19,707.038 L1514.49,710.779 L1500.55,708.697 L1501.23,704.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1474.43,695.206 L1477.91,695.719 L1476.16,705.044 L1472.65,704.55 L1474.43,695.206" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.89,695.738 L1481.39,696.27 L1479.64,705.595 L1476.12,705.063 L1477.89,695.738" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.4,696.251 L1484.86,696.764 L1483.11,706.088 L1479.62,705.633 L1481.4,696.251" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.84,696.783 L1488.34,697.276 L1486.61,706.639 L1483.1,706.098 L1484.84,696.783" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1488.36,697.305 L1491.85,697.818 L1490.09,707.143 L1486.61,706.639 L1488.36,697.305" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.09,707.133 L1493.58,707.655 L1495.33,698.349 L1491.83,697.827 L1490.09,707.133" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.31,698.359 L1498.8,698.881 L1497.05,708.178 L1493.59,707.665 L1495.31,698.359" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1498.8,698.872 L1502.31,699.403 L1500.54,708.699 L1497.04,708.178 L1498.8,698.872" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1305.12,692.286 L1318.42,694.296 L1317.64,698.315 L1306.49,696.694 L1305.12,692.286" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.38,702.357 L1306.52,696.605 L1317.66,698.293 L1316.64,703.6 L1308.38,702.357" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1308.34,702.312 L1309.76,706.753 L1319.4,708.13 L1320.15,704.133 L1308.34,702.312" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1309.76,706.731 L1311.56,712.416 L1318.42,713.459 L1319.4,708.108 L1309.76,706.731" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1318.4,694.274 L1321.91,694.829 L1320.16,704.144 L1316.64,703.6 L1318.4,694.274" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.91,694.807 L1325.39,695.318 L1323.64,704.637 L1320.17,704.133 L1321.91,694.807" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1320.15,704.133 L1323.64,704.638 L1321.89,713.959 L1318.41,713.454 L1320.15,704.133" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1321.89,713.959 L1325.38,714.479 L1327.13,705.153 L1323.64,704.637 L1321.89,713.959" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1323.64,704.635 L1327.13,705.152 L1328.88,695.838 L1325.39,695.318 L1323.64,704.635" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.88,695.836 L1332.36,696.358 L1330.62,705.674 L1327.12,705.158 L1328.88,695.836" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.12,705.153 L1330.62,705.678 L1328.86,714.994 L1325.38,714.477 L1327.12,705.153" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1328.86,714.983 L1339.3,716.548 L1339.9,713.467 L1329.43,711.901 L1328.86,714.983" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1329.44,711.885 L1330.03,708.787 L1340.47,710.353 L1339.92,713.45 L1329.44,711.885" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.04,708.754 L1340.47,710.353 L1341.09,707.222 L1330.59,705.689 L1330.04,708.754" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1330.59,705.673 L1341.05,707.205 L1341.67,704.124 L1331.18,702.558 L1330.59,705.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1331.19,702.542 L1341.65,704.107 L1342.25,701.026 L1331.76,699.444 L1331.19,702.542" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1332.36,696.346 L1342.82,697.912 L1342.22,701.043 L1331.76,699.444 L1332.36,696.346" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1313.73,719.122 L1327.68,721.22 L1326.9,725.262 L1315.16,723.507 L1313.73,719.122" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1315.16,723.507 L1326.9,725.284 L1325.95,730.569 L1316.93,729.17 L1315.16,723.507" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1316.95,729.17 L1325.95,730.513 L1324.19,739.829 L1320.22,739.251 L1316.95,729.17" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1324.19,739.806 L1334.67,741.405 L1335.23,738.296 L1324.77,736.764 L1324.19,739.806" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.37,733.633 L1335.81,735.21 L1335.24,738.296 L1324.79,736.764 L1325.37,733.633" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1325.95,730.547 L1336.39,732.079 L1335.82,735.221 L1325.37,733.633 L1325.95,730.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.38,732.068 L1336.97,728.992 L1326.49,727.427 L1325.96,730.547 L1336.38,732.068" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.1,724.307 L1337.55,725.861 L1336.96,728.97 L1326.5,727.46 L1327.1,724.307" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1327.67,721.209 L1338.16,722.775 L1337.55,725.872 L1327.08,724.318 L1327.67,721.209" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.75,698.992 L1370.69,702.101 L1362.52,745.58 L1341.61,742.466 L1349.75,698.992" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1322.33,745.952 L1333.45,747.639 L1329.56,768.479 L1322.33,745.952" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1340.44,748.661 L1343.92,749.183 L1342.16,758.498 L1338.68,757.965 L1340.44,748.661" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1342.16,758.498 L1345.65,759.02 L1347.41,749.693 L1343.91,749.194 L1342.16,758.498" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.41,749.705 L1350.89,750.215 L1349.14,759.553 L1345.65,759.02 L1347.41,749.705" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1350.88,750.215 L1354.4,750.737 L1352.63,760.052 L1349.14,759.553 L1350.88,750.215" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1354.4,750.748 L1357.87,751.259 L1356.12,760.596 L1352.63,760.086 L1354.4,750.748" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1357.86,751.259 L1361.34,751.759 L1359.59,761.107 L1356.11,760.608 L1357.86,751.259" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.7,757.943 L1349.16,759.542 L1348.6,762.65 L1338.1,761.096 L1338.7,757.943" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1349.14,759.519 L1359.57,761.096 L1359.02,764.227 L1348.54,762.695 L1349.14,759.519" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1338.1,761.096 L1337.5,764.16 L1347.96,765.781 L1348.54,762.628 L1338.1,761.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1348.56,762.673 L1359.02,764.205 L1358.44,767.314 L1347.94,765.804 L1348.56,762.673" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1337.52,764.16 L1336.94,767.291 L1347.4,768.868 L1347.96,765.781 L1337.52,764.16" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.91,765.781 L1347.38,768.846 L1357.86,770.422 L1358.46,767.336 L1347.91,765.781" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.9,767.314 L1336.37,770.422 L1346.78,771.96 L1347.38,768.868 L1336.9,767.314" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.38,768.868 L1346.79,771.955 L1357.24,773.509 L1357.84,770.4 L1347.38,768.868" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1336.37,770.422 L1335.77,773.531 L1346.25,775.063 L1346.79,771.966 L1336.37,770.422" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.79,771.966 L1346.22,775.086 L1356.66,776.618 L1357.27,773.476 L1346.79,771.966" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.22,775.075 L1345.63,778.139 L1356.1,779.727 L1356.66,776.64 L1346.22,775.075" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1346.21,775.075 L1345.63,778.172 L1335.18,776.607 L1335.76,773.531 L1346.21,775.075" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1335.2,776.618 L1334.62,779.749 L1345.05,781.259 L1345.65,778.183 L1335.2,776.618" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.62,778.194 L1345.04,781.292 L1355.51,782.847 L1356.09,779.704 L1345.62,778.194" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1355.49,782.858 L1354.91,785.944 L1344.48,784.39 L1345.05,781.292 L1355.49,782.858" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1345.07,781.27 L1344.47,784.39 L1334.17,782.858 L1334.06,782.547 L1334.6,779.76 L1345.07,781.27" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.47,784.39 L1343.7,788.442 L1335.55,787.21 L1334.16,782.835 L1344.47,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1343.71,788.409 L1342.72,793.705 L1337.38,792.883 L1335.55,787.199 L1343.71,788.409" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1344.46,784.39 L1349.72,785.178 L1347.95,794.504 L1342.72,793.705 L1344.46,784.39" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1347.96,794.504 L1353.18,795.254 L1354.91,785.95 L1349.72,785.17 L1347.96,794.504" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.69,703.161 L1388.08,704.716 L1387.5,707.802 L1377.08,706.259 L1377.69,703.161" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.07,706.248 L1376.47,709.312 L1386.93,710.889 L1387.48,707.869 L1377.07,706.248" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.48,709.324 L1375.89,712.432 L1386.36,713.987 L1386.93,710.889 L1376.48,709.324" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.92,712.421 L1375.35,715.563 L1385.78,717.107 L1386.37,713.976 L1375.92,712.421" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.34,715.552 L1374.74,718.65 L1385.19,720.204 L1385.77,717.084 L1375.34,715.552" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1374.75,718.65 L1374.15,721.759 L1384.61,723.313 L1385.17,720.227 L1374.75,718.65" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.11,704.699 L1391.59,705.21 L1389.84,714.528 L1386.35,714.009 L1388.11,704.699" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.35,713.99 L1389.84,714.522 L1388.09,723.843 L1384.59,723.321 L1386.35,713.99" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.58,705.207 L1395.08,705.729 L1393.33,715.055 L1389.82,714.534 L1391.58,705.207" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.82,714.522 L1393.33,715.055 L1391.58,724.393 L1388.09,723.838 L1389.82,714.522" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1391.58,724.36 L1395.05,724.893 L1396.81,715.555 L1393.33,715.044 L1391.58,724.36" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.33,715.033 L1396.8,715.566 L1398.55,706.24 L1395.08,705.74 L1393.33,715.033" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.55,706.24 L1402.05,706.762 L1405.49,713.201 L1397.47,711.997 L1398.55,706.24" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.48,711.991 L1405.48,713.19 L1407.18,717.109 L1396.81,715.561 L1397.48,711.991" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.81,715.561 L1407.18,717.115 L1408.36,720.496 L1396.21,718.664 L1396.81,715.561" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.23,718.653 L1408.35,720.496 L1409.35,723.827 L1395.65,721.784 L1396.23,718.653" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.63,721.784 L1409.35,723.838 L1410.16,727.124 L1395.05,724.893 L1395.63,721.784" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.97,727.985 L1383.43,729.539 L1382.85,732.659 L1372.4,731.082 L1372.97,727.985" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.42,731.071 L1371.82,734.191 L1382.26,735.757 L1382.83,732.648 L1372.42,731.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.8,734.213 L1371.24,737.278 L1381.68,738.847 L1382.26,735.757 L1371.8,734.213" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1371.24,737.289 L1370.66,740.398 L1381.1,741.952 L1381.69,738.847 L1371.24,737.289" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.66,740.387 L1370.05,743.506 L1380.55,745.05 L1381.11,741.941 L1370.66,740.387" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.05,743.506 L1369.48,746.615 L1379.94,748.17 L1380.54,745.039 L1370.05,743.506" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1379.95,748.147 L1383.43,748.703 L1385.17,739.365 L1381.68,738.852 L1379.95,748.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.365 L1386.93,730.05 L1383.44,729.531 L1381.69,738.846 L1385.18,739.365" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.92,730.071 L1390.38,730.581 L1388.65,739.908 L1385.21,739.397 L1386.92,730.071" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.18,739.369 L1388.65,739.902 L1386.91,749.217 L1383.43,748.693 L1385.18,739.369" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1386.91,749.22 L1390.39,749.732 L1392.14,740.413 L1388.65,739.891 L1386.91,749.22" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1388.66,739.894 L1392.14,740.414 L1393.89,731.091 L1390.4,730.58 L1388.66,739.894" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1393.89,731.096 L1397.37,731.618 L1395.63,740.933 L1392.14,740.416 L1393.89,731.096" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1392.14,740.416 L1395.63,740.935 L1393.88,750.252 L1390.39,749.732 L1392.14,740.416" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.36,731.617 L1400.87,732.134 L1399.1,741.46 L1395.63,740.927 L1397.36,731.617" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.62,740.927 L1399.11,741.46 L1397.36,750.786 L1393.87,750.262 L1395.62,740.927" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.37,750.778 L1410.53,752.743 L1411.02,749.621 L1397.95,747.672 L1397.37,750.778" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1397.95,747.664 L1411.02,749.621 L1411.39,746.481 L1398.52,744.566 L1397.95,747.664" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1398.54,744.566 L1399.1,741.443 L1411.58,743.317 L1411.38,746.49 L1398.54,744.566" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.58,743.325 L1411.64,740.128 L1399.68,738.337 L1399.1,741.46 L1411.58,743.325" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1399.7,738.346 L1400.29,735.24 L1411.53,736.93 L1411.63,740.119 L1399.7,738.346" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.52,736.972 L1411.26,733.699 L1400.86,732.142 L1400.28,735.256 L1411.52,736.972" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1368.32,752.827 L1378.76,754.375 L1378.18,757.515 L1367.74,755.924 L1368.32,752.827" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.73,755.949 L1367.15,759.047 L1377.6,760.596 L1378.19,757.515 L1367.73,755.949" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.61,760.604 L1377.01,763.718 L1366.56,762.145 L1367.15,759.03 L1377.61,760.604" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1366.57,762.153 L1365.97,765.242 L1376.44,766.816 L1377.01,763.71 L1366.57,762.153" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1376.43,766.824 L1375.87,769.922 L1365.39,768.34 L1365.97,765.251 L1376.43,766.824" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1365.39,768.348 L1364.83,771.463 L1375.26,773.028 L1375.85,769.914 L1365.39,768.348" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1375.27,773.028 L1378.74,773.544 L1380.5,764.21 L1377,763.702 L1375.27,773.028" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.51,764.235 L1382.24,754.9 L1378.77,754.375 L1377.01,763.727 L1380.51,764.235" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1380.5,764.243 L1383.98,764.751 L1385.73,755.425 L1382.23,754.892 L1380.5,764.243" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1385.73,755.425 L1389.23,755.958 L1387.47,765.267 L1384,764.743 L1385.73,755.425" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.97,764.743 L1380.49,764.226 L1378.75,773.561 L1382.25,774.061 L1383.97,764.743" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.28,774.052 L1385.73,774.585 L1387.49,765.267 L1383.98,764.734 L1382.28,774.052" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1387.49,765.259 L1390.96,765.792 L1389.21,775.102 L1385.74,774.569 L1387.49,765.259" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.21,775.093 L1400.77,776.825 L1402.58,773.902 L1389.79,772.004 L1389.21,775.093" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1389.79,772.004 L1390.38,768.89 L1404.18,770.963 L1402.56,773.911 L1389.79,772.004" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1404.18,770.971 L1405.65,767.982 L1390.95,765.792 L1390.36,768.89 L1404.18,770.971" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1394.44,766.3 L1395.02,763.202 L1406.93,764.967 L1405.65,767.99 L1394.44,766.3" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1406.92,764.967 L1408.07,761.953 L1395.58,760.096 L1395.02,763.21 L1406.92,764.967" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1395.59,760.088 L1396.19,756.99 L1409.03,758.914 L1408.06,761.961 L1395.59,760.088" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1396.18,756.982 L1392.71,756.465 L1390.94,765.792 L1394.43,766.308 L1396.18,756.982" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1390.94,765.784 L1387.48,765.259 L1389.23,755.941 L1392.71,756.474 L1390.94,765.784" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.65,777.666 L1374.1,779.24 L1373.51,782.338 L1363.06,780.772 L1363.65,777.666" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1363.07,780.772 L1362.49,783.895 L1372.93,785.444 L1373.51,782.346 L1363.07,780.772" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.93,785.444 L1372.35,788.558 L1361.88,786.984 L1361.88,786.984 L1362.48,783.895 L1372.93,785.444" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1361.89,787.009 L1360.17,796.277 L1365.39,797.077 L1367.11,787.775 L1361.89,787.009" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1367.09,787.767 L1372.34,788.55 L1370.59,797.876 L1365.38,797.094 L1367.09,787.767" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1370.59,797.843 L1375.83,798.644 L1377.57,789.333 L1372.32,788.533 L1370.59,797.843" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1372.37,788.567 L1375.84,789.066 L1377.58,779.756 L1374.09,779.224 L1372.37,788.567" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.58,779.756 L1381.07,780.273 L1379.32,789.591 L1375.84,789.074 L1377.58,779.756" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1377.66,789.358 L1388.63,790.981 L1378.36,799.017 L1375.83,798.642 L1377.66,789.358" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1381.07,780.269 L1384.55,780.793 L1382.81,790.115 L1379.32,789.591 L1381.07,780.269" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1382.79,790.099 L1388.63,790.973 L1389.57,790.257 L1393.28,786.243 L1383.79,784.836 L1382.79,790.099" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1383.8,784.836 L1393.29,786.235 L1396.64,782.588 L1384.55,780.797 L1383.8,784.836" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.93,709.276 L1432.02,711.258 L1431.44,714.339 L1420.39,712.69 L1418.93,709.276" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1420.39,712.706 L1431.44,714.322 L1430.84,717.486 L1421.63,716.054 L1420.39,712.706" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.61,716.054 L1430.84,717.486 L1430.27,720.551 L1422.71,719.432 L1421.61,716.054" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.71,719.435 L1433.75,721.084 L1433.17,724.198 L1423.59,722.766 L1422.71,719.435" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1423.61,722.767 L1424.33,726.064 L1432.57,727.28 L1433.16,724.207 L1423.61,722.767" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.58,727.272 L1432,730.386 L1424.9,729.328 L1424.33,726.056 L1432.58,727.272" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1432.01,711.225 L1435.49,711.762 L1433.74,721.085 L1430.28,720.577 L1432.01,711.225" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.74,721.072 L1437.22,721.601 L1438.97,712.279 L1435.49,711.762 L1433.74,721.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1433.75,721.072 L1437.22,721.597 L1435.48,730.915 L1431.99,730.407 L1433.75,721.072" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1438.97,712.279 L1442.45,712.803 L1440.71,722.113 L1437.21,721.613 L1438.97,712.279" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1437.21,721.605 L1440.71,722.113 L1438.96,731.439 L1435.48,730.915 L1437.21,721.605" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.46,712.799 L1452.91,714.365 L1452.33,717.465 L1441.88,715.905 L1442.46,712.799" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.88,715.905 L1441.29,719.012 L1451.74,720.572 L1452.33,717.466 L1441.88,715.905" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.29,719.013 L1451.75,720.572 L1451.16,723.681 L1440.71,722.12 L1441.29,719.013" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.71,722.12 L1451.16,723.681 L1450.58,726.791 L1440.13,725.217 L1440.71,722.12" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.12,725.211 L1450.58,726.79 L1450,729.891 L1439.54,728.33 L1440.12,725.211" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1439.54,728.332 L1450,729.888 L1449.41,732.992 L1438.95,731.437 L1439.54,728.332" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1459.88,715.411 L1463.36,715.936 L1461.62,725.254 L1458.14,724.717 L1459.88,715.411" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1461.61,725.242 L1465.11,725.741 L1466.85,716.448 L1463.36,715.911 L1461.61,725.242" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.86,716.461 L1470.33,716.973 L1468.58,726.278 L1465.12,725.766 L1466.86,716.461" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.59,726.278 L1472.08,726.778 L1473.81,717.485 L1470.29,716.973 L1468.59,726.278" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.8,717.472 L1477.3,718.01 L1475.55,727.328 L1472.05,726.803 L1473.8,717.472" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.55,727.328 L1479.05,727.827 L1480.77,718.534 L1477.31,717.997 L1475.55,727.328" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1479.04,727.815 L1478.46,730.937 L1467.99,729.376 L1468.58,726.303 L1479.04,727.815" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1468.58,726.278 L1468.01,729.364 L1457.54,727.815 L1458.13,724.717 L1468.58,726.278" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1457.55,727.815 L1468.02,729.376 L1467.39,732.511 L1456.97,730.912 L1457.55,727.815" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.98,729.364 L1467.39,732.536 L1477.86,734.035 L1478.42,730.95 L1467.98,729.364" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.87,734.035 L1477.3,737.145 L1466.85,735.609 L1467.38,732.524 L1477.87,734.035" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1467.38,732.511 L1466.82,735.634 L1456.37,734.023 L1456.98,730.9 L1467.38,732.511" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.38,734.048 L1455.78,737.145 L1466.26,738.707 L1466.83,735.609 L1456.38,734.048" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.83,735.609 L1477.29,737.158 L1476.71,740.268 L1466.25,738.719 L1466.83,735.609" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.26,738.694 L1465.68,741.792 L1476.13,743.353 L1476.68,740.255 L1466.26,738.694" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1466.26,738.707 L1465.66,741.804 L1455.2,740.243 L1455.78,737.158 L1466.26,738.707" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1455.2,740.23 L1454.62,743.353 L1465.1,744.902 L1465.66,741.804 L1455.2,740.23" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.66,741.804 L1465.08,744.902 L1475.53,746.476 L1476.11,743.353 L1465.66,741.804" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.52,746.476 L1474.93,749.611 L1464.51,748.025 L1465.07,744.902 L1475.52,746.476" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1464.49,748.025 L1463.93,751.135 L1474.37,752.671 L1474.95,749.623 L1464.49,748.025" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.91,751.135 L1453.47,749.561 L1454.03,746.463 L1464.51,748.025 L1463.91,751.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1454.63,743.366 L1465.07,744.914 L1464.51,748.037 L1454.03,746.476 L1454.63,743.366" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1453.47,749.555 L1451.71,758.885 L1455.2,759.41 L1456.95,750.092 L1453.47,749.555" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1456.94,750.086 L1460.43,750.61 L1458.69,759.916 L1455.2,759.41 L1456.94,750.086" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1458.69,759.922 L1462.16,760.447 L1463.93,751.141 L1460.43,750.61 L1458.69,759.922" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1463.93,751.129 L1467.4,751.659 L1465.64,760.971 L1462.15,760.453 L1463.93,751.129" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1465.65,760.971 L1469.14,761.483 L1470.88,752.153 L1467.39,751.647 L1465.65,760.971" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.88,752.147 L1474.36,752.677 L1472.62,762.014 L1469.14,761.483 L1470.88,752.147" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.6,735.827 L1437.78,737.651 L1437.2,740.761 L1425.75,739.025 L1425.6,735.827" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.77,739.038 L1437.21,740.761 L1436.61,743.859 L1425.77,742.235 L1425.77,739.038" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.78,742.223 L1425.64,745.408 L1436.03,746.969 L1436.6,743.859 L1425.78,742.223" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.63,745.395 L1425.37,748.555 L1435.46,750.054 L1436.02,746.957 L1425.63,745.395" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1425.37,748.555 L1424.97,751.691 L1434.88,753.165 L1435.46,750.067 L1425.37,748.555" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.97,751.691 L1424.47,754.826 L1434.29,756.262 L1434.86,753.165 L1424.97,751.691" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1434.29,756.262 L1444.75,757.861 L1445.34,754.763 L1434.87,753.177 L1434.29,756.262" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.33,754.751 L1445.9,751.641 L1435.46,750.067 L1434.86,753.177 L1445.33,754.751" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1445.9,751.628 L1446.5,748.531 L1436.01,746.932 L1435.45,750.067 L1445.9,751.628" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1446.5,748.506 L1447.08,745.433 L1436.61,743.871 L1436.05,746.944 L1446.5,748.506" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.08,745.408 L1447.66,742.323 L1437.18,740.736 L1436.6,743.871 L1447.08,745.408" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1447.66,742.31 L1448.24,739.212 L1437.77,737.664 L1437.2,740.761 L1447.66,742.31" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.99,760.996 L1433.12,762.483 L1432.54,765.63 L1422.12,764.044 L1422.99,760.996" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1422.12,764.044 L1421.03,767.079 L1431.96,768.69 L1432.55,765.618 L1422.12,764.044" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1421.04,767.079 L1419.87,770.102 L1431.35,771.801 L1431.95,768.703 L1421.04,767.079" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.87,770.089 L1418.56,773.1 L1427.33,774.424 L1427.86,771.314 L1419.87,770.089" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1418.56,773.112 L1417.06,776.072 L1426.7,777.509 L1427.28,774.424 L1418.56,773.112" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.1,776.085 L1415.51,779.02 L1426.13,780.607 L1426.7,777.521 L1417.1,776.085" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.13,780.594 L1429.61,781.131 L1431.37,771.813 L1427.88,771.314 L1426.13,780.594" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1429.64,781.131 L1440.08,782.693 L1440.66,779.595 L1430.2,778.034 L1429.64,781.131" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1440.67,779.582 L1441.23,776.485 L1430.79,774.923 L1430.21,778.034 L1440.67,779.582" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.82,773.387 L1441.23,776.497 L1430.79,774.923 L1431.34,771.826 L1441.82,773.387" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1441.83,773.387 L1442.4,770.277 L1431.92,768.678 L1431.34,771.813 L1441.83,773.387" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.42,770.252 L1443,767.167 L1432.52,765.593 L1431.94,768.69 L1442.42,770.252" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.99,767.142 L1443.58,764.044 L1433.12,762.508 L1432.56,765.605 L1442.99,767.142" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1411.86,784.866 L1414.51,785.253 L1412.78,794.584 L1405.11,793.46 L1411.86,784.866" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1405.11,793.472 L1400.15,798.293 L1409.99,799.767 L1411.01,794.346 L1405.11,793.472" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1400.15,798.281 L1396.63,801.753 L1409.25,803.614 L1410,799.755 L1400.15,798.281" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1409.25,803.602 L1414.5,804.414 L1416.26,795.096 L1411,794.334 L1409.25,803.602" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1417.98,785.79 L1421.47,786.302 L1419.72,795.645 L1416.25,795.121 L1417.98,785.79" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1412.76,794.571 L1416.26,795.083 L1417.98,785.79 L1414.5,785.266 L1412.76,794.571" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1416.26,795.121 L1421.46,795.87 L1419.72,805.213 L1414.51,804.439 L1416.26,795.121" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.72,805.176 L1424.95,805.963 L1426.69,796.67 L1421.44,795.883 L1419.72,805.176" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1419.7,795.595 L1423.19,796.145 L1424.95,786.839 L1421.47,786.302 L1419.7,795.595" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1424.95,786.814 L1428.46,787.339 L1426.68,796.657 L1423.21,796.12 L1424.95,786.814" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1428.45,787.352 L1438.89,788.888 L1438.33,792.011 L1427.88,790.449 L1428.45,787.352" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.85,790.437 L1438.31,792.011 L1437.72,795.146 L1427.29,793.559 L1427.85,790.437" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1427.28,793.547 L1437.72,795.146 L1437.16,798.243 L1426.68,796.682 L1427.28,793.547" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1426.68,796.682 L1431.92,797.457 L1430.18,806.762 L1424.97,805.988 L1426.68,796.682" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1430.16,806.737 L1435.41,807.549 L1437.17,798.256 L1431.91,797.457 L1430.16,806.737" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1442.37,808.573 L1463.29,811.712 L1471.45,768.219 L1450.54,765.107 L1442.37,808.573" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.76,719.579 L1498.21,721.115 L1497.61,724.275 L1487.19,722.676 L1487.76,719.579" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.18,722.689 L1486.61,725.774 L1497.05,727.335 L1497.61,724.275 L1487.18,722.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.61,725.774 L1485.99,728.884 L1496.45,730.408 L1497.02,727.348 L1486.61,725.774" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1486.01,728.909 L1485.43,731.982 L1495.85,733.543 L1496.44,730.421 L1486.01,728.909" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.4,731.994 L1484.83,735.067 L1495.29,736.653 L1495.85,733.543 L1485.4,731.994" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1484.83,735.073 L1484.25,738.184 L1494.71,739.757 L1495.29,736.635 L1484.83,735.073" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1494.7,739.77 L1508.64,741.831 L1509.34,738.121 L1495.43,736.035 L1494.7,739.77" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1495.39,736.01 L1509.33,738.109 L1510.04,734.386 L1496.07,732.313 L1495.39,736.01" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.06,732.313 L1496.79,728.578 L1510.73,730.652 L1510.04,734.386 L1496.06,732.313" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.5,724.856 L1511.43,726.917 L1510.73,730.664 L1496.81,728.591 L1497.5,724.856" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.5,724.856 L1498.21,721.121 L1512.14,723.22 L1511.43,726.892 L1497.5,724.856" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.1,744.404 L1493.51,745.978 L1492.96,749.125 L1482.52,747.552 L1483.1,744.404" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.5,747.577 L1481.92,750.674 L1492.39,752.223 L1492.94,749.125 L1482.5,747.577" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.92,750.674 L1481.35,753.747 L1491.79,755.246 L1492.37,752.223 L1481.92,750.674" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1481.35,753.697 L1480.75,756.87 L1491.17,758.393 L1491.79,755.246 L1481.35,753.697" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.75,756.87 L1480.17,759.93 L1490.6,761.504 L1491.22,758.393 L1480.75,756.87" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.17,759.93 L1479.6,763.04 L1490.05,764.601 L1490.6,761.504 L1480.17,759.93" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.07,764.589 L1503.96,766.687 L1504.66,762.965 L1490.73,760.879 L1490.07,764.589" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.72,760.892 L1504.67,762.965 L1505.37,759.23 L1491.4,757.157 L1490.72,760.892" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1505.37,759.218 L1506.09,755.508 L1492.13,753.447 L1491.42,757.144 L1505.37,759.218" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.08,755.483 L1506.78,751.786 L1492.83,749.7 L1492.12,753.46 L1506.08,755.483" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1506.78,751.786 L1507.48,748.039 L1493.53,745.978 L1492.83,749.7 L1506.78,751.786" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1478.4,769.273 L1488.88,770.822 L1488.27,773.932 L1477.81,772.383 L1478.4,769.273" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.83,772.383 L1477.21,775.481 L1487.69,777.03 L1488.26,773.932 L1477.83,772.383" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1477.24,775.493 L1476.68,778.591 L1487.11,780.14 L1487.72,777.042 L1477.24,775.493" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.68,778.566 L1476.1,781.676 L1486.53,783.262 L1487.11,780.115 L1476.68,778.566" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1476.09,781.689 L1475.5,784.786 L1485.96,786.335 L1486.54,783.275 L1476.09,781.689" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1475.5,784.774 L1474.89,787.896 L1485.4,789.458 L1485.93,786.36 L1475.5,784.774" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1485.4,789.445 L1488.86,789.97 L1490.63,780.639 L1487.11,780.14 L1485.4,789.445" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1487.12,780.102 L1490.6,780.652 L1492.35,771.321 L1488.89,770.822 L1487.12,780.102" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1492.35,771.359 L1502.79,772.895 L1501.93,777.554 L1491.48,776.012 L1492.35,771.359" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1491.47,776.018 L1501.93,777.554 L1501.05,782.226 L1490.62,780.658 L1491.47,776.018" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1490.62,780.671 L1501.05,782.226 L1500.17,786.885 L1489.74,785.33 L1490.62,780.671" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1489.74,785.323 L1500.18,786.878 L1499.31,791.55 L1488.86,789.976 L1489.74,785.323" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.79,794.117 L1484.21,795.691 L1483.6,798.788 L1473.15,797.227 L1473.79,794.117" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1473.19,797.227 L1472.57,800.35 L1483.02,801.874 L1483.6,798.801 L1473.19,797.227" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1483.03,801.886 L1482.45,804.971 L1471.99,803.447 L1472.57,800.337 L1483.03,801.886" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1472.01,803.447 L1471.41,806.52 L1481.86,808.106 L1482.45,804.971 L1472.01,803.447" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1471.41,806.52 L1470.82,809.63 L1481.3,811.192 L1481.87,808.119 L1471.41,806.52" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1470.82,809.618 L1470.24,812.753 L1480.7,814.302 L1481.26,811.179 L1470.82,809.618" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1480.71,814.302 L1494.64,816.388 L1495.34,812.665 L1481.4,810.567 L1480.71,814.302" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.1,806.845 L1481.42,810.592 L1495.33,812.665 L1496.01,808.918 L1482.1,806.845" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1496.02,808.906 L1496.74,805.196 L1482.8,803.135 L1482.1,806.845 L1496.02,808.906" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1482.78,803.135 L1483.46,799.413 L1497.42,801.474 L1496.72,805.171 L1482.78,803.135" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1497.44,801.486 L1498.15,797.752 L1484.2,795.691 L1483.5,799.4 L1497.44,801.486" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1817.07,1576.81 L1869.93,1556.02 L1869.73,1555.46 L1869.63,1554.83 L1869.55,1553.93 L1869.52,1553.51 L1869.52,1553.06 L1869.55,1552.25 L1869.62,1551.7 L1869.66,1551.43 L1869.7,1551.13 L1831.91,1529.77 L1800,1542.45 L1817.07,1576.81" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1549.44,620.033 L1516.77,794.003 L1677.05,817.985 L1709.52,644.314 L1549.44,620.033" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1720.31,645.713 L1768.68,653.108 L1736.15,826.978 L1687.49,819.684 L1720.31,645.713" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1735,833.124 L1686.29,825.829 L1682.79,844.465 L1731.56,851.76 L1735,833.124" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1672.3,842.866 L1675.85,824.28 L1626.98,816.936 L1623.64,835.622 L1672.3,842.866" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1616.59,834.523 L1620.09,816.036 L1515.57,800.298 L1512.12,819.034 L1616.59,834.523" vector-effect="none" fill-rule="evenodd"/>
   <path d="M1642.44,1347.03 L1642.84,1346.63 L1643.64,1345.88 L1644.08,1345.43 L1644.98,1344.8 L1645.73,1344.38 L1646.76,1343.88 L1647.77,1343.49 L1648.62,1343.26 L1650.12,1342.98 L1651.29,1342.87 L1652.8,1342.91 L1654.21,1343.15 L1655.85,1343.59 L1657.27,1344.2 L1658.26,1344.8 L1659.53,1345.69 L1660.45,1346.62 L1661.7,1348.26 L1662.34,1349.56 L1662.83,1351.29 L1663.01,1353.23 L1662.86,1354.28 L1662.68,1355.23 L1662.26,1356.46 L1661.64,1357.73 L1660.89,1358.79 L1660.46,1359.31 L1659.75,1359.99 L1658.92,1360.71 L1658.04,1361.31 L1657.1,1361.82 L1656.13,1362.24 L1655.01,1362.61 L1653.93,1362.86 L1652.45,1363.03 L1651.53,1363.06 L1650.59,1363.01 L1649.51,1362.87 L1648.43,1362.65 L1647.27,1362.31 L1646.03,1361.72 L1644.99,1361.13 L1643.69,1360.14 L1643.04,1359.49 L1642.27,1358.67 L1641.62,1357.65 L1641.13,1356.67 L1640.85,1355.97 L1640.57,1355.03 L1640.4,1354.07 L1640.32,1353.05 L1640.36,1352.08 L1640.53,1351.05 L1640.75,1350.18 L1641.13,1349.22 L1642.44,1347.03" vector-effect="none" fill-rule="evenodd"/>
   <path d="M436.355,1364.97 L630.344,1362.84 L638.871,1527.7 L437.776,1529.12 L436.355,1364.97" vector-effect="none" fill-rule="evenodd"/>
  </g>
  <g font-style="normal" stroke-linecap="square" transform="matrix(0.999751,0,0,0.999751,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(1,0,0,1,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(11.8081,0,0,11.8081,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
  <g font-style="normal" stroke-linecap="square" transform="matrix(1,0,0,1,0,0)" font-size="32.5" stroke-opacity="1" fill="none" stroke="#000000" stroke-linejoin="bevel" font-family="MS Shell Dlg 2" font-weight="400" stroke-width="1"/>
 </g>
</svg>

             
           
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>


                </div>
                <DialogComponent ref={dialogRef} title="Título del Diálogo">
                {info ? <>{info}</>:<></>}
              </DialogComponent>
        </>


    )
}

export default Arg;