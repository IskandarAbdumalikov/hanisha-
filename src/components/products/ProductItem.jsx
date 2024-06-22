import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import './products.scss'

export const ProductItem = ({ id, urls, title, price }) => {
    console.log(urls);
    return (
        <div key={id} className="products__cards__card">
            <Link to={`/products/${id}`} >
                <div className="products__cards__card-img">
                    <img src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Matte-Glass-Back_091019_big.jpg.large.jpg' alt="images" />
                </div>
            </Link>
            <div className="products__cards__card-rating">
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
                <FaStar className="stars" />
            </div>
            <div className="products__cards__card-title">
                <span>{title}</span>
            </div>
            <div className="products__cards__card-shop">
                <p>${price}</p>
                <button className='shop'><LuShoppingCart className="" /></button>
                <button className="heart"><CiHeart /> </button>
            </div>
        </div>
    )
}

