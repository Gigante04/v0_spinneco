import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const collections = [
  { id: 1, name: 'Urban Explorer', description: 'Versatile pieces for the city adventurer', image: '/placeholder.svg' },
  { id: 2, name: 'Eco Essentials', description: 'Sustainable fashion for the environmentally conscious', image: '/placeholder.svg' },
  { id: 3, name: 'Tech Wear', description: 'Cutting-edge designs with integrated smart features', image: '/placeholder.svg' },
  { id: 4, name: 'Retro Revival', description: 'Nostalgic styles with a modern twist', image: '/placeholder.svg' },
]

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Collections</h1>
        <p className="text-lg mb-8">Explore our curated collections, each telling a unique style story and catering to different tastes and occasions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link href={`/shop/collections/${collection.id}`} key={collection.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{collection.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{collection.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

