'use client'

import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
        </div>
    )
}