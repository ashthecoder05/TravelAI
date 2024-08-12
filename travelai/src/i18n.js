import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "hello": "Hello",
          // Add more translations
        }
      },
      es: {
        translation: {
          "welcome": "Bienvenido",
          "hello": "Hola",
          // Add more translations
        }
      },
      // Add more languages
    },
    lng: "en", // Set default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;