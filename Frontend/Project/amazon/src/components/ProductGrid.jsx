import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import box1 from '../assets/box1.jpg';
import box2 from '../assets/box2.jpg';
import box3 from '../assets/box3.jpg';
import box4 from '../assets/box4.jpg';
import box5 from '../assets/box5.jpg';
import box6 from '../assets/box6.jpg';
import box7 from '../assets/box7.jpg';
import box8 from '../assets/box8.jpg';
import './ProductGrid.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Echo Dot (5th Gen) Smart speaker with Alexa',
    category: 'Electronics',
    price: 44.99,
    rating: 4.7,
    description: 'Voice control your music, ask questions, and connect with smart home devices.',
    image: box4
  },
  {
    id: 2,
    title: 'Cozy Throw Blanket for Living Room',
    category: 'Home',
    price: 25.99,
    rating: 4.6,
    description: 'Soft, warm, and perfect for movie nights or relaxing on the couch.',
    image: box1
  },
  {
    id: 3,
    title: 'Skin Care Essentials Gift Set',
    category: 'Beauty',
    price: 32.50,
    rating: 4.4,
    description: 'Includes cleanser, moisturizer, and serum for daily skincare routines.',
    image: box5
  },
  {
    id: 4,
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 59.99,
    rating: 4.5,
    description: 'Noise-reducing headphones with long battery life and deep bass.',
    image: box4
  },
  {
    id: 5,
    title: 'Pet Grooming and Care Kit',
    category: 'Pet Care',
    price: 28.75,
    rating: 4.3,
    description: 'Everything you need to keep your pet clean, comfortable, and happy.',
    image: box6
  },
  {
    id: 6,
    title: 'Modern Wooden Desk Lamp',
    category: 'Furniture',
    price: 39.99,
    rating: 4.6,
    description: 'Sleek lighting with adjustable brightness for home and office desks.',
    image: box3
  },
  {
    id: 7,
    title: 'Stationery and Book Bundle',
    category: 'Stationery',
    price: 19.99,
    rating: 4.8,
    description: 'Premium notebooks, pens, and planners for everyday creativity.',
    image: box7
  },
  {
    id: 8,
    title: "Women's Fashion Top",
    category: 'Clothing',
    price: 22.50,
    rating: 4.2,
    description: 'Comfortable, stylish blouse ideal for casual and office outfits.',
    image: box8
  }
];

export default function ProductGrid({ searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section className="products-section">
      <div className="filters-and-sort">
        <div className="category-filter">
          <label>Category:</label>
          <div className="category-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="sort-filter">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found. Try a different search or category.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <p className="results-count">
        {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
      </p>
    </section>
  );
}
