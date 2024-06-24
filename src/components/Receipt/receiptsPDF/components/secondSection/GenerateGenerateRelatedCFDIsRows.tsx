import { Text, View } from '@react-pdf/renderer'
import { secondSectionStyles } from './SecondSectionStyles';
import { useFormatNumber } from '../../../../../hooks/useFormatNumber';


export const GenerateGenerateRelatedCFDIsRows = (data: any) => {

    const addRandomNumbers = (data:any) => {
        const generateRandomNumber = (maxDigits:any) => {
            const numDigits = Math.floor(Math.random() * maxDigits) + 1; // 
            let randomNumber = '';
            for (let i = 0; i < numDigits; i++) {
                randomNumber += Math.floor(Math.random() * 10).toString();
            }
            return parseInt(randomNumber, 10);
        };
    
        return data.map((item:any) => {
            const randomPreviousAmount = generateRandomNumber(60);
            const randomPaymentAmount = generateRandomNumber(60);
            const randomAmountOutstanding = generateRandomNumber(60);
    
            return {
                ...item,
                previous_amount: item.previous_amount + randomPreviousAmount,
                payment_amount: item.payment_amount + randomPaymentAmount,
                amount_outstanding: item.amount_outstanding + randomAmountOutstanding,
            };
        });
    };

    const { secondSection } = secondSectionStyles();

    const { setFormatNumber,formatNumberWithLineBreaks } = useFormatNumber();

    const measureTextHeight = (text: string, charPerLine: number) => {
        const row_HEIGHT = 16;
        const lineCount = Math.ceil(text.length / charPerLine);
        return ((lineCount - 1) * 10) + row_HEIGHT;
    };
    const calculateRowHeight = (item: any) => {
        const fiscalFolioHeight = measureTextHeight(`${item.uuid_related || ''}`, 38);
        const taxesTotalHeight = measureTextHeight(`${item.total_tax_amount?.toString() || ''}`, 20);
        const retentionsTotalHeight = measureTextHeight(`${item.total_retention_amount?.toString() || ''}`, 20);
        const previousAmountHeight = measureTextHeight(setFormatNumber({ value: item?.previous_amount || 0 }), 15);
        const paidAmountHeight = measureTextHeight(setFormatNumber({ value: item?.payment_amount || 0 }), 15);
        const pendingAmountHeight = measureTextHeight(setFormatNumber({ value: item?.amount_outstanding || 0 }), 15);
        return Math.max(fiscalFolioHeight, taxesTotalHeight, retentionsTotalHeight, previousAmountHeight, paidAmountHeight, pendingAmountHeight);
    };

    const availableHeight = 145;
    const rowsRemainder: any = [];

    let pageBreakInMissingProducts = false;
    let remainder = 0;
    let currentHeight = 0;
    let currentIndex = 0;

    const renderRows = () => {

        const rows: any = [];
        const rowsPerPage: any = [];
        let count = 0;

        let pageBreak = false;

        data.forEach((item: any, index: any) => {
            const rowHeight = calculateRowHeight(item);
            if (currentHeight + rowHeight < availableHeight) {
                count++;
            } else {
                rowsPerPage.push(count);
                currentHeight = 0;
                count = 1;
                pageBreakInMissingProducts = true;
            }
            currentHeight += rowHeight;

        });
        remainder = count;
        const fullChunks = rowsPerPage.length;

        for (let i = 0; i < fullChunks; i++) {
            const rowsNumber = rowsPerPage[i];
            const chunk = data.slice(currentIndex, currentIndex + rowsNumber);
            rows.push(
                <View key={i} break={pageBreak}>
                    {chunk.map((item: any, index: any) => (
                        <View key={index} style={secondSection.conceptsContainer}>
                            <Text style={secondSection.conceptFiscalFolio}>{item?.uuid_related || ' '}</Text>
                            <Text style={secondSection.conceptTaxesTotal}>{item?.total_tax_amount ? setFormatNumber({ value: item?.total_tax_amount || 0, decimals: 6 }) : 0}</Text>
                            <Text style={secondSection.conceptRetentionsTotal}>{item?.total_retention_amount ? setFormatNumber({ value: item?.total_retention_amount || 0, decimals: 6 }) : 0}</Text>
                            <Text style={secondSection.conceptPreviousAmount}>{item?.previous_amount ? formatNumberWithLineBreaks(item?.previous_amount || 0 ) : 0}</Text>
                            <Text style={secondSection.conceptPaidAmount}>{item?.payment_amount ? formatNumberWithLineBreaks(item?.payment_amount || 0)  : 0}</Text>
                            <Text style={secondSection.conceptPendingAmount}>{item?.amount_outstanding ? formatNumberWithLineBreaks(item?.amount_outstanding || 0): 0}</Text>
                        </View>
                    ))}
                </View>
            );
            currentIndex += rowsNumber;
            pageBreak = true;
        }
        if (remainder > 0) {
            const chunk = data.slice(currentIndex);
            rowsRemainder.push(
                <View key={fullChunks} break={pageBreakInMissingProducts}>
                    {chunk.map((item: any, index: any) => (
                        <View key={index} style={secondSection.conceptsContainer}>
                            <Text style={secondSection.conceptFiscalFolio}>{item?.uuid_related || ' '}</Text>
                            <Text style={secondSection.conceptTaxesTotal}>{item?.total_tax_amount ? setFormatNumber({ value: item?.total_tax_amount || 0, decimals: 6 }) : 0}</Text>
                            <Text style={secondSection.conceptRetentionsTotal}>{item?.total_retention_amount ? setFormatNumber({ value: item?.total_retention_amount || 0, decimals: 6 }) : 0}</Text>
                            <Text style={secondSection.conceptPreviousAmount}>{item?.previous_amount ? formatNumberWithLineBreaks(item?.previous_amount || 0 ) : 0}</Text>
                            <Text style={secondSection.conceptPaidAmount}>{item?.payment_amount ? formatNumberWithLineBreaks(item?.payment_amount || 0)  : 0}</Text>
                            <Text style={secondSection.conceptPendingAmount}>{item?.amount_outstanding ? formatNumberWithLineBreaks(item?.amount_outstanding || 0): 0}</Text>
                        </View>
                    ))}
                </View>
            );
        }

        return { rows, rowsRemainder };
    };

    return { renderRows }
}
