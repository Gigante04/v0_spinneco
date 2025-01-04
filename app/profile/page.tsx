'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { toast } from '@/components/ui/use-toast'
import { RewardsProgress } from '@/components/rewards-progress'
import { Badge } from '@/components/ui/badge'

interface User {
  id: string
  name: string
  email: string
  points: number
  styleStatus?: string
  aura?: string
}

interface QuizResult {
  quizType: string
  completedAt: string
  result: string
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [quizResults, setQuizResults] = useState<QuizResult[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    } else {
      fetchUserData(token)
      fetchQuizResults(token)
    }
  }, [router])

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
        setEditedUser(userData)
      } else {
        throw new Error('Failed to fetch user data')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user data",
        variant: "destructive",
      })
    }
  }

  const fetchQuizResults = async (token: string) => {
    try {
      const response = await fetch('/api/quiz-results', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.ok) {
        const results = await response.json()
        setQuizResults(results)
      } else {
        throw new Error('Failed to fetch quiz results')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch quiz results",
        variant: "destructive",
      })
    }
  }

  const handleEditProfile = () => {
    setIsEditing(true)
  }

  const handleSaveProfile = async () => {
    if (!editedUser) return

    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(editedUser)
      })
      if (response.ok) {
        setUser(editedUser)
        setIsEditing(false)
        toast({
          title: "Success",
          description: "Profile updated successfully",
        })
      } else {
        throw new Error('Failed to update profile')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-full">
            <p className="text-xl">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="quizzes">Quiz Results</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={editedUser?.name || ''}
                        onChange={(e) => setEditedUser(prev => prev ? {...prev, name: e.target.value} : null)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editedUser?.email || ''}
                        onChange={(e) => setEditedUser(prev => prev ? {...prev, email: e.target.value} : null)}
                      />
                    </div>
                    <Button type="submit">Save Changes</Button>
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </form>
                ) : (
                  <div className="space-y-2">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Points:</strong> {user.points}</p>
                    <p><strong>Style Status:</strong> {user.styleStatus || 'Not determined yet'}</p>
                    <p><strong>Aura:</strong> {user.aura || 'Not determined yet'}</p>
                    <Button onClick={handleEditProfile}>Edit Profile</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="quizzes">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quiz Type</TableHead>
                      <TableHead>Completed At</TableHead>
                      <TableHead>Result</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quizResults.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell>{result.quizType}</TableCell>
                        <TableCell>{new Date(result.completedAt).toLocaleString()}</TableCell>
                        <TableCell>{result.result}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rewards">
            <Card>
              <CardHeader>
                <CardTitle>Rewards & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <RewardsProgress />
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    {quizResults.map((result, index) => (
                      <Badge key={index} variant="secondary">
                        {result.quizType} Completed
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Button onClick={handleLogout} variant="outline" className="mt-6">Log Out</Button>
      </main>
      <Footer />
    </div>
  )
}

