import { autoTranslate } from "./translator";
import i18n from "@/i18n";

export async function ta(text: string) {
  const locale = i18n.global.locale.value;
  return locale === "en" ? text : autoTranslate(text, locale);
}
