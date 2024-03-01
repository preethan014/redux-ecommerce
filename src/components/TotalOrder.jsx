import React from 'react'
import { useSelector } from 'react-redux'

const TotalOrder = () => {
    const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <div>
        <h1>Total :{totalAmount}</h1>
        <button className='each-item-outer'>place order</button>
      
    </div>
  )
}

export default TotalOrder
