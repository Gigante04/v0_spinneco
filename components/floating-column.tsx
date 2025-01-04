'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingColumnProps {
  children: ReactNode
  delay?: number
}

export function FloatingColumn({ children, delay = 0 }: FloatingColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{
        willChange: 'transform',
      }}
      className="relative"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
        {children}
      </div>
    </motion.div>
  )
}

