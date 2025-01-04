import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock database
let products: any[] = []

const authenticateAdmin = (request: Request) => {
  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token) {
    return false
  }
  try {
    const decoded = verify(token, JWT_SECRET)
    return (decoded as any).role === 'admin'
  } catch (error) {
    return false
  }
}

export async function GET(request: Request) {
  if (!authenticateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.json({ products })
}

export async function POST(request: Request) {
  if (!authenticateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const product = await request.json()
  const newProduct = {
    id: uuidv4(),
    ...product,
    sold: false
  }
  products.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}

