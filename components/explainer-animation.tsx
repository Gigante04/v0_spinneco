'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Palette } from 'lucide-react'

export function ExplainerAnimation({ className }: { className?: string }) {
  const items = [
    { icon: Sparkles, text: "Take fun style quizzes" },
    { icon: Zap, text: "Get AI-powered recommendations" },
    { icon: Palette, text: "Discover your unique fashion identity" },
  ]

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-4 mb-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon className="w-8 h-8 text-white" />
          </motion.div>
          <p className="text-white text-lg">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}

