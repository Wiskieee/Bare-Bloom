import brush1 from "./assets/images/brush1.jpg";
import eyelashCurler from "./assets/images/eyelash-curler.jpg";
import falseLashes1 from "./assets/images/false-lashes1.jpg";
import foundation1 from "./assets/images/foundation1.jpg";
import makeup1 from "./assets/images/makeup1.jpg";
import makeup2 from "./assets/images/makeup2.jpg";
import makeup3 from "./assets/images/makeup3.jpg";
import matteLipstick1 from "./assets/images/matte-lipstick1.jpg";
import matteLipstick2 from "./assets/images/matte-lipstick2.jpg";
import skincare1 from "./assets/images/skincare1.jpg";
import skincare2 from "./assets/images/skincare2.jpg";
import skincare3 from "./assets/images/skincare3.jpg";

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
    image: matteLipstick1,
    hoverImage: matteLipstick2,
    description: "A high-shine, non-sticky lip oil that hydrates and enhances your natural lip color.",
    shades: ["Rose", "Honey", "Clear", "Berry"],
    features: ["Vegan", "Hydrating", "High Shine"],
    isBestSeller: true,
  },
  {
    id: "skin-tint",
    name: "Bloom Skin Tint",
    category: "Skin Tint",
    price: 38,
    rating: 4.8,
    reviews: 240,
    image: foundation1,
    hoverImage: skincare1,
    description: "A breathable, lightweight formula that evens out skin tone while providing a radiant finish.",
    shades: ["Light 1", "Light 2", "Medium 1", "Medium 2", "Tan", "Deep"],
    features: ["Clean", "Breathable", "SPF 20"],
    isNew: true,
  },
  {
    id: "cloud-blush",
    name: "Cloud Dream Blush",
    category: "Blush",
    price: 22,
    rating: 4.7,
    reviews: 89,
    image: makeup1,
    hoverImage: makeup2,
    description: "Multi-use cream blush that melts into your skin for a soft, watercolor-like flush.",
    shades: ["Soft Pink", "Peach", "Mauve", "Coral"],
    features: ["Buildable", "Creamy", "Long-lasting"],
  },
  {
    id: "silk-highlighter",
    name: "Liquid Silk Highlighter",
    category: "Highlighter",
    price: 30,
    rating: 4.9,
    reviews: 156,
    image: makeup3,
    hoverImage: brush1,
    description: "An ethereal liquid highlighter that glows from within. No glitter, just silk.",
    shades: ["Gold", "Champagne", "Bronze"],
    features: ["Radiant", "Weightless", "Multidimensional"],
  },
];

export const CATEGORIES = [
  { name: "Lip Collection", image: matteLipstick1 },
  { name: "Skin Tint", image: foundation1 },
  { name: "Blush", image: makeup1 },
  { name: "Highlighter", image: makeup3 },
  { name: "Brushes", image: brush1 },
  { name: "Skincare", image: skincare2 },
  { name: "Eyelash Tools", image: eyelashCurler },
  { name: "False Lashes", image: falseLashes1 },
  { name: "Makeup", image: makeup2 },
  { name: "Skincare Set", image: skincare3 },
];