"use client";
import React from "react";
import { useColorMode } from "@chakra-ui/react";

import { useTranslation } from "@/app/i18n/client";
import { COLOR_MODE } from "@/constants";

type Props = { lng: string };

const Choice = (props: Props) => {
  const { t } = useTranslation(props.lng);
  const { colorMode } = useColorMode();
  const darkMode = colorMode === COLOR_MODE.dark;

  return (
    <div className="mt-[120px]">
      <h2 className="mb-[60px]"> {t(`HomePage.Choice.title`)}</h2>
      <div className="mx-[16px] space-y-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_01.svg" alt="logo1" />
          </div>
          <div className="w-3/4 ">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.open`)}</h4>
            <p className="text-xl font-light"> {t(`HomePage.Choice.openSub`)}</p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_02.svg" alt="icon_02" />
          </div>
          <div className="w-3/4">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.fast`)}</h4>
            <p className="text-xl font-light">{t(`HomePage.Choice.fastSub`)}</p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_03.svg" alt="icon_03" />
          </div>
          <div className="w-3/4">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.private`)}</h4>
            <p className="text-xl font-light">{t(`HomePage.Choice.privateSub`)}</p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_04.svg" alt="icon_04" />
          </div>
          <div className="w-3/4">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.simple`)}</h4>
            <p className="text-xl font-light">{t(`HomePage.Choice.simpleSub`)}</p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_05.svg" alt="icon_05" />
          </div>
          <div className="w-3/4">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.cheap`)}</h4>
            <p className="text-xl font-light">{t(`HomePage.Choice.cheapSub`)}</p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-lafDark-300"
              : "flex justify-between rounded-md border border-solid  p-[40px] hover:bg-[#F9F9F9]"
          }
        >
          <div className="w-1/4">
            <img src="/homepage/icon_06.png" className="h-12 w-12" alt="icon_06" />
          </div>
          <div className="w-3/4">
            <h4 className="mb-2 text-2xl font-bold">{t(`HomePage.Choice.service`)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
