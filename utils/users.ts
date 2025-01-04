import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

// Define the User type
export interface User {
  id: string
  email: string
  password: string
  name: string
  createdAt: string
}

// Path to our JSON file acting as a simple database
const usersFilePath = path.join(process.cwd(), 'data', 'users.json')

// Function to read users from the JSON file
export function getUsers(): User[] {
  if (!fs.existsSync(usersFilePath)) {
    return []
  }
  const fileContents = fs.readFileSync(usersFilePath, 'utf8')
  return JSON.parse(fileContents)
}

// Function to write users to the JSON file
function saveUsers(users: User[]) {
  const dirPath = path.dirname(usersFilePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
}

// Function to find a user by email
export function findUserByEmail(email: string): User | undefined {
  const users = getUsers()
  return users.find(user => user.email === email)
}

// Function to create a new user
export function createUser(email: string, password: string, name: string): User {
  const users = getUsers()
  const newUser: User = {
    id: uuidv4(),
    email,
    password: bcrypt.hashSync(password, 10),
    name,
    createdAt: new Date().toISOString()
  }
  users.push(newUser)
  saveUsers(users)
  return newUser
}

// Function to verify a user's password
export function verifyPassword(user: User, password: string): boolean {
  return bcrypt.compareSync(password, user.password)
}

