import { NextResponse } from 'next/server'
import { findUserByEmail, verifyPassword } from '@/utils/users'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set in environment variables')
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
    }

    const user = findUserByEmail(email)
    if (!user || !verifyPassword(user, password)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

    return NextResponse.json({ token, userId: user.id })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

