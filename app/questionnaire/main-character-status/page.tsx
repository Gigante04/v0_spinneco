'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PremiumQuizForm } from '@/components/premium-quiz-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const mainCharacterStatusQuestions = [
  {
    id: 'personal-brand',
    question: 'How would you describe your personal brand?',
    options: [
      'Trendsetter - always ahead of the curve',
      'Classic - timeless and sophisticated',
      'Rebel - breaking rules and norms',
      'Eclectic - a unique mix of styles',
      'Minimalist - less is more'
    ]
  },
  {
    id: 'style-superpower',
    question: 'If your style was a superpower, what would it be?',
    options: [
      'Shapeshifting - adaptable to any situation',
      'Invisibility - understated yet impactful',
      'Mind control - turning heads wherever you go',
      'Time travel - blending vintage and futuristic',
      'Force field - creating a powerful presence'
    ]
  },
  {
    id: 'fashion-motto',
    question: 'What\'s your fashion motto?',
    options: [
      'Dress for the life you want',
      'Comfort is key',
      'Make a statement without saying a word',
      'Rules are meant to be broken',
      'Quality over quantity'
    ]
  },
  {
    id: 'style-evolution',
    question: 'How has your style evolved in the last year?',
    options: [
      'Complete transformation - new me, new style',
      'Subtle refinement - enhancing what works',
      'Experimental phase - trying new things',
      'Back to basics - focusing on essentials',
      'Sustainable shift - more conscious choices'
    ]
  },
  {
    id: 'fashion-risk',
    question: 'What\'s the biggest fashion risk you\'ve taken recently?',
    options: [
      'Wore a bold, attention-grabbing outfit',
      'Mixed patterns or colors unconventionally',
      'Tried a completely new style or aesthetic',
      'Wore something outside my comfort zone',
      'Invested in a high-end, statement piece'
    ]
  },
  {
    id: 'style-influence',
    question: 'Who or what has the biggest influence on your style?',
    options: [
      'Celebrity fashion icons',
      'Street style and urban culture',
      'High fashion and runway shows',
      'Vintage and historical fashion',
      'Art, music, and pop culture'
    ]
  },
  {
    id: 'wardrobe-essential',
    question: 'What\'s the one item in your wardrobe you can\'t live without?',
    options: [
      'A perfectly fitted jacket',
      'Statement shoes that elevate any outfit',
      'A versatile accessory (e.g., scarf, jewelry)',
      'The perfect pair of jeans',
      'A signature fragrance'
    ]
  },
  {
    id: 'style-confidence',
    question: 'When do you feel most confident in your style?',
    options: [
      'When I\'m setting trends',
      'In my go-to, fail-proof outfit',
      'When I receive compliments',
      'Expressing my true self through fashion',
      'Nailing the perfect look for an important event'
    ]
  },
  {
    id: 'fashion-inspiration',
    question: 'Where do you find fashion inspiration?',
    options: [
      'Social media and fashion blogs',
      'Fashion magazines and editorials',
      'People-watching in stylish neighborhoods',
      'Travel and different cultures',
      'My own creativity and imagination'
    ]
  },
  {
    id: 'style-statement',
    question: 'What statement does your style make about you?',
    options: [
      'I\'m confident and know what I want',
      'I\'m creative and think outside the box',
      'I\'m sophisticated and have refined taste',
      'I\'m approachable and down-to-earth',
      'I\'m mysterious and intriguing'
    ]
  },
  {
    id: 'fashion-splurge',
    question: 'If you could splurge on one fashion item, what would it be?',
    options: [
      'A couture gown or suit',
      'Limited edition sneakers',
      'A luxury watch or piece of jewelry',
      'A rare vintage find',
      'A full wardrobe makeover by a stylist'
    ]
  },
  {
    id: 'style-icon',
    question: 'Who\'s your ultimate style icon and why?',
    options: [
      'Rihanna - fearless and trend-setting',
      'Timothée Chalamet - effortlessly cool and modern',
      'Beyoncé - powerful and glamorous',
      'David Bowie - innovative and boundary-pushing',
      'Audrey Hepburn - classic and eternally chic'
    ]
  },
  {
    id: 'fashion-decade',
    question: 'Which fashion decade resonates most with your style?',
    options: [
      '1920s - Art Deco glamour',
      '1950s - Classic elegance',
      '1970s - Bohemian and free-spirited',
      '1980s - Bold and maximalist',
      '1990s - Grunge and minimalism'
    ]
  },
  {
    id: 'style-evolution',
    question: 'How do you see your style evolving in the future?',
    options: [
      'More experimental and avant-garde',
      'Refined and investment in quality pieces',
      'Embracing sustainable and ethical fashion',
      'Developing a stronger personal brand',
      'Adapting to changing life stages and roles'
    ]
  },
  {
    id: 'fashion-philosophy',
    question: 'What\'s your fashion philosophy?',
    options: [
      'Fashion is self-expression',
      'Style is eternal, fashion is fleeting',
      'Dress for the occasion, always',
      'Break the rules and create your own',
      'Fashion should be fun and not taken too seriously'
    ]
  },
  {
    id: 'style-challenge',
    question: 'What\'s your biggest style challenge?',
    options: [
      'Finding clothes that fit perfectly',
      'Balancing comfort and style',
      'Staying true to myself while following trends',
      'Building a cohesive wardrobe',
      'Dressing for different aspects of my life'
    ]
  },
  {
    id: 'fashion-goal',
    question: 'What\'s your ultimate fashion goal?',
    options: [
      'To be recognized as a style influencer',
      'To have a perfectly curated wardrobe',
      'To launch my own fashion line',
      'To master the art of effortless style',
      'To always feel confident in what I wear'
    ]
  },
  {
    id: 'style-legacy',
    question: 'What style legacy do you want to leave behind?',
    options: [
      'A trailblazer who pushed boundaries',
      'A trailblazer who pushed boundaries',
      'An icon of timeless elegance',
      'Someone who inspired others to express themselves',
      'A master of versatile style',
      'An advocate for sustainable and ethical fashion'
    ]
  },
  {
    id: 'personal-style-description',
    question: 'If you had to describe your personal style in one sentence, what would it be?',
    options: [
      'Effortlessly chic with a touch of edge',
      'Bold, colorful, and unapologetically me',
      'Minimalist sophistication for the modern world',
      'Eclectic mix of vintage and contemporary',
      'Comfortable luxury with a street-style twist'
    ]
  },
  {
    id: 'fashion-mantra',
    question: 'What\'s your fashion mantra?',
    options: [
      'Dress like every day is a runway',
      'Comfort never goes out of style',
      'Your outfit is your mood ring',
      'Mix, don\'t match',
      'Invest in timeless pieces'
    ]
  }
]

export default function MainCharacterStatusQuiz() {
  const [userPoints, setUserPoints] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const points = localStorage.getItem('userPoints')
    if (!points || parseInt(points) < 250) {
      router.push('/questionnaire')
    }
    setUserPoints(parseInt(points || '0'))
  }, [router])

  const handleQuizComplete = (results: Record<string, string>) => {
    // Save results and redirect to results page
    localStorage.setItem('mainCharacterStatusResults', JSON.stringify(results))
    router.push('/questionnaire/main-character-status/results')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container max-w-3xl mx-auto px-4 py-12 relative">
        <Link href="/questionnaire" passHref>
          <Button
            variant="outline"
            className="absolute left-4 top-4 rounded-full p-2"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold">Main Character Status</h1>
          <p className="text-muted-foreground text-lg">
            Are you that girl/guy? This quiz spills the tea on your true fashion persona.
          </p>
        </div>

        <PremiumQuizForm questions={mainCharacterStatusQuestions} onComplete={handleQuizComplete} />
      </main>
      <Footer />
    </div>
  )
}

