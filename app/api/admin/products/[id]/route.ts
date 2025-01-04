import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'

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

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!authenticateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const updates = await request.json()
  const index = products.findIndex(p => p.id === params.id)
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
  products[index] = { ...products[index], ...updates }
  return NextResponse.json(products[index])
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!authenticateAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const index = products.findIndex(p => p.id === params.id)
  if (index === -1) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
  products.splice(index, 1)
  return NextResponse.json({ message: 'Product deleted successfully' })
}

