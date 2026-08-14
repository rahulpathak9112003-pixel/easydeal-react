import React from "react";
import "./Collections.css";

function Collections() {
  const collections = [
    {
      name: "Electronics",
      image: "/electronics.png",
      description: "Smart gadgets, accessories & electronics",
    },
    {
      name: "Fashion & Beauty",
      image: "/fashion.png",
      description: "Latest fashion, beauty & lifestyle products",
    },
    {
      name: "Kids & Toys",
      image: "/kids.png",
      description: "Fun toys and products for kids",
    },
    {
      name: "Kitchen",
      image: "/kitchen.png",
      description: "Useful products for your modern kitchen",
    },
    {
      name: "Home",
      image: "/home.png",
      description: "Make your home beautiful & comfortable",
    },
    {
      name: "Sports",
      image: "/sports.png",
      description: "Sports, fitness & outdoor essentials",
    },
  ];

  return (
    <div className="collections-page">

      {/* Hero */}
      <section className="collections-hero">
        
        <h1>Our Collections</h1>
        <span>
          Discover products from all your favourite categories.
        </span>
      </section>

      {/* Collections */}
      <section className="collections-container">

        <div className="collections-title">
          <h2>Shop by Collection</h2>
          <p>Find everything you need in one place.</p>
        </div>

        <div className="collections-grid">

          {collections.map((collection) => (
            <div className="collection-page-card" key={collection.name}>

              <div className="collection-page-image">
                <img
                  src={collection.image}
                  alt={collection.name}
                />
              </div>

              <div className="collection-page-info">
                <h3>{collection.name}</h3>

                <p>{collection.description}</p>

                <button>
                  Explore Collection →
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Collections;