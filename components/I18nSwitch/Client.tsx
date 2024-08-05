"use client";
import { useTranslation } from "@/app/i18n/client";

export function LanguageSwitcher(lng: string): JSX.Element {
  const { i18n } = useTranslation(lng);

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("zh")}>中文</button>
    </div>
  );
}
