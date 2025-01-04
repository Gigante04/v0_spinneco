'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { QuestionnaireForm } from '@/components/questionnaire-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { auraQuestions } from '@/constants/quiz-results'

export default function AuraQuiz() {
  const router = useRouter()

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

        <QuestionnaireForm questions={auraQuestions} quizType="aura" />
      </main>
      <Footer />
    </div>
  )
}

