"use client";
import React from "react";

import { useTranslation } from "@/app/i18n/client";

import styles from "./status.module.scss";

type Props = {
  lng: string;
};

export default function Status(props: Props) {
  const { t } = useTranslation(props.lng);
  return (
    <a
      target="_blank"
      href={""}
      className={"mr-6 flex items-center whitespace-nowrap "}
      rel="noreferrer"
    >
      <span className="mr-2 text-base">{t("ServerStatus")}</span>
      {Array.from({ length: 8 }).map((item, index) => {
        return <div key={index} className={styles["breathing-gradient"]}></div>;
      })}
    </a>
  );
}
