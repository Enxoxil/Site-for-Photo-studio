import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation';
import ua from './locales/ua/translation';
import ru from './locales/ru/translation';

export const resources = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ru },
};
export const appLocales = Object.keys(resources);

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: appLocales,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: { escapeValue: false },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'span'],
      transSupportBasicHtmlNodes: true,
    }
  })
  .then();

export default i18next;
