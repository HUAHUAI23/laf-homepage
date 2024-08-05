"use client";
import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { clsx } from "clsx";

import { useTranslation } from "@/app/i18n/client";
import { LanguageIcon } from "@/components/CommonIcon";

export function LanguageSwitcher(props: {
  className?: string;
  size?: string;
  color?: string;
  lng: string;
}): JSX.Element {
  const { t, i18n } = useTranslation(props.lng);
  const { className, size = "20px", color = "#68686E" } = props;

  const darkMode = useColorMode().colorMode === "dark";

  return (
    <Button
      className={clsx("!rounded !px-2", className)}
      onClick={(event) => {
        event?.preventDefault();
        i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
      }}
      variant="none"
      leftIcon={<LanguageIcon size={size} color={darkMode ? "white" : color} />}
    >
      <p>{t("i18n tip")}</p>
    </Button>
  );
}
