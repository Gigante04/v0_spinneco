'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Progress } from '@/components/ui/progress'

interface Question {
  id: string
  question: string
  options: string[]
}

interface PremiumQuizFormProps {
  questions: Question[]
  quizType: string
}

export function PremiumQuizForm({ questions, quizType }: PremiumQuizFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const router = useRouter()

  const encouragements = [
    "ok bestie, we're getting somewhere! 👀",
    "your taste? immaculate. keep going!",
    "the vibes are immaculate rn...",
    "spill the tea, we're living for these answers!",
    "you're eating this up fr fr",
    "period! your style journey is everything",
    "no thoughts just straight fire choices",
    "we see you with the taste level! 💅",
    "giving main character energy rn",
    "about to put you on fr..."
  ]

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const resultId = Object.values(answers).join('-')
    router.push(`/results/${quizType}/${resultId}`)
  }

  const progress = (currentQuestion / questions.length) * 100

  return (
    <form onSubmit={handleSubmit}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-2xl">{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                onValueChange={(value) => {
                  setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }))
                  if (currentQuestion < questions.length - 1) {
                    setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
                  }
                }}
                value={answers[questions[currentQuestion].id]}
              >
                {questions[currentQuestion].options.map((option) => (
                  <motion.div
                    key={option}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-2 p-4 rounded-lg hover:bg-accent transition-colors">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
                    </div>
                  </motion.div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-pink-400 italic">
                {encouragements[Math.floor((currentQuestion / questions.length) * encouragements.length)]}
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="outline"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        {currentQuestion === questions.length - 1 ? (
          <Button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700"
          >
            Reveal Your Style Profile
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={!answers[questions[currentQuestion].id]}
          >
            Next
          </Button>
        )}
      </div>
    </form>
  )
}

