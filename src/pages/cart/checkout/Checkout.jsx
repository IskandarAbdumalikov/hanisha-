import React, { memo, useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import './checkout.scss'

const Checkout = () => {
    const [show, setShow] = useState(false)

    console.log(show);
    return (
        <div className='checkout-container'>
            <div className="checkout-container-left">
                <div className="flex">
                    <div className='checkout-container-left-div'>
                        <p className='checkout-container-left-div-title'>
                            <BiArrowBack color='gray' fontSize={25} />
                            <span>Checkout</span>
                        </p>
                        <button className='left-div-btns'>
                            <p className={`bg-btns ${!show ? 'bg-btnsbtnAtice' : ''}`} onClick={() => setShow(p => !p)} ></p>
                            <p className='bg-btns'></p>
                        </button>
                    </div>
                </div>
                <p className='checkout-container-left-p'>Personal info</p>
            </div>
            <div className="checkout-container-right"></div>
        </div>
    )
}

export default memo(Checkout)