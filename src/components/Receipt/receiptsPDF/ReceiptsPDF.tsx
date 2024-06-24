import { Document, Page, Text, Font, pdf, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import { Header } from './components/header/Header';
import { CustomerData } from './components/customerData/CustomerData';
import { PaymentData } from './components/paymentData/PaymentData';
import { FirstSection } from './components/fistSection/FirstSection';
import { Footer } from './components/footer/Footer';
import { generalStyles } from './styles/generalStyles';
import { GenerateGenerateRelatedCFDIsRows } from './components/secondSection/GenerateGenerateRelatedCFDIsRows';
import { SecondSection } from './components/secondSection/SecondSection';

export const ReceiptsPDF = () => {

    const { general, pageNumberAndTotalPages, pdfGenerationDate } = generalStyles();

    const [t, i18next] = useTranslation("global");

    let pages: number;

    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');

    const generatePDF = async ({ data }: any) => {
        
        if (!data.dataReceiptHeader.customer_language || data.dataReceiptHeader.customer_language === " " || data.dataReceiptHeader.customer_language === "ES") {
            data.dataReceiptHeader.customer_language = "es";
        }

        const showTranslatedText = (key: string) => {

            return t(key, { lng: data.dataReceiptHeader.customer_language })
        }


        // const desiredLength = 30;
        // const repeatedData = [];

        // while (repeatedData.length < desiredLength) {
        //     repeatedData.push(...data?.dataRelatedReceiptsDetails);
        // }

        // const finalData = repeatedData.slice(0, desiredLength);

        const { renderRows } = GenerateGenerateRelatedCFDIsRows(data?.dataRelatedReceiptsDetails);

        const {rows,rowsRemainder}= renderRows();

        const content = (<Document >
            <Page size={'A4'} style={general.pageStyles} >

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <Header  data={data} showTranslatedText={showTranslatedText} />

                <CustomerData  data={data} showTranslatedText={showTranslatedText} />

                <PaymentData  data={data} showTranslatedText={showTranslatedText} />

                <FirstSection showTranslatedText={showTranslatedText} />

                <SecondSection showTranslatedText={showTranslatedText} />

                {rows}

                {rowsRemainder}

                <View fixed style={{ flexGrow: 1 }}></View>

                <Footer  data={data} showTranslatedText={showTranslatedText} />

                <Text style={pageNumberAndTotalPages.text} render={({ pageNumber, totalPages }) => {
                    return <Text >{`Page ${pageNumber} / ${totalPages}`}</Text>;
                }} fixed />

                <Text style={pdfGenerationDate.text} fixed >{currentTime} {currentDate}</Text>
            </Page>
        </Document >
        );

        const downloadLink = document.createElement('a');
        const fileName = `${data.dataReceiptHeader?.receipt_name || " "}`;
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
