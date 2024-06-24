export const useFormatNumber = () => {
    type FormatNumberProps = {
        value: number,
        decimals?: number
    }

    const setFormatNumber = ({ value, decimals = 2 }: FormatNumberProps) => {
        const sign = value < 0 ? '-' : '';
        // Convertir el valor absoluto para facilitar el formateo
        value = Math.abs(value);
        let string = "." + value.toFixed(decimals).slice(-decimals);
        if (value === 0) return "$0." + value.toFixed(decimals).slice(-decimals);
        let valueStr = parseInt(value.toString()).toString();
        while (valueStr.length > 3) {
            string = "," + valueStr.slice(-3) + string;
            valueStr = valueStr.slice(0, valueStr.length - 3);
        }
        string = valueStr + string;
        string = sign + "$" + string;

        return string;
    }

    const setFormatNumberFromTable = (value: number) => {
        const [integerPart, decimalPart] = value.toFixed(2).split(".");
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const formattedString = `$${formattedIntegerPart}.${decimalPart}`;
        return formattedString;
    }


    const formatNumberWithLineBreaks = (value: number, decimals = 2, breakAfter = 15) => {
        const formattedString = setFormatNumber({ value, decimals });
        let result = '';
        for (let i = 0; i < formattedString.length; i += breakAfter) {
            result += formattedString.slice(i, i + breakAfter) + '\n';
        }
        return result.trim();
    }

    return {
        setFormatNumber,
        setFormatNumberFromTable,
        formatNumberWithLineBreaks
    }
}
