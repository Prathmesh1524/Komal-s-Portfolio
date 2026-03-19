"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import WorkSliderBtn from "@/component/WorkSliderBtn"
import { useLanguage } from "../context/LanguageContext"
import Link from "next/link"

export default function WorkPage() {
  const { t } = useLanguage();
  const projects = t.clients.practices;
  
  const [project, setproject] = useState(projects[0])

  const handleslidechange = (swiper) => {
    const cureentIndex = swiper.activeIndex
    setproject(projects[cureentIndex])
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 sm:py-8 md:py-12 xl:px-0 mt-8"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-56">
        <div className="mb-12 text-center xl:text-left">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
             {t.clients.title}
           </h1>
           <p className="text-gray-400 text-lg max-w-2xl">
             {t.clients.desc}
           </p>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="space-y-4 md:space-y-6">
              <div className="text-4xl sm:text-5xl md:text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">{project.desc}</p>
              
              <Link href={project.link} target="_blank" className="inline-block mt-4 text-green-400 underline hover:text-green-300">
                View Website
              </Link>

              <div className="border border-white/60 mt-6"></div>
            </div>
          </div>
          <div className="w-full xl:w-[60%] order-1 xl:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[300px] sm:h-[350px] md:h-[420px] pb-12"
              onSlideChange={handleslidechange}
            >
              {projects.map((proj, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[250px] sm:h-[300px] md:h-[370px] relative group flex flex-col justify-center items-center bg-gray-900 rounded-lg overflow-hidden border border-gray-800 p-8 text-center text-white">
                        <h3 className="text-3xl font-bold mb-4 text-green-400">{proj.title}</h3>
                        <p className="text-gray-400 text-lg">{proj.category}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-4 xl:px-0"
                btnStyle="bg-green-600 hover:bg-green-500 text-white text-[18px] sm:text-[22px] w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
