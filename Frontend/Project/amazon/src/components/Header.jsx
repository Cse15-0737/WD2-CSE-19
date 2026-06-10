import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartPopup from './CartPopup';
import logo from '../assets/amazon_logo.png';
import './Header.css';

export default function Header({ onSearch, searchQuery, setSearchQuery }) {
  const { getTotalQuantity } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className="navbar">
        <img src={logo} className="logo" alt="Amazon logo" />
        <input
          type="text"
          placeholder="Search Amazon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          🛒 Cart <span className="cart-count">{getTotalQuantity()}</span>
        </button>
      </header>
      {showCart && <CartPopup onClose={() => setShowCart(false)} />}
    </>
  );
}
