'use client'

import Link from "next/link"
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024 Inclusive Trading. All rights reserved.
      </p>
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <Link 
          className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-300" 
          href="#"
        >
          Terms of Service
        </Link>
        <Link 
          className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-300" 
          href="#"
        >
          Privacy
        </Link>
      </nav>
    </motion.footer>
  )
}
