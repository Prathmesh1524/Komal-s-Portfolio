"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransiton({ children }) {
  const Pathname = usePathname();
  return (
    <AnimatePresence>

      <div key={Pathname}>
        <motion.div initial={{ opacity: 1 }}
          animate={{
            opacity: 0, transition:
              { delay: 0.1, duration: 0.4, ease: 'easeOut' }
          }}
          className="h-screen w-screen fixed bg-white top-0 pointer-events-none z-40"
        />

        {children}</div>
    </AnimatePresence>

  )
}

