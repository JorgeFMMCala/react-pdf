import { Text, View } from '@react-pdf/renderer';
import React from 'react'
import { relatedCfdisStyles } from './relatedCfdisStyles';


export const RelatedCfdis = ({ data, showTranslatedText }: any) => {

    const { relatedCfdis } = relatedCfdisStyles();
    

    return (
        <View style={relatedCfdis.container}>
            <View style={relatedCfdis.titleContainer} >
                <Text style={relatedCfdis.title}>{showTranslatedText("reports.salesInvoicePdf.relatedCfdis.relatedCfdis")}</Text>
            </View>
            <View fixed style={relatedCfdis.titleRow}>
                <Text style={relatedCfdis.conceptTitleCell}>{showTranslatedText("relatedsalesinvoices.fields.related_sales_invoice_name")}</Text>
                <Text style={relatedCfdis.conceptTitleCell}>{showTranslatedText("relatedsalesinvoices.fields.related_sales_invoice_uuid")}</Text>
                <Text style={relatedCfdis.conceptTitleCell}>{showTranslatedText("relatedsalesinvoices.fields.sales_invoice_relationship_type_code")}</Text>
                <Text style={relatedCfdis.conceptTitleCell}>{showTranslatedText("relatedsalesinvoices.fields.sales_invoice_relationship_type_description")}</Text>
            </View>
            {data.dataRelatedSalesInvoices.map((salesInvoice: any, index: any) => {
                return (
                    <View style={relatedCfdis.row} key={index} wrap={false}>
                        <Text style={relatedCfdis.conceptCell}>{salesInvoice.related_sales_invoice_name || ' '}</Text>
                        <Text style={relatedCfdis.conceptCell}>{salesInvoice.related_sales_invoice_uuid || ' '}</Text>
                        <Text style={relatedCfdis.conceptCell}>{salesInvoice.sales_invoice_relationship_type_code || ' '}</Text>
                        <Text style={relatedCfdis.conceptCell}>{salesInvoice.sales_invoice_relationship_type_description || ' '}</Text>
                    </View>
                );
            })}
        </View>
    )
}