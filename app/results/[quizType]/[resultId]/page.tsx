'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { ProductCard } from '@/components/product-card'

interface AIResult {
  title: string
  description: string
  traits: string[]
  recommendations: string[]
}

export default function ResultPage() {
  const params = useParams()
  const [result, setResult] = useState<AIResult | null>(null)
  const [recommendedProducts, setRecommendedProducts] = useState([])

  useEffect(() => {
    const storedResult = localStorage.getItem(`${params.quizType}QuizResult`)
    if (storedResult) {
      setResult(JSON.parse(storedResult))
    }

    // Fetch recommended products based on the quiz result
    fetchRecommendedProducts(params.quizType, params.resultId)
  }, [params.quizType, params.resultId])

  const fetchRecommendedProducts = async (quizType, resultId) => {
    // This would be an API call in a real application
    const response = await fetch(`/api/recommendations?quizType=${quizType}&resultId=${resultId}`)
    const data = await response.json()
    setRecommendedProducts(data.products)
  }

  if (!result) return null

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <Sparkles className="w-12 h-12 text-pink-400" />
              </motion.div>
              <CardTitle className="text-4xl font-bold text-center">{result.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl mb-8 text-center">{result.description}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Your Key Traits</h3>
                  <ul className="space-y-2">
                    {result.traits.map((trait, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-pink-400" />
                        <span>{trait}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Style Recommendations</h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((recommendation, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>{recommendation}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6">Recommended Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Link href="/shop">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Explore Full Collection
              </Button>
            </Link>
            <Link href="/questionnaire">
              <Button variant="outline">
                Take Another Quiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

