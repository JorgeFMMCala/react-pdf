import { useEffect, useState } from "react";
import GenericPromises from "../../api/GenericPromises";
import { Spinner } from "../Spinner/Spinner";
import { SalesInvoicePDF } from "./salesInvoicePDF/SalesInvoicePDF";

export const AppSalesInvoices = () => {
    const [pdfData, setPdfData] = useState(null);
    const { GenericGetResource } = GenericPromises();
    const [dataLoaded, setDataLoaded] = useState(false);
    const {generatePDF} = SalesInvoicePDF();

    useEffect(() => {
        GenericGetResource(`/salesinvoices/pdf/2`)
            .then((response) => {
                setPdfData(response);
                console.log(response.data);
                setDataLoaded(true);
            })
            .catch((error) => {
                console.error("Error al obtener datos:", error);
            });
    }, [])



    return (
        <>
            {!dataLoaded &&
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
                                <button className="btn btn-primary" onClick={()=>generatePDF(pdfData)}>Generar Factura</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

