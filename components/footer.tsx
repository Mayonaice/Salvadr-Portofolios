"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold gradient-text">
              Portfolio
            </Link>
            <p className="text-foreground/60 mt-2 max-w-md">
              Creating elegant, high-performance web applications with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link
              href="#"
              className="bg-secondary/50 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-secondary/50 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-secondary/50 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-secondary/50 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="bg-secondary/50 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
