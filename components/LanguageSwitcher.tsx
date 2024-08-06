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

// for static site export

// export function LanguageSwitcher(props: {
//   className?: string;
//   size?: string;
//   color?: string;
//   lng: string;
// }): JSX.Element {
//   const { t } = useTranslation(props.lng);
//   const { className, size = "20px", color = "#68686E" } = props;
//   const pathname = usePathname();
//   const newLang = props.lng === "en" ? "zh" : "en";

//   const newPath = useCallback(() => {
//     // 移除末尾的 .html（如果存在）
//     const pathWithoutHtml = pathname.replace(/\.html$/, "");

//     // 如果路径末尾是 /en 或 /zh，替换它
//     if (pathWithoutHtml.endsWith("/en") || pathWithoutHtml.endsWith("/zh")) {
//       return `${pathWithoutHtml.slice(0, -2)}${newLang}.html`;
//     }

//     // 如果路径不以语言代码结尾，直接添加新的语言代码
//     return `${pathWithoutHtml}/${newLang}.html`;
//   }, [pathname, newLang]);

//   const darkMode = false;

//   return (
//     <Link href={newPath()} passHref legacyBehavior>
//       <Button
//         as="a"
//         className={clsx("!rounded !px-2", className)}
//         variant="none"
//         leftIcon={<LanguageIcon size={size} color={darkMode ? "white" : color} />}
//       >
//         <p>{t("i18n tip")}</p>
//       </Button>
//     </Link>
//   );
// }
