import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Blog from "../../components/blog/Blog";
import Clients from "../../components/clients/Clients";
import Result from "../../components/result/Result";
import HomeBlog from "../../components/blog/Blog";

const Home = () => {
  const [subtitle, setSubTitle] = useState(true)

  return (
    <section>
      <Hero />
<<<<<<< HEAD
      <Products />
      <HomeBlog />
=======
      <Products subtitle={subtitle}/>
      <Blog />
>>>>>>> db0c5f85437ecb1c6d05aeaa99501f3e7f4617c1
      <Clients />
      <Result />
    </section>
  );
};

export default Home;
