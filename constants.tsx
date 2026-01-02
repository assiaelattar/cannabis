
import { Product, Service, TeamMember, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Rif Gold CBD Oil',
    category: 'Wellness',
    price: 85.00,
    oldPrice: 95.00,
    image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&w=800&q=80', // Golden oil dropper
    isSale: true,
    rating: 5
  },
  {
    id: '2',
    name: 'Atlas Glow Serum',
    category: 'Cosmeceuticals',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80', // High-end organic skincare
    rating: 5
  },
  {
    id: '3',
    name: 'Bio-Caps (30ct)',
    category: 'Therapeutic',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1550572017-ed20bb79015b?auto=format&fit=crop&w=800&q=80', // Medical capsules
    rating: 4
  },
  {
    id: '4',
    name: 'Bulk Isolate (1kg)',
    category: 'Raw Materials',
    price: 1200.00,
    image: 'https://images.unsplash.com/photo-1536630596251-b01c6253911e?auto=format&fit=crop&w=800&q=80', // Pure crystalline isolate
    isSoldOut: false,
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Heritage Terroir',
    description: 'High altitude micro-climates of the Rif producing impossible-to-replicate terpene profiles.',
    icon: 'MapPin'
  },
  {
    id: 's2',
    title: 'Pharma Precision',
    description: 'State-of-the-art Supercritical CO2 Extraction for solvent-free, pure therapeutic spectrum.',
    icon: 'FlaskConical'
  },
  {
    id: 's3',
    title: 'ANRAC Compliance',
    description: 'Absolute clarity and 100% legality under Moroccan Law 13-21 and international standards.',
    icon: 'ShieldCheck'
  },
  {
    id: 's4',
    title: 'Global Export',
    description: 'Strategic logistics via Tangier Med ensuring cold-chain integrity and regulatory speed.',
    icon: 'Truck'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The "Swiss-Standard" of Moroccan Bio',
    date: 'June 10, 2024',
    category: 'Science',
    excerpt: 'How Bio Cannabis is setting the global gold standard for Moroccan phytocannabinoids.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80' // Extraction lab (Image 4 style)
  },
  {
    id: 'b2',
    title: 'Traceability: Seed to Shelf',
    date: 'May 20, 2024',
    category: 'Ethics',
    excerpt: 'Our digital blockchain system ensures 100% transparency for every batch of Rif Gold.',
    image: 'https://images.unsplash.com/photo-1603909796717-31c1bc917d9b?auto=format&fit=crop&w=1200&q=80' // Greenhouse detail
  }
];
