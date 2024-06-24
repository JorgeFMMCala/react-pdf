import { StyleSheet } from "@react-pdf/renderer"

export const relatedCfdisStyles = () =>{

    const relatedCfdis= StyleSheet.create({
        container: {
            width: '90%',
            alignSelf: 'center',
        },
        titleContainer: {
            width: '100%',
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: 'black'
        },
        title: {
            fontSize: 7,
            fontWeight: 700
        },
        titleRow: {
            height:18,
            flexDirection: 'row',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            backgroundColor: 'rgb(229, 229, 229)',
        },
        conceptTitleCell: {
            fontSize: 5,
            fontWeight: 'bold',
            width: '25%',
            padding: 3,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        row: {
            height:15,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            backgroundColor: 'rgb(245, 245, 245)',
            paddingVertical: 2
        },
        conceptCell: {
            fontSize: 5.5,
            width: '25%',
            padding: 2,
            paddingLeft: 10
        },
    })

    return {
        relatedCfdis 
    }
}