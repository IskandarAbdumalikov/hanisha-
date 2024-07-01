import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdClose, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import './swiper.css';  // Import custom Swiper CSS
import './singleModule.scss';  // Import custom CSS for the component

const SingleModule = ({ product, setShowModule }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Re-enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setShowModule(false);
  };

  if (!product) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          <MdClose size={24} />
        </button>
        <h2>{product.title}</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="product-swiper"
        >
          {product.urls.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Product image ${index + 1}`} className="product-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev">
          <MdNavigateBefore size={24} />
        </div>
        <div className="swiper-button-next">
          <MdNavigateNext size={24} />
        </div>
        <p>{product.description ? product.description : 'No description available'}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default SingleModule;
