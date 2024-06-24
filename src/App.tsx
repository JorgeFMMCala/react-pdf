import i18next from "i18next";
import { AppPaymentComplement } from "./components/Receipt/AppReceipt";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_zh from "./translations/zh/global.json";
import { I18nextProvider } from "react-i18next";
import { AppSalesInvoices } from "./components/SalesInvoice/AppSalesInvoice";


i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") !== null ? localStorage.getItem("language")?.toString() : 'en',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    zh: {
      global: global_zh,
    }
  }
});


function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <AppSalesInvoices />
    </I18nextProvider>
  );
}

export default App;
