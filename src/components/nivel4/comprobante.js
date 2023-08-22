import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../Assets/marcas.png.png";
import servicioPagos from '../../services/pagos'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottom: 1,
    borderColor: '#000000',
    marginBottom: 20,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  logo: {
    width: '30%',
    paddingRight: 10,
  },
  logoImage: {
    width: '100%',
  },
  fecha: {
    width: '50%',
    textAlign: 'center',
  },
  detalle: {
    width: '30%',
    textAlign: 'right',
    fontSize: 12,
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
    alignItems: 'center',
    height: 40,
  },
  columnHeader: {
    width: '11.11%',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRight: 1,
    borderColor: '#000000',
    fontSize: 9, // Ajustar el tamaño de letra
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: 1,
    borderColor: '#000000',
    alignItems: 'center',
    height: 40,
  },
  cell: {
    width: '11.11%',
    textAlign: 'center',
    borderRight: 1,
    borderColor: '#000000',
    fontSize: 9, // Ajustar el tamaño de letra
  },
  lastCell: {
    width: '11.11%',
    textAlign: 'center',
    fontSize: 9, // Ajustar el tamaño de letra
  },
  sello: {
    textAlign: 'center',
  },
  selloImage: {
    width: '50%',
    marginTop: 20,
  },
  pieDePagina: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'left',
  },
});

const ComprobantePDF = ({ data }) => {
  let params = useParams()
    let id = params.id
  const [clients, setClients] = useState();
    const [loading, setLoading] = useState(true);



  useEffect(() => {
    getClients()
}, [])

const getClients = async () => {

  const clients = await servicioPagos.traerpago(id)
console.log(clients)
  setClients(clients)
  setLoading(false);
}






  return (
    <>
    {clients ? <>
    <PDFViewer width="100%" height="1000px">
      <Document>
        <Page size="A4">
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image src={logo} style={styles.logoImage} />
            </View>
            <View style={styles.fecha}>
             {/*  <Text>Fecha:{clients[0].fecha} </Text> */}
            </View>
            <View style={styles.detalle}>
              
              <Text  style={{ textAlign: 'left' }}>Nro comprobante:{clients[0].id}</Text>
            
              <Text style={{ textAlign: 'left' }}>Nombre:{clients[0].nombrecli}</Text>
              <Text style={{ textAlign: 'left' }}>Total a pagar: ${clients[0].monto}</Text>
              <Text style={{ textAlign: 'left' }}>DNI: {clients[0].cuil_cuit}</Text>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.columnHeader}>ID</Text>
              <Text style={styles.columnHeader}>Corresponde</Text>
              <Text style={styles.columnHeader}>Fecha de pago</Text>
              <Text style={styles.columnHeader}>Nro de cuota</Text>
              <Text style={styles.columnHeader}>Descripción</Text>
             
              <Text style={styles.columnHeader}>Precio unitario</Text>
           
              <Text style={styles.columnHeader}>Total</Text>
              <Text style={styles.lastCell}>Observaciones</Text>
            </View>

        
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{clients[0].id}</Text>
                <Text style={styles.cell}>{clients[0].mes}/{clients[0].anio}</Text>
    
                <Text style={styles.cell}>{clients[0].fecha}</Text>
                <Text style={styles.cell}>{clients[0].nro_cuota}</Text>
                <Text style={styles.cell}>Pago de cuota</Text>
             
                <Text style={styles.cell}>${clients[0].monto}</Text>
               
                
                <Text style={styles.cell}>${clients[0].monto}</Text>
                <Text style={styles.lastCell}>{clients[0].observaciones}</Text>
              </View>
       
          </View>
          <View style={styles.pieDePagina}>
                  <Text>Fideicomiso Santa Catalina</Text>
                  <Text>Dirección a</Text>
                  <Text>Teléfono </Text>
                  {/* Agrega aquí los datos que desees mostrar */}
                </View>
          <View style={styles.sello}>
            <Image src="ruta_del_sello.png" style={styles.selloImage} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
       </>:<></>}
    
    </>
  );
};

export default ComprobantePDF;
