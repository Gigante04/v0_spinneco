import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock order database
const orders = [
  { id: '1', userId: '1', date: '2023-05-01', total: 99.99, status: 'Delivered' },
  { id: '2', userId: '1', date: '2023-06-15', total: 149.99, status: 'Shipped' },
  { id: '3', userId: '2', date: '2023-07-01', total: 79.99, status: 'Processing' },
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
  const userOrders = orders.filter(order => order.userId === user.userId)
  return NextResponse.json(userOrders)
}

