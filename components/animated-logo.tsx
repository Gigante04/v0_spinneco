'use client'

import { motion } from 'framer-motion'

export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF00FF" />
          <stop offset="100%" stopColor="#00FFFF" />
        </linearGradient>
      </defs>
      <motion.path
        d="M50 10 L90 90 L10 90 Z"
        fill="url(#gradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

