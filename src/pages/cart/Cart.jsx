import React from 'react'
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
      </div>
      <div className="cart-right">
        <h4>Order summary</h4>
      </div>
    </div>
  )
}

export default Cart