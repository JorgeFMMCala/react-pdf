import { Text, View } from '@react-pdf/renderer'

export const CustomerData = ({ data, showTranslatedText }: any) => {
    return (
        <View fixed style={{ width: '90%', alignSelf: 'center', height:80, borderWidth: 1,marginBottom:10 }}>
            <View style={{ width: '100%', height: '80%', flexDirection: 'row' }}>
                <View style={{ width: '15%', textAlign: 'center', justifyContent: 'space-around' }} >
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.customer")}</Text>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.address")}</Text>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.city")} - {showTranslatedText("reports.receiptsPdf.customerData.state")}</Text>
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.zipCode")}:</Text>
                </View>
                <View style={{ width: '35%', justifyContent: 'space-around', borderRightWidth: 1 }} >
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.customer_comercial_name || " "}</Text>
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.customer_street || " "}</Text>
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.customer_city_name || " "} - {data.dataReceiptHeader?.customer_state_name || " "}</Text>
                    <Text style={{ fontSize: 7 }}>{data.dataReceiptHeader?.customer_postal_code || " "}</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', gap: 5, }} >
                    <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.taxId")}: {data.dataReceiptHeader?.customer_rfc || " "}</Text>
                </View>
            </View>
            <View style={{ height: '20%', borderTopWidth: 1, borderColor: 'black', flexDirection: 'row' }}>
                <View style={{ width: '15%', height: '100%', borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 6, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.customerData.taxRegime")}</Text>
                </View>
                <View style={{ width: '85%', height: '100%', justifyContent: 'center', paddingLeft: 5 }}>
                    <Text style={{ fontSize: 6, fontWeight: 700 }}> {data.dataReceiptHeader?.customer_tax_regime_code || " "} {data.dataReceiptHeader?.customer_tax_regime_description || " "}</Text>
                </View>
            </View>
        </View>
    )
}
