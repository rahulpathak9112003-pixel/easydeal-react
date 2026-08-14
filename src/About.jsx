import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          

          <h1>
            Best Deals,
            <br />
            Easy Shopping
          </h1>

          <p>
            Welcome to EasyDeal — your trusted destination for quality
            products, great prices and a simple shopping experience.
          </p>
        </div>
      </section>


      {/* About EasyDeal */}
      <section className="about-intro">

        <div className="about-intro-text">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            Making Online Shopping
            <br />
            Simple & Easy
          </h2>

          <p>
            EasyDeal is an online shopping platform created to make
            everyday shopping easier, faster and more convenient.
          </p>

          <p>
            We bring products from different categories together in
            one place, including Electronics, Fashion & Beauty, Kids &
            Toys, Kitchen, Home and Sports.
          </p>

          <p>
            Our goal is simple — provide customers with quality
            products at competitive prices while delivering a smooth
            and reliable shopping experience.
          </p>
        </div>

        <div className="about-intro-box">
          <div className="about-big-icon">🛍️</div>
          <h3>EasyDeal</h3>
          <p>Best Deals. Easy Shopping.</p>
        </div>

      </section>


      {/* Our Mission */}
      <section className="about-mission">

        <div className="mission-card">
          <div className="mission-icon">🎯</div>

          <h3>Our Mission</h3>

          <p>
            To make online shopping accessible, convenient and
            trustworthy by offering useful products at affordable
            prices.
          </p>
        </div>


        <div className="mission-card">
          <div className="mission-icon">⭐</div>

          <h3>Our Vision</h3>

          <p>
            To become a trusted shopping destination where customers
            can discover great products and great deals every day.
          </p>
        </div>


        <div className="mission-card">
          <div className="mission-icon">🤝</div>

          <h3>Our Promise</h3>

          <p>
            We focus on product quality, customer satisfaction and a
            simple shopping experience.
          </p>
        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-easydeal">

        <div className="why-heading">
          <span>WHY EASYDEAL?</span>

          <h2>
            Why Shop With Us?
          </h2>

          <p>
            We want every shopping experience to be easy and reliable.
          </p>
        </div>


        <div className="why-grid">

          <div className="why-card">
            <div>💰</div>
            <h3>Great Deals</h3>
            <p>
              Competitive prices and attractive offers across
              different categories.
            </p>
          </div>


          <div className="why-card">
            <div>🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              We aim to make your shopping experience quick and
              convenient.
            </p>
          </div>


          <div className="why-card">
            <div>🔒</div>
            <h3>Secure Shopping</h3>
            <p>
              Your shopping experience is designed with security and
              convenience in mind.
            </p>
          </div>


          <div className="why-card">
            <div>💬</div>
            <h3>Customer Support</h3>
            <p>
              We are here to help you with your questions and
              shopping needs.
            </p>
          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="about-categories">

        <h2>Everything You Need in One Place</h2>

        <p>
          Explore our growing range of products.
        </p>

        <div className="category-list">

          <div>📱 Electronics</div>
          <div>👗 Fashion & Beauty</div>
          <div>🧸 Kids & Toys</div>
          <div>🍳 Kitchen</div>
          <div>🏠 Home</div>
          <div>⚽ Sports</div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>Ready to Shop?</h2>

        <p>
          Discover great products and amazing deals at EasyDeal.
        </p>

        <a href="/">
          Start Shopping
        </a>

      </section>

    </div>
  );
}

export default About;