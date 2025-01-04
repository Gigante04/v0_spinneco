'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: "Welcome to SPINNECO",
    content: "Discover your unique style and elevate your fashion game.",
  },
  {
    title: "AI-Powered Quizzes",
    content: "Take fun quizzes that analyze your preferences and personality.",
  },
  {
    title: "Personalized Recommendations",
    content: "Get tailored style suggestions based on your quiz results.",
  },
]

export function OnboardingTour({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="bg-gray-800 rounded-lg p-8 max-w-md text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">{slides[currentSlide].title}</h2>
          <p className="text-gray-300 mb-6">{slides[currentSlide].content}</p>
          <Button onClick={nextSlide}>
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </Button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

