import React from "react";
import "./TVDetails.css";
import tv1 from "./assets/tv1.png";
import tv2 from "./assets/tv2.png";
import tv3 from "./assets/tv3.png";
import tv4 from "./assets/tv4.png";
import tv5 from "./assets/tv5.png";

function TVDetails({ tvId, addToCart}) {

  const tvProducts = {
    1: {
      image: tv1,
      name: "32 Inch HD Smart LED TV",
      price: "Rs. 9,999.00",
      oldPrice: "Rs. 14,999.00",
      discount: "33% OFF",
      description:
        "32 Inch HD Smart LED TV with Wi-Fi, HDMI and USB connectivity."
    },

    2: {
      image: tv2,
      name: "EasyDeal 40 Inch Full HD Smart LED TV",
      price: "Rs. 14,999.00",
      oldPrice: "Rs. 22,999.00",
      discount: "35% OFF",
      description:
        "40 Inch Full HD Smart LED TV with excellent picture quality and smart features."
    },

    3: {
      image: tv3,
      name: "EasyDeal 43 Inch 4K Ultra HD Smart TV",
      price: "Rs. 19,999.00",
      oldPrice: "Rs. 32,999.00",
      discount: "39% OFF",
      description:
        "43 Inch 4K Ultra HD Smart TV with Wi-Fi, HDMI and USB connectivity."
    },

    4: {
      image: tv4,
      name: "EasyDeal 50 Inch 4K Ultra HD Smart Google TV",
      price: "Rs. 27,999.00",
      oldPrice: "Rs. 49,999.00",
      discount: "44% OFF",
      description:
        "50 Inch 4K Ultra HD Smart Google TV with Wi-Fi, HDMI and USB."
    },

    5: {
      image: tv5,
      name: "EasyDeal 55 Inch 4K Ultra HD Smart TV",
      price: "Rs. 34,999.00",
      oldPrice: "Rs. 69,999.00",
      discount: "50% OFF",
      description:
        "55 Inch 4K Ultra HD Smart TV with premium picture quality and smart features."
    }
  };

  const tv = tvProducts[tvId];

  return (
    <div className="tv-details-page">

      <div className="tv-details-container">

        <div className="tv-details-image">
          <img src={tv.image} alt={tv.name} />
        </div>

        <div className="tv-details-info">

          <span className="tv-discount">
            {tv.discount}
          </span>

          <h1>{tv.name}</h1>

          <div className="tv-rating">
            ⭐⭐⭐⭐⭐
            <span> 4.5/5</span>
          </div>

          <div className="tv-detail-price">
            {tv.price}
          </div>

          <div className="tv-old-price">
            {tv.oldPrice}
          </div>

          <p>
            {tv.description}
          </p>

          <div className="tv-actions">

            <button
  className="add-cart"
  onClick={() =>
    addToCart({
      id: `tv-${tvId}`,
      name: tv.name,
      price: Number(tv.price.replace(/[^0-9]/g, "")),
      image: tv.image,
    })
  }
>
  Add to Cart
</button>
            <button className="buy-now">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TVDetails;
