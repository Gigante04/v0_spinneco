import { notFound } from 'next/navigation'
import { styleResults } from '@/constants/quiz-results'
import { ResultPage } from '@/components/result-page'

interface StylePersonaPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return Object.keys(styleResults).map((id) => ({
    id,
  }))
}

export default function StylePersonaPage({ params }: StylePersonaPageProps) {
  const result = styleResults[params.id]

  if (!result) {
    notFound()
  }

  return <ResultPage result={result} type="style" />
}

