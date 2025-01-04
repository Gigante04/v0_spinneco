'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

interface QuizFormProps {
  initialQuestion: string
  initialOptions: string[]
  onComplete: (results: string[]) => void
}

export function QuizForm({ initialQuestion, initialOptions, onComplete }: QuizFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion)
  const [options, setOptions] = useState(initialOptions)
  const [userAnswer, setUserAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const submittedAnswer = selectedOption || userAnswer

    try {
      const response = await fetch('/api/quiz/next-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          currentQuestion, 
          userAnswer: submittedAnswer, 
          previousAnswers: answers 
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch next question')
      }

      const data = await response.json()
      setCurrentQuestion(data.nextQuestion)
      setOptions(data.options)
      setImageUrl(data.imageUrl)
      setAnswers([...answers, submittedAnswer])
      setUserAnswer('')
      setSelectedOption(null)

      if (data.isComplete) {
        onComplete([...answers, submittedAnswer])
      }
    } catch (error) {
      console.error('Error fetching next question:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">{currentQuestion}</CardTitle>
        </CardHeader>
        <CardContent>
          {imageUrl && (
            <div className="mb-4">
              <Image 
                src={imageUrl} 
                alt="Question visual" 
                width={400} 
                height={300} 
                className="rounded-lg"
              />
            </div>
          )}
          <div className="space-y-4">
            <div>
              <Label htmlFor="answer">Your Answer</Label>
              <Input
                id="answer"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value)
                  setSelectedOption(null)
                }}
                placeholder="Type your answer here..."
              />
            </div>
            <div className="space-y-2">
              <Label>Or choose an option:</Label>
              <div className="flex flex-wrap gap-2">
                {options.map((option, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant={selectedOption === option ? "default" : "outline"}
                    onClick={() => {
                      setSelectedOption(option)
                      setUserAnswer('')
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || (!userAnswer && !selectedOption)}
          >
            {isLoading ? 'Thinking...' : 'Next Question'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

