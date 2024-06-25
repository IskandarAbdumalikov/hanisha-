import React, { memo, useState } from "react";

import { useGetCategoriesQuery } from "../../context/categorySlice";

import "./products.scss";
import { ProductItem } from "./ProductItem";

const Products = ({ subtitle, data, isLoading, setOffset }) => {
  const { data: categoriesData } = useGetCategoriesQuery();

  let categories = categoriesData?.data.map((el) => (
    <li key={el.id}>
      <data value={el.title}>{el.title}</data>
    </li>
  ));

  let card = data?.data.products.map((el) => (
    <ProductItem
      key={el.id}
      id={el.id}
      urls={el.urls[0]}
      title={el.title}
      price={el.price}
    />
  ));

  return (
    <div className="products container">
      <div className="products__title">
        {subtitle ? <h1>Our Products</h1> : <></>}
      </div>
      <div className="products__category">
        <ul>
          <li>all</li>
          {categories}
        </ul>
      </div>
      <div className="products__cards">
        {isLoading ? (
          <div className="products__loading">
            <h1>Loading...?</h1>
          </div>
        ) : (
          card
        )}
      </div>
      <button
        className="see__more__btn"
        disabled={isLoading}
        onClick={() => setOffset((p) => p + 1)}
      >
        {isLoading ? "Loading..." : "See more"}
      </button>
    </div>
  );
};

export default memo(Products);
