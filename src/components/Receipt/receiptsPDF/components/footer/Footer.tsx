import { Image, Text, View, pdf, } from '@react-pdf/renderer';
import { useFormatNumber } from '../../../../../hooks/useFormatNumber';

export const Footer = ({ data, showTranslatedText }: any) => {

    const  { setFormatNumber } = useFormatNumber();

  return (
    <>
    <View fixed style={{
        height:250,
        alignSelf: 'center',
        gap: 10
    }}>
        <View style={{ width: '90%', alignSelf: 'center', height:28, borderWidth: 1, flexDirection: 'row' }}>
            <View style={{ width: '20%', flexDirection: 'column', }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '50%' }}>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>FECHA Y HORA DE PAGO</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, height: '50%' }}>
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.receipt_date || " "}</Text>
                </View>
            </View>
            <View style={{ width: '50%', flexDirection: 'column', }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '50%' }}>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.paymentMethod")}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, height: '50%' }}>
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.payment_method_code || " "} - {data.dataReceiptHeader?.payment_method_description || " "}</Text>
                </View>
            </View>
            <View style={{ width: '30%', flexDirection: 'column', }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, height: '50%' }}>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.paymentTotal")}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                    <Text style={{ fontSize: 7 }}>{setFormatNumber({ value: data.dataReceiptHeader?.total_amount || 0 }) || ' '} {data.dataReceiptHeader?.currency_description || " "}</Text>
                </View>
            </View>
        </View>


        <View style={{ minWidth: '90%', maxWidth: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '83%', borderWidth: 1, height: 200 }}>
                <View style={{ width: '100%', borderBottomWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 7, fontWeight: 700, }}>{showTranslatedText("reports.receiptsPdf.footer.digitalCertification")}:</Text>
                    </View>
                    <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.original_string_SAT || " "}</Text>
                    </View>
                </View>
                <View style={{ width: '100%',  borderBottomWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.digitalStamp")}:</Text>
                    </View>
                    <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.seal_CFDI || " "}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.SATdigitalStamp")}:</Text>
                    </View>
                    <View style={{ height: '100%', width: '90%', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 6, padding: 2 }}>{data.dataReceiptHeader?.seal_SAT || " "}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: '20%', flexDirection: 'row', borderBottomWidth: 1 }} >
                    <View style={{ height: '100%', width: '10%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ fontSize: 7, paddingHorizontal: 5, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.signingDate")}</Text>
                    </View>
                    <View style={{ height: '100%', width: '25%', borderRightWidth: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.signing_date || " "}</Text>
                    </View>
                    <View style={{ height: '100%', width: '20%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.SATCertificate")}:</Text>
                    </View>
                    <View style={{ height: '100%', width: '45%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.certificate_number_SAT || " "}</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: '20%', flexDirection: 'row', }} >

                    <View style={{ height: '100%', width: '20%', borderRightWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.footer.fiscalFolio")}:</Text>
                    </View>
                    <View style={{ height: '100%', width: '70%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 7, paddingHorizontal: 2 }}>{data.dataReceiptHeader?.uuid || " "}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }} >
                <Image style={{ width: 100, height: 100 }} src={data.dataReceiptHeader.fiscalQr ? data.dataReceiptHeader.fiscalQr : ' '} />
            </View>
        </View>
    </View>
    </>
  )
}
