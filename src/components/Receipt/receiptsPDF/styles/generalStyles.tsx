import { StyleSheet, Font } from "@react-pdf/renderer";

// Font.register({
//     family: 'ChineseFont',
//     fonts: [
//         {
//             src: require('../../../assets/fonts/Noto_Sans_SC/NotoSansSC-Light.ttf'),
//             fontWeight: 300,
//         },
//         {
//             src: require('../../../assets/fonts/Noto_Sans_SC/NotoSansSC-Regular.ttf'),
//             fontWeight: 400,
//         },
//         {
//             src: require('../../../assets/fonts/Noto_Sans_SC/NotoSansSC-Medium.ttf'),
//             fontWeight: 500,
//         },
//         {
//             src: require('../../../assets/fonts/Noto_Sans_SC/NotoSansSC-Bold.ttf'),
//             fontWeight: 700,
//         }
//     ]
// })

export const generalStyles = () => {

    const general = StyleSheet.create({
        pageStyles: {
            paddingTop: 20,
            paddingBottom:40,
            position: 'relative',
            fontFamily: 'ChineseFont',
            fontWeight:400,
        },
    })

    const blankSpaceFooter = StyleSheet.create({
        container: {
            minHeight:90,
            maxHeight:90,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
        }
    })

    const blankSpaceLatsFooter = StyleSheet.create({
        container: {
            minHeight:300,
            maxHeight:300,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
        }
    })


    const pageNumberAndTotalPages = StyleSheet.create({
        text: {
            position: 'absolute',
            bottom: 20,
            right: 25,
            fontSize: 5
        }
    })

    const pdfGenerationDate = StyleSheet.create({
        text: {
            position: 'absolute',
            bottom: 20,
            left: 25,
            fontSize: 5
        }
    })

    return {

        general,
        blankSpaceFooter,
        pageNumberAndTotalPages,
        pdfGenerationDate,
        blankSpaceLatsFooter
    }
}