import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock user database
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', points: 100 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', points: 150 },
]

const authenticateUser = (request: Request) => {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token) {
    return null
  }
  try {
    return verify(token, JWT_SECRET) as { userId: string }
  } catch (error) {
    return null
  }
}

export async function GET(request: Request) {
  const user = authenticateUser(request)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userData = users.find(u => u.id === user.userId)
  if (!userData) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  return NextResponse.json(userData)
}

export async function PUT(request: Request) {
  const user = authenticateUser(request)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const updates = await request.json()
  const index = users.findIndex(u => u.id === user.userId)
  if (index === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  users[index] = { ...users[index], ...updates }
  return NextResponse.json(users[index])
}

