import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { authActions } from '../store/auth';

const Cart = () => {
  const islogin=useSelector(state=>state.auth.isLoggedIn)

    const cartItemsCount=useSelector(state=>state.cart.totalQuantity);
    const dispatch=useDispatch();
    function logout(){
      dispatch(
        authActions.logout()
      )
    }
    function showcart(){
      dispatch(
        cartActions.showStatus()
      )

    }
  return (
    <React.Fragment>
    <div onClick={showcart}className='cart-outer'>
       Cart: {cartItemsCount} items

    </div>
    {islogin && <div className='logout-outer' onClick={logout}>Logout</div>}
    </React.Fragment>
  )
}
export default Cart
