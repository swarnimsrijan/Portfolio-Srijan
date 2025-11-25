export async function autoTranslate(text: string, targetLang: string): Promise<string> {
  if (targetLang === "en") return text;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`;

  const res = await fetch(url);
  const data = await res.json();

  return data?.responseData?.translatedText || text;
}
