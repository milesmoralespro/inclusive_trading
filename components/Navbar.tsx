'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Building2, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.header 
      className="px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between border-b bg-white relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link className="flex items-center justify-center" href="#">
        <Building2 className="h-6 w-6" />
        <span className="ml-2 text-base sm:text-lg font-bold">Inclusive Trading</span>
      </Link>
      <nav className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-4">
        <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#">
          Become Associate
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#">
          Contact
        </Link>
      </nav>
      <Button className="md:hidden" variant="ghost" size="sm" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="absolute top-full left-0 right-0 bg-white z-50 border-b shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col p-4 space-y-3" 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.a variants={fadeInUp} className="text-sm font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors" href="#">
                Home
              </motion.a>
              <motion.a variants={fadeInUp} className="text-sm font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors" href="#">
                Services
              </motion.a>
              <motion.a variants={fadeInUp} className="text-sm font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors" href="#">
                About
              </motion.a>
              <motion.a variants={fadeInUp} className="text-sm font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors" href="#">
                Become Associate
              </motion.a>
              <motion.a variants={fadeInUp} className="text-sm font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition-colors" href="#">
                Contact
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
