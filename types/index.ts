export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export interface User {
  id: string
  name: string
  email: string
  points: number
  level: string
}

export interface QuestionnaireResponse {
  userId: string
  answers: Array<{
    questionId: number
    answer: string
  }>
}

