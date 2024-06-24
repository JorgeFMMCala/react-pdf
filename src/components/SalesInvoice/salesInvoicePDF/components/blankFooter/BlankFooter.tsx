import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { blankFooterStyles } from './blankFooterStyles';

export const BlankFooter = ({ data, showTranslatedText }: any) => {

    const { blankFooter } = blankFooterStyles();

    return (
        <View style={blankFooter.container}>
            <View style={blankFooter.notesContainer}>
                <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.notes")}:</Text>
                <Text style={{ fontSize: 6 }}>{data.dataInvoiceGeneral.notes}</Text>
            </View>
            <View style={blankFooter.weightContainer} >
                <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.weights")}:</Text>
                <View style={blankFooter.weights} >
                    <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.grossWeight")}: ({data.dataTransportationDocument?.weight_unit || ' '})</Text>
                    <Text style={blankFooter.text}>{data.dataShippingTracking.gross_weight || ' '}</Text>
                </View>
                <View style={blankFooter.weights} >
                    <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.netWeight")}:</Text>
                    <Text style={blankFooter.text}>{data.dataShippingTracking.net_weight || ' '}</Text>
                </View>
            </View>
            <View style={blankFooter.messageContainer}>
                <Text style={blankFooter.message}>{showTranslatedText("reports.salesInvoicePdf.footer.continueToTheNextPage")}</Text>
            </View>
        </View>
    )
}
