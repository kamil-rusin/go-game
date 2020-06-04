import * as RNLocalize from 'react-native-localize'

export const getCurrentLanguage = supportedLanguages => {
  const fallback = { languageTag: 'en', isRTL: false }
  const translations = {}
  supportedLanguages.map(lang => {
    translations[lang.key] = lang.translationFile
  })
  const { languageTag } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback
  return languageTag
}
