"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 20))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155,
          )}, ${Math.floor(Math.random() * 255)}, 1)`,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createParticles()

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.15 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width

        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height

        // Pulsating effect
        particle.opacity = (Math.sin(Date.now() * 0.001 + particles.indexOf(particle)) + 1) * 0.25 + 0.1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[^,]+(?=\))/, particle.opacity.toString())
        ctx.fill()
      })

      connectParticles()
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    // Hide scroll indicator after scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-primary font-medium mb-2">Hello, I'm</h2>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Penantian Salvador</span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-6 h-[40px]"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "Creative Technologist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-foreground/80 text-lg mb-8 max-w-2xl"
          >
            I create elegant, high-performance web applications with modern technologies. Specializing in Laravel, React,
            Next.js, Python, and creative UI/UX design for exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 mt-8"
          >
            <a target="_blank" href="https://github.com/Mayonaice?tab=repositories">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
                <Github className="h-5 w-5" />
            </Button>
              </a>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <ChevronDown className="h-8 w-8 text-primary" />
          </motion.div>
          <p className="text-sm text-center mt-2 text-foreground/60">Scroll Down</p>
        </motion.div>
      )}
    </section>
  )
}
