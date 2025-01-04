import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf, Recycle, Droplet, Sun } from 'lucide-react'

const initiatives = [
  {
    title: "Eco-Friendly Materials",
    description: "We use recycled and organic materials in our products, reducing our environmental impact.",
    icon: Leaf
  },
  {
    title: "Circular Fashion",
    description: "Our take-back program ensures old SPINNECO items are recycled or upcycled, not discarded.",
    icon: Recycle
  },
  {
    title: "Water Conservation",
    description: "Our manufacturing processes use 50% less water than traditional methods.",
    icon: Droplet
  },
  {
    title: "Renewable Energy",
    description: "Our facilities are powered by 100% renewable energy sources.",
    icon: Sun
  }
]

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h1>
        <p className="text-lg mb-8">At SPINNECO, sustainability isn't just a buzzword—it's at the core of everything we do. We're committed to creating fashion that looks good and does good for the planet.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <initiative.icon className="mr-2 h-6 w-6" />
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieve carbon neutrality by 2025</li>
            <li>Use 100% sustainable materials in all our products by 2027</li>
            <li>Eliminate single-use plastics from our supply chain by 2023</li>
            <li>Implement a fully transparent supply chain by 2024</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

