
import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { shippingDataStyles } from './shippingDataStyles';

const { shippingData } = shippingDataStyles();


const ShippingConcept = ({ title, data }: any) => {
    return (
        <View style={shippingData.subContainer}>
            <View style={shippingData.titleContainer}>
                <Text style={shippingData.title}>{title || ' '}</Text>
            </View>
            <View style={shippingData.dataContainer}>
                <Text style={shippingData.data}>{data || ' '}</Text>
            </View>
        </View>
    );
};


export const ShippingData = ({data,showTranslatedText}:any) => {
    return (

        <View fixed style={shippingData.container}>
            <ShippingConcept title={showTranslatedText("reports.salesInvoicePdf.shippingData.customerPO")} data={data.dataInvoiceGeneral.purchase_order || ' '} />
            <ShippingConcept title={showTranslatedText("reports.salesInvoicePdf.shippingData.shipVia")} data={data.dataShippingTracking.track_id || ' '} />
            <ShippingConcept title={showTranslatedText("reports.salesInvoicePdf.shippingData.trackingNumber")} data={data.dataShippingTracking.track_id || ' '} />
            <ShippingConcept title={showTranslatedText("reports.salesInvoicePdf.shippingData.dueDate")} data={data.dataInvoiceGeneral.payment_due_date || ' '} />
        </View>
    )
}
