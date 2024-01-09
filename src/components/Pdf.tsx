import { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';

interface PDFProps {
  pdfFile: string;
}


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PDF({ pdfFile }: PDFProps) {
  useEffect(() => {
    console.log(pdfFile);
  })
  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} renderTextLayer={false} />
      </Document>
    </div>
  );
}