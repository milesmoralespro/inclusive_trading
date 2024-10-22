"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HeroSection({ toggleContact }: { toggleContact: () => void }) {
  return (
    <motion.section 
      className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <motion.div 
          className="flex flex-col items-center space-y-6 text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Expert Financial Assets Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
              Accurate, reliable, and professional financial solutions for all your needs.
            </p>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" variants={fadeInUp}>
            <Button onClick={toggleContact} className="w-full sm:w-auto">Get a Quote</Button>
            <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
