"use client"
import CvButton from "@/component/CvButton";

import Photo from "@/component/Photo";
import Socials from "@/component/Socials";
import Stats from "@/component/Stats";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="h-full">
      <div className="container mx-auto px-4 xl:px-52 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-0 xl:pt-2 xl:pb-24">
          {/* Text Content */}
          <div className="text-center xl:text-left">
            <span>{t("home.role")}</span>
            <h1 className="text-[28px] xl:text-[50px] font-semibold mb-6">
              {t("home.greeting")} <br />
              <span className="text-primary">{t("home.name")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-700">
              {t("home.description")}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <CvButton />
              <div className="mb-8 xl:mb-4">
                {/* <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-white transition-all duration-300"
                /> */}
              </div>
            </div>
          </div>

          {/* Photo */}
          <Photo />
        </div>
      </div>
      <Stats />
    </section>


  );
}