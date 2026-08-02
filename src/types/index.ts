export interface Product {
  id: number
  name: string
  category: 'Rações' | 'Medicamentos' | 'Brinquedos'
  description: string
  price: number
  rating: number
  reviews: number
  image: string
  badge?: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: number
  name: string
  pet: string
  rating: number
  text: string
  avatar: string
}

export interface FAQItem {
  question: string
  answer: string
}