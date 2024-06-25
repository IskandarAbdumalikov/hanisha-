import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdClose } from 'react-icons/md';
// import 'swiper/swiper-bundle.min.css';
import './swiper.css';  // Import the Swiper CSS file
import './singleModule.scss';  // Import the updated CSS file

const SingleModule = ({ product, setShowModule }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

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
          <MdClose size={24} /> {/* Use the close icon */}
        </button>
        <h2>{product.title}</h2>
        <Swiper spaceBetween={10} slidesPerView={1} className="product-swiper">
          {product.urls.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Product image ${index + 1}`} className="product-image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <p>{product.description ? product.description : 'No description available'}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default SingleModule;
