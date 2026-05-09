export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage: string;
  description: string;
  shades?: string[];
  features?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "lip-glow",
    name: "Dewy Lip Glow",
    category: "Lip Collection",
    price: 24,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1586776193466-85df5c0d13b2?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=800",
    description: "A high-shine, non-sticky lip oil that hydrates and enhances your natural lip color.",
    shades: ["Rose", "Honey", "Clear", "Berry"],
    features: ["Vegan", "Hydrating", "High Shine"],
    isBestSeller: true
  },
  {
    id: "skin-tint",
    name: "Bloom Skin Tint",
    category: "Skin Tint",
    price: 38,
    rating: 4.8,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1593001389771-5f212727a29e?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1620917670397-dc71bce6d01d?auto=format&fit=crop&q=80&w=800",
    description: "A breathable, lightweight formula that evens out skin tone while providing a radiant finish.",
    shades: ["Light 1", "Light 2", "Medium 1", "Medium 2", "Tan", "Deep"],
    features: ["Clean", "Breathable", "SPF 20"],
    isNew: true
  },
  {
    id: "cloud-blush",
    name: "Cloud Dream Blush",
    category: "Blush",
    price: 22,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1557209653-1560c5717bc3?auto=format&fit=crop&q=80&w=800",
    description: "Multi-use cream blush that melts into your skin for a soft, watercolor-like flush.",
    shades: ["Soft Pink", "Peach", "Mauve", "Coral"],
    features: ["Buildable", "Creamy", "Long-lasting"]
  },
  {
    id: "silk-highlighter",
    name: "Liquid Silk Highlighter",
    category: "Highlighter",
    price: 30,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    description: "An ethereal liquid highlighter that glows from within. No glitter, just silk.",
    shades: ["Gold", "Champagne", "Bronze"],
    features: ["Radiant", "Weightless", "Multidimensional"]
  }
];

export const CATEGORIES = [
  { name: "Lip Collection", image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=800" },
  { name: "Skin Tint", image: "https://images.unsplash.com/photo-1610631882914-724d2629087c?auto=format&fit=crop&q=80&w=800" },
  { name: "Blush", image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800" },
  { name: "Highlighter", image: "https://images.unsplash.com/photo-1557170343-73ba04ca656f?auto=format&fit=crop&q=80&w=800" },
  { name: "Brushes", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" },
  { name: "Skincare", image: "https://images.unsplash.com/photo-1601049541289-9b1b7abcfe19?auto=format&fit=crop&q=80&w=800" }
];
