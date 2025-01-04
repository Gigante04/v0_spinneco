'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { quizQuestions } from '@/constants/quiz-questions'
import { generateStyleProfile } from '@/utils/ai-utils'

export function QuestionnaireForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const styleProfile = await generateStyleProfile(answers)
    localStorage.setItem('styleProfile', JSON.stringify(styleProfile))
    router.push('/results')
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

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
              <CardTitle>{quizQuestions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                onValueChange={(value) => {
                  setAnswers((prev) => ({ ...prev, [quizQuestions[currentQuestion].id]: value }))
                  if (currentQuestion < quizQuestions.length - 1) {
                    setTimeout(() => handleNext(), 300)
                  }
                }}
                value={answers[quizQuestions[currentQuestion].id]}
              >
                {quizQuestions[currentQuestion].options.map((option) => (
                  <div key={option} className="flex items-center space-x-2 p-4 rounded-lg hover:bg-accent transition-colors">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </span>
        {currentQuestion === quizQuestions.length - 1 ? (
          <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
            Get Your Results
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            disabled={!answers[quizQuestions[currentQuestion].id]}
          >
            Next
          </Button>
        )}
      </div>
    </form>
  )
}

