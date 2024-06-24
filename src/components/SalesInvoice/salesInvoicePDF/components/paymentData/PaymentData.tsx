import { Text, View } from '@react-pdf/renderer';
import React from 'react'
import { paymentDataStyles } from './paymentDataStyles';

const {paymentData}= paymentDataStyles();


const PaymentConcept = ({ title1, data1, title2, data2 }: any) => {
    return (
        <View style={paymentData.subContainer}>
            <View style={paymentData.conceptContainer} >
                <Text style={paymentData.concept}>{title1 || ' '}</Text> <Text style={paymentData.data}> {data1 || ' '}</Text>
            </View>
            <View style={paymentData.conceptContainer}>
                <Text style={paymentData.concept}>{title2 || ' '}</Text> <Text style={paymentData.data}> {data2 || ' '}</Text>
            </View>
        </View>
    );
};

export const PaymentData = ({data,showTranslatedText}:any) => {
    return (
        <View fixed style={paymentData.container}>
            <PaymentConcept
                title1={`${showTranslatedText("reports.salesInvoicePdf.paymentData.CFDIUse")}:`}
                data1={`${data.dataInvoiceGeneral.cfdi_code || ""} ${data.dataInvoiceGeneral.cfdi_description || " "}`}
            />
            <PaymentConcept
                title1={`${showTranslatedText("reports.salesInvoicePdf.paymentData.methodPayment")}:`}
                data1={`${data.dataInvoiceGeneral.payment_mode_code || ""} - ${data.dataInvoiceGeneral.payment_mode_description || " "}`}
                title2={`${showTranslatedText("reports.salesInvoicePdf.paymentData.paymentConditions")}:`}
                data2={data.dataInvoiceGeneral.payment_condition_name}
            />
            <PaymentConcept
                title1={`${showTranslatedText("reports.salesInvoicePdf.paymentData.paymentType")}:`}
                data1={`${data.dataInvoiceGeneral.payment_method_code || ""} - ${data.dataInvoiceGeneral.payment_method_name || " "}`}
            />
        </View>
    )
}
