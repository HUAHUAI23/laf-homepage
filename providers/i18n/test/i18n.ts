import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    // 从服务器上拿翻译文件  /locales/{{lng}}/{{ns}}.json 等于 public/locales/en/common.json
    // 客服端发起网络请求 获取 翻译文件
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  })

export default i18n
