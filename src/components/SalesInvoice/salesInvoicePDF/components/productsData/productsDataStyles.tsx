import { StyleSheet } from "@react-pdf/renderer";

export const productsDataStyles=()=>{

    const productsData = StyleSheet.create({
        tableContainer: {
            width: '90%',
            alignSelf: 'center',
        },
        titleRow: {
            height:16,
            flexDirection: 'row',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            backgroundColor: 'rgb(229, 229, 229)',
        },
        row: {
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: 'rgb(245, 245, 245)',
        },
        conceptTitleCell: {
            fontSize: 6,
            fontWeight: 'bold',
            width: '26%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        quantityTitleCell: {
            fontSize: 6,
            fontWeight: 'bold',
            width: '12%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        retentionTitleCell: {
            fontSize: 6,
            fontWeight: 'bold',
            width: '14%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        conceptCell: {
            fontSize: 5.5,
            width: '26%',
            padding: 2,
            paddingLeft: 10
        },
        quantityCell: {
            fontSize: 5.5,
            width: '12%',
            padding: 2,
            paddingLeft: 10
        },
        retentionCell: {
            fontSize: 5.5,
            width: '14%',
            padding: 2,
            paddingLeft: 10
        },
    });

    return {
        productsData
    }
}