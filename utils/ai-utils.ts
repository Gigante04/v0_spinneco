import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'

export async function generateStyleProfile(answers: Record<string, string>) {
  const prompt = `Based on the following style quiz answers, generate a personalized style profile:
${Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join('\n')}

Provide a result in the following JSON format:
{
  "stylePersona": "A catchy name for their style persona",
  "description": "A detailed description of their style profile",
  "keyTraits": ["Trait 1", "Trait 2", "Trait 3"],
  "styleRecommendations": ["Recommendation 1", "Recommendation 2", "Recommendation 3"],
  "fashionIcon": "A fashion icon that matches their style"
}
`

  const { text } = await generateText({
    model: openai('gpt-4-turbo'),
    prompt: prompt,
  })

  return JSON.parse(text)
}

