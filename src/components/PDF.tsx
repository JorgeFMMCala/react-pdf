
import { Document, Image, Page, StyleSheet, Text, View, } from '@react-pdf/renderer';
import cala from '../assets/cala.png';
import { pdfStyles } from './PDFStyles';

export const PDF = ({ data }: any) => {

    const { bankAccountsData, blankFooter, dataCustomer, footerInLastPage, generalStyles, headerStyles, notes, satData, totals,
        weights,blackSpaceFooter,productsData
    } = pdfStyles();

    let pages:number;

    return (
        <Document >
            <Page style={generalStyles.pageStyles} >

                <Text render={({ pageNumber,totalPages }) => {
                    pages=totalPages;
                    return <Text></Text>;
                }}fixed />

                <View fixed style={headerStyles.container}>
                    <Image src={cala} style={headerStyles.image} />
                    <View style={headerStyles.dataHeaderContainer}>
                        <View style={headerStyles.dataIssuingCompanyContainer}>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.business_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.street || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.city_name || " "}, {data.dataIssuingCompany?.state_name || " "} {data.dataIssuingCompany?.postal_code || " "}, {data.dataIssuingCompany?.country_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>RFC: {data.dataIssuingCompany?.rfc || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.tax_regime_code || " "} {data.dataIssuingCompany?.tax_regime_description || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.email || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.phone_number || " "}</Text>
                        </View>
                        <View style={headerStyles.dataIssuingCompanyContainer}>
                            <Text style={headerStyles.textHeaderStyles}>Tipo de Documento: {data.dataInvoiceGeneral?.invoice_doc_type_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>Nùmero de Folio: {data.dataInvoiceGeneral?.sales_invoice_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>Nùmero Fiscal: {data.dataInvoiceGeneral?.uuid || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>FECHA Y HORA DE TIMBRADO: {data.dataInvoiceGeneral?.signing_date || " "}</Text>
                        </View>
                    </View>
                </View>

                <View fixed style={dataCustomer.container}>
                    <View style={dataCustomer.subContainer}>
                        <View style={dataCustomer.titleContainer}>
                            <Text style={dataCustomer.title}>FACTURADO A:</Text>
                        </View>
                        <View style={dataCustomer.dataContainer}>
                            <View style={dataCustomer.firstContainer}>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.bussines_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.street_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.city_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.state_name} {data.dataInvoiceGeneral.postal_code}, {data.dataInvoiceGeneral.country_name}</Text>
                            </View>
                            <View style={dataCustomer.secondContainer}>
                                <Text style={dataCustomer.data}>RFC:{data.dataInvoiceGeneral.company_rfc}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.tax_regime_code} {data.dataInvoiceGeneral.tax_regime_description}</Text>
                                <Text style={dataCustomer.data}>CORREO:{data.dataInvoiceGeneral.customer_email}</Text>
                                <Text style={dataCustomer.data}>TEL:{data.dataInvoiceGeneral.customer_phone_number}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={dataCustomer.subContainer}>
                        <View style={dataCustomer.titleContainer}>
                            <Text style={dataCustomer.title}>ENVIADO A:</Text>
                        </View>
                        <View style={dataCustomer.dataContainer}>
                            <View style={dataCustomer.firstContainer}>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.bussines_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.street_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.city_name}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.state_name} {data.dataInvoiceGeneral.postal_code}, {data.dataInvoiceGeneral.country_name}</Text>
                            </View>
                            <View style={dataCustomer.secondContainer}>
                                <Text style={dataCustomer.data}>RFC:{data.dataInvoiceGeneral.company_rfc}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.tax_regime_code} {data.dataInvoiceGeneral.tax_regime_description}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_email}</Text>
                                <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_phone_number}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Tabla de Productos */}
                <View style={productsData.tableContainer} >
                    <View fixed style={productsData.titleRow}>
                        <Text style={productsData.conceptTitleCell}>Concepto</Text>
                        <Text style={productsData.quantityTitleCell}>Cantidad</Text>
                        <Text style={productsData.quantityTitleCell}>Unidad</Text>
                        <Text style={productsData.quantityTitleCell}>Precio</Text>
                        <Text style={productsData.quantityTitleCell}>Impuesto</Text>
                        <Text style={productsData.retentionTitleCell}>Retención</Text>
                        <Text style={productsData.quantityTitleCell}>Descuento</Text>
                    </View>
                    {data.invoiceDetails.map((item: any, index: any) => {
                        return ( // Asegurarse de usar return para devolver el View
                            <View style={productsData.row} key={index} wrap={false}>
                                <Text style={productsData.conceptCell}>{item.item_description}</Text>
                                <Text style={productsData.quantityCell}>{item.quantity}</Text>
                                <Text style={productsData.quantityCell}>{item.unit_code}</Text>
                                <Text style={productsData.quantityCell}>{item.price_by_unit}</Text>
                                <Text style={productsData.quantityCell}>{item.tax_name} {item.tax_percent}</Text>
                                <Text style={productsData.retentionCell}>{item.retention_name} {item.retention_percent}</Text>
                                <Text style={productsData.quantityCell}>{item.discount}</Text>
                            </View>
                        );
                    })}
                </View>

                <View fixed style={blackSpaceFooter.container}></View>

                {/* Pie de pagina en blanco */}
                <View
                    render={({ pageNumber }: { pageNumber: number }) => {
                        if (pageNumber < pages) {
                            return (
                                <View style={blankFooter.container}>
                                    <View style={blankFooter.notesContainer}>
                                        <Text style={blankFooter.text}>NOTAS:</Text>
                                        <Text></Text>
                                    </View>
                                    <View style={blankFooter.weightContainer}>
                                        <Text style={blankFooter.text}>PESOS:</Text>
                                        <Text>{"\n"}</Text>
                                        <View style={blankFooter.weights}>
                                            <Text style={blankFooter.text}>PESO BRUTO: ({data.dataTransportationDocument.weight_unit})</Text>
                                            <Text style={blankFooter.text}>100</Text>
                                        </View>
                                        <View style={blankFooter.weights}>
                                            <Text style={blankFooter.text}>PESO NETO:</Text>
                                            <Text style={blankFooter.text}>100</Text>
                                        </View>
                                    </View>
                                    <View style={blankFooter.messageContainer}>
                                        <Text style={blankFooter.message}>CONTINUE TO THE NEXT PAGE</Text>
                                    </View>
                                </View>
                            );
                        } else {
                            return null; 
                        }
                    }}
                    style={blankFooter.section}
                    fixed
                />

                {/* Pie de pagina final */}
                <View style={footerInLastPage.container} break >
                    {/* Cuentas de banco */}
                    <View style={bankAccountsData.container}>
                        <View style={bankAccountsData.instructionsContainer}>
                            <Text style={bankAccountsData.instructionsText}>Por favor haz los pagos en las siguientes cuentas:</Text>
                        </View>
                        <View style={bankAccountsData.bankAccountsContainer}>
                            <View style={bankAccountsData.bankAccountContainerFirstAccount}>
                                <Text style={bankAccountsData.bankAccountTitle}>Cuenta Primaria</Text>
                                <View style={bankAccountsData.bankAccountDataContainer}>
                                    <View style={bankAccountsData.bankAccountData}>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Alias de cuenta</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_account_alias}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Clave Interbancaria</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_interbank_key}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Swift</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_swift_code}</Text>
                                        </View>
                                    </View>
                                    <View style={bankAccountsData.bankAccountData}>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Nombre del Banco</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_bank_name}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Cuenta</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_account_number}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={bankAccountsData.bankAccountContainerSecondAccount}>
                                <Text style={bankAccountsData.bankAccountTitle}>Cuenta Secundaria</Text>
                                <View style={bankAccountsData.bankAccountDataContainer}>
                                    <View style={bankAccountsData.bankAccountData}>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Alias de cuenta</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_account_alias}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Clave Interbancaria</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_interbank_key}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Swift</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_swift_code}</Text>
                                        </View>
                                    </View>
                                    <View style={bankAccountsData.bankAccountData}>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Nombre del Banco</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_bank_name}</Text>
                                        </View>
                                        <View style={bankAccountsData.bankAccountField}>
                                            <Text style={bankAccountsData.bankAccountConcept}>Cuenta</Text>
                                            <Text style={bankAccountsData.bankAccountText}>{data.dataIssuingCompany.primary_account_number}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Datos del sat */}
                    <View style={satData.container}>
                        <View style={satData.digitalStamp}>
                            <Text style={satData.satTitle} >DIGITAL STAMP:</Text>
                            <Text style={satData.satText}> {data.dataInvoiceGeneral.seal_CFDI}</Text>
                        </View>
                        <View style={satData.digitalCertificationAndImage}>
                            <Image src={cala} style={satData.image}></Image>
                            <View style={satData.digitalCertification}>
                                <Text style={satData.satTitle}>DIGITAL CERTIFICATION:</Text>
                                <Text style={satData.satText}> {data.dataInvoiceGeneral.original_string_SAT}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Pie de pagina en ultima pagina */}
                    <View style={footerInLastPage.thirdSections} >
                        <View style={notes.container}>
                            <Text style={notes.text}>NOTAS:</Text>
                            <Text></Text>
                        </View>
                        <View style={weights.container}>
                            <Text style={weights.text}>PESOS:</Text>
                            <br />
                            <View style={weights.weights} >
                                <Text style={weights.text}>PESO BRUTO: ({data.dataTransportationDocument.weight_unit})</Text>
                                <Text style={weights.text}>100</Text>
                            </View>
                            <View style={weights.weights}>
                                <Text style={weights.text}>PESO NETO:</Text>
                                <Text style={weights.text}>100</Text>
                            </View>
                        </View>
                        <View style={totals.container}>
                            <View>
                                <View style={totals.totalField}>
                                    <Text style={totals.text}>IMPUESTOS:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.tax_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={totals.text}>RETENCIONES:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.retention_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={totals.text}>DESCUENTOS:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.discount_amount}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={totals.totalField}>
                                    <Text style={blankFooter.text}>SUBTOTAL:</Text>
                                    <Text style={blankFooter.text}>{data.dataInvoiceGeneral.subtotal_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={blankFooter.text}>TOTAL:</Text>
                                    <Text style={blankFooter.text}>{data.dataInvoiceGeneral.total_amount}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document >
    );
};