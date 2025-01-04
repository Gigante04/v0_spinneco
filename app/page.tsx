'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LoadingSpinner } from '@/components/loading-spinner';
import { LaunchScreen } from '@/components/launch-screen';
import { OnboardingTour } from '@/components/onboarding-tour';
import { ExplainerAnimation } from '@/components/explainer-animation';
import { AnimatedLogo } from '@/components/animated-logo';
import { SharePrompt } from '@/components/share-prompt';

const LAUNCH_SCREEN_DURATION = 3000; // 3 seconds

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowLaunchScreen(false);
      setShowOnboarding(true);
    }, LAUNCH_SCREEN_DURATION);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: "url('/images/background.jpg')", // Move image to public/images folder for faster loading
          filter: "brightness(0.3)",
        }}
        aria-hidden="true"
      />

      {/* Launch Screen */}
      <AnimatePresence>
        {showLaunchScreen && <LaunchScreen />}
      </AnimatePresence>

      {/* Header */}
      <Header />

      {/* Main Content */}
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
            <Button
              aria-label="Start your style journey"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Start Your Style Journey
            </Button>
          </Link>
          <SharePrompt />
        </motion.div>

        <ExplainerAnimation className="mt-16" />
      </main>

      {/* Footer */}
      <Footer />

      {/* Onboarding Tour */}
      <AnimatePresence>
        {showOnboarding && (
          <OnboardingTour onComplete={() => setShowOnboarding(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
