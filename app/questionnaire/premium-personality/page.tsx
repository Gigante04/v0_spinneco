'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PremiumQuizForm } from '@/components/premium-quiz-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const premiumPersonalityQuestions = [
  {
    id: 'fashion-icon',
    question: 'Which fashion icon do you relate to the most?',
    options: [
      'Rihanna - Bold and unapologetic',
      'Timothée Chalamet - Effortlessly cool',
      'Zendaya - Versatile and trend-setting',
      'Harry Styles - Playful and gender-fluid',
      'Bella Hadid - Sleek and avant-garde'
    ]
  },
  // Add more premium personality questions here
]

export default function PremiumPersonalityQuiz() {
  const [userPoints, setUserPoints] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const points = localStorage.getItem('userPoints')
    if (!points || parseInt(points) < 100) {
      router.push('/questionnaire')
    }
    setUserPoints(parseInt(points || '0'))
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
          <h1 className="text-4xl font-bold">Main Character Status</h1>
          <p className="text-muted-foreground text-lg">
            Are you that girl/guy? This quiz spills the tea on your true fashion persona.
          </p>
        </div>

        <PremiumQuizForm questions={premiumPersonalityQuestions} quizType="premium-personality" />
      </main>
      <Footer />
    </div>
  )
}

