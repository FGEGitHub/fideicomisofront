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
  },
  logo: {
    width: '33%',
    paddingRight: 10,
  },
  logoImage: {
    width: '100%',
  },
  fecha: {
    width: '33%',
    textAlign: 'center',
  },
  detalle: {
    width: '33%',
    textAlign: 'right',
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

  const comprobanteData = {
    nombre: 'Juan Pérez',
    direccion: 'Calle 123, Ciudad ABC',
    fecha: '23-07',
    // Agrega aquí los datos necesarios para tu comprobante
  };





  return (
    <>
    {clients ? <>
    <PDFViewer width="100%" height="500px">
      <Document>
        <Page size="A4" style={ 'width= 50%'}>
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image src={logo} style={styles.logoImage} />
            </View>
            <View style={styles.fecha}>
              <Text>Fecha:{clients[0].fecha} </Text>
            </View>
            <View style={styles.detalle}>
              <Text>Número de factura:{clients[0].id}</Text>
              <Text>Total a pagar: ${clients[0].monto}</Text>
              <Text>DNI: {clients[0].cuil_cuit}</Text>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.columnHeader}>ID</Text>
              <Text style={styles.columnHeader}>Corresponde</Text>
              <Text style={styles.columnHeader}>Fech de pago</Text>
              <Text style={styles.columnHeader}>Descripción</Text>
             
              <Text style={styles.columnHeader}>Precio unitario</Text>
              <Text style={styles.columnHeader}>Descuento</Text>
              <Text style={styles.columnHeader}>Subtotal</Text>
              
              <Text style={styles.columnHeader}>Total</Text>
              <Text style={styles.lastCell}>Observaciones</Text>
            </View>

        
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{clients[0].id}</Text>
                <Text style={styles.cell}>{clients[0].mes}/{clients[0].anio}</Text>
                <Text style={styles.cell}>{clients[0].fecha}</Text>
                <Text style={styles.cell}>Pago de cuota</Text>
             
                <Text style={styles.cell}>${clients[0].monto}</Text>
                <Text style={styles.cell}>${clients[0].descuento}</Text>
                <Text style={styles.cell}>${clients[0].subtotal}</Text>
                
                <Text style={styles.cell}>${clients[0].monto}</Text>
                <Text style={styles.lastCell}>{clients[0].observaciones}</Text>
              </View>
       
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
