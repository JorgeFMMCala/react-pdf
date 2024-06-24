
import { Document, Page, Text, View, pdf, } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { Header } from './components/header/Header';
import { CustomerData } from './components/customerData/CustomerData';
import { ShippingData } from './components/shippingData/ShippingData';
import { PaymentData } from './components/paymentData/PaymentData';
import { ProductsData } from './components/productsData/ProductsData';
import { TransportationDocument } from './components/transportationDocument/TransportationDocument';
import { RelatedCfdis } from './components/relatedCfdis/RelatedCfdis';
import { BlankFooter } from './components/blankFooter/BlankFooter';
import { generalStyles } from './styles/generalStyles';
import { FooterInLastPage } from './components/footerInLastPage/FooterInLastPage';

export const SalesInvoicePDF = () => {

    const { general, pageNumberAndTotalPages, pdfGenerationDate } = generalStyles();

    const [t, i18next] = useTranslation("global");

    let pages: number;
    let rowsNumber: number = 18;

    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');

    const generatePDF = async ({ data }: any) => {

        if (!data.dataInvoiceGeneral.customer_language || data.dataInvoiceGeneral.customer_language === " " || data.dataInvoiceGeneral.customer_language === "ES") {
            data.dataInvoiceGeneral.customer_language = "es";
        }

        const showTranslatedText = (key: string) => {

            return t(key, { lng: data.dataInvoiceGeneral.customer_language })
        }

        const content = (<Document >
            <Page size={'A4'} style={general.pageStyles}>

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <Header data={data} showTranslatedText={showTranslatedText} />

                <CustomerData data={data} showTranslatedText={showTranslatedText} />

                <ShippingData data={data} showTranslatedText={showTranslatedText} />

                <PaymentData data={data} showTranslatedText={showTranslatedText} />

                <ProductsData data={data} showTranslatedText={showTranslatedText} rowsNumber={rowsNumber} />

                {data.dataInvoiceGeneral.includes_transportation_document &&
                    (
                        <>
                            <TransportationDocument data={data} showTranslatedText={showTranslatedText} />
                            <View break />
                        </>
                    )
                }

                {data.dataRelatedSalesInvoices &&
                    <RelatedCfdis data={data} showTranslatedText={showTranslatedText} />}

                <View fixed style={{ flexGrow: 1 }}></View>

                <View
                    render={({ pageNumber }: { pageNumber: number }) =>
                        pageNumber < pages ?
                            <BlankFooter data={data} showTranslatedText={showTranslatedText} />
                            : <FooterInLastPage data={data} showTranslatedText={showTranslatedText} />
                    }
                    fixed
                />

                <Text style={pageNumberAndTotalPages.text} render={({ pageNumber, totalPages }) => {
                    return <Text >{`Page ${pageNumber} / ${totalPages}`}</Text>;
                }} fixed />

                <Text style={pdfGenerationDate.text} fixed >{currentTime} {currentDate}</Text>
            </Page>
        </Document >
        );

        const downloadLink = document.createElement('a');
        const fileName = `${data.dataInvoiceGeneral?.sales_invoice_name || " "}`;
        const blob = await pdf(content).toBlob()
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = fileName;
        downloadLink.click();
        URL.revokeObjectURL(url);

        const reader = new FileReader();
        await reader.readAsDataURL(blob);

        return new Promise((resolve, reject) => {
            reader.onloadend = () => {
                const base64String = reader.result;
                resolve(base64String);
            };
        });
    }

    return {
        generatePDF
    };
};
