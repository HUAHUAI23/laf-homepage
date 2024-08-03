import { useTranslation as useTranslationOriginal } from 'react-i18next'

export function useTranslation() {
    return useTranslationOriginal('common')
}