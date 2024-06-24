import { Image, Text, View } from '@react-pdf/renderer'
import { blankFooterStyles } from '../blankFooter/blankFooterStyles';
import { footerInLastPageStyles } from './footerInLastPageStyles';
import { useFormatNumber } from '../../../../../hooks/useFormatNumber';

export const FooterInLastPage = ({ data, showTranslatedText }: any) => {

    const { footerInLastPage, bankAccountsData, notes, satData, totals, weights } = footerInLastPageStyles();

    const { blankFooter } = blankFooterStyles();

    const { setFormatNumber } = useFormatNumber();

    return (
        <View style={footerInLastPage.container} >

            {/* Cuentas de banco */}
            <View style={bankAccountsData.container} >
                <View style={bankAccountsData.instructionsContainer}>
                    <Text style={bankAccountsData.instructionsText}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.pleaseMakePaymentToTheFollowingAccounts")}</Text>
                </View>
                <View style={bankAccountsData.bankAccountsContainer}>
                    <View style={bankAccountsData.bankAccountContainerFirstAccount}>
                        <Text style={bankAccountsData.bankAccountTitle}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.firstAccount")}</Text>
                        <View style={bankAccountsData.bankAccountDataContainer}>
                            <View style={bankAccountsData.bankAccountData}>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.accountAlias")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_primary_account_alias || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.interbankKey")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_primary_interbank_key || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>Swift</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_primary_swift_code || ' '}</Text>
                                </View>
                            </View>
                            <View style={bankAccountsData.bankAccountData}>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.bankName")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_primary_bank_name || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.account")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_primary_account_number || ' '}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={bankAccountsData.bankAccountContainerSecondAccount}>
                        <Text style={bankAccountsData.bankAccountTitle}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.secondaryAccount")}</Text>
                        <View style={bankAccountsData.bankAccountDataContainer}>
                            <View style={bankAccountsData.bankAccountData}>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.accountAlias")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_secondary_account_alias || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.interbankKey")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_secondary_interbank_key || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>Swift</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_secondary_swift_code || ' '}</Text>
                                </View>
                            </View>
                            <View style={bankAccountsData.bankAccountData}>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.bankName")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_secondary_bank_name || ' '}</Text>
                                </View>
                                <View style={bankAccountsData.bankAccountField}>
                                    <Text style={bankAccountsData.bankAccountConcept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.account")}</Text>
                                    <Text style={bankAccountsData.bankAccountText}>{data.dataInvoiceGeneral.company_secondary_account_number || ' '}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Datos del sat */}
            <View style={satData.container} >
                <View style={satData.digitalStamp}>
                    <Text style={satData.satTitle} >{showTranslatedText("reports.salesInvoicePdf.satData.digitalStamp")}:</Text>
                    <Text style={satData.satText}> {data.dataInvoiceGeneral.seal_CFDI || ' '}</Text>
                </View>
                <View style={satData.digitalCertificationAndImage} >
                    <View style={satData.digitalCertification}>
                        <Text style={satData.satTitle}>{showTranslatedText("reports.salesInvoicePdf.satData.digitalCertification")}:</Text>
                        <Text style={satData.satText}> {data.dataInvoiceGeneral.original_string_SAT || ' '}</Text>
                    </View>
                </View>
                <Image
                    src={data.dataInvoiceGeneral.fiscalQr ? data.dataInvoiceGeneral.fiscalQr : ' '}
                    style={satData.image} />

            </View>

            {/* Pie de pagina en ultima pagina */}
            <View style={footerInLastPage.thirdSections} >
                <View style={notes.container}>
                    <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.notes")}:</Text>
                    <Text style={{ fontSize: 6 }}>{data.dataInvoiceGeneral.notes}</Text>
                </View>
                <View style={weights.container}>
                    <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.weights")}:</Text>
                    <br />
                    <View style={weights.weights} >
                        <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.grossWeight")}: ({data.dataTransportationDocument?.weight_unit || ' '})</Text>
                        <Text style={weights.text}>{data.dataShippingTracking.gross_weight || ' '}</Text>
                    </View>
                    <View style={weights.weights}>
                        <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.footer.netWeight")}:</Text>
                        <Text style={weights.text}>{data.dataShippingTracking.net_weight || ' '}</Text>
                    </View>
                </View>
                <View style={totals.container}>
                    <View>
                        <View style={totals.totalField}>
                            <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.taxes")}:</Text>
                            <Text style={blankFooter.text}>{setFormatNumber({ value: data.dataInvoiceGeneral.tax_amount || 0 }) || ' '}</Text>
                        </View>
                        <View style={totals.totalField}>
                            <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.retentions")}:</Text>
                            <Text style={blankFooter.text}>{setFormatNumber({ value: data.dataInvoiceGeneral.retention_amount || 0 }) || ' '}</Text>
                        </View>
                        <View style={totals.totalField}>
                            <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.discounts")}:</Text>
                            <Text style={blankFooter.text}>{setFormatNumber({ value: data.dataInvoiceGeneral.discount_amount || 0 }) || ' '}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={totals.totalField}>
                            <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.subtotal")}:</Text>
                            <Text style={blankFooter.text}>{setFormatNumber({ value: data.dataInvoiceGeneral.subtotal_amount || 0 }) || ' '}</Text>
                        </View>
                        <View style={totals.totalField}>
                            <Text style={blankFooter.concept}>{showTranslatedText("reports.salesInvoicePdf.lastPageFooter.total")}:</Text>
                            <Text style={blankFooter.text}>{setFormatNumber({ value: data.dataInvoiceGeneral.total_amount || 0 }) || ' '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
