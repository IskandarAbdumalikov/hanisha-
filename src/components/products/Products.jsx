import React, { useState } from 'react';
import { useGetCategoriesQuery } from '../../context/categorySlice';
import './products.scss';
import { ProductItem } from './ProductItem';
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material';
import SingleModule from '../singleModule/SingleModule';

const Products = ({
  subtitle,
  data,
  isLoading,
  page,
  setPage,
  perPageCount,
  setPerPageCount,
}) => {
  const { data: categoriesData } = useGetCategoriesQuery();
  const [showModule, setShowModule] = useState(false); // State to control modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product

  const totalCount = Math.ceil(data?.data?.count / perPageCount) || 1;

  const handleViewMoreClick = (product) => {
    setSelectedProduct(product);
    setShowModule(true);
  };

  const handleChange = (_, value) => {
    setPage(value);
    sessionStorage.setItem('pageCount', value);
  };

  const handleSelectChange = (e) => {
    setPerPageCount(e.target.value);
    localStorage.setItem('selectPageCount', e.target.value);
    setPage(1);
    sessionStorage.setItem('pageCount', 1);
  };

  const categories = categoriesData?.data.map((el) => (
    <li key={el.id}>
      <data value={el.title}>{el.title}</data>
    </li>
  ));

  const cards = data?.data.products.map((el) => (
    <ProductItem
      key={el.id}
      id={el.id}
      urls={el.urls[0]}
      title={el.title}
      price={el.price}
      onMoreClick={() => handleViewMoreClick(el)} // Pass product to open modal
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
          cards
        )}
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }} py={'20px'}>
        <Pagination onChange={handleChange} count={totalCount} color="primary" page={page} />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={perPageCount}
            label="Age"
            onChange={handleSelectChange}
          >
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={16}>16</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {showModule && selectedProduct && (
        <SingleModule product={selectedProduct} setShowModule={setShowModule} />
      )}
    </div>
  );
};

export default Products;
