import { EN_US_TRANSLATIONS } from "@/translations/en-us";
import { PT_BR_TRANSLATIONS } from "@/translations/pt-br";

type TranslationObject = { [key: string]: string | TranslationObject };

const translations: Record<string, TranslationObject> = {
  "pt-BR": { ...PT_BR_TRANSLATIONS },
  "en-US": { ...EN_US_TRANSLATIONS },
};

const translate = (key: string, targetLanguage: TranslationObject) => {
  const keys = key.split(".");
  let result: string | TranslationObject | undefined = targetLanguage;

  for (const k of keys) {
    if (typeof result === "object" && result !== null && k in result) {
      result = result[k];
    } else {
      throw new Error(`Translation key '${key}' not found.`);
    }
  }

  if (typeof result !== "string") {
    throw new Error(`Translation key '${key}' does not resolve to a string.`);
  }

  return result;
};

export const useTranslation = (
  language: string = "pt-BR"
): ((key: string) => string) => {
  const targetLanguageTranslation: TranslationObject = translations[language];

  if (!targetLanguageTranslation) {
    throw new Error(`Language '${language}' not supported.`);
  }

  return (key: string) => translate(key, targetLanguageTranslation);
};
