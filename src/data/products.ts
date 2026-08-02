import type { Product, Testimonial, FAQItem } from '../types'

export const products: Product[] = [
  {
    id: 1, name: 'Ração Premium Adulto', category: 'Rações',
    description: 'Nutrição completa para cães adultos de porte médio.',
    price: 189.90, rating: 4.9, reviews: 324,
    image: 'https://plus.unsplash.com/premium_photo-1781089294692-b964965e9ac2?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Mais vendido',
  },
  {
    id: 2, name: 'Ração Filhotes Growth', category: 'Rações',
    description: 'Fórmula especial para o desenvolvimento saudável.',
    price: 159.90, rating: 4.8, reviews: 218,
    image: 'https://plus.unsplash.com/premium_photo-1781374067547-c336a59af14a?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3, name: 'Ração Gatos Castrados', category: 'Rações',
    description: 'Controle de peso e saúde urinária para felinos.',
    price: 129.90, rating: 4.7, reviews: 156,
    image: 'https://img.magnific.com/fotos-gratis/variedade-de-alimentos-para-animais-de-estimacao_23-2148982363.jpg?t=st=1785702513~exp=1785706113~hmac=2ebd8e0b26be14ad8f02210aeafb5234a6cc6c8135906a230a142c64c8fb7760&w=2000',
  },
  {
    id: 4, name: 'Ração Senior Care', category: 'Rações',
    description: 'Cuidados especiais para pets acima de 7 anos.',
    price: 199.90, rating: 4.9, reviews: 89,
    image: 'https://images.unsplash.com/photo-1658418205277-6baf0f57b191?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5, name: 'Antipulgas e Carrapatos', category: 'Medicamentos',
    description: 'Proteção completa por até 3 meses.',
    price: 89.90, rating: 4.8, reviews: 412,
    image: 'https://images.unsplash.com/photo-1508609540374-67d1601ba520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxwZXQlMjBtZWRpY2F0aW9ufGVufDB8fDB8fHww',
    badge: 'Novo',
  },
  {
    id: 6, name: 'Vermífugo Completo', category: 'Medicamentos',
    description: 'Amplo espectro para cães e gatos.',
    price: 45.90, rating: 4.7, reviews: 267,
    image: 'https://images.unsplash.com/photo-1740679953466-af12bae238cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7, name: 'Suplemento Articular', category: 'Medicamentos',
    description: 'Glicosamina e condroitina para articulações.',
    price: 119.90, rating: 4.9, reviews: 143,
    image: 'https://images.unsplash.com/photo-1596645116033-bbcf5a34dccb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8, name: 'Shampoo Hipoalergênico', category: 'Medicamentos',
    description: 'Para peles sensíveis e alergias.',
    price: 39.90, rating: 4.6, reviews: 98,
    image: 'https://plus.unsplash.com/premium_photo-1661274062486-3b792550ab7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9, name: 'Bola Interativa Smart', category: 'Brinquedos',
    description: 'Bola com sensor de movimento e LED.',
    price: 79.90, rating: 4.8, reviews: 187,
    image: 'https://images.unsplash.com/photo-1722257401181-a04cc4df36f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Promoção',
  },
  {
    id: 10, name: 'Mordedor de Corda', category: 'Brinquedos',
    description: 'Resistente e ideal para limpeza dental.',
    price: 29.90, rating: 4.5, reviews: 234,
    image: 'https://images.unsplash.com/photo-1522008693277-086ad6075b78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11, name: 'Ratinho de Pelúcia', category: 'Brinquedos',
    description: 'Brinquedo macio com catnip para gatos.',
    price: 19.90, rating: 4.7, reviews: 312,
    image: 'https://images.unsplash.com/photo-1570450466756-c1c0bc431719?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12, name: 'Frisbee Ultra Resistente', category: 'Brinquedos',
    description: 'Para brincadeiras ao ar livre.',
    price: 49.90, rating: 4.6, reviews: 156,
    image: 'https://images.unsplash.com/photo-1661091856780-88d7d4091c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvZyUyMHRveXxlbnwwfHwwfHx8MA%3D%3D',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1, name: 'Ana Carolina', pet: 'Tutora da Luna',
    rating: 5,
    text: 'Atendimento impecável! A Dra. Marina foi super atenciosa com minha cachorrinha. Ambiente acolhedor e equipe muito preparada.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    id: 2, name: 'Ricardo Mendes', pet: 'Tutor do Thor',
    rating: 5,
    text: 'Levei meu Thor para vacinação e fui surpreendido pela estrutura moderna. Preço justo e profissionais extremamente competentes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 3, name: 'Juliana Costa', pet: 'Tutora do Mimi',
    rating: 5,
    text: 'O banho e tosa ficaram perfeitos! Meu gato nunca esteve tão bonito. Recomendo de olhos fechados para todos os tutores.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    id: 4, name: 'Fernando Lima', pet: 'Tutor do Bob',
    rating: 5,
    text: 'Emergência às 2h da manhã e fomos atendidos com rapidez e carinho. Salvaram meu cachorro. Gratidão eterna!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
]

export const faqs: FAQItem[] = [
  {
    question: 'Preciso agendar consulta com antecedência?',
    answer: 'Recomendamos agendamento prévio para garantir seu horário, mas também atendemos emergências 24h sem necessidade de agendamento.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos cartões de crédito e débito, PIX, dinheiro e boleto bancário. Parcelamos em até 3x sem juros.',
  },
  {
    question: 'Vocês atendem gatos e outros animais?',
    answer: 'Sim! Atendemos cães, gatos, coelhos, aves e pequenos roedores. Nossa equipe é especializada em diversas espécies.',
  },
  {
    question: 'O banho e tosa inclui produtos?',
    answer: 'Sim, todos os produtos (shampoo, condicionador, perfume) estão inclusos no valor do serviço. Utilizamos apenas produtos hipoalergênicos.',
  },
  {
    question: 'Posso acompanhar a consulta?',
    answer: 'Claro! Incentivamos que o tutor esteja presente durante toda a consulta para tranquilizar o pet e tirar dúvidas.',
  },
  {
    question: 'Vocês fazem atendimento domiciliar?',
    answer: 'Sim, oferecemos atendimento domiciliar para pets que não podem se locomover ou em casos específicos. Consulte disponibilidade.',
  },
]