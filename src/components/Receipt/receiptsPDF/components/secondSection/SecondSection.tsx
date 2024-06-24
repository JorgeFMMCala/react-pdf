import { Text, View } from '@react-pdf/renderer'
import { secondSectionStyles } from './SecondSectionStyles';

const { secondSection } = secondSectionStyles();

export const SecondSection = ({ showTranslatedText }: any) => {
    return (
        <View fixed style={secondSection.container}>
            <View style={secondSection.titleContainer}>
                <Text style={secondSection.title}>{showTranslatedText("reports.receiptsPdf.secondSection.relatedInvoices")}</Text>
            </View>
            <View >
                <View style={{ width: '90%', alignSelf: 'center',borderWidth:1, flexDirection: 'row', justifyContent:'center'}}>
                    <Text style={secondSection.conceptFiscalFolio}>{showTranslatedText("reports.receiptsPdf.secondSection.fiscalFolio")}</Text>
                    <Text style={secondSection.conceptTaxesTotal}>{showTranslatedText("reports.receiptsPdf.secondSection.taxesTotal")}</Text>
                    <Text style={secondSection.conceptRetentionsTotal}>{showTranslatedText("reports.receiptsPdf.secondSection.retentionsTotal")}</Text>
                    <Text style={secondSection.conceptPreviousAmount}>{showTranslatedText("reports.receiptsPdf.secondSection.previousAmount")}</Text>
                    <Text style={secondSection.conceptPaidAmount}>{showTranslatedText("reports.receiptsPdf.secondSection.paidAmount")}</Text>
                    <Text style={secondSection.conceptPendingAmount}>{showTranslatedText("reports.receiptsPdf.secondSection.pendingAmount")}</Text>
                </View>
            </View>
        </View>
    )
}
