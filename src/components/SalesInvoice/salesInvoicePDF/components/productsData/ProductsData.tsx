import { Text, View, Page, Document, StyleSheet, } from '@react-pdf/renderer';
import { productsDataStyles } from './productsDataStyles';
const { productsData } = productsDataStyles();

export const ProductsData = ({ data, showTranslatedText, rowsNumber }: any) => {

    const measureTextHeight = (text: any, charPerLine: any) => {
        const row_HEIGHT = 10;
        const lineCount = Math.ceil(text.length / charPerLine);
        return row_HEIGHT * lineCount;
    };
    const calculateRowHeight = (item: any) => {
        const conceptHeight = measureTextHeight(`${item.item_description || ''}`, 60);
        const quantityHeight = measureTextHeight((item.quantity?.toString() || ''), 18);
        const unitHeight = measureTextHeight(item.unit_code || '', 18);
        const priceHeight = measureTextHeight((item.price_by_unit?.toString() || ''), 18);
        const taxHeight = measureTextHeight(`${item.tax_name || ''} ${item.tax_percent || ''}`, 18);
        const retentionHeight = measureTextHeight(`${item.retention_name || ''} ${item.retention_percent || ''}`, 24);
        const discountHeight = measureTextHeight((item.discount?.toString() || ''), 18);
        return Math.max(conceptHeight, quantityHeight, unitHeight, priceHeight, taxHeight, retentionHeight, discountHeight);
    };
    

    const availableHeight = 425;
    const rowsRemainder: any = [];

    let tableHeader = <View style={productsData.titleRow} >
        <Text style={productsData.conceptTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.concept")}</Text>
        <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.quantity")}</Text>
        <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.unit")}</Text>
        <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.price")}</Text>
        <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.tax")}</Text>
        <Text style={productsData.retentionTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.retention")}</Text>
        <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.discount")}(%)</Text>
    </View>

    let pageBreakInMissingProducts= false;
    let remainder = 0;
    let currentHeight = 0;
    let currentIndex = 0;

    const renderRows = () => {
        const rows: any = [];
        const rowsPerPage: any = [];
        let count = 0;

        let pageBreak = false;

        data.invoiceDetails.forEach((item: any, index: any) => {
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
            const chunk = data.invoiceDetails.slice(currentIndex, currentIndex + rowsNumber);
            rows.push(
                <View key={i} break={pageBreak}>
                    {chunk.map((item: any, index: any) => (
                        <View style={productsData.row} key={index}>
                            <Text style={productsData.conceptCell}>{item.item_description || ' '} </Text>
                            <Text style={productsData.quantityCell}>{item.quantity || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.unit_code || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.price_by_unit || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.tax_name || ' '} {item.tax_percent || ' '}</Text>
                            <Text style={productsData.retentionCell}>{item.retention_name || ' '} {item.retention_percent || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.discount || ' '}</Text>
                        </View>
                    ))}
                </View>
            );
            currentIndex += rowsNumber;
            pageBreak = true;
        }
        if (remainder > 0) {
            const chunk = data.invoiceDetails.slice(currentIndex);
            rowsRemainder.push(
                <View key={fullChunks} break>
                    {chunk.map((item: any, index: any) => (
                        <View style={productsData.row} key={index}>
                            <Text style={productsData.conceptCell}>{item.item_description || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.quantity || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.unit_code || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.price_by_unit || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.tax_name || ' '} {item.tax_percent || ' '}</Text>
                            <Text style={productsData.retentionCell}>{item.retention_name || ' '} {item.retention_percent || ' '}</Text>
                            <Text style={productsData.quantityCell}>{item.discount || ' '}</Text>
                        </View>
                    ))}
                </View>
            );
        }
        return rows;
    };

    return (
        <>
            <View style={productsData.tableContainer}>
                <View fixed style={productsData.titleRow}>
                    <Text style={productsData.conceptTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.concept")}</Text>
                    <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.quantity")}</Text>
                    <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.unit")}</Text>
                    <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.price")}</Text>
                    <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.tax")}</Text>
                    <Text style={productsData.retentionTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.retention")}</Text>
                    <Text style={productsData.quantityTitleCell}>{showTranslatedText("reports.salesInvoicePdf.itemsTable.discount")}(%)</Text>
                </View>
                {renderRows()}
            </View>
            <View style={productsData.tableContainer} break={pageBreakInMissingProducts}>
                {pageBreakInMissingProducts && (tableHeader)}
                <View >
                    {rowsRemainder}
                </View>
            </View>
            {availableHeight - currentHeight < 220 && (
                <View break>
                </View>
            )}

        </>
    );
};



