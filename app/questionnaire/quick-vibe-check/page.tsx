'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuizForm } from '@/components/quiz-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { AuthOverlay } from '@/components/auth-overlay'

const initialQuestion = "What's your go-to style when you want to feel confident?"
const initialOptions = [
  "Sleek and minimalist",
  "Bold and colorful",
  "Comfortable and casual",
  "Elegant and sophisticated"
]

export default function QuickVibeCheckQuiz() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleQuizComplete = (results: string[]) => {
    if (!isLoggedIn) {
      setShowAuthOverlay(true)
    } else {
      // Save results and redirect to results page
      localStorage.setItem('quickVibeCheckResults', JSON.stringify(results))
      router.push('/questionnaire/quick-vibe-check/results')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container max-w-3xl mx-auto px-4 py-12 relative">
        <Link href="/questionnaire" passHref>
          <Button
            variant="outline"
            className="absolute left-4 top-4 rounded-full p-2"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold">Quick Vibe Check</h1>
          <p className="text-muted-foreground text-lg">
            Let's discover your unique style through an AI-powered conversation. Share your thoughts or choose from our suggestions to create your personalized style profile!
          </p>
        </div>

        <QuizForm 
          initialQuestion={initialQuestion} 
          initialOptions={initialOptions} 
          onComplete={handleQuizComplete} 
        />

        <AuthOverlay isVisible={showAuthOverlay} onClose={() => setShowAuthOverlay(false)} />
      </main>
      <Footer />
    </div>
  )
}

