'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SharePrompt } from '@/components/share-prompt'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import type { StyleResult, AuraResult } from '@/constants/quiz-results'

interface ResultPageProps {
  result: StyleResult | AuraResult
  type: 'style' | 'aura'
}

export function ResultPage({ result, type }: ResultPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8 overflow-hidden">
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
              <div className="prose prose-invert max-w-none">
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl mb-8 text-center leading-relaxed">{result.description}</p>
                {'influence' in result && (
                  <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Your Fashion Influence</h3>
                    <p className="text-lg">{result.influence}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-8">
                  {'traits' in result && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Your Key Traits</h3>
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
                  )}
                  {'strengths' in result && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Your Strengths</h3>
                      <ul className="space-y-2">
                        {result.strengths.map((strength, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            <span>{strength}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {'challenges' in result && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-semibold">Your Challenges</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {result.challenges.map((challenge, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-gray-800/50"
                        >
                          {challenge}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-center">
                    {'recommendations' in result ? 'Style Recommendations' : 'Fashion Advice'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {('recommendations' in result ? result.recommendations : result.advice).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
                {'celebrities' in result && (
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Celebrity Style Inspirations</h3>
                    <p className="text-lg text-gray-300">{result.celebrities.join(' • ')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-between items-center">
            <Link href="/shop">
              <Button className="bg-pink-600 hover:bg-pink-700">
                Explore Personalized Collection
              </Button>
            </Link>
            <SharePrompt />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

