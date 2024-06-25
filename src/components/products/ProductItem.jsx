import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/wishlistSlice/wishlistSlice.js";
import { addToCart } from "../../context/cartSlice/index.js";

import "./products.scss";

export const ProductItem = ({
  id,
  urls,
  title,
  price,
  setShowModule,
  handleViewMore,
  data,
}) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const handleAdd = () => {
    dispatch(addToCart({ ...data, shopCount: 1 }));
  };
  return (
    <div key={id} className="products__cards__card">
      <Link onClick={() => handleViewMore(data)}>
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
        <Link style={{ cursor: "pointer" }} to={`/products/${id}`}>
          {title}
        </Link>
      </div>
      <div className="products__cards__card-shop">
        <p>${price}</p>
        <button className="shop" onClick={handleAdd}>
          <LuShoppingCart className="" />
        </button>
        <button onClick={() => dispatch(like(data))} className="heart">
          {wishlistData.some((el) => el.id === data.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
    </div>
  );
};
