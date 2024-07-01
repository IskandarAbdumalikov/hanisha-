import React, { memo, useEffect } from 'react'

const Payment = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div>Payment</div>
    )
}

export default memo(Payment)