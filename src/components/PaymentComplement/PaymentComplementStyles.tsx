import { StyleSheet } from "@react-pdf/renderer"


export const paymentComplementPDFStyles = () => {

    const generalStyles = StyleSheet.create({

        page:{
            paddingVertical: 20,
        }

    })

    const firstSection= StyleSheet.create({

        container:{
            width:'90%',
            height:115,
            flexDirection:'row',
            gap:10,
            alignSelf:'center',
            justifyContent:'space-between'
        },

        image:{
            height:'100%',
            width:'25%'
        },

        companyData:{
            height:'100%',
            width:'30%',
            flexDirection:'column',
            gap:5,
            textAlign:'center',
            justifyContent:'center'
        },

        companyDataText:{
            fontSize:6
        },

        paymentData:{
            height:'100%',
            width:'35%',
            flexDirection:'column',
            gap:10,
            justifyContent:'center',

        },

        paymentDataTitleContainer:{
            width:'100%',
            height:'30%',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:'black'
        },

        paymentDataTitle:{
            fontSize:12,

        },

        paymentDataSubContainer:{
            flexDirection:'column',
            width:'100%',
            height:'50%',
            borderWidth:1,
            borderColor:'black'
        },

        paymentDataSubTitleContainer:{
            height:'33%',
            borderBottomWidth:1,
            borderColor:'black',
            paddingVertical:4,
            justifyContent:'center',
            alignItems:'center'
        },

        paymentDataSubTitle:{
            fontSize:8,

        },

        paymentDataSubSubContainer:{
            width:'100%',
            height:'66%',
            flexDirection:'row',
        },
        seriesAndFolioContainer:{
            height:'100%',
            width:'30%',
            flexDirection:'column',
            alignItems:'center',
            borderRightWidth:1,
            borderColor:'black',
            justifyContent:'space-around'
        },

        DateAndTime:{
            height:'100%',
            width:'70%',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-around'
        }

    })

    return {
        firstSection,
        generalStyles
    }

}