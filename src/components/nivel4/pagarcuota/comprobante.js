import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../../Assets/marcas.png.png";
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

const FacturaDePagoPDF = ({ data }) => {
  return (
    <PDFViewer width="100%" height="500px">
      <Document>
        <Page size="A4" style={ 'width= 50%'}>
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image src={logo} style={styles.logoImage} />
            </View>
            <View style={styles.fecha}>
              <Text>Fecha: </Text>
            </View>
            <View style={styles.detalle}>
              <Text>Número de factura: </Text>
              <Text>Total a pagar: $</Text>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.columnHeader}>ID</Text>
              <Text style={styles.columnHeader}>Descripción</Text>
              <Text style={styles.columnHeader}>Cantidad</Text>
              <Text style={styles.columnHeader}>Precio unitario</Text>
              <Text style={styles.columnHeader}>Descuento</Text>
              <Text style={styles.columnHeader}>Subtotal</Text>
              <Text style={styles.columnHeader}>Impuesto</Text>
              <Text style={styles.columnHeader}>Total</Text>
              <Text style={styles.lastCell}>Observaciones</Text>
            </View>

          {/*   {data.detalle.map((rowData, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{rowData.id}</Text>
                <Text style={styles.cell}>{rowData.descripcion}</Text>
                <Text style={styles.cell}>{rowData.cantidad}</Text>
                <Text style={styles.cell}>${rowData.precioUnitario}</Text>
                <Text style={styles.cell}>${rowData.descuento}</Text>
                <Text style={styles.cell}>${rowData.subtotal}</Text>
                <Text style={styles.cell}>${rowData.impuesto}</Text>
                <Text style={styles.cell}>${rowData.total}</Text>
                <Text style={styles.lastCell}>{rowData.observaciones}</Text>
              </View>
            ))} */}
          </View>

          <View style={styles.sello}>
            <Image src="ruta_del_sello.png" style={styles.selloImage} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default FacturaDePagoPDF;
