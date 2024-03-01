import React from 'react'
import Cart from './Cart'

const Header = () => {
  return (
    <div className='header-outer'>
        <div className='header-logo-name'>Redux ecommerce</div>
        <Cart/>
    </div>
  )
}

export default Header
