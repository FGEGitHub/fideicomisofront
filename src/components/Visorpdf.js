

import serviciousuario1 from '../services/usuario1'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handleViewPDF = async () => {

    const link = await serviciousuario1.obtenerurl(pdfUrl)
    console.log('_blank')
    console.log(link.data)
    window.open('https://mypdfstorage.s3.sa-east-1.amazonaws.com/-legajo-Fri%2C%2018%20Nov%202022%2014%3A23%3A04%20GMT.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVMDPHXOO7ETOD76L%2F20230328%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230328T131332Z&X-Amz-Expires=60&X-Amz-Signature=3637fe4aed47a72b0724113d40bc6ac350893e1ada2da6280b2902ff384c79bf&X-Amz-SignedHeaders=host', '_blank');
  };

  return (
    <div>
      <h1>Mi imagen PDF</h1>
      <button onClick={handleViewPDF}>Ver PDF</button>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Página {pageNumber} de {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;