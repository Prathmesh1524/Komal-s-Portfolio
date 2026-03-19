"use client"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

export default function Services() {
  const { t } = useLanguage();
  const services = t.affinity.items;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            {t.affinity.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t.affinity.desc}
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }}
                  className="group relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                      <span className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-br from-slate-600 to-slate-700 bg-clip-text group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-500">
                        {service.num}
                      </span>
                      <div className="absolute inset-0 text-6xl md:text-7xl font-black text-green-400/20 group-hover:text-green-400/40 transition-all duration-500 blur-sm">
                        {service.num}
                      </div>
                    </div>

                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-500 flex justify-center items-center hover:rotate-45 hover:scale-110">
                      <ArrowDownRight className="text-white text-xl group-hover:text-slate-900 transition-colors duration-300" />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-500">
                    {service.name}
                  </h2>

                  <p className="text-slate-300 group-hover:text-slate-200 text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300">
                    {service.desc}
                  </p>

                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-green-500 transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t.affinity.readyToStart}</h3>
          <p className="text-lg text-slate-300 mb-8">
            {t.affinity.discuss}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            {t.affinity.contactBtn}
            <ArrowDownRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
