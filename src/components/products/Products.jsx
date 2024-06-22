import React from "react";

import { useGetAllProductsQuery } from "../../context/productsSlice";
import { useGetCategoriesQuery } from "../../context/categorySlice";

import "./products.scss";
import { ProductItem } from './ProductItem'


const Products = () => {
  const { data } = useGetAllProductsQuery({ limit: 8 });
  const { data: categoriesData } = useGetCategoriesQuery();
  // console.log(categoriesData.data);

  // console.log(data );

  let categories = categoriesData?.data.map((el) => (
    <li key={el.id}>
      <data value={el.title}>{el.title}</data>
    </li>
  ));

  let card = data?.data.products.map((el) => (
    <ProductItem key={el.id} id={el.id} urls={el.urls[0]} title={el.title} price={el.price} />
  ));

  return (
    <div className="products container">
      <div className="products__title">
        <h1>Our Products</h1>
      </div>
      <div className="products__category">
        <ul>
          <li>all</li>
          {categories}
        </ul>
      </div>
      <div className="products__cards">
        {card}
      </div>
    </div>
  );
};

export default Products;
