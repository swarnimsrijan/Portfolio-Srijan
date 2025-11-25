import { createI18n } from "vue-i18n";
import { autoTranslate } from "@/services/translator";


const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {}
});

i18n.global.t = async function (key: string) {
  const locale = i18n.global.locale.value;
  return await autoTranslate(key, locale);
};

export default i18n;
