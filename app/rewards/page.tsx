import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Zap, Shield, Crown, Sparkles } from 'lucide-react'

const rewardLevels = [
  {
    name: "Novice Trendsetter",
    points: "30-99",
    benefits: ["Early access to sales", "Birthday gift"],
    icon: Star
  },
  {
    name: "Style Apprentice",
    points: "100-299",
    benefits: ["Free standard shipping", "Exclusive member-only products", "Double points days"],
    icon: Zap
  },
  {
    name: "Fashion Virtuoso",
    points: "300-599",
    benefits: ["Free express shipping", "Personal stylist consultation", "VIP event invitations"],
    icon: Shield
  },
  {
    name: "Couture Connoisseur",
    points: "600-999",
    benefits: ["Priority customer service", "Free alterations", "Annual gift", "Exclusive experiences"],
    icon: Crown
  },
  {
    name: "Elite Aura Master",
    points: "1000+",
    benefits: ["Lifetime free shipping", "First access to limited editions", "Personalized wardrobe curation", "Invitation to fashion week events"],
    icon: Sparkles
  }
]

export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">SPINNECO Rewards</h1>
        <p className="text-lg mb-8">Join our rewards program to earn points, unlock exclusive benefits, and elevate your shopping experience with SPINNECO.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Earn Points</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Earn 1 point for every $1 spent</li>
            <li>Refer a friend: 500 points when they make their first purchase</li>
            <li>Write a product review: 50 points per review</li>
            <li>Follow us on social media: 100 points per platform</li>
            <li>Complete your style profile: 200 points</li>
            <li>Participate in our seasonal challenges: Up to 1000 points</li>
          </ul>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rewardLevels.map((level, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500">
                <CardTitle className="flex items-center text-white">
                  <level.icon className="mr-2 h-6 w-6" />
                  {level.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-semibold mb-4 text-lg">{level.points} points</p>
                <ul className="list-disc pl-5 space-y-2">
                  {level.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm">{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

