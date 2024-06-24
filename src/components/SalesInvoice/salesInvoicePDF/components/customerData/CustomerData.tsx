import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { customerDataStyles } from './customerDataStyles';

const { customerData } = customerDataStyles();

export const CustomerData = ({data,showTranslatedText}:any) => {
    return (
        <View fixed style={customerData.container}>
            <View style={customerData.firstSubContainer}>
                <View style={customerData.titleContainer} >
                    <Text style={customerData.title}>{showTranslatedText("reports.salesInvoicePdf.customerData.billTo")}:</Text>
                </View>
                <View style={customerData.dataContainer}>
                    <View style={customerData.firstContainer}>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_business_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_street_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_city_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_state_name || ' '} {data.dataInvoiceGeneral.customer_postal_code || ' '}, {data.dataInvoiceGeneral.customer_country_name || ' '}</Text>
                    </View>
                    <View style={customerData.secondContainer}>
                        <View style={customerData.field}>
                            <View style={{ width: '50%', paddingBottom: 5 }}>
                                <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.header.taxId")}:</Text>
                            </View>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_rfc || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{data.dataInvoiceGeneral.customer_tax_regime_code || ' '}: </Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_tax_regime_description || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.customerData.email")}:</Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_email || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.customerData.telephone")}:</Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_phone_number || ' '}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={customerData.secondSubContainer}>
                <View style={customerData.titleContainer}>
                    <Text style={customerData.title}>{showTranslatedText("reports.salesInvoicePdf.customerData.shipTo")}:</Text>
                </View>
                <View style={customerData.dataContainer}>
                    <View style={customerData.firstContainer}>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_business_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_street_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_city_name || ' '}</Text>
                        <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_state_name || ' '} {data.dataInvoiceGeneral.customer_postal_code || ' '}, {data.dataInvoiceGeneral.customer_country_name || ' '}</Text>
                    </View>
                    <View style={customerData.secondContainer}>
                        <View style={customerData.field}>
                            <View style={{ width: '50%', paddingBottom: 5 }}>
                                <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.header.taxId")}:</Text>
                            </View>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_rfc || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{data.dataInvoiceGeneral.customer_tax_regime_code || ' '}: </Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_tax_regime_description || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.customerData.email")}:</Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_email || ' '}</Text>
                        </View>
                        <View style={customerData.field}>
                            <Text style={customerData.concept}>{showTranslatedText("reports.salesInvoicePdf.customerData.telephone")}:</Text>
                            <Text style={customerData.data}>{data.dataInvoiceGeneral.customer_phone_number || ' '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
