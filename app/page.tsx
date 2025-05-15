"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsLoaded(true), 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

      <div className="min-h-screen bg-gradient-to-b from-background to-background/95 animated-gradient-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <SkillsSection />
            <TestimonialsSection />
            <ContactSection />
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  )
}
