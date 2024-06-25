import React from 'react'
import { useNavigate } from 'react-router-dom';

const Empty = () => {
    let navigate = useNavigate()
  return (
    <div className='empty'>
      <img src="https://m.media-amazon.com/images/I/417aZFzGaMS.jpg" alt="" />
      <button onClick={()=>navigate('/')}>Go to shopping</button>
    </div>
  );
}

export default Empty