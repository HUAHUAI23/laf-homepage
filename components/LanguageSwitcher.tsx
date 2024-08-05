"use client";
import React, { useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/app/i18n/client";
import { LanguageIcon } from "@/components/CommonIcon";

export function LanguageSwitcher(props: {
  className?: string;
  size?: string;
  color?: string;
  lng: string;
}): JSX.Element {
  const { t } = useTranslation(props.lng);
  const { className, size = "20px", color = "#68686E" } = props;

  const pathname = usePathname();

  const newLang = props.lng === "en" ? "zh" : "en";
  const newPath = useCallback(
    () => pathname.replace(`/${props.lng}`, `/${newLang}`),
    [props.lng, pathname, newLang]
  );

  const darkMode = false;
  return (
    <Link href={newPath()} passHref legacyBehavior>
      <Button
        as="a"
        className={clsx("!rounded !px-2", className)}
        variant="none"
        leftIcon={<LanguageIcon size={size} color={darkMode ? "white" : color} />}
      >
        <p>{t("i18n tip")}</p>
      </Button>
    </Link>
  );
}
