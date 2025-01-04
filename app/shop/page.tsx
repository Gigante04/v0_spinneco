'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import Image from 'next/image'

const futuristicHoodie = {
  id: 1,
  name: 'Futuristic Hoodie',
  price: 199.99,
  image: '/placeholder.svg',
  description: 'Experience the future of fashion with our cutting-edge Futuristic Hoodie. Featuring smart fabric technology, customizable LED accents, and a sleek, modern design, this hoodie is the perfect blend of style and innovation.',
  features: [
    'Smart temperature regulation',
    'Built-in Bluetooth speakers',
    'Customizable LED lighting',
    'Nano-tech water repellent coating',
    'Hidden tech-friendly pockets'
  ],
  stock: 50
}

export default function ShopPage() {
  const [quantity, setQuantity] = useState(1)

  const handlePurchase = () => {
    const pointsEarned = Math.floor(futuristicHoodie.price) * 2 * quantity
    const currentPoints = parseInt(localStorage.getItem('userPoints') || '0')
    const newPoints = currentPoints + pointsEarned
    localStorage.setItem('userPoints', newPoints.toString())
    toast({
      title: "Purchase Successful!",
      description: `You earned ${pointsEarned} points (2x bonus!). Your new total is ${newPoints} points.`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          SPINNECO Exclusive: Futuristic Hoodie
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={futuristicHoodie.image}
              alt={futuristicHoodie.name}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">{futuristicHoodie.name}</h2>
            <p className="text-xl font-bold">${futuristicHoodie.price.toFixed(2)}</p>
            <p className="text-gray-600 dark:text-gray-300">{futuristicHoodie.description}</p>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                {futuristicHoodie.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                max={futuristicHoodie.stock}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(futuristicHoodie.stock, parseInt(e.target.value))))}
                className="w-16 px-2 py-1 border rounded"
              />
            </div>
            <p className="text-sm text-gray-500">{futuristicHoodie.stock} in stock</p>
            <Button onClick={handlePurchase} className="w-full">
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

