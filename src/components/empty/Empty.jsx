import React from 'react'
import { useNavigate } from 'react-router-dom';

const Empty = () => {
    let navigate = useNavigate()
  return (
    <div className="empty">
      <img
        src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg"
        alt=""
      />
      <button onClick={() => navigate("/")}>Go to shopping</button>
    </div>
  );
}

export default Empty