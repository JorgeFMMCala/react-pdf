import { Image, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { headerStyles } from './headerStyles';
import { useDates } from '../../../../../hooks/useDates';

const { header } = headerStyles();


export const Header = ({ data, showTranslatedText }: any) => {

    const { TimeConverter } = useDates();


    return (
        <View fixed style={header.container} >
            <Image src={data.dataInvoiceGeneral.logoImage ? data.dataInvoiceGeneral.logoImage : ' '}
                style={header.image} />
            <View style={header.dataHeaderContainer}  >
                <View style={header.dataIssuingCompanyContainer}  >
                    <Text style={header.textHeaderStylesBold}>{data.dataInvoiceGeneral?.company_business_name || " "}</Text>
                    <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.company_street || " "}</Text>
                    <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.company_city_name || " "}, {data.dataInvoiceGeneral?.company_state_name || " "} {data.dataInvoiceGeneral?.company_postal_code || " "}, {data.dataInvoiceGeneral?.company_country_name || " "}</Text>
                    <Text style={header.textHeaderStyles}>RFC: {data.dataInvoiceGeneral?.company_rfc || " "}</Text>
                    <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.company_tax_regime_code || " "} {data.dataInvoiceGeneral?.company_tax_regime_description || " "}</Text>
                    <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.company_email || " "}</Text>
                    <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.company_phone_number || " "}</Text>
                </View>
                <View style={header.dataIssuingCompanyContainer}  >
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, height: '30%', width: '100%' }}>
                        <Text style={{ fontSize: 12, fontWeight: 700 }}>{data.dataInvoiceGeneral?.invoice_doc_type_name || " "}</Text>
                    </View>
                    <View style={header.dataInvoiceGeneralSubcontainer}>
                        <Text style={header.textHeaderStylesBold}>{showTranslatedText("reports.salesInvoicePdf.header.folioNumber")}:</Text>
                        <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.sales_invoice_name || " "}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={header.textHeaderStylesBold}>{showTranslatedText("reports.salesInvoicePdf.header.taxNumber")}:</Text>
                        <Text style={header.textHeaderStyles}>{data.dataInvoiceGeneral?.uuid || " "}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={header.textHeaderStylesBold}>{showTranslatedText("reports.salesInvoicePdf.header.dateAndTimeCertification")}:</Text>
                        <Text style={header.textHeaderStyles}>{!data.dataInvoiceGeneral?.signing_date ? " " : data.dataInvoiceGeneral?.signing_date.toString()}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
