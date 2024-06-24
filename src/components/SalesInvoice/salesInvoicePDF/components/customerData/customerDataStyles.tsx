import { StyleSheet } from "@react-pdf/renderer"


export const customerDataStyles = () => {

    const customerData = StyleSheet.create({
        container: {
            height:90,
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
            fontWeight: 700
        },
        dataContainer: {
            width: '100%',
            height: '80%',
            flexDirection: 'row'
        },
        firstContainer: {
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 5,

        },
        secondContainer: {
            width: '55%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 5,
            gap: 5
        },
        field: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        concept: {
            fontSize: 6,
            fontWeight: 700
        },
        data: {
            fontSize: 6,
        }
    })


    return {
        customerData
    }
}