import * as RNLocalize from 'react-native-localize'
import Translation from './index'
import moment from 'moment'
import { supportedLanguages, defaultLanguage } from './supportedLanguages'
import { getCurrentLanguage } from './utils'

const initTranslation = () => {
  RNLocalize.addEventListener('change', onLanguageChange)
  updateMomentLocale()
}

const onLanguageChange = () => {
  const language = getCurrentLanguage(supportedLanguages)
  Translation.changeLanguage(language)
  updateMomentLocale()
}

const updateMomentLocale = () => {
  const currentLanguage = getCurrentLanguage(supportedLanguages)
  const calendarConfig = {
    calendar: {
      sameDay: `[${Translation.t('Today')}]`,
      nextDay: `[${Translation.t('Tomorrow')}]`,
      nextWeek: 'dddd',
      lastDay: `[${Translation.t('Yesterday')}]`,
      lastWeek: `[${Translation.t('Last')}] dddd`,
      sameElse: 'DD/MM/YYYY'
    }
  }

  let languageConfig = {
    key: defaultLanguage.key,
    setting: defaultLanguage.momentSetting
  }
  supportedLanguages.map((lang) => {
    if (currentLanguage.includes(lang.key)) {
      languageConfig = { key: lang.key, setting: lang.momentSetting }
    }
  })

  moment.defineLocale(languageConfig.key, {
    ...languageConfig.setting,
    ...calendarConfig
  })
}

export default initTranslation
