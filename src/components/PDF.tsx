
import { Document, Image, Page, StyleSheet, Text, View, } from '@react-pdf/renderer';
import cala from '../assets/cala.png';
import { pdfStyles } from './PDFStyles';





export const PDF = ({ data }: any) => {

    const { bankAccountsData, blankFooter,
        dataCustomer, footerInLastPage,
        generalStyles, headerStyles,
        notes, satData, totals,
        weights, blackSpaceFooter,
        productsData,
        shippingData, paymentData,
        pageNumberAndTotalPages,
        transportationDocumentData,
        transportationDocumentSecondSection,
        transportationDocumentFirstSection,
        transportationDocumentLocationsData
    } = pdfStyles();


    const TransportationDocumentLocations = () => {

        return (
            <View style={transportationDocumentLocationsData.container}>
                <View style={transportationDocumentLocationsData.titleContainer}>
                    <Text style={transportationDocumentLocationsData.title}>ORIGEN / DESTINO</Text>
                </View>
                <View style={transportationDocumentLocationsData.tableContainer} >
                    <View fixed style={transportationDocumentLocationsData.titleRow}>
                        <Text style={{ width: '5%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} ></Text>
                        <Text style={{ width: '10%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >RFC</Text>
                        <Text style={{ width: '10%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >PAIS</Text>
                        <Text style={{ width: '14%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >ESTADO</Text>
                        <Text style={{ width: '14%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >CIUDAD</Text>
                        <Text style={{ width: '14%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >DIRECCIÓN</Text>
                        <Text style={{ width: '10%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >CÓDIGO POSTAL</Text>
                        <Text style={{ width: '12%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >FECHA</Text>
                        <Text style={{ width: '11%', fontSize: 5.5, borderRightWidth: 1, padding:4, borderBottomWidth:1}} >DISTANCIA</Text>
                    </View>
                    {data.dataTransportationDocumentLocations.map((item: any, index: any) => {
                        return (
                            <View style={transportationDocumentLocationsData.row} key={index} wrap={false}>
                                <Text style={{ width: '5%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.location_type}</Text>
                                <Text style={{ width: '10%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.rfc}</Text>
                                <Text style={{ width: '10%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.country_name}</Text>
                                <Text style={{ width: '14%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.state_name}</Text>
                                <Text style={{ width: '14%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.city_name}</Text>
                                <Text style={{ width: '14%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.street}</Text>
                                <Text style={{ width: '10%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.postal_code}</Text>
                                <Text style={{ width: '12%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.date_hour_departure_arrival}</Text>
                                <Text style={{ width: '11%', fontSize: 5, borderRightWidth: 1, padding:4,borderBottomWidth:1}} >{item.distance}</Text>
                            </View>
                        );
                    })}
                </View>

            </View>
        )

    }

    const TransportationDocumentSecondSection = (
        {
            title,
            concept1,
            concept2,
            concept3,
            concept4,
            concept5,
            data1,
            data2,
            data3,
            data4,
            data5

        }: any) => {

        return (
            <View style={transportationDocumentSecondSection.container}>
                <View style={transportationDocumentSecondSection.titleContainer}>
                    <Text style={{ fontSize: 6 }}>{title}</Text>
                </View>
                <View style={transportationDocumentSecondSection.subContainer}>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={{ fontSize: 5 }}>{concept1}</Text> <Text style={{ fontSize: 5 }}>{data1}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={{ fontSize: 5 }}>{concept2}</Text> <Text style={{ fontSize: 5 }}>{data2}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={{ fontSize: 5 }}>{concept3}</Text> <Text style={{ fontSize: 5 }}>{data3}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={{ fontSize: 5 }}>{concept4}</Text> <Text style={{ fontSize: 5 }}>{data4}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={{ fontSize: 5 }}>{concept5}</Text> <Text style={{ fontSize: 5 }}>{data5}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const TransportationDocumentFirstSection = (
        {
            concept1,
            concept2,
            concept3,
            concept4,
            data1,
            data2,
            data3,
            data4,
            width1,
            width2
        }: any) => {

        return (
            <View style={{ width: width1, height: '100%' }}>
                <View style={transportationDocumentFirstSection.container}>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5 }}>{concept1}</Text> <Text style={{ fontSize: 5 }}>{data1}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5 }}>{concept2}</Text> <Text style={{ fontSize: 5 }}>{data2}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5 }}>{concept3}</Text> <Text style={{ fontSize: 5 }}>{data3}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5 }}>{concept4}</Text> <Text style={{ fontSize: 5 }}>{data4}</Text>
                    </View>
                </View>
            </View>
        )
    }


    const TransportationDocument = () => {

        return (
            <View break>
                <View style={transportationDocumentData.container} >
                    <View style={transportationDocumentData.titleContainer}>
                        <Text style={transportationDocumentData.title}>CARTA PORTE</Text>
                    </View>
                    <View style={transportationDocumentData.firstRow}>
                        <TransportationDocumentFirstSection
                            concept1={'Permiso SCT:'}
                            concept2={'Número de Permiso SCT:'}
                            data1={data.dataTransportationDocument.permission_sct}
                            data2={data.dataTransportationDocument.permission_number_sct}
                            width1={'25%'}
                            width2={'30%'} />
                        <TransportationDocumentFirstSection
                            concept1={'Id ccp:'}
                            concept2={'Número de Guía:'}
                            concept3={'Descripción de Guía:'}
                            concept4={'Peso Guía:'}
                            data1={data.dataTransportationDocument.id_cpp}
                            data2={data.dataTransportationDocument.identification_guide_number}
                            data3={data.dataTransportationDocument.identification_guide_description}
                            data4={data.dataTransportationDocument.identification_guide_weight}
                            width1={'32%'}
                            width2={'30%'} />
                        <TransportationDocumentFirstSection
                            concept1={'Mercancía Total:'}
                            concept2={'Peso bruto total:'}
                            concept3={'Unidad de Peso:'}
                            data1={data.dataTransportationDocument.total_merchandise}
                            data2={data.dataTransportationDocument.gross_total_weight}
                            data3={data.dataTransportationDocument.weight_unit}
                            width1={'18%'}
                            width2={'50%'} />
                        <TransportationDocumentFirstSection
                            concept1={'Fecha de Carta Porte:'}
                            data1={data.dataInvoiceGeneral.sales_invoice_date}
                            width1={'25%'}
                            width2={'30%'} />
                    </View>
                    <View style={transportationDocumentData.secondRow}>
                        <TransportationDocumentSecondSection
                            title={'Información del transporte'}
                            concept1={'Código de Transporte:'}
                            concept2={'Distancia Total: '}
                            concept3={'Fecha de salida: '}
                            concept4={'Fecha de Llegada:'}
                            concept5={'Peso de Transporte: '}
                            data1={data.dataTransportationDocument.transportation_code}
                            data2={data.dataTransportationDocument.total_distance}
                            data3={data.dataTransportationDocument.departure_date}
                            data4={data.dataTransportationDocument.arrival_date}
                            data5={data.dataTransportationDocument.transportation_weight}
                        />
                        <TransportationDocumentSecondSection
                            title={'Información del vehículo'}
                            concept1={'Configuración Vehicular: '}
                            concept2={'Número de Placa: '}
                            concept3={'Vin: '}
                            concept4={'Modelo y Año: '}
                            concept5={'Número de motor: '}
                            data1={data.dataTransportationDocument.vehicle_config_code}
                            data2={data.dataTransportationDocument.plate_number}
                            data3={data.dataTransportationDocument.vin}
                            data4={`${data.dataTransportationDocument.model_name} - ${data.dataTransportationDocument.model_year}`}
                            data5={data.dataTransportationDocument.motor_number}
                        />
                        <TransportationDocumentSecondSection
                            title={'Información del transporte'}
                            concept1={'Código de Transporte:'}
                            concept2={'Distancia Total: '}
                            concept3={'Fecha de salida: '}
                            concept4={'Fecha de Llegada:'}
                            concept5={'Peso de Transporte: '}
                            data1={data.dataTransportationDocument.transportation_code}
                            data2={data.dataTransportationDocument.total_distance}
                            data3={data.dataTransportationDocument.departure_date}
                            data4={data.dataTransportationDocument.arrival_date}
                            data5={data.dataTransportationDocument.transportation_weight}
                        />
                        <TransportationDocumentSecondSection
                            title={'Información del transporte'}
                            concept1={'Código de Transporte:'}
                            concept2={'Distancia Total: '}
                            concept3={'Fecha de salida: '}
                            concept4={'Fecha de Llegada:'}
                            concept5={'Peso de Transporte: '}
                            data1={data.dataTransportationDocument.transportation_code}
                            data2={data.dataTransportationDocument.total_distance}
                            data3={data.dataTransportationDocument.departure_date}
                            data4={data.dataTransportationDocument.arrival_date}
                            data5={data.dataTransportationDocument.transportation_weight}
                        />
                    </View>
                </View>
                <TransportationDocumentLocations />
            </View>
        )
    }

    const ShippingConcept = ({ title, data }: any) => {
        return (
            <View style={shippingData.subContainer}>
                <View style={shippingData.titleContainer}>
                    <Text style={shippingData.title}>{title}</Text>
                </View>
                <View style={shippingData.dataContainer}>
                    <Text style={shippingData.data}>{data}</Text>
                </View>
            </View>
        );
    };

    const PaymentConcept = ({ title1, data1, title2, data2 }: any) => {
        return (
            <View style={paymentData.subContainer}>
                <View style={paymentData.conceptContainer} >
                    <Text style={paymentData.concept}>{title1}</Text> <Text style={paymentData.data}> {data1}</Text>
                </View>
                <View style={paymentData.conceptContainer}>
                    <Text style={paymentData.concept}>{title2}</Text> <Text style={paymentData.data}> {data2}</Text>
                </View>
            </View>
        );
    };


    let pages: number;

    return (
        <Document >
            <Page size={'A4'} style={generalStyles.pageStyles} >

                <Text render={({ pageNumber, totalPages }) => {
                    pages = totalPages;
                    return <Text></Text>;
                }} fixed />

                <View fixed style={headerStyles.container}>
                    <Image src={cala} style={headerStyles.image} />
                    <View style={headerStyles.dataHeaderContainer}>
                        <View style={headerStyles.dataIssuingCompanyContainer} >
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
                    <View style={dataCustomer.firstSubContainer}>
                        <View style={dataCustomer.titleContainer} >
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
                    <View style={dataCustomer.secondSubContainer}>
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

                <View fixed style={shippingData.container}>
                    <ShippingConcept title={'ORDEN DE COMPRA'} data={data.dataInvoiceGeneral.purchase_order} />
                    <ShippingConcept title={'VÍA DE TRANSPORTE'} data={''} />
                    <ShippingConcept title={'NÚMERO DE RASTREO'} data={data.dataShippingTracking.track_id} />
                    <ShippingConcept title={'FECHA DE VENCIMIENTO'} data={data.dataInvoiceGeneral.payment_due_date} />
                </View>

                <View fixed style={paymentData.container}>
                    <PaymentConcept
                        title1={'Uso CFDI:'}
                        data1={`${data.dataInvoiceGeneral.cfdi_code || ""} ${data.dataInvoiceGeneral.cfdi_description || ""}`}
                    />
                    <PaymentConcept
                        title1={'MÉTODO DE PAGO:'}
                        data1={`${data.dataInvoiceGeneral.payment_mode_code || ""} - ${data.dataInvoiceGeneral.payment_mode_description || ""}`}
                        title2={'CONDICIONES DE PAGO:'}
                        data2={data.dataInvoiceGeneral.payment_condition_name}
                    />
                    <PaymentConcept
                        title1={'TIPO DE PAGO:'}
                        data1={`${data.dataInvoiceGeneral.payment_method_code || ""} - ${data.dataInvoiceGeneral.payment_method_name || ""}`}
                    />
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

                <TransportationDocument />


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

                <Text style={pageNumberAndTotalPages.text} render={({ pageNumber, totalPages }) => {

                    return <Text debug>{`Page ${pageNumber} / ${totalPages}`}</Text>;
                }} fixed />
            </Page>
        </Document >
    );
};