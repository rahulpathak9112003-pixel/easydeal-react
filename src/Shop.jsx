import React from "react";
import "./Shop.css";

function Shop({ searchText, addToCart }) {
  const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Wireless Bluetooth Headphones",
    price: 1499,
    rating: 5,
    reviews: 24,
    image: "featured1.png",
  },
  {
    id: 2,
    category: "Electronics",
    name: "Smart Watch Series 8",
    price: 2499,
    rating: 5,
    reviews: 18,
    image: "featured2.png",
  },
  {
    id: 3,
    category: "Kitchen",
    name: "Premium Kitchen Storage Set",
    price: 999,
    rating: 5,
    reviews: 31,
    image: "featured3.png",
  },
  {
    id: 4,
    category: "Sports",
    name: "Premium Running Shoes",
    price: 1999,
    rating: 5,
    reviews: 42,
    image: "featured4.png",
  },
];

const filteredProducts = products.filter((product) => {
  const search = searchText?.toLowerCase() || "";

  return (
    product.name.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search)
  );
});



  return (
    <div className="shop-page">

      <section className="shop-hero">
        
        <h1>Shop Our Products</h1>
        <span>Discover great products at amazing prices.</span>
      </section>

      <div className="shop-container">

        <div className="shop-top">
          <h2>All Products</h2>

          <div className="shop-controls">
            <input
              type="text"
              placeholder="Search products..."
            />

            <select>
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion & Beauty</option>
              <option>Kids & Toys</option>
              <option>Kitchen</option>
              <option>Home</option>
              <option>Sports</option>
            </select>
          </div>
        </div>

        <div className="shop-grid">

          {filteredProducts.map((product) => (
            <div className="shop-card" key={product.id}>

              <div className="shop-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="shop-details">

                <p className="shop-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="shop-rating">
                  {"⭐".repeat(product.rating)}
                  <span> ({product.reviews})</span>
                </div>

                <div className="shop-price">
                  Rs. {product.price.toLocaleString("en-IN")}
                </div>
<button
  className="add-cart-btn"
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }
>
  Add to Cart
</button>

                <button className="buy-now-btn">
                  Buy Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Shop;