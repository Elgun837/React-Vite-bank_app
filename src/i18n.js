import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationAz from './localization/translationAz.json'
import translationEn from './localization/translationEn.json'

const resources = {
  en: {
    translation: translationEn
  },
  az: {
    translation: translationAz
  }
};

i18n.use(I18NextHttpBackend).use(LanguageDetector).use(initReactI18next).init({
 
  
  fallbackLng: "En",
  debug: true,
  initImmediate: true,
  keySeparator: true,
  nsSeparator: true,
  resources,
  detection:{
    order:["queryString","cookie"],
    cache:["cookie"]
  },

  
  interpolation: {
    escapeValue: true, 
    
    
  },

  react: {
    wait: true
  }
});

export default i18n;
