import { StyleSheet } from "@react-pdf/renderer"

export const headerStyles=()=>{

    const header = StyleSheet.create({
        container: {
            height:120,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row',
        },
        image: {
            width: '30%',
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: 'black'
        },
        dataHeaderContainer: {
            width: '70%',
            height: '100%',
            flexDirection: 'row',
        },
        dataIssuingCompanyContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            paddingHorizontal: 10,
            paddingVertical: 10,
            gap: 1
        },
        dataInvoiceGeneralSubcontainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        textHeaderStyles: {
            fontSize: 7,
            paddingVertical: 3,
            fontWeight:400
        },
        textHeaderStylesBold: {
            fontSize: 7,
            paddingVertical: 3,
            fontWeight: 700
        }
    })

    return {
        header
    }
}