/* import NotFound from '../Paginas/Notfound'; */
import Login from '../Paginas/Login';
import DetalleCliente from '../Paginas/Usuario2/DetalleCliente';

import Clientes from '../Paginas/Usuario2/MenuUsuario2';
import Lotes from '../Paginas/Usuario2/Lotes';
import LegajosCliente from '../Paginas/Usuario2/LegajoCliente';
import EditarCliente from '../Paginas/Usuario2/ModificarCliente';
import PagosCuotas from '../Paginas/Usuario2/PagosCuota';
import AsignarLoteAUsuario from "../Paginas/Usuario2/AsignarLoteAUsuario"
import AprobacionesPagos from "../Paginas/Usuario2/AprobacionesPagos"
import PagosNvel2 from "../Paginas/Usuario2/PagarCuota"
import AgregarLegajo from "../Paginas/Usuario2/AgregarLegajo"
import AprobacionCbu from "../Paginas/Usuario2/AprobacionCbus"
import Extracto from "../Paginas/Usuario2/Extracto"
import AgregarVariascuotasL from "../Paginas/Usuario2/AgregarcuotasvariosL"
import Novedades from "../Paginas/Usuario2/Novedades"
import Chats from "../Paginas/Usuario2/chats"
import Comprobanteief from "../Paginas/Usuario2/comporbanteief"
import Mapaniv2 from '../Paginas/Usuario2/mapas';
import Agregarcuotas from '../Paginas/Usuario2/AgregarCuotas';

import Navbar from "../components/Navbar";
import Usuario1 from "../Paginas/usuario1/menuusuario1";
import Nosotros from "../Paginas/usuario1/nosotros";
import Contacto from "../Paginas/usuario1/contacto";
import Cuotas from "../Paginas/usuario1/Cuotas";
import Aprobaciones from "../Paginas/Aprobaciones"
import Legajos from "../Paginas/usuario1/Legajos"
import IngresosDeclarados from "../Paginas/usuario1/IngresosDeclarados"
import Notificaciones from "../Paginas/usuario1/Notificaciones"
import DeclaracionesJuradas from "../Paginas/usuario1/declaracionesJuradas"
import Asociar1 from "../Paginas/usuario1/debitoaut"
import CBU from "../Paginas/usuario1/SubirCbu"
import AsociarCBU from "../Paginas/usuario1/AsociarCbu"
import Constancias from "../Paginas/usuario1/Constancias"
import DatosEmpresa from '../Paginas/usuario1/DatosEmpresa'
import DatosPer from '../Paginas/usuario1/ModificarDatosPers'


import Transferencias from '../Paginas/usuario1/Transferencias';
import RespuestaNoti from '../Paginas/usuario1/Respuesta';


import PagosInusuales from "../Paginas/Nivel3/PagosInusuales"
import PagosInusualesMensuales from "../Paginas/Nivel3/PagosInusualesMensuales"
import Principal from "../Paginas/Nivel3/Principal"
import Icc from "../Paginas/Nivel3/Icc"
import VerCliente from '../Paginas/Nivel3/verClientes';
import Lotes3 from '../Paginas/Nivel3/lotes';
import Aprobacion from '../Paginas/Nivel3/aprobacionPagos';
import AgregarICC from '../Paginas/Nivel3/AgregarIcc';
import Declaraciones from '../Paginas/Nivel3/Declaraciones';
import Agregarusuario from '../Paginas/Nivel3/AgregarUsuario';
import Pagos3 from '../Paginas/Nivel3/Pagos';
import Clientesniv3 from '../Paginas/Nivel3/Clientes';
import Novedades3 from '../Paginas/Nivel3/Novedades';



import Menu4 from '../Paginas/Nivel4/Menu';
import DetalleExp from '../Paginas/Nivel4/DetalleExp';
import Estadisticas1 from '../Paginas/Nivel4/Relevamiento';
import CargaRelev from '../Paginas/Nivel4/CargaRelev';
import Clientesleg from '../Paginas/Nivel4/clientes';
import Lotesleg from '../Paginas/Nivel4/lotes';
import DetalleClienteleg from '../Paginas/Nivel4/DetalleCliente';
import Legajoslegales from '../Paginas/Nivel4/legajos';
import Asignarlotes2 from '../Paginas/Nivel4/asignarlote';
import Asignarvariasc from '../Paginas/Nivel4/agregarviarias';
import Agregarcuotasleg from '../Paginas/Nivel4/agregarcuotas';
import Perfilleg from '../Paginas/Nivel4/Perfil';
import PagosNvel4 from '../Paginas/Nivel4/pagarcuota';
import Comprobantepag from '../Paginas/Nivel4/comprobante';
import Resumen4 from '../Paginas/Nivel4/resumen';
import Mapalegales from '../Paginas/Nivel4/mapas';


/////////// Administracion
import Usuarios from '../Paginas/Administracion/Menu';
import AdminClientes from '../Paginas/Administracion/Clientes';
import ModificarCli from '../Paginas/Administracion/ModificarCliente';
import EstractoAdmin from '../Paginas/Administracion/Extracto';
import PagosAdmin from '../Paginas/Administracion/Pagos';
import LotesAdmin from '../Paginas/Administracion/Lotes';
import Detalleclienteadmin from '../Paginas/Administracion/Detallecliente';

//////////esme


import Home from '../Paginas/Home/Home'
import HomeCalculo from '../Paginas/Home/Calculo'
import Mapaarg from '../Paginas/maparg'


import Mapasusuario from '../Paginas/usuariomapas/inicio'

import NOtFound from '../Paginas/not found'


const Rutas = [
	 <Navbar/> ,
	 

	 {path: '/home',element: (<Home />)},
	 {path: '/home/calcular',element: (<HomeCalculo />)},
	 {path: '/home/maparg',element: (<Mapaarg />)},

	 

	 {path: '/',element: (<Login />)},
	{path: '/login',element: (<Login />)},

	


	{path: '/',element: (<Login />)},
	{path: '/login',element: (<Login />)},


	{ path: '/usuario/menu', element: < Usuario1 /> },
	{ path: '/usuario/Legajos', element: < Legajos /> },
	{ path: '/usuario/transferencias', element: < Transferencias /> },
	{ path: '/usuario/ingresosdeclarados', element: < IngresosDeclarados /> },
	{ path: '/usuario/cuotas', element: < Cuotas /> },
	{ path: '/usuario/notificaciones', element: < Notificaciones /> },
	{ path: '/usuario/declaracionesjuradas', element: < DeclaracionesJuradas /> },
	{ path: '/usuario/nosotros', element: < Nosotros /> },
	{ path: '/usuario/contacto', element: < Contacto /> },
	{ path: '/usuario/respuesta/:id', element: < RespuestaNoti /> },
	{ path: '/usuario/datosPers', element: < DatosPer /> },
	{ path: '/usuario/asociar', element: < Asociar1 /> },
	
	{ path: '/usuario/cbu-declarado', element: < CBU /> },
	{ path: '/usuario/asociarcbu', element: < AsociarCBU /> },
	{ path: '/usuario/constancias', element: < Constancias /> },
	{ path: '/usuario/datosadicionales', element: < DatosEmpresa /> },


	
	
/* 	{ : '/usuario2/clientess', render={()=>{ return user?  <Clientes /> : <Clientes />}}  }, */


	{ path: '/usuario2/clientes', element: <Clientes /> },
	{ path: '/usuario2/lotes', element: <Lotes /> },
	{ path: '/usuario2/detallecliente/:cuil_cuit', element: <DetalleCliente /> },
	{ path: '/usuario2/agregarcuotas/:id', element: <Agregarcuotas /> },
	{ path: '/usuario2/asignarloteausuario/:cuil_cuit', element: <AsignarLoteAUsuario /> },
	{ path: '/usuario2/aprobaciones', element: <Aprobaciones /> },
	{ path: '/usuario2/aprobacionesdepagos', element: <AprobacionesPagos /> },
	{ path: '/usuario2/aprobacioncbu', element: <AprobacionCbu /> },
	{ path: '/usuario2/legajoscliente/:cuil_cuit', element: <LegajosCliente /> },
	{ path: '/usuario2/modificarcliente/:cuil_cuit', element: <EditarCliente /> },
	{ path: '/usuario2/agregarlegajo/:cuil_cut', element: <AgregarLegajo /> },
	{ path: '/usuario2/pagarcuota/:id', element: <PagosNvel2 /> },
	{ path: '/usuario2/pagoscuotas/:id', element: <PagosCuotas /> },
	{ path: '/usuario2/extracto', element: <Extracto /> },
	{ path: '/usuario2/agregarviarias/:cuil_cuit', element: <AgregarVariascuotasL /> },
	{ path: '/usuario2/novedades', element: <Novedades /> },
	{ path: '/usuario2/consultas', element: <Chats /> },
	{ path: '/usuario2/comprobanteief/:id', element: <Comprobanteief /> },
	{ path: '/usuario2/mapas', element: <Mapaniv2 /> },
	

	{ path: '/nivel3/pagosinusuales', element: <PagosInusuales /> },
	{ path: '/nivel3/clientes', element: <Clientesniv3 /> },
	{ path: '/nivel3/pagosmensualesinusuales', element: <PagosInusualesMensuales /> },
	{ path: '/nivel3/', element: <Principal /> },
	{ path: '/nivel3/icc', element: <Icc /> },
	{ path: '/nivel3/agregaricc', element: <AgregarICC /> },
	{ path: '/nivel3/clientes', element: <VerCliente /> },
	{ path: '/nivel3/lotes', element: <Lotes3 /> },
	{ path: '/nivel3/aprobacionesdepagos', element: <Aprobacion /> },
	{ path: '/nivel3/declaraciones', element: <Declaraciones /> },
	{ path: '/nivel3/agregarusuario', element: <Agregarusuario /> },
	{ path: '/nivel3/pagos', element: <Pagos3 /> },
	{ path: '/nivel3/novedades', element: <Novedades3 /> },


	{ path: '/legales/menu', element: <Menu4 /> },
	{ path: '/legales/detalleexp/:id', element: <DetalleExp /> },
	{ path: '/legales/estadisticas1', element: <Estadisticas1 /> },
	{ path: '/legales/cargarelev', element: <CargaRelev /> },
	{ path: '/legales/clientes', element: <Clientesleg /> },
	{ path: '/legales/lotes', element: <Lotesleg /> },
	{ path: '/legales/detallecliente/:cuil_cuit', element: <DetalleClienteleg /> },
	{ path: '/legales/legajoscliente/:cuil_cuit', element: <Legajoslegales /> },
	{ path: '/legales/asignarloteausuario/:cuil_cuit', element: <Asignarlotes2 /> },
	{ path: '/legales/agregarviarias/:cuil_cuit', element: <Asignarvariasc /> },
	{ path: '/legales/agregarcuotas/:id', element: <Agregarcuotasleg /> },
	{ path: '/legales/perfil', element: <Perfilleg/> },
	{ path: '/legales/pagarcuota/:id', element: <PagosNvel4 /> },
	{ path: '/legales/comprobante/:id', element: <Comprobantepag /> },
	{ path: '/legales/resumen', element: <Resumen4 /> },
	{ path: '/legales/mapas', element: <Mapalegales /> },


	{ path: '/admin/usuarios', element: <Usuarios /> },
	{ path: '/admin/clientes', element: <AdminClientes /> },
	{ path: '/admin/modificarcli/:cuil_cuit', element: <ModificarCli /> },
	{ path: '/admin/extracto', element: <EstractoAdmin /> },
	{ path: '/admin/pagos', element: <PagosAdmin /> },
	{ path: '/admin/lotes', element: <LotesAdmin /> },
	{ path: '/admin/detallescliente/:cuil_cuit', element: <Detalleclienteadmin /> },


	{ path: '/usuariomapas/inicio', element: <Mapasusuario /> },
	

	
	{ path: '*', element: <NOtFound /> },

];

export default Rutas;