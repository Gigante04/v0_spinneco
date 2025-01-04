import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'

const bestSellers = [
  { id: 1, name: 'Classic SPINNE Tee', price: 49.99, image: '/placeholder.svg', category: 'Tops' },
  { id: 2, name: 'Urban Cargo Pants', price: 89.99, image: '/placeholder.svg', category: 'Bottoms' },
  { id: 3, name: 'Sleek Performance Jacket', price: 149.99, image: '/placeholder.svg', category: 'Outerwear' },
  { id: 4, name: 'Comfort-Tech Sneakers', price: 129.99, image: '/placeholder.svg', category: 'Footwear' },
]

export default function BestSellersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Best Sellers</h1>
        <p className="text-lg mb-8">Our most popular items that customers love. These pieces have stood the test of time and continue to impress.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

