import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
        <button
          className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          ♥
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <div className="product-rating">
          {renderStars(product.rating)} {product.rating.toFixed(1)}
        </div>
        <div className="product-actions">
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <>
      {'★'.repeat(fullStars)}
      {hasHalf && '★'}
      {'☆'.repeat(emptyStars)}
    </>
  );
}
