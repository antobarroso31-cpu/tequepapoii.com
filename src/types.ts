export type Category = 'todos' | 'clasicos' | 'especiales' | 'combos' | 'salsas';

export interface MenuItem {
  id: string;
  name: string;
  category: 'clasicos' | 'especiales' | 'combos' | 'salsas';
  description: string;
  price: number;
  packSize: string;
  image: string;
  minionQuote: string;
  isPopular?: boolean;
  isSweet?: boolean;
  cheesePullScore: number; // 1 to 5
  tags: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  sauce: string;
}

export interface OwnerInfo {
  id: string;
  name: string;
  role: string;
  title: string;
  minionPersona: string;
  quote: string;
  avatarSvg: string;
  specialties: string[];
  favoriteTequeno: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  favorite: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
