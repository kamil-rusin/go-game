import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { supportedLanguages, defaultLanguage } from './supportedLanguages'
import { getCurrentLanguage } from './utils'

const fallbackLng = defaultLanguage.key
const resources = {}
supportedLanguages.map(lang => {
  resources[lang.key] = { translation: lang.translationFile }
})

const config = {
  debug: __DEV__,

  fallbackLng,

  lng: getCurrentLanguage(supportedLanguages),

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  resources,

  nsSeparator: false,
  keySeparator: false,

  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  }
}

i18n.use(initReactI18next).init(config)

export default i18n
