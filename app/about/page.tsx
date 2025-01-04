'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useInView } from 'react-intersection-observer'
import { Star, Zap, Shield, Trophy } from 'lucide-react'
import { SharePrompt } from '@/components/share-prompt'
import { FloatingColumn } from '@/components/floating-column'
import Image from 'next/image'

const features = [
  {
    icon: Star,
    title: "Your Style, Your Rules",
    description: "Stunning looks that make a statement"
  },
  {
    icon: Zap,
    title: "Level Up Your Style",
    description: "Turn heads with outfits that stand out"
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "Only the best, carefully curated pieces"
  },
  {
    icon: Trophy,
    title: "Exclusive Rewards",
    description: "Earn rewards that set you apart"
  }
]

const testimonials = [
  {
    name: "Alex F.",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "SPINNECO transformed my style. I'm making an impression everywhere I go.",
  },
  {
    name: "Sam T.",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "The quizzes are engaging, and the personalized recommendations are spot-on.",
  },
  {
    name: "Jordan L.",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "I've never felt more confident in my clothes. SPINNECO is a game-changer.",
  },
]

export default function AboutPage() {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section ref={featuresRef} className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Explore Your Fashion Identity</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <FloatingColumn key={feature.title} delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-4 mb-6">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 flex-grow">{feature.description}</p>
                  </div>
                </FloatingColumn>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Hear from Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <FloatingColumn key={testimonial.name} delay={index * 0.1}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  </div>
                  <p className="text-gray-300 italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </FloatingColumn>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Download the SPINNECO App</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Get exclusive access to limited drops, personalized style recommendations, and connect with fellow fashion enthusiasts. Your style journey is just a tap away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EEAC0C2B-2AD1-42E2-B1E8-23F04B42DE92-fRNnZ0ZLFAAe5rCSUapNVcnF2Yu66D.jpeg" 
                      alt="SPINNECO App Icon" 
                      width={24} 
                      height={24} 
                      className="mr-2 rounded-md"
                    />
                    App Store
                  </Button>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EEAC0C2B-2AD1-42E2-B1E8-23F04B42DE92-fRNnZ0ZLFAAe5rCSUapNVcnF2Yu66D.jpeg" 
                      alt="SPINNECO App Icon" 
                      width={24} 
                      height={24} 
                      className="mr-2 rounded-md"
                    />
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EEAC0C2B-2AD1-42E2-B1E8-23F04B42DE92-fRNnZ0ZLFAAe5rCSUapNVcnF2Yu66D.jpeg"
                  alt="SPINNECO App"
                  width={300}
                  height={600}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-4 shadow-lg">
                  <Star className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FloatingColumn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Find Your Look?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join us and discover styles that truly represent you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Begin Your Journey
                  </Button>
                </Link>
                <SharePrompt />
              </div>
            </FloatingColumn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

