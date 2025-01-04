import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { currentQuestion, userAnswer, previousAnswers } = await req.json()

  try {
    const prompt = `
      Based on the current question "${currentQuestion}" and the user's answer "${userAnswer}",
      generate a follow-up question that delves deeper into the user's style preferences.
      Previous answers: ${previousAnswers.join(', ')}
      The question should be engaging and help understand the user's fashion tastes better.
      Also, provide 4 possible answer options for this question.
      
      Return the response in the following JSON format:
      {
        "nextQuestion": "The generated follow-up question",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
      }
    `

    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: prompt,
    })

    const { nextQuestion, options } = JSON.parse(text)

    // For demonstration purposes, we're using a placeholder image URL
    // In a real application, you would use an image search API or a curated database of fashion images
    const imageUrl = `https://source.unsplash.com/400x300/?fashion,${encodeURIComponent(nextQuestion)}`

    const isComplete = previousAnswers.length >= 4 // End after 5 questions

    return NextResponse.json({ nextQuestion, options, imageUrl, isComplete })
  } catch (error) {
    console.error('Error generating next question:', error)
    return NextResponse.json({ error: 'Failed to generate next question' }, { status: 500 })
  }
}

