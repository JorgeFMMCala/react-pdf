import { StyleSheet } from "@react-pdf/renderer";

export const secondSectionStyles=()=>{

    const secondSection = StyleSheet.create({
        container:{
            flexDirection: 'column', gap: 5
        },

        titleContainer:{
            width: '90%', alignSelf: 'center' 
        },

        title:{
            fontSize: 8, fontWeight: 700
        },

        conceptsContainer:{
            width: '90%', alignSelf: 'center', borderLeftWidth:1,borderBottomWidth:1,borderRightWidth:1, flexDirection: 'row', justifyContent:'center'
        },

        conceptFiscalFolio:{
            borderRightWidth: 1, width: '30%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
        conceptTaxesTotal:{
            borderRightWidth: 1, width: '17%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
        conceptRetentionsTotal:{
            borderRightWidth: 1, width: '17%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
        conceptPreviousAmount:{
            borderRightWidth: 1, width: '14%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
        conceptPaidAmount:{
            borderRightWidth: 1, width: '14%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
        conceptPendingAmount:{
            width: '14%',fontSize: 7, fontWeight: 700,textAlign:'center',padding: 2,
        },
    });

    return {
        secondSection
    }
}