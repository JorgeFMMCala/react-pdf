
import { Image, Text, View } from '@react-pdf/renderer'

export const Header = ({ data, showTranslatedText }: any) => {
    return (
        <View fixed style={{
            width: '90%',
            height:115,
            flexDirection: 'row',
            gap: 10,
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginBottom:10
        }} >
            <Image src={data.dataReceiptHeader.logoImage ? data.dataReceiptHeader.logoImage : ' '} style={{
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
                <Text style={{ fontSize: 8, marginBottom: 5, fontWeight: 700 }}>{data.dataReceiptHeader?.company_account_alias || ' '}</Text>
                <Text style={{ fontSize: 7, fontWeight: 700 }}>{data.dataReceiptHeader?.company_street || " "}</Text>
                <Text style={{ fontSize: 7, fontWeight: 700 }}>{data.dataReceiptHeader?.company_city_name || " "}, {data.dataReceiptHeader?.company_state_name || " "} {data.dataReceiptHeader?.company_postal_code || " "}, {data.dataReceiptHeader?.company_country_name || " "}</Text>
                <Text style={{ fontSize: 7, marginBottom: 5, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.header.taxId")}: {data.dataReceiptHeader?.company_rfc || " "}</Text>
                <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.header.zipCode")}: {data.dataReceiptHeader?.company_postal_code || " "} </Text>
                <Text style={{ fontSize: 7, fontWeight: 700 }}>{data.dataReceiptHeader.receipt_date || " "}</Text>
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
                    <Text style={{ fontSize: 12, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.header.paymentReceipt")}</Text>
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
                        <Text style={{ fontSize: 8, fontWeight: 500, }} >{showTranslatedText("reports.receiptsPdf.header.payment")}</Text>
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
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.header.paymentNumber")}:</Text>
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, fontWeight: 500 }}>{data.dataReceiptHeader.receipt_name || " "}</Text>
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
                                <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.header.dateAndTime")}</Text>
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 7, fontWeight: 500 }}>{data.dataReceiptHeader?.receipt_date || " "}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
