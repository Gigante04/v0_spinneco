import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'

const newArrivals = [
  { id: 1, name: 'Futuristic Hoodie', price: 89.99, image: '/placeholder.svg', category: 'Tops' },
  { id: 2, name: 'Neon Trim Jeans', price: 129.99, image: '/placeholder.svg', category: 'Bottoms' },
  { id: 3, name: 'Holographic Jacket', price: 199.99, image: '/placeholder.svg', category: 'Outerwear' },
  { id: 4, name: 'LED Sneakers', price: 159.99, image: '/placeholder.svg', category: 'Footwear' },
]

export default function NewArrivalsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
        <p className="text-lg mb-8">Discover our latest and most exciting products, fresh off the design board and ready to elevate your style.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

