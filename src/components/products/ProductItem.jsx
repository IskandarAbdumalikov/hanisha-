import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

import "./products.scss";
import { useAddCartMutation } from "../../context/cartSlice";

export const ProductItem = ({
  id,
  urls,
  title,
  price,
  setShowModule,
  handleViewMore,
  data
}) => {

  const [addCart, { data: cartData }] = useAddCartMutation()
  console.log(cartData);

  const handleAddToCart = (newCart) => {
    console.log(newCart);
    addCart(newCart);//error bor
  }

  return (
    <div key={id} className="products__cards__card">
      <Link to={`/products/${id}`}>
        <div className="products__cards__card-img">
          <img src={urls} alt="images" />
        </div>
      </Link>
      <div className="products__cards__card-rating">
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
      </div>
      <div className="products__cards__card-title">
        <span style={{ cursor: "pointer" }} onClick={() => handleViewMore(data)}>
          {title}
        </span>
      </div>
      <div className="products__cards__card-shop">
        <p>${price}</p>
        <button className="shop" onClick={() => handleAddToCart(data)}>
          <LuShoppingCart className="" />
        </button>
        <button className="heart">
          <CiHeart />
        </button>
      </div>
    </div>
  );
};
