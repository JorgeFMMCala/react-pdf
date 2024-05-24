import { Document, Image, Page, Text, View, pdf, Font } from '@react-pdf/renderer';
import cala from '../../assets/cala.png';
import qr from '../../assets/qr.jpeg';

import RobotoMedium from "../../assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoBold from "../../assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoRegular from "../../assets/fonts/Roboto/Roboto-Regular.ttf";


export const PaymentComplementPDF = () => {

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
        if (word.length > 110) {
            const parts = [];
            let currentIndex = 0;

            while (currentIndex < word.length) {
                const remainingLength = word.length - currentIndex;
                const nextPartLength = Math.min(remainingLength, 110); // máximo de 40 caracteres por parte
                const nextPart = word.substr(currentIndex, nextPartLength);
                parts.push(nextPart);
                currentIndex += nextPartLength;
            }

            return parts;
        } else {
            return [word];
        }
    });



    const generatePaymentComplementPDF = async ({ data }: any) => {

        console.log(data)

        // if (!data.dataInvoiceGeneral.customer_language || data.dataInvoiceGeneral.customer_language === " " || data.dataInvoiceGeneral.customer_language === "es") {
        //     data.dataInvoiceGeneral.customer_language = "es";
        // }

        // const showTranslatedText = (key: string) => {

        //     return t(key, { lng: data.dataInvoiceGeneral.customer_language })
        // }

        const content = (<Document >
            <Page size={'A4'} style={{ paddingVertical: 10, flexDirection: 'column', gap: 10, fontFamily: 'Roboto', position: 'relative' }} >

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <View fixed style={{
                    width: '90%',
                    minHeight: 115,
                    maxHeight: 115,
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
                        <Text style={{ fontSize: 8, marginBottom: 5, fontWeight: 700 }}>{data.dataIssuingCompany?.primary_account_alias || ' '}</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{data.dataIssuingCompany?.street || " "}</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{data.dataIssuingCompany?.city_name || " "}, {data.dataIssuingCompany?.state_name || " "} {data.dataIssuingCompany?.postal_code || " "}, {data.dataIssuingCompany?.country_name || " "}</Text>
                        <Text style={{ fontSize: 7, marginBottom: 5, fontWeight: 700 }}>RFC: {data.dataIssuingCompany?.rfc || " "}</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Lugar de expedición:</Text>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>C.P: {data.dataIssuingCompany?.postal_code || " "} {data.dataReceiptHeader.receipt_date || " "}</Text>
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
                                <Text style={{ fontSize: 8, fontWeight: 500, }} >Pago</Text>
                            </View>
                            <View style={{
                                width: '100%',
                                height: '66%',
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '50%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRightWidth: 1,
                                    borderColor: 'black',
                                    justifyContent: 'space-around'
                                }} >
                                    <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Número de Pago:</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7, fontWeight: 500 }}></Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: '100%',
                                    width: '50%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>
                                    <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Fecha y Hora</Text>
                                    </View>
                                    <View style={{ height: '50%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 7, fontWeight: 500 }}>{data.dataReceiptHeader?.receipt_date || " "}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Primera seccion */}
                <View fixed style={{ width: '90%', alignSelf: 'center', minHeight: 80, maxHeight: 80, borderWidth: 1 }}>
                    <View style={{ width: '100%', height: '80%', flexDirection: 'row' }}>
                        <View style={{ width: '15%', textAlign: 'center', justifyContent: 'space-around' }} >
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Cliente</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Direccion</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Ciudad - Estado</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>C.P:</Text>
                        </View>
                        <View style={{ width: '35%', justifyContent: 'space-around', borderRightWidth: 1 }} >
                            <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.customer_account_alias || " "}</Text>
                            <Text style={{ fontSize: 7 }}>{data.dataCustomerLocation?.street || " "}</Text>
                            <Text style={{ fontSize: 7 }}>{data.dataCustomerLocation?.city_name || " "} - {data.dataCustomerLocation?.state_name || " "}</Text>
                            <Text style={{ fontSize: 7 }}>{data.dataCustomerLocation?.postal_code || " "}</Text>
                        </View>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', gap: 5, }} >
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Col. Residencia</Text>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>RFC: {data.dataReceiptHeader?.customer_rfc || " "}</Text>
                        </View>
                    </View>
                    <View style={{ height: '20%', borderTopWidth: 1, borderColor: 'black', flexDirection: 'row' }}>
                        <View style={{ width: '15%', height: '100%', borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 6, fontWeight: 700 }}>Régimen Fiscal</Text>
                        </View>
                        <View style={{ width: '85%', height: '100%', justifyContent: 'center', paddingLeft: 5 }}>
                            <Text style={{ fontSize: 6, fontWeight: 700 }}> {data.dataReceiptHeader?.tax_regime_code || " "} {data.dataReceiptHeader?.tax_regime_description || " "}</Text>
                        </View>
                    </View>
                </View>

                {/* Segunda Seccion */}
                <View fixed style={{ width: '90%', alignSelf: 'center', minHeight: 70, maxHeight: 70, borderWidth: 1, flexDirection: 'row', }}>
                    <View style={{ width: '50%', height: '100%', flexDirection: 'column', borderRightWidth: 1, }}>
                        <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Datos del Receptor (Cliente)</Text>
                        </View>
                        <View style={{ height: '75%', justifyContent: 'center', paddingLeft: 3, gap: 3 }}>
                            <Text style={{ fontSize: 7 }}>RFC Banco Emisor: {data.dataReceiptHeader?.customer_rfc || " "}</Text>
                            <Text style={{ fontSize: 7 }}>Nombre Banco Emisor: {data.dataReceiptHeader?.customer_bank_name || " "}</Text>
                            <Text style={{ fontSize: 7 }}>Cuenta Banco Emisor: {data.dataReceiptHeader?.customer_account_number || " "}</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%', height: '100%', flexDirection: 'column', }}>
                        <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>Datos del Emisor</Text>
                        </View>
                        <View style={{ height: '75%', justifyContent: 'center', gap: 3, paddingLeft: 3 }}>
                            <Text style={{ fontSize: 7 }}>RFC Banco Receptor:</Text>
                            <Text style={{ fontSize: 7 }}>Nombre Banco Receptor: {data.dataReceiptHeader?.company_bank_name || " "}</Text>
                            <Text style={{ fontSize: 7 }}>Cuenta Banco Receptor: {data.dataReceiptHeader?.company_account_number || " "}</Text>
                        </View>
                    </View>
                </View>

                {/* Tercera Seccion */}
                {data.dataReceiptsDetails.map((item: any, index: any) => {
                    return (
                        <>
                            <View key={index} style={{ width: '90%', alignSelf: 'center', minHeight: 40, maxHeight: 40, borderWidth: 1, flexDirection: 'row', }}>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Fecha de pago</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.payment_date || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Método de pago</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.payment_method_code || " "} - {item?.payment_method_description || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '20%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Divisa</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.currency_code || " "} - {item?.currency_description || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Impuesto</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.tax_percent || " "}% - {item?.tax_description || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Retención</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.retention_percent || " "}% - {item?.retention_description || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '11.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Subtotal</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.subtotal_amount || " "}</Text>
                                    </View>
                                </View>
                                <View style={{ height: '100%', flexDirection: 'column', width: '11.2%' }}>
                                    <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                        <Text style={{ fontSize: 7, fontWeight: 700 }}>Total</Text>
                                    </View>
                                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 7 }}>{item?.total_amount || " "}</Text>
                                    </View>
                                </View>
                            </View>


                            {/* Cuarta Seccion */}
                            <View fixed style={{ width: '90%', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 8, fontWeight: 700 }}>CFDI Relacionados</Text>
                            </View>
                            <View>
                                <View style={{
                                    width: '90%', alignSelf: 'center', minHeight: 14, maxHeight: 14, borderWidth: 1, flexDirection: 'row',
                                }}>
                                    <View style={{ borderRightWidth: 1, width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700,
                                        }}>UUID</Text>
                                    </View>
                                    <View style={{ borderRightWidth: 1, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700
                                        }}>Total de Impuestos</Text>
                                    </View>
                                    <View style={{ borderRightWidth: 1, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700
                                        }}>Total de Retenciones</Text>
                                    </View>
                                    <View style={{ borderRightWidth: 1, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700
                                        }}>Saldo Anterior</Text>
                                    </View>
                                    <View style={{ borderRightWidth: 1, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700
                                        }}>Saldo Pendiente</Text>
                                    </View>
                                    <View style={{ width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{
                                            fontSize: 7,
                                            fontWeight: 700
                                        }}>Monto Pagado</Text>
                                    </View>
                                </View>
                                <View wrap={false}>
                                    {item?.relatedReceiptsDetails.map((item2: any, index2: any) => {
                                        return (
                                            <View key={index2}  style={{
                                                width: '90%', alignSelf: 'center', minHeight: 14, maxHeight: 14, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, flexDirection: 'row',
                                            }}>
                                                <View style={{ borderRightWidth: 1, width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.uuid_related}</Text>
                                                </View>
                                                <View style={{ borderRightWidth: 1, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.total_tax_amount}</Text>
                                                </View>
                                                <View style={{ borderRightWidth: 1, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.total_retention_amount}</Text>
                                                </View>
                                                <View style={{ borderRightWidth: 1, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.previous_amount}</Text>
                                                </View>
                                                <View style={{ borderRightWidth: 1, width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.amount_outstanding}</Text>
                                                </View>
                                                <View style={{ width: '12%', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{
                                                        fontSize: 7,
                                                    }}>{item2?.payment_amount}</Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>

                            </View>
                        </>
                    )
                })}

                <View fixed style={{
                    minHeight: 250,
                    maxHeight: 250,
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: 'white',
                }}></View>

                <View fixed break style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 40,
                    alignSelf: 'center',
                    flexDirection: 'column',
                    gap: 10
                }}>
                    {/* Quinta Seccion */}
                    <View style={{ width: '90%', alignSelf: 'center', minHeight: 28, maxHeight: 28, borderWidth: 1, flexDirection: 'row' }}>

                        <View style={{ width: '50%', flexDirection: 'column', }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '50%%' }}>
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>Forma de pago</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, height: '50%%' }}>
                                <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.payment_method_code || " "} - {data.dataReceiptHeader?.payment_method_description || " "}</Text>
                            </View>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'column', }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '50%%' }}>
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>Total del pago</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: '50%%' }}>
                                <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.total_amount || " "} {data.dataReceiptHeader?.currency_description || " "}</Text>
                            </View>
                        </View>
                    </View>


                    {/* Sexta Seccion */}
                    <View style={{ minWidth: '90%', maxWidth: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '83%', borderWidth: 1, height: 175 }}>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                                <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 7, fontWeight: 700, }}>Cadena Original:</Text>
                                </View>
                                <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.original_string_SAT || " "}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                                <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 7, fontWeight: 700 }}>Sello:</Text>
                                </View>
                                <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.seal_CFDI || " "}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, flexDirection: 'row' }}>
                                <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 7, fontWeight: 700 }}>Sello SAT:</Text>
                                </View>
                                <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.seal_SAT || " "}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: '20%', flexDirection: 'row', borderBottomWidth: 1 }} >
                                <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 7, paddingHorizontal: 5, fontWeight: 700 }}>Fecha Timbre</Text>
                                </View>
                                <View style={{ height: '100%', width: '25%', borderRightWidth: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.signing_date || " "}</Text>
                                </View>
                                <View style={{ height: '100%', width: '20%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 7, fontWeight: 700 }}>Certificado SAT:</Text>
                                </View>
                                <View style={{ height: '100%', width: '45%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.certificate_number_SAT || " "}</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: '20%', flexDirection: 'row', }} >

                                <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 7, fontWeight: 700 }}>UUID:</Text>
                                </View>
                                <View style={{ height: '100%', width: '80%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.uuid || " "}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: 100, height: 100 }} src={qr} ></Image>
                        </View>
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
        generatePaymentComplementPDF
    };
};