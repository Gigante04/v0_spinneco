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

const energyReaderQuestions = [
  {
    id: 'first-impression',
    question: 'When you walk into a room, what\'s the first thing people notice?',
    options: [
      'My confidence and energy',
      'My unique style',
      'My friendly and approachable vibe',
      'My mysterious and intriguing aura',
      'My calm and collected presence'
    ]
  },
  {
    id: 'friend-description',
    question: 'How would your friends describe your energy?',
    options: [
      'A burst of sunshine',
      'A calming presence',
      'An electric spark',
      'A grounding force',
      'A magnetic personality'
    ]
  },
  {
    id: 'style-influence',
    question: 'How does your style influence the atmosphere around you?',
    options: [
      'It brightens up the room',
      'It sets a sophisticated tone',
      'It brings an edge of excitement',
      'It creates a sense of mystery',
      'It promotes a relaxed vibe'
    ]
  },
  {
    id: 'energy-boost',
    question: 'What gives you an instant energy boost?',
    options: [
      'Putting on a bold, colorful outfit',
      'Wearing my favorite accessories',
      'Trying out a new trend',
      'Dressing up for a night out',
      'Slipping into something comfortable and chic'
    ]
  },
  {
    id: 'style-superpower',
    question: 'If your style had a superpower, what would it be?',
    options: [
      'The ability to boost confidence instantly',
      'The power to make a lasting impression',
      'The skill to adapt to any situation',
      'The talent to express emotions without words',
      'The gift of bringing people together'
    ]
  }
]

export default function EnergyReaderQuiz() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthOverlay, setShowAuthOverlay] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleQuizComplete = (results: Record<string, string>) => {
    if (!isLoggedIn) {
      setShowAuthOverlay(true)
    } else {
      // Save results and redirect to results page
      localStorage.setItem('energyReaderResults', JSON.stringify(results))
      router.push('/questionnaire/energy-reader/results')
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
          <h1 className="text-4xl font-bold">Energy Reader</h1>
          <p className="text-muted-foreground text-lg">
            Discover how your style makes others feel. Your vibe attracts your tribe!
          </p>
        </div>

        <QuizForm questions={energyReaderQuestions} onComplete={handleQuizComplete} />

        <AuthOverlay isVisible={showAuthOverlay} onClose={() => setShowAuthOverlay(false)} />
      </main>
      <Footer />
    </div>
  )
}

