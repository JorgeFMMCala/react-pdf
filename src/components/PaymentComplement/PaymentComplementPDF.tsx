import { Document, Image, Page, Text, View, pdf, } from '@react-pdf/renderer';
import cala from '../../assets/cala.png';

export const ComplementPaymentPDF = () => {




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
            <Page size={'A4'} style={{ paddingVertical: 20, flexDirection: 'column', gap: 10 }}>

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <View style={{
                    width: '90%',
                    height: 115,
                    flexDirection: 'row',
                    gap: 10,
                    alignSelf: 'center',
                    justifyContent: 'space-between'
                }} >
                    <Image src={cala} style={{
                        height: '100%',
                        width: '25%'
                    }}></Image>
                    <View style={{
                        height: '100%',
                        width: '30%',
                        flexDirection: 'column',
                        gap: 5,
                        textAlign: 'center',
                        justifyContent: 'center'
                    }} >
                        <Text style={{ fontSize: 8, marginBottom: 5 }}>Empresa de Ejemplo SA de CV</Text>
                        <Text style={{ fontSize: 6 }}>Av Victoriano Huerta 2106</Text>
                        <Text style={{ fontSize: 6 }}>Col Jalisco</Text>
                        <Text style={{ fontSize: 6 }}>San Luis Rio Colorado , Sonora C.P. 83449 Mexico</Text>
                        <Text style={{ fontSize: 6, marginBottom: 5 }}>RFC: AAA01001AAA</Text>
                        <Text style={{ fontSize: 6 }}>Lugar de expedición:</Text>
                        <Text style={{ fontSize: 6 }}>C.P:83449 a Viernes 9 de Junio del 2017</Text>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '35%',
                        flexDirection: 'column',
                        gap: 10,
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '30%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'black'
                        }} >
                            <Text style={{ fontSize: 12, }}>RECIBO DE PAGOS</Text>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            width: '100%',
                            height: '50%',
                            borderWidth: 1,
                            borderColor: 'black'
                        }}>
                            <View style={{
                                height: '33%',
                                borderBottomWidth: 1,
                                borderColor: 'black',
                                paddingVertical: 4,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: 8, }} >Pago</Text>
                            </View>
                            <View style={{
                                width: '100%',
                                height: '66%',
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '30%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRightWidth: 1,
                                    borderColor: 'black',
                                    justifyContent: 'space-around'
                                }} >
                                    <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: 7, }}>Serie y Folio:</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>CP2</Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: '100%',
                                    width: '70%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>
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

                {/* Primera seccion */}
                <View style={{ width: '90%', alignSelf: 'center', height: 80, borderWidth: 1 }}>
                    <View style={{ width: '100%', height: '80%', flexDirection: 'row' }}>
                        <View style={{ width: '15%', textAlign: 'center', justifyContent: 'space-around' }} >
                            <Text style={{ fontSize: 7 }}>Cliente</Text>
                            <Text style={{ fontSize: 7 }}>Direccion</Text>
                            <Text style={{ fontSize: 7 }}>Ciudad</Text>
                            <Text style={{ fontSize: 7 }}>C.P:</Text>
                        </View>
                        <View style={{ width: '35%', justifyContent: 'space-around', borderRightWidth: 1 }} >
                            <Text style={{ fontSize: 7 }}>Factura UNO DOS TRES, S DE RL V</Text>
                            <Text style={{ fontSize: 7 }}>AV. GPE. VICTORIA Y CALLE 17 1609 </Text>
                            <Text style={{ fontSize: 7 }}>SAN LUIS RIO COLORADO, SONORA MEX</Text>
                            <Text style={{ fontSize: 7 }}>83448</Text>
                        </View>
                        <View style={{ width: '25%', justifyContent: 'flex-end', alignItems: 'center', gap: 5, paddingBottom: 5 }} >
                            <Text style={{ fontSize: 7 }}>Col. Residencia</Text>
                            <Text style={{ fontSize: 7 }}>RFC: AAA01001AAA</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '25%', borderLeftWidth: 1 }}>
                            <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 7 }}>No. Certificado:</Text>
                            </View>
                            <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 7 }}>1234567898765432345</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: '20%', borderTopWidth: 1, borderColor: 'black' }}>
                        <View style={{ width: '15%', height: '100%', borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 6 }}>Régimen Fiscal</Text>
                        </View>
                        <View>
                            <Text></Text>
                        </View>
                    </View>
                </View>

                {/* Segunda Seccion */}
                <View style={{ width: '90%', alignSelf: 'center', height: 70, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ width: '55%', height: '100%', flexDirection: 'column', borderRightWidth: 1, }}>
                        <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7 }}>Datos del Receptor (Cliente)</Text>
                        </View>
                        <View style={{ height: '75%', justifyContent: 'center', paddingLeft: 3, gap: 3 }}>
                            <Text style={{ fontSize: 7 }}>Numero de Operacion:12345678901232334</Text>
                            <Text style={{ fontSize: 7 }}>RFC Banco Emisor: BMN12321312</Text>
                            <Text style={{ fontSize: 7 }}>Nombre Banco Emisor: Banorte</Text>
                            <Text style={{ fontSize: 7 }}>Cuenta Banco Emisor: 123454321</Text>
                        </View>
                    </View>
                    <View style={{ width: '45%', height: '100%', flexDirection: 'column', }}>
                        <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7 }}>Datos del Emisor</Text>
                        </View>
                        <View style={{ height: '75%', justifyContent: 'center', gap: 3, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7 }}>RFC Banco Receptor: BMN12321312</Text>
                            <Text style={{ fontSize: 7 }}>Cuenta Banco Receptor: 123454321</Text>
                        </View>
                    </View>
                </View>

                {/* Tercera Seccion */}
                <View style={{ width: '90%', alignSelf: 'center', height: 40, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Codigo</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>12345678</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '8%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Cantidad</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>1</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '47%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Descripcion</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>Pago</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Unidad de Medida</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>ACT</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Precio Unitario</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$0.0000</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '15%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Importo</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$0.0000</Text>
                        </View>
                    </View>
                </View>

                {/* Cuarta Seccion */}
                <Text>CFDI Relacionados</Text>

                <View style={{ width: '90%', alignSelf: 'center', height: 28, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', flexDirection: 'column', width: '30%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>UUID</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>12345678123456781234567812345678</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '8%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Folio</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>A14</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Metodo</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>PUE</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Total</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$ 8.294.00 MXN</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Saldo Anterior</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}></Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%' }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Saldo Pendiente</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}></Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%' }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Codigo</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>12345678</Text>
                        </View>
                    </View>
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