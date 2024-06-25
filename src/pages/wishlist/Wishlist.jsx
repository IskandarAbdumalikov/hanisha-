import React, { memo, useState } from "react";
import "./wishlist.scss";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { like } from "../../context/wishlistSlice/wishlistSlice";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const Wishlist = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();

  return (
    <div className="container">
      {wishlistData?.length > 0 ? (
        <div className="wishlist__products">
          {wishlistData?.map((product) => (
            <div key={product.id} className="products__cards__card">
              <Link to={`/products/${product.id}`}>
                <div className="products__cards__card-img">
                  <img src={product.urls} alt="images" />
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
                <span style={{ cursor: "pointer" }}>{product.title}</span>
              </div>
              <div className="products__cards__card-shop">
                <p>${product.price}</p>
                <button className="shop">
                  <LuShoppingCart className="" />
                </button>
                <button
                  onClick={() => dispatch(like(product))}
                  className="heart"
                >
                  <CiHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default memo(Wishlist);
