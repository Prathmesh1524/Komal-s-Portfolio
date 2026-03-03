"use client"
import CountUp from "react-countup"
import { useLanguage } from "@/context/LanguageContext"

const Stats = () => {
    const { t } = useLanguage();

    const stats = [
        { num: 3, text: t("home.stats.yearsExperience") },
        { num: 8, text: t("home.stats.technologiesMastered") },
        { num: 150, text: t("home.stats.projectsCompleted") },
        { num: 200, text: t("home.stats.codeCommits") },
    ]

    return (
        <section className="pb-8 pt-8 xl:pt-0 xl:pb-0 relative z-20">
            <div className="container mx-auto pt-5">
                <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-center" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-xl xl:text-5xl font-extrabold text-primary"
                                />
                                <p className={`${item.text.length < 60 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-gray-600`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats