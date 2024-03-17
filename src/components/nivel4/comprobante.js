import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../Assets/marcas.png.png";
import Firma from "../../Assets/firma.jpeg";
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
    
  },
  pieDePagina: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'left',
    width: '90%',
  },
  pieDePaginaSello: {
    position: 'absolute',
    bottom: 50,
    right: 15,
    left: 420,
    textAlign: 'right',
  },
  pieDePaginaSellodesc: {
    position: 'absolute',
    bottom: 20,
    right: 50,
    left: 380,
    textAlign: 'right',
  }
});


const ComprobantePDF = ({ data }) => {
  let params = useParams()
    let id = params.id
  const [clients, setClients] = useState();
    const [loading, setLoading] = useState(true);
    const [tot, setTot] = useState();



  useEffect(() => {
    getClients()
}, [])

const getClients = async () => {

  const clients = await servicioPagos.traerpago(id)

  setClients(clients[0])
  setTot(clients[1])
  setLoading(false);
}






  return (
    <>
    {clients && tot ? <>
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
              <Text style={styles.columnHeader}>ID de pago</Text>
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
                <Text style={styles.cell}>{clients[0].nro_cuota}/{tot}</Text>
                <Text style={styles.cell}>Pago de cuota</Text>
             
                <Text style={styles.cell}>${clients[0].monto}</Text>
               
                
                <Text style={styles.cell}>${clients[0].monto}</Text>
                <Text style={styles.lastCell}>Ninguna</Text>
              </View>
       
          </View>
          <View style={styles.pieDePagina}>
                  <Text>Fideicomiso Santa Catalina</Text>
                  <Text>Dirección: 25 de Mayo 1476</Text>
                  <Text>Teléfono: 3795171604 </Text>
                  {/* Agrega aquí los datos que desees mostrar */}
                </View>
           
          <View style={styles.pieDePaginaSello}>
            <Image src={Firma}  style={styles.selloImage} />
    
          </View>
          
          <View style={styles.pieDePaginaSellodesc}>
            
            <Text>Santiago Merino </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
       </>:<></>}
    
    </>
  );
};

export default ComprobantePDF;
