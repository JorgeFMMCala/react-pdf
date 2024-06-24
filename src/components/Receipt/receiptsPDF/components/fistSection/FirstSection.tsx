import { Text, View } from '@react-pdf/renderer'

export const FirstSection = ({ showTranslatedText }: any) => {

    return (
        <>
            < View fixed style={{ gap: 10,marginBottom:10 }}>
                <View style={{ width: '90%', alignSelf: 'center', height:40, borderWidth: 1, flexDirection: 'row', }}>
                    <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.firstSection.code")}</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>84111506</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '14.2%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.firstSection.quantity")}</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>1</Text>
                        </View>
                    </View>
                    <View style={{ height: '100%', flexDirection: 'column', borderRightWidth: 1, width: '48.4%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.firstSection.description")}</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>PAGO</Text>
                        </View>
                    </View>
                    
                    <View style={{ height: '100%', flexDirection: 'column', width: '23.2%' }}>
                        <View style={{ height: '66%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.firstSection.unitOfMeasure")}</Text>
                        </View>
                        <View style={{ height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 7 }}>ACT</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}
