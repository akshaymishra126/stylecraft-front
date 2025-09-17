import { Product } from '@/context/CartContext';

// Import generated images
import tshirtImage from '@/assets/tshirt-white.jpg';
import jeansImage from '@/assets/jeans-blue.jpg';
import dressImage from '@/assets/dress-black.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Essential Cotton T-Shirt',
    price: 29.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtImage, tshirtImage],
    category: 'T-Shirts',
    description: 'A classic cotton t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit and timeless design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    featured: true
  },
  {
    id: '2',
    name: 'Premium Denim Jeans',
    price: 89.99,
    image: jeansImage,
    images: [jeansImage, jeansImage, jeansImage],
    category: 'Jeans',
    description: 'High-quality denim jeans with a perfect fit. Made from sustainable materials with attention to detail.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Wash'],
    featured: true
  },
  {
    id: '3',
    name: 'Elegant Evening Dress',
    price: 149.99,
    image: dressImage,
    images: [dressImage, dressImage, dressImage],
    category: 'Dresses',
    description: 'An elegant evening dress perfect for special occasions. Features a flowing silhouette and premium fabric.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy'],
    featured: true
  },
  {
    id: '4',
    name: 'Casual Hoodie',
    price: 59.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtImage, tshirtImage],
    category: 'Hoodies',
    description: 'Comfortable and stylish hoodie for casual wear. Soft interior and durable exterior construction.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'White'],
    featured: false
  },
  {
    id: '5',
    name: 'Summer Floral Dress',
    price: 79.99,
    image: dressImage,
    images: [dressImage, dressImage, dressImage],
    category: 'Dresses',
    description: 'Light and breezy summer dress with beautiful floral patterns. Perfect for warm weather occasions.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow'],
    featured: false
  },
  {
    id: '6',
    name: 'Professional Blazer',
    price: 129.99,
    image: jeansImage,
    images: [jeansImage, jeansImage, jeansImage],
    category: 'Blazers',
    description: 'Sharp and professional blazer suitable for business and formal occasions. Tailored fit with quality construction.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    featured: false
  },
  {
    id: '7',
    name: 'Vintage Band T-Shirt',
    price: 34.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtImage, tshirtImage],
    category: 'T-Shirts',
    description: 'Retro-style band t-shirt with vintage graphics. Soft cotton material with a lived-in feel.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Vintage Gray'],
    featured: false
  },
  {
    id: '8',
    name: 'Athletic Sports Bra',
    price: 39.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtImage, tshirtImage],
    category: 'Activewear',
    description: 'High-support sports bra designed for athletic activities. Moisture-wicking fabric and comfortable fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy', 'Pink'],
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All Products', image: '/api/placeholder/300/200' },
  { id: 't-shirts', name: 'T-Shirts', image: '/api/placeholder/300/200' },
  { id: 'jeans', name: 'Jeans', image: '/api/placeholder/300/200' },
  { id: 'dresses', name: 'Dresses', image: '/api/placeholder/300/200' },
  { id: 'hoodies', name: 'Hoodies', image: '/api/placeholder/300/200' },
  { id: 'blazers', name: 'Blazers', image: '/api/placeholder/300/200' },
  { id: 'activewear', name: 'Activewear', image: '/api/placeholder/300/200' }
];

export const featuredProducts = mockProducts.filter(product => product.featured);