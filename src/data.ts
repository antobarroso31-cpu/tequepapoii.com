import type { MenuItem, OwnerInfo, Testimonial, FaqItem } from './types';

export const OWNERS: OwnerInfo[] = [
  {
    id: 'antony',
    name: 'Antony Contreras',
    role: 'Co-Fundador & Maestro Quesero',
    title: 'Chef de Innovación Gastronómica',
    minionPersona: 'El Alquimista del Queso Fundido',
    quote: '"El secreto está en el grosor exacto de la masa y la temperatura del queso blanco para lograr el estirón más largo del planeta."',
    avatarSvg: '/owner-antony.svg',
    specialties: ['Receta secreta de masa artesanal', 'Selección de quesos blancos madurados', 'Técnica de enrollado sin fugas'],
    favoriteTequeno: 'Tequeños Mega Papoi 100% Queso Fundido'
  },
  {
    id: 'diego',
    name: 'Diego Tigrera',
    role: 'Co-Fundador & Maestro del Crujiente',
    title: 'Director de Fritura & Operaciones',
    minionPersona: 'El Guardián del Crunch Dorado',
    quote: '"Si al morderlo no suena como un verdadero ¡PAPOI!, no sale de nuestra cocina. La textura crujiente es sagrada."',
    avatarSvg: '/owner-diego.svg',
    specialties: ['Control térmico de freído rápido', 'Control de calidad dorada', 'Logística de empaque ultra-caliente'],
    favoriteTequeno: 'Tequeños Clásicos con Salsa de Ajo Papoi'
  },
  {
    id: 'richard',
    name: 'Richard Rodriguez',
    role: 'Co-Fundador & Creador de Sabor',
    title: 'Especialista en Experiencia & Salsas',
    minionPersona: 'El Sommelier de Salsas & Fiesta',
    quote: '"Cada bocado debe sentirse como una fiesta de Minions. Un tequeño sin su salsa de la casa es como un Minion sin su banana."',
    avatarSvg: '/owner-richard.svg',
    specialties: ['Formulación de salsa tártara artesanal', 'Diseño de combinaciones dulces & saladas', 'Atención personalizada al cliente'],
    favoriteTequeno: 'Tequeño Banana & Nutella ¡Bananaaa!'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'clasico-12',
    name: 'Tequeños Clásicos Tradicionales',
    category: 'clasicos',
    description: 'Nuestra receta insignia: bastones de queso blanco llanero envueltos en masa crujiente doradita y esponjosa.',
    price: 7.50,
    packSize: '12 unidades + 1 Salsa gratis',
    image: '/images/tequeno-clasico.jpg',
    minionQuote: '¡Bello! Queso elástico para compartir.',
    isPopular: true,
    cheesePullScore: 5,
    tags: ['Favorito', 'Queso Blanco', 'Crujiente']
  },
  {
    id: 'mega-queso-12',
    name: 'Tequeños Mega Papoi Queso Fundido',
    category: 'clasicos',
    description: 'Doble porción de queso semi-duro fundente con un toque de mantequilla y sal marina en masa hojaldrada.',
    price: 9.00,
    packSize: '12 unidades + 2 Salsas',
    image: '/images/tequeno-mega-queso.jpg',
    minionQuote: '¡Tulaliloo ti amo! Queso infinito.',
    isPopular: true,
    cheesePullScore: 5,
    tags: ['Mega Queso', 'Extra Estirable']
  },
  {
    id: 'banana-nutella-8',
    name: 'Tequeños Dulces "¡Bananaaa & Nutella!"',
    category: 'especiales',
    description: 'Rellenos de plátano dulce madurado caramelizado y auténtica crema Nutella de avellana, espolvoreados con azúcar nevada.',
    price: 8.50,
    packSize: '8 unidades + Salsa Dulce',
    image: '/images/tequeno-banana.jpg',
    minionQuote: '¡BANANAAA! El preferido de Bob y Kevin.',
    isSweet: true,
    isPopular: true,
    cheesePullScore: 4,
    tags: ['Dulce', 'Nutella', 'Banana Favorita']
  },
  {
    id: 'guayaba-queso-10',
    name: 'Tequeños Guayaba & Queso Papoi',
    category: 'especiales',
    description: 'El matrimonio perfecto: dulce bocadillo de guayaba roja colombiana con queso blanco salado criollo.',
    price: 8.00,
    packSize: '10 unidades + 1 Salsa',
    image: '/images/tequeno-guayaba.jpg',
    minionQuote: '¡Me want banana... and guayaba!',
    isSweet: true,
    cheesePullScore: 4,
    tags: ['Agridulce', 'Guayaba', 'Tradicional']
  },
  {
    id: 'bacon-cheddar-10',
    name: 'Tequeños Bacon Crocante & Cheddar',
    category: 'especiales',
    description: 'Trozos de tocineta ahumada crujiente combinados con queso cheddar fundido que explota de sabor en cada mordisco.',
    price: 9.50,
    packSize: '10 unidades + 1 Salsa',
    image: '/images/tequeno-bacon.jpg',
    minionQuote: '¡Poopaye! Un festival de crunch ahumado.',
    cheesePullScore: 5,
    tags: ['Tocineta Ahumada', 'Cheddar Fundido']
  },
  {
    id: 'combo-fiesta-25',
    name: 'Papoi Fiesta Box (25 Piezas)',
    category: 'combos',
    description: 'Caja surtida ideal para reuniones: 15 Clásicos + 5 Guayaba & Queso + 5 Bacon Cheddar + 3 Salsas.',
    price: 18.00,
    packSize: '25 piezas surtidas + 3 Salsas',
    image: '/images/combo-fiesta.jpg',
    minionQuote: '¡Para la tribu Minion completa!',
    isPopular: true,
    cheesePullScore: 5,
    tags: ['Reuniones', 'Ahorro', 'Surtido']
  },
  {
    id: 'combo-mega-50',
    name: 'Super Papoi Party Box (50 Piezas)',
    category: 'combos',
    description: 'La caja definitiva para cumpleaños y eventos: 30 Clásicos + 10 Bacon + 10 Banana Nutella + 5 Salsas de la casa.',
    price: 34.00,
    packSize: '50 piezas surtidas + 5 Salsas gigantes',
    image: '/images/combo-mega.jpg',
    minionQuote: '¡FIESTA TOTAL! No quedará ni una migaja.',
    cheesePullScore: 5,
    tags: ['Eventos', 'Cumpleaños', 'Maxi Ahorro']
  },
  {
    id: 'salsas-trio',
    name: 'Trío de Salsas Legendarias Papoi',
    category: 'salsas',
    description: 'Lleva el trío de salsas artesanales: 1 Salsa de Ajo Minion, 1 Tártara Gru y 1 Miel Mostaza Dulce.',
    price: 3.50,
    packSize: '3 envases de 2 oz c/u',
    image: '/images/salsas-papoi.jpg',
    minionQuote: '¡El dip sagrado que todo tequeño merece!',
    cheesePullScore: 1,
    tags: ['Salsas Caseras', 'Dipping']
  }
];

export const SAUCE_OPTIONS = [
  'Salsa de Ajo Papoi (Receta Secreta)',
  'Tártara Gru con finas hierbas',
  'Miel Mostaza Minion Dulce',
  'Chutney Picantico Papoi',
  'Nutella Dip Extra'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'María Alejandra Gómez',
    role: 'Cliente Frecuente (Caracas / Delivery)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    comment: '¡Los tequeños llegaron hirviendo y con un crunch de otro nivel! Mis felicitaciones a Antony, Diego y Richard. Los de Banana Nutella son adictivos.',
    rating: 5,
    favorite: 'Tequeños Banana & Nutella'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Organizador de Eventos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    comment: 'Pedí dos cajas de 50 para el cumpleaños de mi hijo temático de Minions. Todos los invitados quedaron fascinados. El queso estira de verdad.',
    rating: 5,
    favorite: 'Super Papoi Party Box 50'
  },
  {
    name: 'Valentina Silva',
    role: 'Food Blogger & Amante del Queso',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    comment: 'La salsa tártara de Richard y el dorado perfecto que logra Diego hacen una combinación brutal. Tequeños El Papoi se convirtió en mi vicio del fin de semana.',
    rating: 5,
    favorite: 'Tequeños Mega Papoi'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Por qué se llaman Tequeños El Papoi?',
    answer: 'Nace de la pasión compartida por los propietarios (Antony Contreras, Diego Tigrera y Richard Rodriguez) por la alegría, el desorden divertido y el humor de los Minions. En el idioma Minion, "Papoi" significa juguete o sorpresa deliciosa, ¡y qué mejor juguete para el paladar que un tequeño lleno de queso derretido!'
  },
  {
    question: '¿Quiénes preparan los tequeños?',
    answer: 'Cada lote es supervisado directamente por sus fundadores: Antony Contreras se encarga de la formulación y calidad del queso, Diego Tigrera domina la técnica de fritura y punto crujiente, y Richard Rodriguez elabora artesanalmente las salsas y cuida la experiencia de cada cliente.'
  },
  {
    question: '¿Cómo puedo hacer un pedido?',
    answer: 'Puedes armar tu carrito directamente en esta web y hacer click en "Pedir por WhatsApp". El sistema te generará un mensaje automático detallando tus tequeños, cantidades, salsas elegidas y datos de entrega.'
  },
  {
    question: '¿Venden tequeños congelados para freír en casa?',
    answer: '¡Sí! Disponemos de bandejas congeladas al vacío con instrucciones exactas de temperatura para que queden tan crujientes como en nuestro local.'
  },
  {
    question: '¿Hacen entregas a domicilio (Delivery)?',
    answer: 'Contamos con servicio de delivery rápido para que tus tequeños lleguen calientes y con el queso en su máximo punto elástico.'
  }
];
