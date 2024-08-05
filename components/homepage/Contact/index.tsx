import React from "react";

import { useTranslation } from "@/app/i18n";

type Props = { lng: string };

const Contact = async (props: Props): Promise<JSX.Element> => {
  const { t } = await useTranslation(props.lng, "common");
  return (
    <div className="py-12 pb-2 text-center lg:pb-24 lg:pt-0">
      <a
        href={""}
        target="_blank"
        className=" bg-primary rounded px-16 py-5 text-2xl text-white"
        rel="noreferrer"
      >
        {t(`HomePage.NavBar.contact`)}
      </a>
    </div>
  );
};

export default Contact;
