import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { transportationDocumentStyles } from './transportationDocumentStyles';
import { merchandiseDetailsStyles } from './merchandiseDetailsStyles';
import { useDates } from '../../../../../hooks/useDates';

const { transportationDocumentData,
    transportationDocumentFirstSection,
    transportationDocumentLocationsData,
    transportationDocumentSecondSection
} = transportationDocumentStyles();

const { merchandiseDetailsData } = merchandiseDetailsStyles();


const MerchandiseDetails = ({ data, showTranslatedText }: any) => {

    return (
        <View style={transportationDocumentLocationsData.container}>
            <View style={transportationDocumentLocationsData.titleContainer} fixed>
                <Text style={transportationDocumentLocationsData.title}>{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.mechandiseDetails")}</Text>
            </View>
            <View style={transportationDocumentLocationsData.tableContainer} >
                <View  style={transportationDocumentLocationsData.titleRow} fixed>
                    <Text style={merchandiseDetailsData.productServiceKeyConcept} >{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.productServiceKey")}</Text>
                    <Text style={merchandiseDetailsData.descriptionConcept} >{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.description")}</Text>
                    <Text style={merchandiseDetailsData.quantityConcept} >{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.quantity")}</Text>
                    <Text style={merchandiseDetailsData.unitCodeConcept} >{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.unitCode")}</Text>
                    <Text style={merchandiseDetailsData.weightInKGConcept} >{showTranslatedText("reports.salesInvoicePdf.merchandiseDetailsData.weightInKg")}</Text>
                </View>
                {data.dataMerchandiseDetails.map((item: any, index: any) => {
                    return (
                        <View style={transportationDocumentLocationsData.row} key={index} wrap={false}>
                            <Text style={merchandiseDetailsData.productServiceKeyData} >{item.product_service_key || ' '}</Text>
                            <Text style={merchandiseDetailsData.descriptionData} >{item.description || ' '}</Text>
                            <Text style={merchandiseDetailsData.quantityData} >{item.quantity || ' '}</Text>
                            <Text style={merchandiseDetailsData.unitCodeData} >{item.unit_code || ' '}</Text>
                            <Text style={merchandiseDetailsData.weightInKGData} >{item.weight_in_kg || ' '}</Text>
                        </View>
                    );
                })
                }
            </View>
        </View>
    )
}


const TransportationDocumentLocations = ({ data, showTranslatedText }: any) => {

    return (
        <View style={transportationDocumentLocationsData.container}>
            <View style={transportationDocumentLocationsData.titleContainer} fixed>
                <Text style={transportationDocumentLocationsData.title}>{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.ORIGIN/DESTINY")}</Text>
            </View>
            <View style={transportationDocumentLocationsData.tableContainer} >
                <View  style={transportationDocumentLocationsData.titleRow} fixed>
                    <Text style={transportationDocumentLocationsData.firstConceptField} ></Text>
                    <Text style={transportationDocumentLocationsData.rfcConcept} >RFC</Text>
                    <Text style={transportationDocumentLocationsData.countryConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.country")}</Text>
                    <Text style={transportationDocumentLocationsData.stateConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.state")}</Text>
                    <Text style={transportationDocumentLocationsData.cityConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.city")}</Text>
                    <Text style={transportationDocumentLocationsData.addressConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.street")}</Text>
                    <Text style={transportationDocumentLocationsData.postalCodeConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.postalCode")}</Text>
                    <Text style={transportationDocumentLocationsData.dateConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.date")}</Text>
                    <Text style={transportationDocumentLocationsData.distanceConcept} >{showTranslatedText("reports.salesInvoicePdf.transportationDocumentLocationsData.distance")}</Text>
                </View>
                {data.dataTransportationDocumentLocations.map((item: any, index: any) => {
                    return (
                        <View style={transportationDocumentLocationsData.row} key={index} wrap={false}>
                            <Text style={transportationDocumentLocationsData.firstDataField} >{item.location_type || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.rfcData} >{item.rfc || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.countryData} >{item.country_name || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.stateData} >{item.state_name || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.cityData} >{item.city_name || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.addressData} >{item.street || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.postalCodeData} >{item.postal_code || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.dateData} >{item.date_hour_departure_arrival || ' '}</Text>
                            <Text style={transportationDocumentLocationsData.distanceData} >{item.distance || ' '}</Text>
                        </View>
                    );
                })
                }
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
                <Text style={transportationDocumentSecondSection.title}>{title || ' '}</Text>
            </View>
            <View style={transportationDocumentSecondSection.subContainer}>
                <View style={transportationDocumentSecondSection.field}>
                    <Text style={transportationDocumentSecondSection.concept}>{concept1 || ' '}</Text>
                    <Text style={{ fontSize: 5 }}>{data1 || ' '}</Text>
                </View>
                <View style={transportationDocumentSecondSection.field}>
                    <Text style={transportationDocumentSecondSection.concept}>{concept2 || ' '}</Text>
                    <Text style={{ fontSize: 5 }}>{data2 || ' '}</Text>
                </View>
                <View style={transportationDocumentSecondSection.field}>
                    <Text style={transportationDocumentSecondSection.concept}>{concept3 || ' '}</Text>
                    <View style={{ width: '50%', display: 'flex', textAlign: 'right' }}>
                        <Text style={{ fontSize: 5, }} >{data3 || ' '}</Text>
                    </View>
                </View>
                <View style={transportationDocumentSecondSection.field}>
                    <Text style={transportationDocumentSecondSection.concept}>{concept4 || ' '}</Text>
                    <Text style={{ fontSize: 5 }}>{data4 || ' '}</Text>
                </View>
                <View style={transportationDocumentSecondSection.field}>
                    <View style={{ width: '50%' }}>
                        <Text style={transportationDocumentSecondSection.concept}>{concept5 || ' '}</Text>
                    </View>
                    <Text style={{ fontSize: 5 }}>{data5 || ' '}</Text>
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
                    <Text style={{ width: width2, fontSize: 5, fontWeight: 700 }}>{concept1 || ' '}</Text> <Text style={{ fontSize: 5 }}>{data1 || ' '}</Text>
                </View>
                {
                    data2 && (<View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontWeight: 700 }}>{concept2 || ' '}</Text> <Text style={{ fontSize: 5 }}>{data2 || ' '}</Text>
                    </View>)
                }
                {
                    data3 && (<View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontWeight: 700 }}>{concept3 || ' '}</Text> <Text style={{ fontSize: 5 }}>{data3 || ' '}</Text>
                    </View>)
                }
                {
                    data4 && (<View style={transportationDocumentFirstSection.field}>
                        <Text style={{ width: width2, fontSize: 5, fontWeight: 700 }}>{concept4 || ' '}</Text> <Text style={{ fontSize: 5 }}>{data4 || ' '}</Text>
                    </View>)
                }
            </View>
        </View>
    )
}




export const TransportationDocument = ({ data, showTranslatedText }: any) => {

    const { TimeConverter } = useDates();

    return (
        <View >
            <View fixed style={transportationDocumentData.container} >
                <View style={transportationDocumentData.titleContainer} >
                    <Text style={transportationDocumentData.title}>{showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.transportationDocument")}</Text>
                </View>
                <View style={transportationDocumentData.firstRow}>
                    <TransportationDocumentFirstSection
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.SCTPermit")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.SCTPermitNumber")}:`}
                        data1={data.dataTransportationDocument?.permission_sct || ' '}
                        data2={data.dataTransportationDocument?.permission_number_sct || ' '}
                        width1={'35%'}
                        width2={'55%'} />
                    <TransportationDocumentFirstSection
                        concept1={'Id ccp:'}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.guideNumber")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.guideDescription")}:`}
                        concept4={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.guideWeight")}:`}
                        data1={data.dataTransportationDocument?.id_cpp || ' '}
                        data2={data.dataTransportationDocument?.identification_guide_number || ' '}
                        data3={data.dataTransportationDocument?.identification_guide_description || ' '}
                        data4={data.dataTransportationDocument?.identification_guide_weight || ' '}
                        width1={'32%'}
                        width2={'30%'} />
                    <TransportationDocumentFirstSection
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.totalMerchandise")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.totalGrossWeight")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.weightUnit")}:`}
                        data1={data.dataTransportationDocument?.total_merchandise || ' '}
                        data2={data.dataTransportationDocument?.gross_total_weight || ' '}
                        data3={data?.dataTransportationDocument?.weight_unit || ' '}
                        width1={'18%'}
                        width2={'50%'} />
                    <View style={{ width: '15%', height: '100%' }}>
                        <View style={transportationDocumentFirstSection.container}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ width: '100%', fontSize: 5, fontWeight: 700 }}>{`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.transportationDocumentDate")}:`}</Text> <Text style={{ fontSize: 5 }}>{TimeConverter(data.dataInvoiceGeneral.sales_invoice_date)?.toString() || ' '}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={transportationDocumentData.secondRow}>
                    <TransportationDocumentSecondSection
                        title={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.transportInformation")}:`}
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.transportationCode")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.totalDistance")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.departureDate")}:`}
                        concept4={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.arrivalDate")}:`}
                        concept5={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.transportationWeight")}:`}
                        data1={data.dataTransportationDocument?.transportation_code || ' '}
                        data2={data.dataTransportationDocument?.total_distance || ' '}
                        data3={data.dataTransportationDocument?.departure_date || ' '}
                        data4={data.dataTransportationDocument?.arrival_date || ' '}
                        data5={data.dataTransportationDocument?.transportation_weight || ' '}
                    />
                    <TransportationDocumentSecondSection
                        title={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.vehicleInformation")}:`}
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.vehicleConfiguration")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.plateNumber")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.plateNumber")}:`}
                        concept4={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.modelAndYear")}:`}
                        concept5={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.vehicleIdentificationNumber")}:`}
                        data1={data.dataTransportationDocument?.vehicle_config_code || ' '}
                        data2={data.dataTransportationDocument?.plate_number || ' '}
                        data3={data.dataTransportationDocument?.vin || ' '}
                        data4={`${data.dataTransportationDocument?.model_name || ' '} - ${data.dataTransportationDocument?.model_year || ' '}`}
                        data5={data.dataTransportationDocument?.motor_number || ' '}
                    />
                    <TransportationDocumentSecondSection
                        title={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.vehicleInsuranceInformation")}:`}
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.insurance")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.insurancePolicy")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.InsuranceExpirationDate")}:`}
                        data1={data.dataTransportationDocument?.insurance_company || ' '}
                        data2={data.dataTransportationDocument?.insurance_policy || ' '}
                        data3={data.dataTransportationDocument?.insurance_expiration_date || ' '}
                    />
                    <TransportationDocumentSecondSection
                        title={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.driverInformation")}:`}
                        concept1={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.driverType")}:`}
                        concept2={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.driverRFC")}:`}
                        concept3={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.driverName")}:`}
                        concept4={`${showTranslatedText("reports.salesInvoicePdf.transportationDocumentData.license")}:`}
                        concept5={'CURP:'}
                        data1={`${data.dataTransportationDocument?.driver_type_code || " "} - ${data.dataTransportationDocument?.driver_type_name || " "}`}
                        data2={data.dataTransportationDocument?.driver_rfc || ' '}
                        data3={data.dataTransportationDocument?.driver_name || ' '}
                        data4={data.dataTransportationDocument?.driver_license || ' '}
                        data5={data.dataTransportationDocument?.driver_curp || ' '}
                    />
                </View>
            </View>
            {
                data.dataTransportationDocumentLocations &&
                <TransportationDocumentLocations data={data} showTranslatedText={showTranslatedText} break />

            }
            {
                data.dataMerchandiseDetails &&
                <MerchandiseDetails data={data} showTranslatedText={showTranslatedText} break />

            }
        </View>
    )
}
