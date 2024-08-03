"use client";

import { PropsWithChildren, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import i18n from "./i18n";

function LanguageHandler({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
}

export function I18nProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    i18n.changeLanguage(i18n.language);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageHandler>{children}</LanguageHandler>
    </I18nextProvider>
  );
}
