import { notFound } from 'next/navigation'
import { auraResults } from '@/constants/quiz-results'
import { ResultPage } from '@/components/result-page'

interface AuraTypePageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return Object.keys(auraResults).map((id) => ({
    id,
  }))
}

export default function AuraTypePage({ params }: AuraTypePageProps) {
  const result = auraResults[params.id]

  if (!result) {
    notFound()
  }

  return <ResultPage result={result} type="aura" />
}

