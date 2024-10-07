import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"
import ruJSON from "../locale/ru.json"
import uzJSON from "../locale/uz.json"
import enJSON from "../locale/en.json"

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        ru: { ...ruJSON },
        uz: { ...uzJSON },
    }, // Where we're gonna put translations' files

    lng: "en",     // Set the initial language of the App
    fallbackLng: "en", // If the language detector fails, it will use this language
})

export default i18n