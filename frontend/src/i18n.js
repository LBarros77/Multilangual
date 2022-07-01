import i18n from 'i18next';
import {I18nContext, initReactI18next, Translation} from 'react-i18next';
import en from './translations/en.json';
import es from './translations/es.json';
import pt from './translations/pt.json';

const responses = {"en": en, "es": es, "pt": pt};

i18n
.use(initReactI18next)
.init({
    responses,
    lang: 'en',
    keySeparator: false,
    interpolation: {
        escapevalue: false
    }
});

export default i18n;