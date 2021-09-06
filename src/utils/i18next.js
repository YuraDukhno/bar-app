import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            Home: "Home",
            "Sign Up": "Sign Up",
            "Sign In": "Sign In",
            Schedule: "Schedule",
            Staff: "Staff",
            Tips: "Tips",
          },
        },
      },
      ru: {
        translation: {
          description: {
            Home: "Главная",
            "Sign Up": "Зарегистрироваться",
            "Sign In": "Войти",
            Schedule: "Расписание",
            Staff: "Сотрудники",
            Tips: "Чаевые",
          },
        },
      },
    },
  });

export default i18n;