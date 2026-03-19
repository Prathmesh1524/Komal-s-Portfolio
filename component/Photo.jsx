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
                     duration: 0.4, ease: "easeInOut"
                }
            }} 
                className="mix-blend-lighten" >
                    <Image
                        src="/assets/photo.jpeg"
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
