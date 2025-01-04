'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface AuthOverlayProps {
  isVisible: boolean
  onClose: () => void
}

export function AuthOverlay({ isVisible, onClose }: AuthOverlayProps) {
  const router = useRouter()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-md px-4"
          >
            <Card className="border-2 border-pink-500/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Unlock Your Results</CardTitle>
                <CardDescription className="text-lg">
                  Sign in to view your personalized quiz results and start your style journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Button
                    className="w-full bg-pink-600 hover:bg-pink-700"
                    onClick={() => router.push('/login')}
                  >
                    Sign In
                  </Button>
                  <div className="text-center">
                    <span className="text-sm text-gray-400">Don't have an account? </span>
                    <Link href="/register" className="text-sm text-pink-400 hover:text-pink-300">
                      Create one now
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

