import { Document, Image, Page, Text, View, pdf, } from '@react-pdf/renderer';
import cala from '../../assets/cala.png';
import { paymentComplementPDFStyles } from './PaymentComplementStyles';

export const ComplementPaymentPDF = () => {


    const { firstSection,
        generalStyles } = paymentComplementPDFStyles();

    let pages: number;

    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');

    const generateComplementPaymentPDF = async () => {


        // if (!data.dataInvoiceGeneral.customer_language || data.dataInvoiceGeneral.customer_language === " " || data.dataInvoiceGeneral.customer_language === "es") {
        //     data.dataInvoiceGeneral.customer_language = "es";
        // }

        // const showTranslatedText = (key: string) => {

        //     return t(key, { lng: data.dataInvoiceGeneral.customer_language })
        // }

        const content = (<Document >
            <Page size={'A4'} style={generalStyles.page}>

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <View style={firstSection.container}>
                    <Image src={cala} style={firstSection.image}></Image>
                    <View style={firstSection.companyData} >
                        <Text style={{ fontSize: 8, marginBottom: 5 }}>Empresa de Ejemplo SA de CV</Text>
                        <Text style={firstSection.companyDataText}>Av Victoriano Huerta 2106</Text>
                        <Text style={firstSection.companyDataText}>Col Jalisco</Text>
                        <Text style={firstSection.companyDataText}>San Luis Rio Colorado , Sonora C.P. 83449 Mexico</Text>
                        <Text style={{ fontSize: 6, marginBottom: 5 }}>RFC: AAA01001AAA</Text>
                        <Text style={firstSection.companyDataText}>Lugar de expedición:</Text>
                        <Text style={firstSection.companyDataText}>C.P:83449 a Viernes 9 de Junio del 2017</Text>
                    </View>
                    <View style={firstSection.paymentData}>
                        <View style={firstSection.paymentDataTitleContainer} >
                            <Text style={firstSection.paymentDataTitle}>RECIBO DE PAGOS</Text>
                        </View>
                        <View style={firstSection.paymentDataSubContainer}>
                            <View style={firstSection.paymentDataSubTitleContainer}>
                                <Text style={firstSection.paymentDataSubTitle} >Pago</Text>
                            </View>
                            <View style={firstSection.paymentDataSubSubContainer}>
                                <View style={firstSection.seriesAndFolioContainer} >
                                    <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: 7, }}>Serie y Folio:</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>CP2</Text>
                                    </View>
                                </View>
                                <View style={firstSection.DateAndTime}>
                                    <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>Fecha y Hora</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>Viernes 9 de Junio del 2017</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{width:'90%', alignSelf:'center',height:90, borderWidth:1}}>
                    <View style={{width:'100%',height:'80%',}}>
                        <View>
                            <Text>Cliente</Text>
                            <Text>Direccion</Text>
                            <Text>Ciudad</Text>
                            <Text>C.P:</Text>
                        </View>
                        <View>
                            <Text>Factura UNO DOS TRES, S DE RL V</Text>
                            <Text>AV. GPE. VICTORIA Y CALLE 17 1609 </Text>
                            <Text>SAN LUIS RIO COLORADO, SONORA MEX</Text>
                            <Text>83448</Text>
                        </View>
                        <View>
                            <Text>Col. Residencia</Text>
                            <Text>RFC: AAA01001AAA</Text>
                        </View>
                        <View>
                            <View>
                                <Text>No. Certificado:</Text>
                            </View>
                            <View>
                                <Text>1234567898765432345</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Régimen Fiscal</Text>
                        </View>
                        <View>
                            <Text></Text>
                        </View>
                    </View>
                </View>



                <View>

                </View>
                <View>

                </View>
                <View>

                </View>
                <View>

                </View>
                <View>

                </View>


                {/* 
                <Text render={({ pageNumber, totalPages }) => {

                    return <Text >{`Page ${pageNumber} / ${totalPages}`}</Text>;
                }} fixed />

                <Text fixed>{currentTime} {currentDate}</Text>  */}
            </Page>
        </Document >
        );

        const downloadLink = document.createElement('a');
        const fileName = `doc.pdf`;
        const blob = await pdf(content).toBlob()
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = fileName;
        downloadLink.click();
        URL.revokeObjectURL(url);

        // const reader = new FileReader();
        // await reader.readAsDataURL(blob);



        // return new Promise((resolve, reject) => {
        //     reader.onloadend = () => {
        //         const base64String = reader.result;
        //         resolve(base64String);
        //     };

        // });
    }

    return {
        generateComplementPaymentPDF
    };
};