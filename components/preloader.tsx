"use client"

import { motion } from "framer-motion"

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <svg className="w-24 h-24 animate-spin-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="62.8"
          />
        </svg>
        <div className="mt-8 text-2xl font-bold">
          <span className="inline-block animate-pulse-slow">Loading</span>
          <span className="inline-block animate-bounce-slow">.</span>
          <span className="inline-block animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
            .
          </span>
          <span className="inline-block animate-bounce-slow" style={{ animationDelay: "0.4s" }}>
            .
          </span>
        </div>
      </div>
    </motion.div>
  )
}
