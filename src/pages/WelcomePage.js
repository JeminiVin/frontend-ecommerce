import React from "react";
import { Link } from "react-router-dom";
import "./Welcomepage.css"; // Import styles

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to ShopX</h1>
        <p>Your one-stop destination for the best products!</p>
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">📱 Electronics</div>
          <div className="category-card">👕 Clothing</div>
          <div className="category-card">📚 Books</div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending">
        <h2>Trending Products</h2>
        <div className="product-grid">
          <div className="product-card">🔥 Product 1</div>
          <div className="product-card">🔥 Product 2</div>
          <div className="product-card">🔥 Product 3</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>"Amazing products at the best prices! - ⭐⭐⭐⭐⭐"</p>
      </section>
    </div>
  );
};

export default WelcomePage;
