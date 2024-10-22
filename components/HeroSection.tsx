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
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div className="space-y-2" variants={fadeInUp}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Expert Financial Assets Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Accurate, reliable, and professional financial solutions for all your needs.
            </p>
          </motion.div>
          <motion.div className="space-x-4" variants={fadeInUp}>
            <Button onClick={toggleContact}>Get a Quote</Button>
            <Button variant="outline">Learn More</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}