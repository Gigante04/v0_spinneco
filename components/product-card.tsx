'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  stock: number
  isPreOrder: boolean
}

interface ProductCardProps {
  product: Product
  onPurchase: (productId: number) => void
}

export function ProductCard({ product, onPurchase }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <CardContent className="p-0 flex-grow relative">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-40 object-cover"
          />
          {product.stock <= 5 && !product.isPreOrder && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              Only {product.stock} left!
            </div>
          )}
          {product.isPreOrder && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              Pre-Order
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start p-3">
          <h3 className="font-semibold text-base mb-1">{product.name}</h3>
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">${product.price.toFixed(2)}</p>
          <Button 
            className="w-full text-sm py-1" 
            onClick={() => onPurchase(product.id)}
            disabled={product.stock === 0 && !product.isPreOrder}
          >
            {product.isPreOrder ? "Pre-Order Now" : (product.stock > 0 ? "Add to Cart" : "Out of Stock")}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

