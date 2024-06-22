import React from 'react'
import CartProduct from './CartProduct'
import cartImage from '../../assets/images/cart-imagee.svg'
import './cart.scss'

const Cart = () => {
  return (
    <div className='cart-container'>
      <div className="cart-left">
        <div className='cart-title'>
          <h3 className='cart-title-h4'>Your cart.</h3>
          <p className='cart-title-p'>3 items</p>
        </div>
        <hr />
        <CartProduct />
      </div>
      <div className="cart-right">
        <h4 className='cart-right'>Order summary</h4>
      </div>
    </div>
  )
}

export default Cart