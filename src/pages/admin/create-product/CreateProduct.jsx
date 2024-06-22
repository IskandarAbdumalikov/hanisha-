import React from "react";
import "./create-product.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalImages from "./LocalImages";
import { useCreateProductMutation } from "../../../context/productsSlice";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [files, setFiles] = useState("");
  const [createProduct, { data, isError, isLoading, isSuccess, error }] =
    useCreateProductMutation(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hangleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();

    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);
    form.append("info", JSON.stringify([formData.info]));
    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
    navigate("/admin/manage-product");
  };

  return (
    <div className="create-product">
      <div className="container">
        <h2>Create Product</h2>
        <form
          className="create-product__form"
          onSubmit={hangleCreateProduct}
          action=""
        >
          <input
            className="create-product__input"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
            name="title"
            type="text"
          />
          <input
            className="create-product__input"
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
            name="price"
            type="number"
          />
          <input
            className="create-product__input"
            required
            value={formData.oldPrice}
            onChange={handleChange}
            placeholder="oldPrice"
            name="oldPrice"
            type="number"
          />
          <input
            className="create-product__input"
            required
            value={formData.category}
            onChange={handleChange}
            placeholder="category"
            name="category"
            type="text"
          />
          <input
            className="create-product__input"
            required
            value={formData.units}
            onChange={handleChange}
            placeholder="units"
            name="units"
            type="text"
          />
          <input
            className="create-product__input"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="description"
            name="description"
            type="text"
          />
          <input
            className="create-product__input"
            required
            value={formData.info}
            onChange={handleChange}
            placeholder="info"
            name="info"
            type="text"
          />
          <label htmlFor="create-product__file" className="create__image">
            <input
              id="create-product__file"
              className="create-product__input "
              required
              onChange={(e) => setFiles(e.target.files)}
              multiple={true}
              accept="image/*"
              type="file"
            />
            <br />
            <LocalImages files={files} />
          </label>
          <button className="create-product__btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
