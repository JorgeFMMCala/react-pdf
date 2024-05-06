
import { Document, Image, Page, Text, View, } from '@react-pdf/renderer';
import cala from '../assets/cala.png';
import { pdfStyles } from './PDFStyles';

export const PDF = ({ data }: any) => {

    const { bankAccountsData,
        blankFooter,
        dataCustomer,
        footerInLastPage,
        generalStyles,
        headerStyles,
        notes,
        satData,
        totals,
        weights,
        blackSpaceFooter,
        productsData,
        shippingData,
        paymentData,
        pageNumberAndTotalPages,
        transportationDocumentData,
        transportationDocumentSecondSection,
        transportationDocumentFirstSection,
        transportationDocumentLocationsData,
        pdfGenerationDate,
        merchandiseDetailsData
    } = pdfStyles();

    const MerchandiseDetails = () => {

        return (
            <View style={transportationDocumentLocationsData.container}>
                <View style={transportationDocumentLocationsData.titleContainer}>
                    <Text style={transportationDocumentLocationsData.title}>DETALLE MERCANCIAS</Text>
                </View>
                <View style={transportationDocumentLocationsData.tableContainer} >
                    <View fixed style={transportationDocumentLocationsData.titleRow}>
                        <Text style={merchandiseDetailsData.productServiceKeyConcept} >CLAVE PRODUCTO SERVICIO</Text>
                        <Text style={merchandiseDetailsData.descriptionConcept} >DESCRIPCIÓN</Text>
                        <Text style={merchandiseDetailsData.quantityConcept} >CANTIDAD</Text>
                        <Text style={merchandiseDetailsData.unitCodeConcept} >CÓDIGO DE UNIDAD</Text>
                        <Text style={merchandiseDetailsData.weightInKGConcept} >PESO EN KG</Text>
                    </View>
                    {data.dataMerchandiseDetails.map((item: any, index: any) => {
                        return (
                            <View style={transportationDocumentLocationsData.row} key={index} wrap={false}>
                                <Text style={merchandiseDetailsData.productServiceKeyData} >{item.product_service_key}</Text>
                                <Text style={merchandiseDetailsData.descriptionData} >{item.description}</Text>
                                <Text style={merchandiseDetailsData.quantityData} >{item.quantity}</Text>
                                <Text style={merchandiseDetailsData.unitCodeData} >{item.unit_code}</Text>
                                <Text style={merchandiseDetailsData.weightInKGData} >{item.weight_in_kg}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        )
    }


    const TransportationDocumentLocations = () => {

        return (
            <View style={transportationDocumentLocationsData.container}>
                <View style={transportationDocumentLocationsData.titleContainer}>
                    <Text style={transportationDocumentLocationsData.title}>ORIGEN / DESTINO</Text>
                </View>
                <View style={transportationDocumentLocationsData.tableContainer} >
                    <View fixed style={transportationDocumentLocationsData.titleRow}>
                        <Text style={transportationDocumentLocationsData.firstConceptField} ></Text>
                        <Text style={transportationDocumentLocationsData.rfcConcept} >RFC</Text>
                        <Text style={transportationDocumentLocationsData.countryConcept} >PAIS</Text>
                        <Text style={transportationDocumentLocationsData.stateConcept} >ESTADO</Text>
                        <Text style={transportationDocumentLocationsData.cityConcept} >CIUDAD</Text>
                        <Text style={transportationDocumentLocationsData.addressConcept} >DIRECCIÓN</Text>
                        <Text style={transportationDocumentLocationsData.postalCodeConcept} >CÓDIGO POSTAL</Text>
                        <Text style={transportationDocumentLocationsData.dateConcept} >FECHA</Text>
                        <Text style={transportationDocumentLocationsData.distanceConcept} >DISTANCIA</Text>
                    </View>
                    {data.dataTransportationDocumentLocations.map((item: any, index: any) => {
                        return (
                            <View style={transportationDocumentLocationsData.row} key={index} wrap={false}>
                                <Text style={transportationDocumentLocationsData.firstDataField} >{item.location_type}</Text>
                                <Text style={transportationDocumentLocationsData.rfcData} >{item.rfc}</Text>
                                <Text style={transportationDocumentLocationsData.countryData} >{item.country_name}</Text>
                                <Text style={transportationDocumentLocationsData.stateData} >{item.state_name}</Text>
                                <Text style={transportationDocumentLocationsData.cityData} >{item.city_name}</Text>
                                <Text style={transportationDocumentLocationsData.addressData} >{item.street}</Text>
                                <Text style={transportationDocumentLocationsData.postalCodeData} >{item.postal_code}</Text>
                                <Text style={transportationDocumentLocationsData.dateData} >{item.date_hour_departure_arrival}</Text>
                                <Text style={transportationDocumentLocationsData.distanceData} >{item.distance}</Text>
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
                    <Text style={transportationDocumentSecondSection.title}>{title}</Text>
                </View>
                <View style={transportationDocumentSecondSection.subContainer}>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept1}</Text>
                        <Text style={{ fontSize: 5 }}>{data1}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept2}</Text>
                        <Text style={{ fontSize: 5 }}>{data2}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept3}</Text>
                        <View style={{ width: '50%', display: 'flex', textAlign: 'right' }}>
                            <Text style={{ fontSize: 5, }} >{data3}</Text>
                        </View>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept4}</Text>
                        <Text style={{ fontSize: 5 }}>{data4}</Text>
                    </View>
                    <View style={transportationDocumentSecondSection.field}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept5}</Text>
                        <Text style={{ fontSize: 5 }}>{data5}</Text>
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
                        <Text style={{ width: width2, fontSize: 5, fontFamily: 'Roboto', fontWeight: 500 }}>{concept1}</Text> <Text style={{ fontSize: 5 }}>{data1}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontFamily: 'Roboto', fontWeight: 500 }}>{concept2}</Text> <Text style={{ fontSize: 5 }}>{data2}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontFamily: 'Roboto', fontWeight: 500 }}>{concept3}</Text> <Text style={{ fontSize: 5 }}>{data3}</Text>
                    </View>
                    <View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontFamily: 'Roboto', fontWeight: 500 }}>{concept4}</Text> <Text style={{ fontSize: 5 }}>{data4}</Text>
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
                            title={'Información del seguro del vehículo'}
                            concept1={'Aseguradora:'}
                            concept2={'Póliza del seguro: '}
                            concept3={'Fecha de expiración de seguro: '}
                            data1={data.dataTransportationDocument.insurance_company}
                            data2={data.dataTransportationDocument.insurance_policy}
                            data3={data.dataTransportationDocument.insurance_expiration_date}
                        />
                        <TransportationDocumentSecondSection
                            title={'Información del transporte'}
                            concept1={'Tipo de conductor:'}
                            concept2={'RFC del conductor:'}
                            concept3={'Nombre del conductor:'}
                            concept4={'Licencia:'}
                            concept5={'CURP:'}
                            data1={`${data.dataTransportationDocument.driver_type_code || " "} - ${data.dataTransportationDocument.driver_type_name || " "}`}
                            data2={data.dataTransportationDocument.driver_rfc}
                            data3={data.dataTransportationDocument.driver_name}
                            data4={data.dataTransportationDocument.driver_license}
                            data5={data.dataTransportationDocument.driver_curp}
                        />
                    </View>
                </View>
                <TransportationDocumentLocations />
                <MerchandiseDetails />
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

    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');

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
                            <Text style={headerStyles.textHeaderStylesBold}>{data.dataIssuingCompany?.business_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.street || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.city_name || " "}, {data.dataIssuingCompany?.state_name || " "} {data.dataIssuingCompany?.postal_code || " "}, {data.dataIssuingCompany?.country_name || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>RFC: {data.dataIssuingCompany?.rfc || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.tax_regime_code || " "} {data.dataIssuingCompany?.tax_regime_description || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.email || " "}</Text>
                            <Text style={headerStyles.textHeaderStyles}>{data.dataIssuingCompany?.phone_number || " "}</Text>
                        </View>
                        <View style={headerStyles.dataIssuingCompanyContainer} >
                            <View style={headerStyles.dataInvoiceGeneralSubcontainer}>
                                <Text style={headerStyles.textHeaderStylesBold}>TIPO DE DOCUMENTO:</Text>
                                <Text style={headerStyles.textHeaderStylesBold}>{data.dataInvoiceGeneral?.invoice_doc_type_name || " "}</Text>
                            </View>
                            <View style={headerStyles.dataInvoiceGeneralSubcontainer}>
                                <Text style={headerStyles.textHeaderStylesBold}>NÚMERO DE FOLIO:</Text>
                                <Text style={headerStyles.textHeaderStyles}>{data.dataInvoiceGeneral?.sales_invoice_name || " "}</Text>
                            </View>
                            <View style={headerStyles.dataInvoiceGeneralSubcontainer}>
                                <Text style={headerStyles.textHeaderStylesBold}>NÚMERO FISCAL:</Text>
                                <Text style={headerStyles.textHeaderStyles}>{data.dataInvoiceGeneral?.uuid || " "}</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={headerStyles.textHeaderStylesBold}>FECHA Y HORA DE TIMBRADO:</Text>
                                <Text style={headerStyles.textHeaderStyles}>{data.dataInvoiceGeneral?.signing_date || " "}</Text>
                            </View>
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
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>RFC:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.company_rfc}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>{data.dataInvoiceGeneral.tax_regime_code} </Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.tax_regime_description}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>CORREO:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_email}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>TEL:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_phone_number}</Text>
                                </View>
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
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>RFC:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.company_rfc}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>{data.dataInvoiceGeneral.tax_regime_code} </Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.tax_regime_description}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>CORREO:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_email}</Text>
                                </View>
                                <View style={dataCustomer.field}>
                                    <Text style={dataCustomer.concept}>TEL:</Text>
                                    <Text style={dataCustomer.data}>{data.dataInvoiceGeneral.customer_phone_number}</Text>
                                </View>
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
                        <Text style={productsData.conceptTitleCell}>CONCEPTO</Text>
                        <Text style={productsData.quantityTitleCell}>CANTIDAD</Text>
                        <Text style={productsData.quantityTitleCell}>UNIDAD</Text>
                        <Text style={productsData.quantityTitleCell}>PRECIO</Text>
                        <Text style={productsData.quantityTitleCell}>IMPUESTO</Text>
                        <Text style={productsData.retentionTitleCell}>RETENCIÓN</Text>
                        <Text style={productsData.quantityTitleCell}>DESCUENTO</Text>
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
                                        <Text>{data.dataInvoiceGeneral.notes}</Text>
                                    </View>
                                    <View style={blankFooter.weightContainer} >
                                        <Text style={blankFooter.text}>PESOS:</Text>
                                        <View style={blankFooter.weights} >
                                            <Text style={blankFooter.text}>PESO BRUTO: ({data.dataTransportationDocument.weight_unit})</Text>
                                            <Text style={blankFooter.text}>100</Text>
                                        </View>
                                        <View style={blankFooter.weights} >
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
                            <Text>{data.dataInvoiceGeneral.notes}</Text>
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
                                    <Text style={totals.concept}>IMPUESTOS:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.tax_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={totals.concept}>RETENCIONES:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.retention_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={totals.concept}>DESCUENTOS:</Text>
                                    <Text style={totals.text}>{data.dataInvoiceGeneral.discount_amount}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={totals.totalField}>
                                    <Text style={blankFooter.concept}>SUBTOTAL:</Text>
                                    <Text style={blankFooter.text}>{data.dataInvoiceGeneral.subtotal_amount}</Text>
                                </View>
                                <View style={totals.totalField}>
                                    <Text style={blankFooter.concept}>TOTAL:</Text>
                                    <Text style={blankFooter.text}>{data.dataInvoiceGeneral.total_amount}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={pageNumberAndTotalPages.text} render={({ pageNumber, totalPages }) => {

                    return <Text debug>{`Page ${pageNumber} / ${totalPages}`}</Text>;
                }} fixed />

                <Text style={pdfGenerationDate.text} fixed>{currentTime} {currentDate}</Text>
            </Page>
        </Document >
    );
};

