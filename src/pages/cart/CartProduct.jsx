import React, { memo } from 'react'
import { TiDelete } from "react-icons/ti";
import cartImage from '../../assets/images/cart-imagee.svg'
import './cart-product.scss'

const CartProduct = () => {
    return (
        <div className='cart-product'>
            <button className='cart-product-x'>
                <TiDelete color='red' fontSize={26} />
            </button>
            <div className="cart-product-div1">
                <h4 className='cart-product-div1-h4'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h4>
                <figure className='cart-product-div1-img'>
                    <img src={cartImage} alt="" />
                </figure>
            </div>
            <figure className='cart-product-div1-img-2'>
                <img src={cartImage} alt="" />
            </figure>
            <h4 className='cart-product-div1-h4-2'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h4>
            <div className="cart-product-div2">
                <p className='div-p'>AMOUNT</p>
                <ul className='cart-product-div2-crud'>
                    <li>-</li>
                    <li className='cart-product-div2-crud-count'>2</li>
                    <li>+</li>
                </ul>
            </div>
            <div className="cart-product-div3">
                <p className='div-p'>PRICE</p>
                <h5>$12.56</h5>
            </div>
            <div className="cart-product-div4">
                <p className='div-p'>TOTAL</p>
                <h5>$12.56</h5>
            </div>
        </div>
    )
}

export default memo(CartProduct)