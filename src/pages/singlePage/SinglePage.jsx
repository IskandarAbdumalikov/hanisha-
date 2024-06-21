import React, { useState } from "react";
import { useGetSingleProductQuery } from "../../context/productsSlice";
import { useLocation, useParams } from "react-router-dom";
import "./singlePage.scss";
import like from "../../assets/icons/like.svg";

const SinglePage = () => {
  const { productId } = useParams();
  let [imageOrder, setImageOrder] = useState(0);

  const { data } = useGetSingleProductQuery(productId);
  let singleProduct = data?.data;

  const renderImages = () => {
    if (
      !singleProduct ||
      !singleProduct?.urls ||
      singleProduct?.urls.length === 0
    ) {
      return null;
    }
    return singleProduct.urls.map((image, index) => (
      <div className="single__img" key={index}>
        <img
          className={`${imageOrder === index ? "active__img" : ""}`}
          onClick={() => setImageOrder(index)}
          src={image}
          alt=""
        />
      </div>
    ));
  };

  const singleImages =
    singleProduct && singleProduct.urls ? renderImages() : null;
  return (
    <section className="single__page container">
      <div className="single__card">
        <div className="single__card__left">
          <div className="single__card__left__main-img">
            <img
              src={
                singleProduct?.urls.length > 0
                  ? singleProduct.urls[imageOrder]
                  : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt={singleProduct?.title}
            />
          </div>
          <div className="single__card__left__mini-images">{singleImages}</div>
        </div>
        <div className="single__card__right">
          <div className="single__card__right__info">
            <h3>{singleProduct?.description}</h3>
            <p>{singleProduct?.title}</p>
            <ul>
              {singleProduct?.info?.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
          <div className="single__card__right__cards">
            <div className="single__card__right__cards__card">
              <div className="single__card__right__cards__card__left">
                <input name="pack" type="radio" />
                <h3>1 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div className="single__card__right__cards__card__left">
                <input name="pack" type="radio" />
                <h3>2 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div className="single__card__right__cards__card__left">
                <input name="pack" type="radio" />
                <h3>3 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div className="single__card__right__cards__card__left">
                <input name="pack" type="radio" />
                <h3>4 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
          </div>
          <div className="single__card__right__btns">
            <div className="single__card__right__btns__prices">
              <p>${singleProduct?.oldPrice}</p>
              <h3>${singleProduct?.price}</h3>
            </div>
            <div className="single__card__right__btns__btns">
              <img src={like} alt="" />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
