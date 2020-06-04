import en from './locales/en/translation.json'
import enMoment from 'moment/locale/en-ca'

import pl from './locales/pl/translation.json'
import plMoment from 'moment/locale/pl'

export const supportedLanguages = [
  {
    key: 'en',
    translationFile: en,
    momentSetting: enMoment
  },
  {
    key: 'pl',
    translationFile: pl,
    momentSetting: plMoment
  }
]

export const defaultLanguage = supportedLanguages[0]
