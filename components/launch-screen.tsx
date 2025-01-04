'use client'

import { motion } from 'framer-motion'
import { AnimatedLogo } from './animated-logo'

export function LaunchScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedLogo className="w-32 h-32" />
      </motion.div>
      <motion.h1
        className="absolute bottom-16 text-2xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        SPINNECO
      </motion.h1>
    </motion.div>
  )
}

