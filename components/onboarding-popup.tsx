'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const OnboardingPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding')
    if (!hasSeenOnboarding) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('hasSeenOnboarding', 'true')
  }

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2)
    } else {
      setCurrentPage(1)
    }
  }

  const pages = [
    {
      title: "Welcome to SPINNECO",
      content: "Discover your unique style and elevate your fashion game. Let's begin your style journey."
    },
    {
      title: "Your Style Evolution Begins",
      content: "Take quizzes, explore exclusive designs, and earn rewards. Are you ready to make a statement?"
    },
    {
      title: "Join the SPINNECO Community",
      content: "Create an account or log in to start your personalized style journey."
    }
  ]

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg p-8 overflow-hidden rounded-lg shadow-xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">{pages[currentPage].title}</h2>
            <p className="mb-6 text-xl text-white">{pages[currentPage].content}</p>
            {currentPage === 2 ? (
              <div className="flex flex-col space-y-4">
                <Link href="/register">
                  <Button className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500">
                    Create Account
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-gray-800">
                    Log In
                  </Button>
                </Link>
                <Button variant="ghost" onClick={handleClose} className="text-gray-400 hover:text-white">
                  Skip for now
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
              >
                {currentPage === 1 ? "Next" : "Get Started"}
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default OnboardingPopup

