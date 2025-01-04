'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Trophy, Star, Crown } from 'lucide-react'

const rewardLevels = [
  { name: 'Novice Trendsetter', points: 50, icon: Trophy },
  { name: 'Style Apprentice', points: 100, icon: Star },
  { name: 'Fashion Virtuoso', points: 250, icon: Crown },
]

export function RewardsProgress() {
  const [userPoints, setUserPoints] = useState(0)

  useEffect(() => {
    const storedPoints = localStorage.getItem('userPoints')
    if (storedPoints) {
      setUserPoints(parseInt(storedPoints))
    }
  }, [])

  const currentLevel = rewardLevels.findIndex(level => userPoints < level.points)
  const prevLevel = currentLevel > 0 ? rewardLevels[currentLevel - 1] : { points: 0 }
  const nextLevel = rewardLevels[currentLevel] || rewardLevels[rewardLevels.length - 1]
  const progress = ((userPoints - prevLevel.points) / (nextLevel.points - prevLevel.points)) * 100

  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Your Style Journey</h2>
      <div className="flex items-center justify-between mb-1 text-xs">
        <span className="text-sm">{userPoints} points</span>
        <span className="text-sm">{nextLevel.points} points</span>
      </div>
      <Progress value={progress} className="mb-3" />
      <div className="flex items-center justify-between">
        {rewardLevels.map((level, index) => (
          <div key={level.name} className="flex flex-col items-center">
            <level.icon 
              className={`w-6 h-6 ${userPoints >= level.points ? 'text-yellow-400' : 'text-gray-400'}`} 
            />
            <span className={`text-xs mt-1 ${userPoints >= level.points ? 'text-yellow-400' : 'text-gray-400'}`}>
              {level.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

