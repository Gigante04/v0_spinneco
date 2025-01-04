'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface StyleProfile {
  stylePersona: string
  description: string
  keyTraits: string[]
  styleRecommendations: string[]
  fashionIcon: string
}

export default function ResultPage() {
  const [styleProfile, setStyleProfile] = useState<StyleProfile | null>(null)

  useEffect(() => {
    const storedProfile = localStorage.getItem('styleProfile')
    if (storedProfile) {
      setStyleProfile(JSON.parse(storedProfile))
    }
  }, [])

  if (!styleProfile) return null

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
              <CardTitle className="text-4xl font-bold text-center">{styleProfile.stylePersona}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl mb-8 text-center">{styleProfile.description}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Your Key Style Traits</h3>
                  <ul className="space-y-2">
                    {styleProfile.keyTraits.map((trait, index) => (
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
                    {styleProfile.styleRecommendations.map((recommendation, index) => (
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
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Your Fashion Icon</h3>
                <p className="text-lg text-gray-300">{styleProfile.fashionIcon}</p>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-between items-center">
            <Link href="/shop">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Explore Personalized Collection
              </Button>
            </Link>
            <Link href="/questionnaire">
              <Button variant="outline">
                Retake Quiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

