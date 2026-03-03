"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]  ">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1, transition: {
                    delay: 2.2, duration: 0.4, ease: "easeIn"
                }
            }} >
                <motion.div
                    initial={{ opacity: 0 }} animate={{
                        opacity: 1, transition: {
                            delay: 2.4, duration: 0.4, ease: "easeInOut"
                        }
                    }}
                    className="" >
                    <Image
                        src="/assets/photo.jpg"
                        alt="photo"
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo
