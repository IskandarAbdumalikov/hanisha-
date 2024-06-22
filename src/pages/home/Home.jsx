import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Blog from "../../components/blog/Blog";
import Clients from "../../components/clients/Clients";
import Result from "../../components/result/Result";

const Home = () => {
  const [subtitle, setSubTitle] = useState(true)

  return (
    <section>
      <Hero />
      <Products subtitle={subtitle}/>
      <Blog />
      <Clients />
      <Result />
    </section>
  );
};

export default Home;
