import { productCategories } from './productCategories';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Cleansers
  {
    id: 'c1',
    name: "Gentle Daily Cleanser",
    brand: "SkinScience",
    category: "Cleansers",
    subcategory: "Face Washes",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    description: "A gentle, pH-balanced face wash for daily use"
  },
  {
    id: 'c2',
    name: "Pure Micellar Water",
    brand: "PureBeauty",
    category: "Cleansers",
    subcategory: "Micellar Waters",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    description: "Gentle no-rinse cleanser that removes makeup and impurities"
  },
  {
    id: 'c3',
    name: "Deep Cleansing Oil",
    brand: "NaturalGlow",
    category: "Cleansers",
    subcategory: "Oil Cleansers",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a",
    description: "Rich cleansing oil that dissolves makeup and sunscreen"
  },
  {
    id: 'c4',
    name: "Nourishing Cleansing Balm",
    brand: "DermaFix",
    category: "Cleansers",
    subcategory: "Cleansing Balms",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    description: "Luxurious balm that melts away makeup and impurities"
  },

  // Exfoliants
  {
    id: 'e1',
    name: "Bamboo Face Scrub",
    brand: "NaturalGlow",
    category: "Exfoliants",
    subcategory: "Physical Scrubs",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    description: "Gentle physical exfoliant with bamboo particles"
  },
  {
    id: 'e2',
    name: "AHA/BHA Solution",
    brand: "SkinScience",
    category: "Exfoliants",
    subcategory: "Chemical Exfoliants",
    price: 28.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    description: "Dual-action chemical exfoliant with glycolic and salicylic acids"
  },
  {
    id: 'e3',
    name: "Papaya Enzyme Peel",
    brand: "PureBeauty",
    category: "Exfoliants",
    subcategory: "Enzyme Exfoliants",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    description: "Natural enzyme exfoliant with papaya extract"
  },

  // Toners
  {
    id: 't1',
    name: "Hydrating Rose Toner",
    brand: "NaturalGlow",
    category: "Toners",
    subcategory: "Hydrating",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1526758097130-bab247274f58",
    description: "Alcohol-free hydrating toner with rose water"
  },
  {
    id: 't2',
    name: "Balance & Restore",
    brand: "SkinScience",
    category: "Toners",
    subcategory: "Balancing",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
    description: "pH-balancing toner for combination skin"
  },
  {
    id: 't3',
    name: "Clarifying Toner",
    brand: "DermaFix",
    category: "Toners",
    subcategory: "Astringent",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    description: "Oil-controlling toner for oily skin"
  },

  // Treatments
  {
    id: 'tr1',
    name: "Vitamin C Brightening Serum",
    brand: "SkinScience",
    category: "Treatments",
    subcategory: "Serums",
    price: 45.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    description: "Powerful vitamin C serum for brighter, even-toned skin"
  },
  {
    id: 'tr2',
    name: "Intensive Repair Ampoule",
    brand: "DermaFix",
    category: "Treatments",
    subcategory: "Ampoules",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    description: "Concentrated treatment for skin repair"
  },
  {
    id: 'tr3',
    name: "Blemish Control",
    brand: "PureBeauty",
    category: "Treatments",
    subcategory: "Spot Treatments",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    description: "Targeted treatment for blemishes"
  },
  {
    id: 'tr4',
    name: "Clear Skin Solution",
    brand: "SkinScience",
    category: "Treatments",
    subcategory: "Acne Treatments",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a",
    description: "Complete treatment system for acne-prone skin"
  },

  // Moisturizers
  {
    id: 'm1',
    name: "Light Hydration Lotion",
    brand: "PureBeauty",
    category: "Moisturizers",
    subcategory: "Lotions",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    description: "Lightweight moisturizing lotion for daily use"
  },
  {
    id: 'm2',
    name: "Rich Moisture Cream",
    brand: "NaturalGlow",
    category: "Moisturizers",
    subcategory: "Creams",
    price: 32.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    description: "Rich, nourishing cream for dry skin"
  },
  {
    id: 'm3',
    name: "Oil-Free Gel Moisturizer",
    brand: "DermaFix",
    category: "Moisturizers",
    subcategory: "Gels",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    description: "Lightweight gel moisturizer for oily skin"
  },
  {
    id: 'm4',
    name: "Nourishing Face Oil",
    brand: "NaturalGlow",
    category: "Moisturizers",
    subcategory: "Oils",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    description: "Blend of natural oils for deep nourishment"
  },

  // Sun Protection
  {
    id: 's1',
    name: "Daily Defense SPF 50",
    brand: "SkinScience",
    category: "Sun Protection",
    subcategory: "Sunscreens",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    description: "Broad-spectrum sunscreen for daily protection"
  },
  {
    id: 's2',
    name: "Hydrating Day Cream SPF 30",
    brand: "PureBeauty",
    category: "Sun Protection",
    subcategory: "SPF Moisturizers",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1526758097130-bab247274f58",
    description: "Moisturizer with added sun protection"
  },
  {
    id: 's3',
    name: "UV Shield Mist SPF 40",
    brand: "DermaFix",
    category: "Sun Protection",
    subcategory: "UV Protection Sprays",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
    description: "Easy-to-apply sunscreen mist"
  },

  // Eye Care
  {
    id: 'ec1',
    name: "Advanced Eye Cream",
    brand: "SkinScience",
    category: "Eye Care",
    subcategory: "Eye Creams",
    price: 42.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    description: "Rich eye cream for multiple concerns"
  },
  {
    id: 'ec2',
    name: "Brightening Eye Serum",
    brand: "DermaFix",
    category: "Eye Care",
    subcategory: "Eye Serums",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    description: "Lightweight serum for dark circles"
  },
  {
    id: 'ec3',
    name: "Hydrating Eye Patches",
    brand: "PureBeauty",
    category: "Eye Care",
    subcategory: "Eye Masks",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a",
    description: "Hydrating patches for puffy eyes"
  },

  // Masks
  {
    id: 'ma1',
    name: "Hydrating Sheet Mask",
    brand: "NaturalGlow",
    category: "Masks",
    subcategory: "Sheet Masks",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1526758097130-bab247274f58",
    description: "Single-use mask for intense hydration"
  },
  {
    id: 'ma2',
    name: "Purifying Clay Mask",
    brand: "DermaFix",
    category: "Masks",
    subcategory: "Clay Masks",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    description: "Deep-cleansing clay mask"
  },
  {
    id: 'ma3',
    name: "Overnight Repair Mask",
    brand: "SkinScience",
    category: "Masks",
    subcategory: "Sleeping Masks",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    description: "Intensive overnight treatment"
  },
  {
    id: 'ma4',
    name: "Moisture Boost Mask",
    brand: "PureBeauty",
    category: "Masks",
    subcategory: "Hydrating Masks",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    description: "Intensive hydrating treatment mask"
  },

  // Special Care
  {
    id: 'sp1',
    name: "Refreshing Face Mist",
    brand: "NaturalGlow",
    category: "Special Care",
    subcategory: "Face Mists",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
    description: "Hydrating and refreshing facial mist"
  },
  {
    id: 'sp2',
    name: "Hydrating Essence",
    brand: "SkinScience",
    category: "Special Care",
    subcategory: "Essence",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    description: "Lightweight hydrating essence"
  },
  {
    id: 'sp3',
    name: "Luxury Face Oil",
    brand: "DermaFix",
    category: "Special Care",
    subcategory: "Face Oils",
    price: 48.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a",
    description: "Premium facial oil blend"
  },
  {
    id: 'sp4',
    name: "Jade Roller Set",
    brand: "PureBeauty",
    category: "Special Care",
    subcategory: "Facial Rollers/Tools",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
    description: "Facial massage tool set"
  }
];