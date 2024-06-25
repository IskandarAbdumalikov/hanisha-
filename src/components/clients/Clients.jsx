import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import clients from "../../assets/images/clients.png";
import star from "../../assets/icons/star.svg";

import "swiper/css";
import "swiper/css/free-mode";

import "./clients.scss";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container clients__container">
        <h1 className="clients__title">What out clients say</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          // pagination={{
          //   clickable: false,
          // }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients__box">
              <div className="clients__box__top">
                <img
                  className="clients__box__top__img"
                  src={clients}
                  alt="client img"
                />
                <div className="clients__box__top__right">
                  <h3 className="clients__box__title">Carla Samantoes-Diego</h3>
                  <span>12.09.2021</span>
                </div>
              </div>
              <div className="clients__box__bottom">
                <img src={star} alt="star img" />
                <p>
                  SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                  professional instructions created by PhD Helga George Be sure
                  of our quality - the freshest batches of this season. Non-GMO,
                  Heirloom - our seeds were tested and have the best germination
                  ratings.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
