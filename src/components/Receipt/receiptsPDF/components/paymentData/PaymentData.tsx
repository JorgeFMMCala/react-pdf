import { Text, View } from '@react-pdf/renderer'

export const PaymentData = ({ data, showTranslatedText }: any) => {
  return (
       <View fixed style={{ width: '90%', alignSelf: 'center', height:70, borderWidth: 1, flexDirection: 'row',marginBottom:10 }}>
       <View style={{ width: '50%', height: '100%', flexDirection: 'column', borderRightWidth: 1, }}>
           <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
               <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.paymentData.receiverDataCustomer")}</Text>
           </View>
           <View style={{ height: '75%', justifyContent: 'center', paddingLeft: 3, gap: 3 }}>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.taxId")}: {data.dataReceiptHeader?.customer_rfc || " "}</Text>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.bankName")}: {data.dataReceiptHeader?.customer_bank_name || " "}</Text>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.bankAccount")}: {data.dataReceiptHeader?.customer_account_number || " "}</Text>
           </View>
       </View>
       <View style={{ width: '50%', height: '100%', flexDirection: 'column', }}>
           <View style={{ height: '25%', justifyContent: 'center', borderBottomWidth: 1, paddingLeft: 3 }}>
               <Text style={{ fontSize: 7, fontWeight: 700 }}>{showTranslatedText("reports.receiptsPdf.paymentData.issuerData")}</Text>
           </View>
           <View style={{ height: '75%', justifyContent: 'center', gap: 3, paddingLeft: 3 }}>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.taxId")}:  {data.dataReceiptHeader?.company_rfc || " "}</Text>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.bankName")}: {data.dataReceiptHeader?.company_bank_name || " "}</Text>
               <Text style={{ fontSize: 7 }}>{showTranslatedText("reports.receiptsPdf.paymentData.bankAccount")}: {data.dataReceiptHeader?.company_account_number || " "}</Text>
           </View>
       </View>
   </View>
  )
}
