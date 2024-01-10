import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { LocalizationContextType, Translation } from './types';
import { translationsData } from './LocalData';

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined
);

type LocalizationProviderProps = {
  children: ReactNode;
};

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<Translation>({});

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    setTranslations(translationsData[language]);
  }, [language]);

  return (
    <LocalizationContext.Provider
      value={{ language, translations, changeLanguage }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const Localization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('Localization must be used within a LocalizationProvider');
  }
  return context;
};
