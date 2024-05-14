import { StyleSheet, Font } from '@react-pdf/renderer';
import RobotoMedium from "../assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: RobotoRegular,
            fontWeight: 400,
        },
        {
            src: RobotoMedium,
            fontWeight: 500,
        },
        {
            src: RobotoBold,
            fontWeight: 700,
        }
    ]
})

export const pdfStyles = () => {

    const generalStyles = StyleSheet.create({
        pageStyles: {
            paddingVertical: 40,
            position: 'relative'

        }
    })

    const headerStyles = StyleSheet.create({
        container: {
            height: 120,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        image: {
            width: '30%',
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
            paddingHorizontal: 20,
            paddingVertical: 10,
            gap: 2
        },
        dataInvoiceGeneralSubcontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        textHeaderStyles: {
            fontSize: 7,
            paddingVertical: 3,
            fontFamily: 'Roboto',
        },
        textHeaderStylesBold: {
            fontSize: 7,
            paddingVertical: 3,
            fontFamily: 'Roboto',
            fontWeight: 700
        }
    })

    const dataCustomer = StyleSheet.create({
        container: {
            height: 90,
            width: '90%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        firstSubContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            borderLeftWidth: 1,
            borderRightWidth: .5,
            borderColor: 'black',
        },
        secondSubContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            borderLeftWidth: .5,
            borderRightWidth: 1,
            borderColor: 'black',
        },
        titleContainer: {
            width: '100%',
            height: '25%',
            justifyContent: 'center',
            paddingLeft: 10,
            borderBottomWidth: 1,
            borderColor: 'black',
        },
        title: {
            fontSize: 7,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        dataContainer: {
            width: '100%',
            height: '80%',
            flexDirection: 'row'
        },
        firstContainer: {
            width: '45%',
            padding: 10,
            gap: 3

        },
        secondContainer: {
            width: '55%',
            padding: 10,
            gap: 3
        },
        field: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        concept: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        data: {
            fontSize: 6,
            fontFamily: 'Roboto'
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
            backgroundColor: 'rgb(229, 229, 229)',
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            backgroundColor: 'rgb(245, 245, 245)',
            paddingVertical: 2
        },
        conceptTitleCell: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            width: '26%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        quantityTitleCell: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            width: '12%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        retentionTitleCell: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            width: '14%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        conceptCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '26%',
            padding: 2,
            paddingLeft: 10
        },
        quantityCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '12%',
            padding: 2,
            paddingLeft: 10
        },
        retentionCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '14%',
            padding: 2,
            paddingLeft: 10
        },
    });

    const blackSpaceFooter = StyleSheet.create({
        container: {
            height: 115,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
        }
    })

    const blankFooter = StyleSheet.create({

        section: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 50,
            alignSelf: 'center',
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
            justifyContent: 'space-between',

        },
        messageContainer: {
            width: '30%',
            paddingLeft: 9,
            paddingTop: 15
        },
        concept: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        text: {
            fontSize: 6,
        },
        message: {
            fontSize: 9,
            fontFamily: 'Roboto',
            fontWeight: 500
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
            fontSize: 7,
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
        concept: {
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 700
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
            bottom: 50,
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
            borderWidth: 1,
            alignSelf: 'center',
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
            fontFamily: 'Roboto',
            fontWeight: 700
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
            fontSize: 6,
            fontFamily: 'Roboto',
            fontWeight: 700
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
            fontSize: 5,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        bankAccountText: {
            fontSize: 5
        }
    })

    const satData = StyleSheet.create({

        container: {
            width: '90%',
            height: 120,
            borderLeftWidth: 1,
            borderRightWidth: 1,
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
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        satText: {
            fontSize: 4
        },
        image: {
            width: 55,
            height: 55,
        }
    })

    const shippingData = StyleSheet.create({
        container: {
            height: 40,
            width: '90%',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        subContainer: {
            width: '25%',
            height: '100%',
            flexDirection: 'column',
            borderRightWidth: 1,
            borderColor: 'black',
        },
        titleContainer: {
            height: '40%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderColor: 'black',
        },
        title: {
            fontSize: 7,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        dataContainer: {
            height: '60%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        data: {
            fontSize: 6
        }
    })


    const paymentData = StyleSheet.create({

        container: {
            height: 40,
            width: '90%',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        subContainer: {
            width: '33.39%',
            height: '100%',
            flexDirection: 'column',
            borderRightWidth: 1,
            borderColor: 'black',
            padding: 5
        },
        conceptContainer: {
            width: '100%',
            height: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        concept: {
            fontSize: 5,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        data: {
            fontSize: 5,
            fontFamily: 'Roboto',
        }
    })

    const pageNumberAndTotalPages = StyleSheet.create({
        text: {
            position: 'absolute',
            bottom: 20,
            right: 25,
            fontSize: 5
        }
    })

    const pdfGenerationDate = StyleSheet.create({
        text: {
            position: 'absolute',
            bottom: 20,
            left: 25,
            fontSize: 5
        }
    })

    const transportationDocumentData = StyleSheet.create({

        container: {
            width: '90%',
            height: 120,
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'column'
        },
        titleContainer: {
            width: '100%',
            height: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'black'
        },
        title: {
            fontSize: 7,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        firstRow: {
            height: '35%',
            borderBottomWidth: 1,
            flexDirection: 'row'
        },
        secondRow: {
            height: '55%',
            flexDirection: 'row'
        }
    })

    const transportationDocumentSecondSection = StyleSheet.create({
        container: {
            width: '25%',
            borderColor: 'black',
            borderRightWidth: 1,
            flexDirection: 'column'
        },
        titleContainer: {
            borderBottomWidth: 1,
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:{
            fontSize: 6, 
            fontFamily: 'Roboto', 
            fontWeight: 500 
        },
        subContainer: {
            flexDirection: 'column',
            gap: 3,
            padding: 2,
        },
        field: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        concept:{
            fontSize: 5, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        }
    })

    const transportationDocumentFirstSection = StyleSheet.create({
        container: {
            height: '100%',
            flexDirection: 'column',
            gap: 3,
            padding: 2,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        field: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })

    const transportationDocumentLocationsData = StyleSheet.create({

        container: {
            width: '90%',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderColor: 'black'
        },
        titleContainer: {
            width: '100%',
            paddingVertical: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderBottomColor: 'black'
        },
        title: {
            fontSize: 7,
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        tableContainer: {
            width: '100%',
            flexDirection: 'column'
        },
        titleRow: {
            flexDirection: 'row',
        },

        firstConceptField:{
            width: '5%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        rfcConcept:{
            width: '10%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        countryConcept:{
            width: '10%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        stateConcept:{
            width: '14%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        cityConcept:{
            width: '14%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        addressConcept:{
            width: '14%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        postalCodeConcept:{
            width: '10%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        dateConcept:{
            width: '12%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        distanceConcept:{
            width: '11%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        subtitle: {
            fontSize: 5.5,
            borderRightWidth: 1,
            padding: 4,
            borderBottomWidth: 1
        },
        row: {
            flexDirection: 'row',
        },
        firstDataField:{
            width: '5%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        rfcData:{
            width: '10%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        countryData:{
            width: '10%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        stateData:{
            width: '14%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        cityData:{
            width: '14%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        addressData:{
            width: '14%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        postalCodeData:{
            width: '10%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        dateData:{
            width: '12%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        distanceData:{
            width: '11%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
    })


    const merchandiseDetailsData = StyleSheet.create({

        productServiceKeyConcept:{
            width: '20%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        descriptionConcept:{
            width: '30%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        quantityConcept:{
            width: '15%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        unitCodeConcept:{
            width: '20%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        weightInKGConcept:{
            width: '15%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontFamily: 'Roboto', 
            fontWeight: 500
        },
        productServiceKeyData:{
            width: '20%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        descriptionData:{
            width: '30%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        quantityData:{
            width: '15%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        unitCodeData:{
            width: '20%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
        weightInKGData:{
            width: '15%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },

    })

    return {
        generalStyles,
        headerStyles,
        dataCustomer,
        blankFooter,
        notes,
        weights,
        totals,
        footerInLastPage,
        bankAccountsData,
        satData,
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
    }
}