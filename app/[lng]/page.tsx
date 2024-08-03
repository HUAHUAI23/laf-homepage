import Ability from "@/components/homepage/Ability";
import Choice from "@/components/homepage/Choice";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import JoinUs from "@/components/homepage/Joinus";
import Navbar from "@/components/homepage/Navbar";

import { useTranslation } from "../i18n";
import { fallbackLng, languages } from "../i18n/settings";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}): Promise<JSX.Element> {
  // if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng);

  return (
    <>
      <main>
        <div style={{ fontSize: "16px" }} className="homepage">
          <Navbar lng="{lng}" />
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:mx-[48px] lg:max-w-[1200px]">
              <Hero lng="{lng}" />
              <Ability lng="{lng}" />
              <Choice lng="{lng}" />
              <JoinUs lng="{lng}" />
              <Contact lng="{lng}" />
            </div>
          </div>
          <Footer lng="{lng}" />
        </div>
      </main>
    </>
  );
}
