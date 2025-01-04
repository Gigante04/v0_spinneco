'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuizCard } from '@/components/quiz-card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const quizzes = [
  {
    id: 'quick-vibe-check',
    title: 'Quick Vibe Check',
    description: 'A quick dive into your style preferences.',
    participants: 15234,
    popularity: 85,
    isLocked: false
  },
  {
    id: 'energy-reader',
    title: 'Energy Reader',
    description: 'Explore how your style influences your surroundings.',
    participants: 12876,
    popularity: 78,
    isLocked: false
  },
  {
    id: 'ultimate-style-blueprint',
    title: 'The Ultimate Style Blueprint',
    description: 'An in-depth look at your fashion choices.',
    participants: 5432,
    popularity: 92,
    isLocked: true,
    pointsRequired: 100
  },
  {
    id: 'main-character-status',
    title: 'Main Character Status',
    description: 'Discover your true fashion persona.',
    participants: 4567,
    popularity: 88,
    isLocked: true,
    pointsRequired: 250
  }
]

export default function QuestionnairePage() {
  const [userPoints, setUserPoints] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
    const points = localStorage.getItem('userPoints')
    setUserPoints(points ? parseInt(points) : 0)
  }, [])

  const handleQuizSelect = (quizId: string, isLocked: boolean, pointsRequired?: number) => {
    if (!isLoggedIn) {
      router.push('/login?redirect=/questionnaire')
      return
    }

    if (isLocked) {
      if (userPoints >= (pointsRequired || 0)) {
        router.push(`/questionnaire/${quizId}`)
      } else {
        alert(`You need ${pointsRequired} points to unlock this quiz. Keep completing tasks and quizzes to earn more points!`)
      }
    } else {
      router.push(`/questionnaire/${quizId}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-12 relative">
        <Link href="/" passHref>
          <Button
            variant="outline"
            className="absolute left-4 top-4 rounded-full p-2"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold">Explore Your Style</h1>
          <p className="text-muted-foreground text-lg">
            Choose a quiz and start discovering what makes you unique.
          </p>
        </div>

        <div className="mb-12 flex items-center justify-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E549083B-EC9F-4FF1-88DF-3B02C75A8321-hKf2GU5S57Fi3m2FejBkQtgqM4kZYM.jpeg"
            alt="The Creator"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-sm text-gray-400">Curated by</p>
            <p className="font-semibold">The Creator</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
              participants={quiz.participants}
              isLocked={quiz.isLocked}
              pointsRequired={quiz.pointsRequired}
              popularity={quiz.popularity}
              onClick={() => handleQuizSelect(quiz.id, quiz.isLocked, quiz.pointsRequired)}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Complete quizzes to unlock premium options and learn more about your style!</p>
          <p className="mt-2">Unlock The Ultimate Style Blueprint at 100 points and Main Character Status at 250 points.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

