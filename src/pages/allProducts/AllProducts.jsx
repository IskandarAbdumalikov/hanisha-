import React, { useState } from "react";
import Products from "../../components/products/Products";
import AllProductsSearch from "../../components/allProductsSearch/AllProductsSearch";
import { useGetAllProductsQuery } from "../../context/productsSlice";

const AllProducts = () => {
  const [subtitle, setSubTitle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [offset,setOffset] = useState(1)
  let { data,isLoading } = useGetAllProductsQuery({ search: searchValue, limit: 8*offset });

  return (
    <div className="allproducts">
      <AllProductsSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        subtitle={subtitle}
      />
      <Products setOffset={setOffset} isLoading={isLoading} data={data} />
    </div>
  );
};

export default AllProducts;
