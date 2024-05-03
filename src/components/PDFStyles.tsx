import {  StyleSheet, } from '@react-pdf/renderer';


 export const pdfStyles=()=>{

    const generalStyles = StyleSheet.create({
        pageStyles: {
            paddingVertical: 30,
            position: 'relative'

        }
    })


    const headerStyles = StyleSheet.create({
        container: {
            height: 100,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },

        image: {
            width: '35%',
            height: '100%',
            borderRightWidth: 1,
            borderRightColor: 'black'
        },

        dataHeaderContainer: {
            width: '65%',
            height: '100%',
            flexDirection: 'row'
        },

        dataIssuingCompanyContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            padding: 20
        },

        textHeaderStyles: {
            fontSize: 6,
            paddingVertical: 3,
        }
    })

    const dataCustomer = StyleSheet.create({
        container: {
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'row'
        },
        subContainer: {
            width: '50%',
            height: '100%',
            flexDirection: 'column',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: 'black',
        },
        titleContainer: {
            width: '100%',
            height: '20%',
            paddingLeft: 10,
            paddingTop: 5,
            borderBottomWidth: 1,
            borderColor: 'black',

        },

        title: {
            fontSize: 6,
            fontWeight: 'bold'
        },

        dataContainer: {
            width: '100%',
            height: '80%',
            flexDirection: 'row'
        },
        firstContainer: {
            width: '45%',
            padding: 10,

        },
        secondContainer: {
            width: '55%',
            padding: 10,

        },
        data: {
            fontSize: 6,
            paddingVertical: 3
        }
    })


    const productsData = StyleSheet.create({
        tableContainer: {
            width: '90%',
            alignSelf: 'center',
        },
        titleRow: {
            flexDirection: 'row',
            alignSelf: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1
        },

        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            backgroundColor: 'rgb(229, 229, 229)',
            paddingVertical: 5
        },
        conceptTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '26%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        quantityTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '12%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        retentionTitleCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '14%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10,
            borderRightWidth: 1,
            borderColor: 'black'
        },
        conceptCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '26%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
        quantityCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '12%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
        retentionCell: {
            fontSize: 5.5,
            fontWeight: 'bold',
            width: '14%', // Ancho de cada celda,
            padding: 2,
            paddingLeft: 10
        },
    });

    const blackSpaceFooter=StyleSheet.create({
        container:{
            height: 105,
            width: '90%',
            alignSelf: 'center',
            backgroundColor:'white',
        }
    })



    const blankFooter = StyleSheet.create({

        section: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
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
            padding: 5
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
            justifyContent: 'space-around',

        },
        messageContainer: {
            width: '30%',
            paddingLeft: 9,
            paddingTop: 15
        },
        text: {
            fontSize: 6,

        },
        message: {
            fontSize: 9
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
            fontSize: 6,
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



        text: {
            fontSize: 6,
        }
    })


    const footerInLastPage = StyleSheet.create({

        container: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            alignSelf: 'center'

        },


        thirdSections: {
            height: 80,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'row',
        },





    })




    const bankAccountsData = StyleSheet.create({

        container: {
            width: '90%',
            height: 55,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            flexDirection: 'column',
        },

        instructionsContainer: {
            height: '25%',
            width: '100%',
            borderBottomWidth: 1,
            borderColor: 'black',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 2
        },

        instructionsText: {
            fontSize: 6,
        },

        bankAccountsContainer: {
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
            fontSize: 6
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

            fontSize: 5
        },

        bankAccountText: {
            fontSize: 5
        }
    })

    const satData = StyleSheet.create({

        container: {
            width: '90%',
            height: 120,
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            flexDirection: 'column',
            paddingHorizontal: 10,
            paddingVertical: 20,
            gap: 5
        },

        digitalStamp: {
            flexDirection: 'column',
            height: '35%',
            width: '100%'
        },

        digitalCertificationAndImage: {
            flexDirection: 'row',
            gap: 13,
            width: '100%',
            height: '65%'
        },

        digitalCertification: {
            flexDirection: 'column',
            width: '90%'

        },

        satTitle: {
            fontSize: 6,
            fontWeight: 'heavy'
        },

        satText: {
            fontSize: 4
        },
        image: {
            width: 55,
            height: 55,
        }




    })


    return {
        generalStyles,
        headerStyles,
        dataCustomer,
        blankFooter,
        notes,
        weights,
        totals,
        footerInLastPage,
        bankAccountsData,
        satData,
        blackSpaceFooter,
        productsData


    }


 }