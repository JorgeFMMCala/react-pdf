import { StyleSheet } from "@react-pdf/renderer";

export const transportationDocumentStyles=()=>{

    const transportationDocumentData = StyleSheet.create({

        container: {
            width: '90%',
            height:150,
            alignSelf: 'center',
            borderTopWidth: 1,
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
            fontWeight: 700
        },
        firstRow: {
            height: '35%',
            borderBottomWidth: 1,
            flexDirection: 'row'
        },
        secondRow: {
            height: '50%',
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
            fontWeight: 700 
        },
        subContainer: {
            flexDirection: 'column',
            gap: 3,
            padding: 2,
        },
        field: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap:5
        },
        concept:{
            fontSize: 5, 
            fontWeight: 700
        }
    })

    const transportationDocumentFirstSection = StyleSheet.create({
        container: {
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
            minHeight:20,
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
            fontWeight: 700
        },
        tableContainer: {
            minHeight:20,
            width: '100%',
            flexDirection: 'column'
        },
        titleRow: {
            flexDirection: 'row',
            minHeight:20,
        },

        firstConceptField:{
            width: '6%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        rfcConcept:{
            width: '10%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        countryConcept:{
            width: '10%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        stateConcept:{
            width: '14%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        cityConcept:{
            width: '14%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        addressConcept:{
            width: '19%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        postalCodeConcept:{
            width: '7%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        dateConcept:{
            width: '12%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        distanceConcept:{
            width: '8%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 700
        },
        subtitle: {
            fontSize: 5.5,
            borderRightWidth: 1,
            padding: 4,
            borderBottomWidth: 1
        },
        row: {
            minheight:20,
            flexDirection: 'row',
        },
        firstDataField:{
            width: '6%', 
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
            width: '19%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        postalCodeData:{
            width: '7%', 
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
            width: '8%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1,
        },
    })

    return {        
        transportationDocumentData,
        transportationDocumentSecondSection,
        transportationDocumentFirstSection,
        transportationDocumentLocationsData
    }
}