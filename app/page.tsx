"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, BarChart, FileCheck, Briefcase, Phone, Mail } from "lucide-react"

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

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const toggleContact = () => setIsContactOpen(!isContactOpen)
  const mapUrl = "https://www.google.com/maps?q=51.5074,0.1278"

  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-1">
        {/* Hero Section */}
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

        {/* Services Section */}
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <Building2 className="w-8 h-8 mb-2" />
                    <CardTitle>IEPF claim - Recovery of shares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Expert assistance in recovering shares from the Investor Education and Protection Fund.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <BarChart className="w-8 h-8 mb-2" />
                    <CardTitle>Wealth Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive wealth management services to help you grow and protect your assets.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <FileCheck className="w-8 h-8 mb-2" />
                    <CardTitle>Audit & Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Thorough audit and assurance services to ensure financial accuracy and compliance.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <Briefcase className="w-8 h-8 mb-2" />
                    <CardTitle>Financial Consultancy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Expert financial advice and consultancy services for individuals and businesses.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container px-4 md:px-6">
            <motion.div 
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div className="space-y-4" variants={fadeInUp}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Inclusive Trading</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  With over 20 years of experience, Inclusive Trading has been providing accurate and reliable financial
                  solutions across the country. Our team of certified professionals combines local market knowledge with
                  industry-leading expertise to deliver services you can trust.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Certified Financial Professionals
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Comprehensive Financial Reports
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Fast Turnaround Times
                  </li>
                </ul>
              </motion.div>
              <motion.div className="flex justify-center" variants={fadeInUp}>
                <img
                  alt="Team of financial experts"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Location Section */}
        <motion.section 
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeInUp}
            >
              Our Location
            </motion.h2>
            <motion.div 
              className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden"
              variants={fadeInUp}
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=51.5074,0.1278&zoom=13&size=600x300&maptype=roadmap&markers=color:green%7C51.5074,0.1278&key=YOUR_GOOGLE_MAPS_API_KEY`}
                  alt="Inclusive Trading Location"
                  className="w-full h-full object-cover"
                />
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Side Button */}
      <motion.div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-green-500 text-white p-4 rounded-l-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex flex-col space-y-4">
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                initial={{ fill: "#FFFFFF" }}
                whileHover={{ fill: "#128C7E" }}
                transition={{ duration: 0.3 }}
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </motion.svg>
            </motion.a>
            <motion.a
              href="mailto:info@inclusivetrading.com"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                initial={{ color: "#FFFFFF" }}
                whileHover={{ color: "#EA4335" }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-6 h-6" />
              </motion.div>
            </motion.a>
            <motion.button
              onClick={toggleContact}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                initial={{ color: "#FFFFFF" }}
                whileHover={{ color: "#4285F4" }}
                transition={{ duration: 0.3  }}
              
              >
                <Phone className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="Your message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
              <Button variant="outline" className="mt-4 w-full" onClick={toggleContact}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}