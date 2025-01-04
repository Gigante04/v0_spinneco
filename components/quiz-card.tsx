'use client'

import { Lock, Star, Trophy, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface QuizCardProps {
  title: string
  description: string
  participants?: number
  isLocked?: boolean
  pointsRequired?: number
  onClick: () => void
  popularity?: number
}

export function QuizCard({
  title,
  description,
  participants = 0,
  isLocked = false,
  pointsRequired = 0,
  onClick,
  popularity = 0
}: QuizCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`cursor-pointer relative overflow-hidden ${
          isLocked ? 'bg-gray-900' : 'bg-gray-800'
        }`}
        onClick={onClick}
      >
        {popularity > 75 && (
          <div className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            {popularity > 90 ? 'Bussin' : 'Trending'}
          </div>
        )}
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {title}
            {isLocked && <Lock className="w-4 h-4 text-gray-400" />}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {participants.toLocaleString()} taken
              </div>
              {isLocked && (
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  {pointsRequired} points required
                </div>
              )}
            </div>
            <Progress value={popularity} className="h-1" />
            <Button 
              className={isLocked ? 'w-full bg-gray-700' : 'w-full bg-pink-600 hover:bg-pink-700'}
              disabled={isLocked}
            >
              {isLocked ? `Unlock at ${pointsRequired} Points` : 'Start Quiz'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

