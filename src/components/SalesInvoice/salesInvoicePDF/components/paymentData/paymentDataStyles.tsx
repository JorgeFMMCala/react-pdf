import { StyleSheet } from "@react-pdf/renderer"

export const paymentDataStyles=()=>{

    const paymentData = StyleSheet.create({

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
            fontWeight: 700
        },
        data: {
            fontSize: 5,
        }
    })

    return {
        paymentData
    }
}