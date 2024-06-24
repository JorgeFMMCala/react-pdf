import { StyleSheet } from "@react-pdf/renderer"

export const merchandiseDetailsStyles=()=>{

    const merchandiseDetailsData = StyleSheet.create({

        productServiceKeyConcept:{
            width: '20%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        descriptionConcept:{
            width: '30%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        quantityConcept:{
            width: '15%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        unitCodeConcept:{
            width: '20%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        weightInKGConcept:{
            width: '15%', 
            fontSize: 5.5, 
            borderRightWidth: 1, 
            padding: 4, 
            borderBottomWidth: 1, 
            fontWeight: 500
        },
        productServiceKeyData:{
            width: '20%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 5, 
            borderBottomWidth: 1,
        },
        descriptionData:{
            width: '30%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 5, 
            borderBottomWidth: 1,
        },
        quantityData:{
            width: '15%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 5, 
            borderBottomWidth: 1,
        },
        unitCodeData:{
            width: '20%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 5, 
            borderBottomWidth: 1,
        },
        weightInKGData:{
            width: '15%', 
            fontSize: 5, 
            borderRightWidth: 1, 
            padding: 5, 
            borderBottomWidth: 1,
        },

    })

    return {
        merchandiseDetailsData
    }

}