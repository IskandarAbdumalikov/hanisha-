import React from 'react'
import CartProduct from './CartProduct'
import './cart.scss'
import TotalAmount from '../../components/total-amount'

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
        <CartProduct />
      </div>
      <div className="cart-right">
        <h4 className='cart-right-h4'>Order summary</h4>
        <div className='cart-right-items'>
          <p className='cart-right-items-p'>3 ITEMS</p>
          <h5 className='cart-right-items-h5'>$12.56</h5>
        </div>
        <select className='cart-right-select' name="" id="">
          <option value="shopping"> Type of delievery Shipping</option>
          <option value="shopping">shopping</option>
          <option value="shopping">shopping</option>
        </select>
        <label htmlFor="promocode" className='cart-product-right-label'>
          Promocode <input type="text" name="" id="promocode" placeholder='Promocode' />
        </label>
        <hr />
        <TotalAmount key={'3'} name={'Total amount'} price={'$12.56'} />
        <button className='cart-right-btn' type='button'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart