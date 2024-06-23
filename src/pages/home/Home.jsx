import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Blog from "../../components/blog/Blog";
import Clients from "../../components/clients/Clients";
import Result from "../../components/result/Result";
import HomeBlog from "../../components/blog/Blog";
import { useGetAllProductsQuery } from "../../context/productsSlice";

const Home = () => {
  const [subtitle, setSubTitle] = useState(true);
  const [offset, setOffset] = useState(1);
  let { data, isLoading } = useGetAllProductsQuery({
    limit: 8 * offset,
    search: "",
  });

  return (
    <section>
      <Hero />
      <Products setOffset={setOffset} data={data} isLoading={isLoading} />
      <HomeBlog />
      <Clients />
      <Result />
    </section>
  );
};

export default Home;
