export type Translation = {
  [key: string]: string;
};

export type Translations = {
  [key: string]: Translation;
};

export type LocalizationContextType = {
  language: string;
  translations: Translation;
  changeLanguage: (newLanguage: string) => void;
};
