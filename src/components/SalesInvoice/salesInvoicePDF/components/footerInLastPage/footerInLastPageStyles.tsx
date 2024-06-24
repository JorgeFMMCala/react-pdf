import { StyleSheet } from "@react-pdf/renderer"


export const footerInLastPageStyles=()=>{

    const footerInLastPage = StyleSheet.create({

        absolute:{
            position:'absolute',
            left:0,
            right:0,
            bottom:0,

        },

        container: {
            width: '90%',
            alignSelf: 'center',

        },
        thirdSections: {
            height:80,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row',
        },
    })

    const bankAccountsData = StyleSheet.create({

        container: {
           height:55,
            borderWidth: 1,
            alignSelf: 'center',
            borderColor: 'black',
            flexDirection: 'column',
        },
        instructionsContainer: {
            height: '25%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 2
        },
        instructionsText: {
            fontSize: 6,
            fontWeight: 700
        },
        bankAccountsContainer: {
            borderTop:1,
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
            // fontFamily: 'Roboto',
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
            fontWeight: 700
        },
        bankAccountText: {
            fontSize: 5
        }
    })

    const satData = StyleSheet.create({

        container: {
            width:'100%',
            position:'relative',
            height:120,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            flexDirection: 'column',
            paddingHorizontal: 10,
            paddingVertical: 10,
            gap: 5
        },
        digitalStamp: {
            flexDirection: 'column',
            height: '35%',
            width: '100%'
        },
        digitalCertificationAndImage: {
            flexDirection: 'row',
            width: '100%',
            height: '65%',
            justifyContent:'flex-end'
        },
        digitalCertification: {
            flexDirection: 'column',
            width: '85%'

        },
        satTitle: {
            fontSize: 6,
            fontWeight: 700
        },
        satText: {
            fontSize: 4
        },
        image: {
            position:'absolute',
            width: 75,
            height: 75,
            bottom:5,
            left:5
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
        },
        text: {
            fontSize: 6,
        }
    })


    return {
        footerInLastPage,
        bankAccountsData,
        satData,
        notes,
        weights,
        totals
    }

}