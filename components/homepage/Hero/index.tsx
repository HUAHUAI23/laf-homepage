"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useTranslation } from "@/app/i18n/client";
import { site_url } from "@/constants";

import Video from "../Video";

type Props = { lng: string };

const Hero = (props: Props): JSX.Element => {
  const [play, setPlay] = useState(false);
  const { t } = useTranslation(props.lng);
  const [sealafUrl, setSealafUrl] = useState(site_url.sealaf);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bdVid = urlParams.get("bd_vid");
    const kValue = urlParams.get("k");
    const url = new URL(site_url.sealaf);

    if (bdVid) {
      url.searchParams.append("bd_vid", bdVid);
      sessionStorage.setItem("bd_vid", bdVid);
    }
    if (kValue) {
      url.searchParams.append("k", kValue);
      sessionStorage.setItem("k", kValue);
    }
    setSealafUrl(url.toString());
  }, []);

  return (
    <>
      <div className="flex h-auto flex-col items-center overflow-hidden pt-36 lg:h-[720px] lg:pt-44">
        <h1 className="text-4xl lg:text-6xl">{t(`HomePage.HomePage.slogan`)}</h1>
        <p className="z-10 mt-8 px-10 text-center text-2xl lg:mt-5 lg:w-[600px]">
          {t(`HomePage.HomePage.content1`)}
          <br />
          {t(`HomePage.HomePage.content2`)}
        </p>

        <div className="z-10 mt-8 lg:mt-6">
          <Link
            href={sealafUrl}
            className="bg-primary z-40 flex h-[48px] w-[144px] items-center justify-center rounded-md text-[16px] text-white hover:active:bg-[#00AFA3]"
          >
            {t(`HomePage.HomePage.start`)}
          </Link>
        </div>
        <div className="absolute top-[344px] mx-auto hidden h-[375px] w-[968px] justify-center bg-[url('/homepage/videobg.png')] bg-contain bg-center bg-no-repeat lg:flex">
          <img
            src="/homepage/play.svg"
            alt="play"
            className="absolute top-[200px] z-10 hover:cursor-pointer "
            onClick={() => setPlay(true)}
          />
        </div>
        <img
          className="h-[200px] w-[350px] object-cover hover:cursor-pointer lg:hidden"
          src="/homepage/videomobile.png"
          alt="video"
          onClick={() => setPlay(true)}
        />

        <div
          className={
            play
              ? "fixed inset-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50"
              : " hidden"
          }
          id="my-modal"
        >
          <div className={play ? "relative top-10 mx-auto" : "hidden"}>
            <div className="relative mx-auto w-3/4">
              <button
                className="absolute right-0 top-0 z-20 pr-2 pt-2"
                onClick={() => setPlay(false)}
              >
                <img
                  width={24}
                  height={24}
                  className="rounded-2xl bg-black hover:cursor-pointer hover:bg-gray-600"
                  src="/homepage/cancel_btn.svg"
                  alt="cancel_btn"
                />
              </button>
              {play ? <Video /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
