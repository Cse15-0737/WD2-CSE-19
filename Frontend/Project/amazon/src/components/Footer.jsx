import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#about">About Amazon Clone</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#sell">Sell on Amazon Clone</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Amazon Clone Help</h4>
          <ul>
            <li><a href="#help">Customer Service</a></li>
            <li><a href="#track">Track Orders</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Amazon Clone (Educational Project). All rights reserved.</p>
        <p>This is a clone created for educational purposes only.</p>
      </div>
    </footer>
  );
}
