import { StyleSheet } from "@react-pdf/renderer"

export const shippingDataStyles = ()=>{

    const shippingData = StyleSheet.create({
        container: {
            height:40,
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

    return {
        shippingData
    }
}