import { dir } from "i18next";
import { Metadata } from "next";

import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import { ChakraProviders } from "@/providers/chakra/providers";

// import darkTheme from "@/ui/chakraThemeDark";
import "./App.css";

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}): Promise<Metadata> {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "common");
  return {
    title: t("title"),
    description:
      "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  };
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}): Promise<JSX.Element> {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
