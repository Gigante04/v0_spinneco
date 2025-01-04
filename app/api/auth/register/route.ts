import { NextResponse } from 'next/server'
import { createUser, findUserByEmail } from '@/utils/users'

export async function POST(request: Request) {
  const { email, password, name } = await request.json()

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const existingUser = findUserByEmail(email)
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }

  const newUser = createUser(email, password, name)
  return NextResponse.json({ message: 'User created successfully', userId: newUser.id }, { status: 201 })
}

