"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";



export default function PageTransiton({ children }) {
  const Pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={Pathname}>
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0, 
            transition: { delay: 0.1, duration: 0.2, ease: 'easeOut' }
          }}
          className="h-screen w-screen fixed bg-white dark:bg-[#0a0a0a] top-0 pointer-events-none z-30"
        />
        {children}
      </div>
    </AnimatePresence>
  )
}
