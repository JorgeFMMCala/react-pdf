import { useEffect, useState } from "react";
import GenericPromises from "./api/GenericPromises";
import {  SalesInvoicePDF } from "./components/SalesInvoice/SalesInvoicePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Spinner } from "./components/Spinner/Spinner";
import {ComplementPaymentPDF } from "./components/PaymentComplement/PaymentComplementPDF";

function App() {
  const [pdfData, setPdfData] = useState(null);
  const { GenericGetResource } = GenericPromises();
  const [dataLoaded, setDataLoaded] = useState(false);
  const {generateComplementPaymentPDF}=ComplementPaymentPDF();


  // useEffect(() => {
  //   GenericGetResource(`/salesinvoices/pdf/16`)
  //     .then((response) => {
  //       setPdfData(response.data);
  //       console.log(response.data);
  //       setDataLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener datos:", error);
  //     });
  // }, [])



  return (
    <>
      {/* {!dataLoaded &&
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Spinner />
        </div>
      }
      {dataLoaded &&
        <>
          <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh" }}
          >
            <div className="row">
              <div className="col text-center">
                <PDFDownloadLink document={<PDFSalesInvoice data={pdfData} />} fileName="Documentopdf.pdf">
                  {({ loading }) =>
                    loading ? <Spinner /> : <button>Descargar PDF</button>
                  }
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </>
      } */}

      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary" onClick={generateComplementPaymentPDF}>Generar Complemento de Pago</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
