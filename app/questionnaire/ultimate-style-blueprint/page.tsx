'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PremiumQuizForm } from '@/components/premium-quiz-form'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ultimateStyleBlueprintQuestions = [
  {
    id: 'morning-routine',
    question: 'When you wake up and get ready, what\'s your first style thought?',
    options: [
      'Check the weather and plan accordingly',
      'Whatever feels right in the moment',
      'Already planned my fit last night',
      'Grab my go-to signature pieces',
      'Something that matches my mood'
    ]
  },
  {
    id: 'style-philosophy',
    question: 'What\'s your personal style philosophy?',
    options: [
      'Less is more - minimalism is key',
      'Bold and daring - fashion is art',
      'Comfort first, style second',
      'Mix high-end with streetwear',
      'Eclectic - a little bit of everything'
    ]
  },
  {
    id: 'fashion-inspiration',
    question: 'Where do you find your fashion inspiration?',
    options: [
      'Social media influencers',
      'High-fashion runways',
      'Street style in urban areas',
      'Vintage and thrift stores',
      'Nature and the world around me'
    ]
  },
  {
    id: 'wardrobe-staple',
    question: 'What\'s the one wardrobe staple you can\'t live without?',
    options: [
      'The perfect pair of jeans',
      'A classic white t-shirt',
      'A versatile blazer',
      'Comfortable sneakers',
      'A statement accessory'
    ]
  },
  {
    id: 'color-palette',
    question: 'What color palette best describes your wardrobe?',
    options: [
      'Neutral tones with pops of color',
      'All black everything',
      'Bright and bold mix',
      'Earthy and natural tones',
      'Pastel paradise'
    ]
  },
  {
    id: 'fashion-risk',
    question: 'How likely are you to take a fashion risk?',
    options: [
      'Very likely - I love pushing boundaries',
      'Somewhat likely - if it feels right',
      'Neutral - depends on the situation',
      'Somewhat unlikely - I prefer tried and true',
      'Very unlikely - I stick to what I know'
    ]
  },
  {
    id: 'shopping-habits',
    question: 'How would you describe your shopping habits?',
    options: [
      'Impulse buyer - if I love it, I get it',
      'Thoughtful planner - I research before buying',
      'Bargain hunter - always looking for deals',
      'Quality over quantity - I invest in key pieces',
      'Mood-based - I shop when inspiration strikes'
    ]
  },
  {
    id: 'style-icon',
    question: 'Who\'s your ultimate style icon?',
    options: [
      'Rihanna - bold and unapologetic',
      'Timothée Chalamet - effortlessly cool',
      'Zendaya - versatile and trend-setting',
      'Harry Styles - playful and gender-fluid',
      'Bella Hadid - sleek and avant-garde'
    ]
  },
  {
    id: 'fashion-decade',
    question: 'If you could bring back one fashion decade, which would it be?',
    options: [
      '1950s - classic and elegant',
      '1960s - mod and playful',
      '1970s - bohemian and free-spirited',
      '1980s - bold and over-the-top',
      '1990s - grunge and minimalist'
    ]
  },
  {
    id: 'accessory-preference',
    question: 'What\'s your go-to accessory?',
    options: [
      'Statement jewelry',
      'A classic watch',
      'A designer bag',
      'Stylish sunglasses',
      'A signature scarf'
    ]
  },
  {
    id: 'dress-code',
    question: 'How do you approach dress codes?',
    options: [
      'Follow them strictly',
      'Bend the rules creatively',
      'Ignore them completely',
      'Find a balance between rules and personal style',
      'Overdress rather than underdress'
    ]
  },
  {
    id: 'sustainable-fashion',
    question: 'How important is sustainable fashion to you?',
    options: [
      'Very important - I only buy sustainable brands',
      'Somewhat important - I try when possible',
      'Neutral - I don\'t think about it much',
      'Not very important - style comes first',
      'Not important at all - I don\'t consider it'
    ]
  },
  {
    id: 'style-evolution',
    question: 'How has your style evolved over the years?',
    options: [
      'Dramatically - I\'m always reinventing myself',
      'Gradually - I refine my look over time',
      'Cyclically - I revisit past styles',
      'Minimally - I\'ve found what works and stick to it',
      'Responsively - I adapt to life changes'
    ]
  },
  {
    id: 'fashion-splurge',
    question: 'What\'s the one fashion item you\'d splurge on?',
    options: [
      'A designer handbag',
      'Custom-made shoes',
      'A luxury watch',
      'A tailored suit',
      'An iconic piece of jewelry'
    ]
  },
  {
    id: 'style-confidence',
    question: 'When do you feel most confident in your style?',
    options: [
      'When I\'m wearing something new',
      'In my tried-and-true outfits',
      'When I receive compliments',
      'When I\'m comfortable',
      'When I\'ve put extra effort into my look'
    ]
  },
  {
    id: 'fashion-faux-pas',
    question: 'What\'s your biggest fashion faux pas?',
    options: [
      'Mixing patterns unsuccessfully',
      'Wearing clothes that don\'t fit properly',
      'Over-accessorizing',
      'Wearing outdated trends',
      'Not dressing appropriately for the occasion'
    ]
  },
  {
    id: 'style-motto',
    question: 'What\'s your style motto?',
    options: [
      'Dress for the job you want, not the one you have',
      'Fashion fades, style is eternal',
      'Confidence is the best accessory',
      'Break the rules, not the bank',
      'When in doubt, overdress'
    ]
  },
  {
    id: 'fashion-goal',
    question: 'What\'s your ultimate fashion goal?',
    options: [
      'To be featured in a fashion magazine',
      'To develop a signature look',
      'To build a sustainable wardrobe',
      'To feel confident in any situation',
      'To inspire others with my style'
    ]
  },
  {
    id: 'style-legacy',
    question: 'How do you want your style to be remembered?',
    options: [
      'Trendsetting and innovative',
      'Classic and timeless',
      'Bold and unapologetic',
      'Effortlessly cool',
      'Uniquely expressive'
    ]
  }
]

export default function UltimateStyleBlueprintQuiz() {
  const [userPoints, setUserPoints] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const points = localStorage.getItem('userPoints')
    if (!points || parseInt(points) < 100) {
      router.push('/questionnaire')
    }
    setUserPoints(parseInt(points || '0'))
  }, [router])

  const handleQuizComplete = (results: Record<string, string>) => {
    // Save results and redirect to results page
    localStorage.setItem('ultimateStyleBlueprintResults', JSON.stringify(results))
    router.push('/questionnaire/ultimate-style-blueprint/results')
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
          <h1 className="text-4xl font-bold">The Ultimate Style Blueprint</h1>
          <p className="text-muted-foreground text-lg">
            Get ready for the most in-depth style analysis ever. This is where we really get to know you!
          </p>
        </div>

        <PremiumQuizForm questions={ultimateStyleBlueprintQuestions} onComplete={handleQuizComplete} />
      </main>
      <Footer />
    </div>
  )
}

