'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LoadingSpinner } from '@/components/loading-spinner'
import { LaunchScreen } from '@/components/launch-screen'
import { OnboardingTour } from '@/components/onboarding-tour'
import { ExplainerAnimation } from '@/components/explainer-animation'
import { AnimatedLogo } from '@/components/animated-logo'
import { SharePrompt } from '@/components/share-prompt'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [showLaunchScreen, setShowLaunchScreen] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setShowLaunchScreen(false)
      setShowOnboarding(true)
    }, 3000) // Show launch screen for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return <LoadingSpinner />
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E549083B-EC9F-4FF1-88DF-3B02C75A8321-hKf2GU5S57Fi3m2FejBkQtgqM4kZYM.jpeg')",
          filter: "brightness(0.3)"
        }}
        aria-hidden="true"
      />
      <AnimatePresence>
        {showLaunchScreen && <LaunchScreen />}
      </AnimatePresence>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <AnimatedLogo className="mb-8 w-32 h-32" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight text-center"
        >
          Discover Your Unique Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto text-center"
        >
          Unleash your fashion potential with SPINNECO's AI-powered style quizzes and personalized recommendations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/questionnaire">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Start Your Style Journey
            </Button>
          </Link>
          <SharePrompt />
        </motion.div>

        <ExplainerAnimation className="mt-16" />
      </main>

      <Footer />

      <AnimatePresence>
        {showOnboarding && (
          <OnboardingTour onComplete={() => setShowOnboarding(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

