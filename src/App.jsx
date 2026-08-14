import { useEffect, useState } from "react";
import "./App.css";

import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Collections from "./Collections";
import TVDetails from "./TVDetails";
import { Link } from "react-router-dom";
import Login from "./Login";



const slides = [hero1, hero2, hero3];

function App() {
  const [showAbout, setShowAbout] = useState(false);
const [showContact, setShowContact] = useState(false);
const [showShop, setShowShop] = useState(false);
const [showCollections, setShowCollections] = useState(false);
const [searchOpen, setSearchOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const [selectedTV, setSelectedTV] = useState(null);
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const [showLogin, setShowLogin] = useState(false);

const addToCart = (product) => {

  setCart((prevCart) => {

    const existingProduct = prevCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prevCart,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
   
};

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
  <BrowserRouter>
    <div className="website">

      {/* Announcement Bar */}
      <div className="announcement">
        🚚 Free Shipping on Orders Above ₹499
      </div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <span>Easy</span> Deal
        </div>

        <div className="nav-links">
  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    setSelectedTV(null);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    setSearchOpen(false);
    setSearchText("");
    setShowLogin(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }}
>
  Home
</a>

<a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    setShowShop(true);
    setShowAbout(false);
    setShowContact(false);
    setShowLogin(false);

    window.scrollTo(0, 0);
  }}
>
  Shop
</a>


          <a
  href="#"
  onClick={(e) => {
    e.preventDefault();

    setShowCollections(true);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowLogin(false);
    window.scrollTo(0, 0);
  }}
>
  Collections
</a>
          <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowAbout(true);
    setShowShop(false);
    setShowLogin(false);
  }}
>
  About
</a>
       <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowAbout(false);
    setShowContact(true);
    setShowShop(false);
    setShowLogin(false);
  }}
>
  Contact
</a>
</div>
        <div className="nav-icons">

  <button
    className="search-button"
    onClick={() => setSearchOpen(!searchOpen)}
  >
    ⌕
  </button>

<button
  onClick={() => {
    setShowLogin(true);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    
    window.scrollTo(0, 0);
  }}
>
  👤
</button>

 <button
  onClick={() => setShowCart(true)}
  className="cart-button"
>
  🛒
  {cart.length > 0 && (
    <span className="cart-count">
      {cart.reduce((total, item) => total + item.quantity, 0)}
    </span>
  )}
</button>

</div>

      </nav>
{searchOpen && (
  <div className="header-search">
    <input
      type="text"
      placeholder="Search products..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      autoFocus
    />

    <button
      onClick={() => {
        setShowShop(true);
        setShowAbout(false);
        setShowContact(false);
        setShowCollections(false);
        setShowLogin(false);
        setSelectedTV(null);

        setSearchOpen(false);

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }}
    >
      Search
    </button>
  </div>
)}

{showLogin ? (
  <Login />
) : showAbout ? (
  <About />
) : showContact ? (
  <Contact />
) : showShop ? (
  <Shop searchText={searchText} addToCart={addToCart} />
) : showCollections ? (
  <Collections />
) : selectedTV ? (
  <TVDetails tvId={selectedTV} addToCart={addToCart} />


) : (
  <>

      {/* 3 Slide Banner */}
      <section className="hero-section">

        <img
          src={slides[currentSlide]}
          alt={`EasyDeal Banner ${currentSlide + 1}`}
          className="hero-image"
        />

        {/* Previous */}
        <button
          className="slider-btn prev"
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Next */}
        <button
          className="slider-btn next"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={currentSlide === index ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </section>

<div className="promo-ticker">
  <div className="promo-track">
    <span>🔥 Mega Sale is Live!</span>
    <span>🎉 Fast Delivery</span>
    <span>🚚 Secure Payments</span>
    <span>🔒 Trusted Quality</span>
    <span>💯 Best Deals Every Day</span>
    <span>🛒 Shop Smarter, Save More!</span>

    <span>🔥 Mega Sale is Live!</span>
    <span>🎉 Fast Delivery</span>
    <span>🚚 Secure Payments</span>
    <span>🔒 Trusted Quality</span>
    <span>💯 Best Deals Every Day</span>
    <span>🛒 Shop Smarter, Save More!</span>
  </div>
</div>

      {/* Collections Section */}
<section className="collections-section">

  <div className="section-heading">
    <h2>Shop by Collection</h2>
    <p>Explore our popular categories</p>
  </div>

  <div className="collections">

    <div className="collection-card">
      <img src="/src/assets/electronics.png" alt="Electronics" />
      <h3>Electronics</h3>
    </div>

    <div className="collection-card">
      <img src="/src/assets/fashion.png" alt="Fashion & Beauty" />
      <h3>Fashion & Beauty</h3>
    </div>

    <div className="collection-card">
      <img src="/src/assets/kids.png" alt="Kids & Toys" />
      <h3>Kids & Toys</h3>
    </div>

    <div className="collection-card">
      <img src="/src/assets/kitchen.png" alt="Kitchen" />
      <h3>Kitchen</h3>
    </div>

    <div className="collection-card">
      <img src="/src/assets/home.png" alt="Home" />
      <h3>Home</h3>
    </div>

    <div className="collection-card">
      <img src="/src/assets/sports.png" alt="Sports" />
      <h3>Sports</h3>
    </div>

  </div>

</section>
{/* TV Deals Section */}
<section className="tv-deals">

  <h2>UP TO 70% OFF | BEST DEALS ON TV</h2>

  <div className="tv-products">

    {/* Product 1 */}
    <div className="tv-card">

      <div className="discount">
        33% OFF
      </div>

      <div className="tv-image">
        <img src="/src/assets/tv1.png" alt="32 Inch Smart TV" />
      </div>

      <h3>
        32 Inch HD Smart LED TV | Smart TV with Wi-Fi, HDMI & USB
      </h3>

      <div className="price">
        Rs. 9,999.00
      </div>

      <div className="old-price">
        <span>Rs. 14,999.00</span>
        <b>33% OFF</b>
      </div>

      <button className="shop-now"
       onClick={() => {
    setSelectedTV(1);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    window.scrollTo(0, 0);
  }}
>
    
        SHOP NOW
      </button>

    </div>


    {/* Product 2 */}
    <div className="tv-card">

      <div className="discount">
        35% OFF
      </div>

      <div className="tv-image">
        <img src="/src/assets/tv2.png" alt="40 Inch Smart TV" />
      </div>

      <h3>
        📺 EasyDeal 40 Inch Full HD Smart LED TV
      </h3>

      <div className="price">
        Rs. 14,999.00
      </div>

      <div className="old-price">
        <span>Rs. 22,999.00</span>
        <b>35% OFF</b>
      </div>

      <button className="shop-now" 
      onClick={() => {
    setSelectedTV(2);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    window.scrollTo(0, 0);
  }}
      >
        SHOP NOW
      </button>

    </div>


    {/* Product 3 */}
    <div className="tv-card">

      <div className="discount">
        39% OFF
      </div>

      <div className="tv-image">
        <img src="/src/assets/tv3.png" alt="43 Inch Smart TV" />
      </div>

      <h3>
        EasyDeal 43 Inch 4K Ultra HD Smart TV | Wi-Fi, HDMI & USB
      </h3>

      <div className="price">
        Rs. 19,999.00
      </div>

      <div className="old-price">
        <span>Rs. 32,999.00</span>
        <b>39% OFF</b>
      </div>

      <button className="shop-now"
       onClick={() => {
    setSelectedTV(3);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    window.scrollTo(0, 0);
  }}
      >
        SHOP NOW
      </button>

    </div>


    {/* Product 4 */}
    <div className="tv-card">

      <div className="discount">
        44% OFF
      </div>

      <div className="tv-image">
        <img src="/src/assets/tv4.png" alt="50 Inch Smart TV" />
      </div>

      <h3>
        EasyDeal 50 Inch 4K Ultra HD Smart Google TV | Wi-Fi, HDMI & USB
      </h3>

      <div className="price">
        Rs. 27,999.00
      </div>

      <div className="old-price">
        <span>Rs. 49,999.00</span>
        <b>44% OFF</b>
      </div>

      <button className="shop-now"
       onClick={() => {
    setSelectedTV(4);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    window.scrollTo(0, 0);
  }}
      >
        SHOP NOW
      </button>

    </div>


    {/* Product 5 */}
    <div className="tv-card">

      <div className="discount">
        50% OFF
      </div>

      <div className="tv-image">
        <img src="/src/assets/tv5.png" alt="55 Inch Smart TV" />
      </div>

      <h3>
        EasyDeal 55 Inch 4K Ultra HD Smart TV
      </h3>

      <div className="price">
        Rs. 34,999.00
      </div>

      <div className="old-price">
        <span>Rs. 69,999.00</span>
        <b>50% OFF</b>
      </div>

      <button className="shop-now"
       onClick={() => {
    setSelectedTV(5);
    setShowShop(false);
    setShowAbout(false);
    setShowContact(false);
    setShowCollections(false);
    window.scrollTo(0, 0);
  }}
      >
        SHOP NOW
      </button>

    </div>

  </div>

</section>
{/* =========================
    FEATURED PRODUCTS
========================= */}

<section className="featured-section">

  <div className="featured-heading">
    <h2>Featured Products</h2>
    <p>Discover our best-selling products</p>
  </div>

  <div className="featured-products">

    {/* Product 1 */}
    <div className="featured-card">

      <div className="featured-image">
        <img
          src="/src/assets/featured1.png"
          alt="Wireless Headphones"
        />
      </div>

      <div className="featured-info">

        <span className="featured-category">
          Electronics
        </span>

        <h3>Wireless Bluetooth Headphones</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(24)</span>
        </div>

        <div className="featured-price">
          Rs. 1,499.00
        </div>

        <button
  className="featured-button"
  onClick={() =>
    addToCart({
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 1499,
      image: "/src/assets/featured1.png",
    })
  }
>
  Add to Cart
</button>

      </div>

    </div>


    {/* Product 2 */}
    <div className="featured-card">

      <div className="featured-image">
        <img
          src="/src/assets/featured2.png"
          alt="Smart Watch"
        />
      </div>

      <div className="featured-info">

        <span className="featured-category">
          Electronics
        </span>

        <h3>Smart Watch Series 8</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(18)</span>
        </div>

        <div className="featured-price">
          Rs. 2,499.00
        </div>

        <button className="featured-button"
        onClick={() =>
  addToCart({
    id: 2,
    name: "Smart Watch Series 8",
    price: 2499,
    image: "/src/assets/featured2.png",
  })
}
        >
          Add to Cart
        </button>

      </div>

    </div>


    {/* Product 3 */}
    <div className="featured-card">

      <div className="featured-image">
        <img
          src="/src/assets/featured3.png"
          alt="Kitchen Set"
        />
      </div>

      <div className="featured-info">

        <span className="featured-category">
          Kitchen
        </span>

        <h3>Premium Kitchen Storage Set</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(31)</span>
        </div>

        <div className="featured-price">
          Rs. 999.00
        </div>

        <button className="featured-button"
        onClick={() =>
  addToCart({
    id: 3,
    name: "Premium Kitchen Storage Set",
    price: 999,
    image: "/src/assets/featured3.png",
  })
}
        >
          Add to Cart
        </button>

      </div>

    </div>


    {/* Product 4 */}
    <div className="featured-card">

      <div className="featured-image">
        <img
          src="/src/assets/featured4.png"
          alt="Running Shoes"
        />
      </div>

      <div className="featured-info">

        <span className="featured-category">
          Sports
        </span>

        <h3>Premium Running Shoes</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(42)</span>
        </div>

        <div className="featured-price">
          Rs. 1,999.00
        </div>

        <button className="featured-button"
        onClick={() =>
  addToCart({
    id: 4,
    name: "Premium Running Shoes",
    price: 1999,
    image: "/src/assets/featured4.png",
  })
}
        >
          Add to Cart
        </button>

      </div>

    </div>

  </div>

</section>

{/* =========================
    FAQ SECTION
========================= */}

<section className="faq-section">

  <div className="faq-heading">
  
    <h2>Frequently Asked Questions</h2>
    <p>Find answers to the most common questions about EasyDeal.</p>
  </div>

  <div className="faq-container">

    <details className="faq-item">
      <summary>
        What payment methods do you accept?
        <span>+</span>
      </summary>

      <p>
        We accept major payment methods including UPI, debit cards,
        credit cards and other available online payment options.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        How long does delivery take?
        <span>+</span>
      </summary>

      <p>
        Orders are generally delivered within 3–7 business days,
        depending on your location and product availability.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        Can I track my order?
        <span>+</span>
      </summary>

      <p>
        Yes. Once your order is shipped, you will receive tracking
        information so you can check your delivery status.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        Can I return or exchange a product?
        <span>+</span>
      </summary>

      <p>
        Yes, eligible products can be returned or exchanged according
        to our return and exchange policy.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        Are the products covered by warranty?
        <span>+</span>
      </summary>

      <p>
        Warranty availability depends on the product. Please check
        the product details before placing your order.
      </p>
    </details>

    <details className="faq-item">
      <summary>
        How can I contact EasyDeal support?
        <span>+</span>
      </summary>

      <p>
        You can contact our customer support team through the Contact
        Us section of the website.
      </p>
    </details>

  </div>

</section>
{/* =========================
    CUSTOMER REVIEWS
========================= */}

<section className="reviews-section">

  <div className="reviews-heading">
    
    <h2>What Our Customers Say</h2>
    <p>Real experiences from our happy customers.</p>
  </div>

  <div className="reviews-container">

    {/* Review 1 */}
    <div className="review-card">

      <div className="review-top">
        <div className="review-avatar">A</div>

        <div>
          <h3>Arjun Sharma</h3>
          <p>Verified Customer</p>
        </div>
      </div>

      <div className="review-stars">
        ★★★★★
      </div>

      <p className="review-text">
        Amazing shopping experience! The product quality was
        excellent and delivery was very fast.
      </p>

      <span className="review-date">
        2 days ago
      </span>

    </div>


    {/* Review 2 */}
    <div className="review-card">

      <div className="review-top">
        <div className="review-avatar">P</div>

        <div>
          <h3>Priya Verma</h3>
          <p>Verified Customer</p>
        </div>
      </div>

      <div className="review-stars">
        ★★★★★
      </div>

      <p className="review-text">
        Very good product at a reasonable price. Packaging was
        also really good. I will definitely shop again.
      </p>

      <span className="review-date">
        5 days ago
      </span>

    </div>


    {/* Review 3 */}
    <div className="review-card">

      <div className="review-top">
        <div className="review-avatar">R</div>

        <div>
          <h3>Rahul Mehta</h3>
          <p>Verified Customer</p>
        </div>
      </div>

      <div className="review-stars">
        ★★★★★
      </div>

      <p className="review-text">
        The website was easy to use and my order arrived on time.
        Really happy with the service.
      </p>

      <span className="review-date">
        1 week ago
      </span>

    </div>


    {/* Review 4 */}
    <div className="review-card">

      <div className="review-top">
        <div className="review-avatar">S</div>

        <div>
          <h3>Simran Kaur</h3>
          <p>Verified Customer</p>
        </div>
      </div>

      <div className="review-stars">
        ★★★★★
      </div>

      <p className="review-text">
        Great quality and quick delivery. Customer support was
        also very helpful. Highly recommended!
      </p>

      <span className="review-date">
        2 weeks ago
      </span>

    </div>

  </div>

</section>
</>
)}

{showCart && (
  <div className="cart-page">
    <button
      onClick={() => setShowCart(false)}
      className="close-cart"
    >
      ✕ 
    </button>

    <h2>Your Cart</h2>

    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            
            <img
              src={item.image}
              alt={item.name}
            />

            <div>
              <h3>{item.name}</h3>
              <p>Rs. {item.price.toLocaleString("en-IN")}</p>
              <p>Quantity: {item.quantity}</p>
            </div>

          </div>
        ))}
      </div>
    )}
  </div>
)}

{/* =========================
    FOOTER
========================= */}

<footer className="footer">

  <div className="back-to-top">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top
    </button>
  </div>

  <div className="footer-main">

    {/* Column 1 */}
    <div className="footer-column">
      <h3>Get to Know Us</h3>

      <a href="#" onClick={(e) => {
  e.preventDefault();
  setShowAbout(true);
  setShowContact(false);
  window.scrollTo(0, 0);
}}>
  About EasyDeal
</a>
      <a href="#">Careers</a>
     <a href="#" onClick={(e) => {
  e.preventDefault();
  setShowContact(true);
  setShowAbout(false);
  window.scrollTo(0, 0);
}}>
  Contact Us
</a>
      <a href="#">Our Story</a>
    </div>


    {/* Column 2 */}
    <div className="footer-column">
      <h3>Connect with Us</h3>

      <a href="#">🌐 Facebook</a>
      <a href="#">📷 Instagram</a>
      <a href="#">▶️ YouTube</a>
      <a href="#">𝕏 X / Twitter</a>
    </div>


    {/* Column 3 */}
    <div className="footer-column">
      <h3>Make Money with Us</h3>

      <a href="#">Sell on EasyDeal</a>
      <a href="#">Become a Seller</a>
      <a href="#">Advertise Your Products</a>
      <a href="#">Affiliate Program</a>
      <a href="#">Partner With Us</a>
    </div>


    {/* Column 4 */}
    <div className="footer-column">
      <h3>Let Us Help You</h3>

      <a href="#">Your Account</a>
      <a href="#">Your Orders</a>
      <a href="#">Returns & Refunds</a>
      <a href="#">Privacy & Security</a>
      <a href="#">Help Center</a>
    </div>

  </div>


  {/* Logo */}

  <div className="footer-logo">
    <div className="easydeal-logo">
      🛍️<span>easydeal</span>
    </div>
  </div>


  {/* Policies */}

  <div className="footer-policies">

    <a href="#">Privacy Policy</a>
    <span>|</span>

    <a href="#">Terms of Service</a>
    <span>|</span>

    <a href="#">Refund Policy</a>
    <span>|</span>

    <a href="#">Shipping Policy</a>

  </div>


  {/* Copyright */}

  <div className="footer-bottom">
    © 2026 EasyDeal. All Rights Reserved.
  </div>

</footer>

    </div>
  </BrowserRouter>
  );
}

export default App;