
import { Document, Image, Page, StyleSheet, Text, View, } from '@react-pdf/renderer';
import cala from '../assets/cala.png';


type pdfProps = {
    data: any
}

export const PDF = ({ data }: pdfProps) => {


    const generalStyles = StyleSheet.create({
        pageStyles: {
            paddingVertical: 30,
            position: 'relative'

        }
    })


    const headerStyles = StyleSheet.create({
        container: {
            height: 100,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },

        image: {
            width: '35%',
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: 'black'
        },

        dataHeaderContainer: {
            width: '65%',
            height: '100%',
            flexDirection: 'row'
        },

        dataIssuingCompanyContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            padding: 20
        },

        textHeaderStyles: {
            fontSize: 6,
            paddingVertical: 3,
        }
    })

    const dataCustomer = StyleSheet.create({
        container: {
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        subContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: 'black',
        },
        titleContainer: {
            width: '100%',
            height: '20%',
            paddingLeft: 10,
            paddingTop: 5,
            borderBottomWidth: 1,
            borderColor: 'black',

        },

        title: {
            fontSize: 6,
            fontWeight: 'bold'
        },

        dataContainer: {
            width: '100%',
            height: '80%',
            flexDirection: 'row'
        },
        firstContainer: {
            width: '45%',
            padding: 10,

        },
        secondContainer: {
            width: '55%',
            padding: 10,

        },
        data: {
            fontSize: 6,
            paddingVertical: 3
        }
    })


    const productsData = StyleSheet.create({
        tableContainer: {
            width: '90%',
            alignSelf: 'center',
        },
        titleRow: {
            flexDirection: 'row',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1
        },

        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            backgroundColor: 'rgb(229, 229, 229)',
            paddingVertical: 5
        },
        conceptTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '26%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        quantityTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '12%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        retentionTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '14%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        conceptCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '26%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
        quantityCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '12%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
        retentionCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '14%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
    });

    const blankFooter = StyleSheet.create({

        section: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            alignSelf: 'center'
        },

        container: {

            height: 90,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row',


        },


        notesContainer: {
            width: '50%',
            borderRightWidth: 1,
            borderColor: 'black',
            padding: 5
        },
        weightContainer: {
            width: '20%',
            borderRightWidth: 1,
            borderColor: 'black',
            padding: 5,
            gap: 3
        },

        weights: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',

        },
        messageContainer: {
            width: '30%',
            paddingLeft: 9,
            paddingTop: 15
        },
        text: {
            fontSize: 6,

        },
        message: {
            fontSize: 9
        }
    })



    const notes = StyleSheet.create({
        container: {
            width: '50%',
            borderRightWidth: 1,
            borderColor: 'black',
            padding: 5
        },

        text: {
            fontSize: 6,
        }
    })


    const weights = StyleSheet.create({

        container: {
            width: '20%',
            borderRightWidth: 1,
            borderColor: 'black',
            padding: 5,
            gap: 3
        },

        weights: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },

        text: {
            fontSize: 6,
        }
    })

    const totals = StyleSheet.create({




        container: {
            width: '30%',
            padding: 4,
            paddingTop: 15,
            gap: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },

        totalField: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 3
        },



        text: {
            fontSize: 6,
        }
    })


    const footerInLastPage = StyleSheet.create({

        container: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            alignSelf: 'center'

        },


        thirdSections: {
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row',
        },





    })




    const bankAccountsData = StyleSheet.create({

        container: {
            width: '90%',
            height: 55,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'column',
        },

        instructionsContainer: {
            height: '25%',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 2
        },

        instructionsText: {
            fontSize: 6,
        },

        bankAccountsContainer: {
            height: '75%',
            width: '100%',
            flexDirection: 'row',

        },

        bankAccountContainerFirstAccount: {
            width: '50%',
            textAlign: 'center',
            borderColor: 'black',
            borderRightWidth: 1,
            paddingTop: 2
        },

        bankAccountContainerSecondAccount: {
            width: '50%',
            textAlign: 'center',
            paddingTop: 2
        },

        bankAccountTitle: {
            fontSize: 6
        },

        bankAccountDataContainer: {
            width: '100%',
            flexDirection: 'row',
            padding: 4,
            gap: 3
        },

        bankAccountData: {
            flexDirection: 'column',
            gap: 3,
            width: '50%'
        },

        bankAccountField: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        bankAccountConcept: {

            fontSize: 5
        },

        bankAccountText: {
            fontSize: 5
        }
    })

    const satData = StyleSheet.create({

        container: {
            width: '90%',
            height: 120,
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            flexDirection: 'column',
            paddingHorizontal: 10,
            paddingVertical: 20,
            gap: 5
        },

        digitalStamp: {
            flexDirection: 'column',
            height: '35%',
            width: '100%'
        },

        digitalCertificationAndImage: {
            flexDirection: 'row',
            gap: 13,
            width: '100%',
            height: '65%'
        },

        digitalCertification: {
            flexDirection: 'column',
            width: '90%'

        },

        satTitle: {
            fontSize: 6,
            fontWeight: 'heavy'
        },

        satText: {
            fontSize: 4
        },
        image: {
            width: 55,
            height: 55,
        }




    })



    return (
        <Document>
            <Page style={generalStyles.pageStyles} >
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
                            <View style={productsData.row} key={index} >
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


                {/* Pie de pagina en blanco */}
                <View style={blankFooter.section} fixed>
                    <View style={blankFooter.container}  >
                        <View style={blankFooter.notesContainer}>
                            <Text style={blankFooter.text}>NOTAS:</Text>
                            <Text></Text>
                        </View>
                        <View style={blankFooter.weightContainer}>
                            <Text style={blankFooter.text}>PESOS:</Text>
                            <br />
                            <View style={blankFooter.weights} >
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
                </View>



                {/* Pie de pagina final */}
                <View style={footerInLastPage.container} break>
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



                {/* <View fixed style={blankSpaceBottom.container}></View> */}
            </Page>
        </Document >
    );
};