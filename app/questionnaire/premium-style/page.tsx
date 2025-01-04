'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PremiumQuizForm } from '@/components/premium-quiz-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const premiumStyleQuestions = [
  {
    id: 'morning-routine',
    question: 'When you wake up and get ready, what\'s your first style thought?',
    options: [
      'Check the weather and plan accordingly',
      'Whatever feels right in the moment',
      'Already planned my fit last night',
      'Grab my go-to signature pieces',
      'Something that matches my mood'
    ]
  },
  // Add more premium style questions here
]

export default function PremiumStyleQuiz() {
  const [userPoints, setUserPoints] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const points = localStorage.getItem('userPoints')
      if (!points || parseInt(points) < 100) {
        router.push('/questionnaire')
      } else {
        setUserPoints(parseInt(points))
      }
    }
  }, [router])

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
          <h1 className="text-4xl font-bold">The Ultimate Style Blueprint</h1>
          <p className="text-muted-foreground text-lg">
            Get ready for the most in-depth style analysis ever. This is where we really get to know you!
          </p>
        </div>

        <PremiumQuizForm questions={premiumStyleQuestions} quizType="premium-style" />
      </main>
      <Footer />
    </div>
  )
}

