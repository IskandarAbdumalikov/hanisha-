import React, { memo, useState } from 'react'
import { TiDelete } from "react-icons/ti";
import cartImage from '../../assets/images/cart-imagee.svg'
import './cart-product.scss'


const CartProduct = () => {
    const [count, setCount] = useState(2)

    return (
        <div className='cart-product'>
            <button button className='cart-product-x' >
                <TiDelete color='red' fontSize={26} />
            </button >
            <div className="cart-product-div1">
                <h4 className='cart-product-div1-h4'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h4>
                <figure className='cart-product-div1-img'>
                    <img src={cartImage} alt="" />
                </figure>
            </div>
            <figure className='cart-product-div1-img-2'>
                <TiDelete className='cart-product-closeBtn' color='red' fontSize={24} />
                <img src={cartImage} alt="" />
            </figure>
            <h4 className='cart-product-div1-h4-2'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h4>
            <div className="cart-product-div2">
                <p className='div-p'>AMOUNT</p>
                <ul className='cart-product-div2-crud'>
                    <button className='cart-product-div2-crud-btn' disabled={count <= 0} onClick={() => setCount(p => p - 1)}>-</button>
                    <li className='counter'>{count}</li>
                    <button className='cart-product-div2-crud-btn' onClick={() => setCount(p => p + 1)}>+</button>
                </ul>
            </div>
            <div className="cart-product-div3">
                <p className='div-p'>PRICE</p>
                <h5>$12.56</h5>
            </div>
            <div className="cart-product-div4">
                <p className='div-p'>TOTAL</p>
                <h5>${(12.56) * count}</h5>
            </div>
        </div>
    )
}

export default memo(CartProduct)