// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from './locales/uzbek.json'
import ruTranslation from './locales/russian.json'
import enTranslation from './locales/english.json'

const lang = localStorage.getItem('lang') || "uz";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
            en: { translation: enTranslation },
        },
        lng: lang,
        fallbackLng: lang,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;