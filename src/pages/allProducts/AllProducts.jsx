import React, { useState } from "react";
import Products from "../../components/products/Products";
import AllProductsSearch from "../../components/allProductsSearch/AllProductsSearch";
import { useGetAllProductsQuery } from "../../context/productsSlice";

const AllProducts = () => {
  const [subtitle, setSubTitle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  let { data,isLoading } = useGetAllProductsQuery({ search: searchValue, limit: 8 });

  return (
    <div className="allproducts">
      <AllProductsSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        subtitle={subtitle}
      />
      <Products isLoading={isLoading} data={data} />
    </div>
  );
};

export default AllProducts;
