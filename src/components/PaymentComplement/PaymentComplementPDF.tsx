import { Document, Image, Page, Text, View, pdf, Font } from '@react-pdf/renderer';
import cala from '../../assets/cala.png';
import qr from '../../assets/qr.jpeg';

import RobotoMedium from "../../assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoBold from "../../assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoRegular from "../../assets/fonts/Roboto/Roboto-Regular.ttf";


export const ComplementPaymentPDF = () => {

    let pages: number;

    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');

    Font.register({
        family: 'Roboto',
        fonts: [
            {
                src: RobotoRegular,
                fontWeight: 400,
            },
            {
                src: RobotoMedium,
                fontWeight: 500,
            },
            {
                src: RobotoBold,
                fontWeight: 700,
            }
        ]
    })

    Font.registerHyphenationCallback(word => {
        if (word.length > 120) {
            const parts = [];
            let currentIndex = 0;
    
            while (currentIndex < word.length) {
                const remainingLength = word.length - currentIndex;
                const nextPartLength = Math.min(remainingLength, 120); // máximo de 40 caracteres por parte
                const nextPart = word.substr(currentIndex, nextPartLength);
                parts.push(nextPart);
                currentIndex += nextPartLength;
            }
    
            return parts;
        } else {
            return [word];
        }
    });
    


    const generateComplementPaymentPDF = async () => {

        // if (!data.dataInvoiceGeneral.customer_language || data.dataInvoiceGeneral.customer_language === " " || data.dataInvoiceGeneral.customer_language === "es") {
        //     data.dataInvoiceGeneral.customer_language = "es";
        // }

        // const showTranslatedText = (key: string) => {

        //     return t(key, { lng: data.dataInvoiceGeneral.customer_language })
        // }

        const content = (<Document >
            <Page size={'A4'} style={{ paddingVertical: 10, flexDirection: 'column', gap: 10, fontFamily: 'Roboto' }} >

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <View style={{
                    width: '95%',
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
                        <Text style={{ fontSize: 8, marginBottom: 5, fontWeight: 700 }}>Empresa de Ejemplo SA de CV</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Av Victoriano Huerta 2106</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Col Jalisco</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>San Luis Rio Colorado , Sonora C.P. 83449 Mexico</Text>
                        <Text style={{ fontSize: 7, marginBottom: 5, fontWeight: 700 }}>RFC: AAA01001AAA</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Lugar de expedición:</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>C.P:83449 a Viernes 9 de Junio del 2017</Text>
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
                            borderColor: 'black',
                        }} >
                            <Text style={{ fontSize: 12, fontWeight: 700 }}>RECIBO DE PAGOS</Text>
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
                                <Text style={{ fontSize: 8, fontWeight: 500,  }} >Pago</Text>
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
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Serie y Folio:</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7, fontWeight: 500 }}>CP2</Text>
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
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Fecha y Hora</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7, fontWeight: 500 }}>Viernes 9 de Junio del 2017</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Primera seccion */}
                <View style={{ width: '95%', alignSelf: 'center', height: 80, borderWidth: 1 }}>
                    <View style={{ width: '100%', height: '80%', flexDirection: 'row' }}>
                        <View style={{ width: '15%', textAlign: 'center', justifyContent: 'space-around' }} >
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Cliente</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Direccion</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Ciudad</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>C.P:</Text>
                        </View>
                        <View style={{ width: '35%', justifyContent: 'space-around', borderRightWidth: 1 }} >
                            <Text style={{ fontSize: 7 }}>Factura UNO DOS TRES, S DE RL V</Text>
                            <Text style={{ fontSize: 7 }}>AV. GPE. VICTORIA Y CALLE 17 1609 </Text>
                            <Text style={{ fontSize: 7 }}>SAN LUIS RIO COLORADO, SONORA MEX</Text>
                            <Text style={{ fontSize: 7 }}>83448</Text>
                        </View>
                        <View style={{ width: '25%', justifyContent: 'flex-end', alignItems: 'center', gap: 5, paddingBottom: 5 }} >
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Col. Residencia</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>RFC: AAA01001AAA</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '25%', borderLeftWidth: 1 }}>
                            <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>No. Certificado:</Text>
                            </View>
                            <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 7 }}>1234567898765432345</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: '20%', borderTopWidth: 1, borderColor: 'black' }}>
                        <View style={{ width: '15%', height: '100%', borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 6, fontWeight: 700 }}>Régimen Fiscal</Text>
                        </View>
                        <View>
                            <Text></Text>
                        </View>
                    </View>
                </View>

                {/* Segunda Seccion */}
                <View style={{ width: '95%', alignSelf: 'center', height: 70, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ width: '55%', height: '100%', flexDirection: 'column', borderRightWidth: 1, }}>
                        <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Datos del Receptor (Cliente)</Text>
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
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Datos del Emisor</Text>
                        </View>
                        <View style={{ height: '75%', justifyContent: 'center', gap: 3, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7 }}>RFC Banco Receptor: BMN12321312</Text>
                            <Text style={{ fontSize: 7 }}>Cuenta Banco Receptor: 123454321</Text>
                        </View>
                    </View>
                </View>

                {/* Tercera Seccion */}
                <View style={{ width: '95%', alignSelf: 'center', height: 40, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Codigo</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>12345678</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '8%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Cantidad</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>1</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '47%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Descripcion</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>Pago</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Unidad de Medida</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>ACT</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '10%', borderRightWidth: 1 }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Precio Unitario</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$0.0000</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '15%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Importo</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$0.0000</Text>
                        </View>
                    </View>
                </View>

                {/* Cuarta Seccion */}
                <View style={{ width: '95%', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 8, fontWeight: 700 }}>CFDI Relacionados</Text>
                </View>

                <View style={{ width: '95%', alignSelf: 'center', height: 28, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', flexDirection: 'column', width: '30%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>UUID</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>12345678123456781234567812345678</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '8%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Folio</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>A14</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Metodo</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>PUE</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '23%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Total</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$ 8.294.00 MXN</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Saldo Anterior</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}></Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%', borderRightWidth: 1 }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Saldo Pendiente</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$ 0,00</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', width: '12%' }}>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Monto Pagado</Text>
                        </View>
                        <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>$ 8.294.00 MXN</Text>
                        </View>
                    </View>
                </View>

                {/* Quinta Seccion */}
                <View style={{ width: '95%', alignSelf: 'center', height: 42, borderWidth: 1, flexDirection: 'row' }}>
                    <View style={{ width: '15%', flexDirection: 'column', }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Fecha y Hora de pago</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderRightWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7 }}>09/06/2017 15:31:10</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: '33%', borderRightWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>Cantidad con letra</Text>
                        </View>
                    </View>
                    <View style={{ width: '60%', flexDirection: 'column', }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Forma de pago</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderRightWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7 }}>03</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: '33%', borderRightWidth: 1 }}>
                            <Text style={{ fontSize: 7 }}>OCHOL MIL DOSCIENTOS NOVENTA Y CUATRO PESOS 00/100 MXN</Text>
                        </View>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'column', }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Total del pago</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '33%' }}>
                            <Text style={{ fontSize: 7 }}>$ 8,264.00</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: '33%' }}>

                        </View>
                    </View>
                </View>


                {/* Sexta Seccion */}
                <View style={{ width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '83%', borderWidth: 1, height: 175 }}>
                        <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                            <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 7, fontWeight: 700, }}>Cadena Original:</Text>
                            </View>
                            <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 6, padding: 2 }}>||1.1|0489a51b-cfab-451b-9737-d6eee0e67e84|2024-05-15T16:11:40|SPR190613I52|gjUHqRPcsZMmudi1x0KGPeL4N9/HI3pEu0fmHLR5jPdMhqtwiW3iFQTOqNaet4O/1cL+aYAUSXs1XfgkI1BM3WL0SoMQCzOyJK71WDgDRDSwIJ13WWZpqmeZ8oLYJs1ZSWt6vvYsAtV3q7t5WNznLVq3SrdISeH0fsbOVnsLoHHJd6HiciWNwsMlmlZVMc8U2M869XoeutP4K0YZ9riGZ4xc6KVbh+gV3b/YMI26UQLSZJZMtwxquoxNy1A7peNbt6DGjAFMkeoDA0NrtYpz4ZXvP4qt6bzBDg6/RrgLOxAXSa64Poa01pXrQgs23PGmmnhZ1T8pqGXD+iR19d/e3A==|30001000000500003456||</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                            <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>Sello:</Text>
                            </View>
                            <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 6, padding: 2 }}>gFQlIvljDWzrmmO0gmMbFBWkXen8vcQVV1+r1tigNPcfwC2odMQsUFC0gYFwGAZ1fO3GxHSSJIJKuSXcLqfXZr4LsCvn/ucQqKT36Os+UK0RevVB1lgbUEDxVcmrWsYb0mOzonCLgqLvaXQSxUNHqTGE5oBUItDHd3xlxCnusY0GYQ9mjSNvaQG/HZSU94I/FdTDdUn9k2tqzPYmzILGYufwgNxAPDNNvn94X+SrU9IIGpM95euuwWqpNIJg1RIMYxYsoteQS9nGyEb9geLyMdMS6fFnFhC4u9GIHMptmKxlhHGAHuqFGvXLObfCRLb0BS2Gk2urYcFUPtMiLJPSkA==</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                            <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>Sello SAT:</Text>
                            </View>
                            <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 6, padding: 2 }}>gjUHqRPcsZMmudi1x0KGPeL4N9/HI3pEu0fmHLR5jPdMhqtwiW3iFQTOqNaet4O/1cL+aYAUSXs1XfgkI1BM3WL0SoMQCzOyJK71WDgDRDSwIJ13WWZpqmeZ8oLYJs1ZSWt6vvYsAtV3q7t5WNznLVq3SrdISeH0fsbOVnsLoHHJd6HiciWNwsMlmlZVMc8U2M869XoeutP4K0YZ9riGZ4xc6KVbh+gV3b/YMI26UQLSZJZMtwxquoxNy1A7peNbt6DGjAFMkeoDA0NrtYpz4ZXvP4qt6bzBDg6/RrgLOxAXSa64Poa01pXrQgs23PGmmnhZ1T8pqGXD+iR19d/e3A==</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', flexDirection: 'row', borderBottomWidth: 1 }} >
                            <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 7, paddingHorizontal: 5, fontWeight: 700 }}>Fecha Timbre</Text>
                            </View>
                            <View style={{ height: '100%', width: '25%', borderRightWidth: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>15/5/2024 16:11:40 GMT-0600</Text>
                            </View>
                            <View style={{ height: '100%', width: '20%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>Certificado SAT:</Text>
                            </View>
                            <View style={{ height: '100%', width: '45%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>30001000000500003456</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', flexDirection: 'row', }} >
                            <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 7, paddingHorizontal: 5, fontWeight: 700 }}>Version Timbre</Text>
                            </View>
                            <View style={{ height: '100%', width: '25%', borderRightWidth: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>1.1</Text>
                            </View>
                            <View style={{ height: '100%', width: '20%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>UUID:</Text>
                            </View>
                            <View style={{ height: '100%', width: '45%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>0489a51b-cfab-451b-9737-d6eee0e67e84</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{ width: 100, height: 100 }} src={qr} ></Image>
                    </View>
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