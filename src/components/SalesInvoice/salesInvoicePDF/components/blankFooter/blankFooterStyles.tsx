import { StyleSheet, Font } from "@react-pdf/renderer";

export const blankFooterStyles=()=>{

    const blankFooter = StyleSheet.create({

        absolute: {
            
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
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
            padding: 5,
            flexDirection:'column'
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
            alignItems:'center',
            paddingTop: 15
        },
        concept: {
            fontSize: 6,
            fontWeight: 700
        },
        text: {
            fontSize: 6,
        },
        message: {
            fontSize: 8,
            fontWeight: 500
        }
    })

    return {
        blankFooter
    }

}