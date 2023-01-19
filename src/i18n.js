import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "subtitle": "Videogames develop",
      "parrafo": "Small army of one person with the goal of making video games",
      "nota": "Games that say \"Play Web\" can be played in the browser",
      "play": "Play on",
      "colaboracion": "collaboration",
      "telegram": "Telegram channel",
      "estilo": "estilo css"
    }
  },
  es: {
    translation: {
      "subtitle": "Desarrollo de videojuegos",
      "parrafo": "Pequeño ejercito de una persona con el objetivo de hacer videojuegos",
      "nota": "Los juegos que dicen \"Jugar web\" se pueden jugar en el navegador",
      "play": "Jugar en",
      "colaboracion": "colaboracion",
      "telegram": "Canal de Telegram",
      "estilo": "css style"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;