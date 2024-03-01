import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
    const dispatch=useDispatch();

     const { id, price, quantity, totalPrice, name } = props;
     function add1(){
        dispatch(
            cartActions.addToCart({id})
            
        )
     }
     function remove1(){
        dispatch(cartActions.removeFromCart({id}));
     }
  return (
    <div className='cart-item-outer'>
        <div>item name :{name}</div>
        <div>quantity :{quantity}</div>
        <div>price :{price}</div>

        <div>total price :{totalPrice}</div>
        <div>
            <button onClick={add1}>+</button>
            {"    "}
            <button onClick={remove1}>-</button>
        </div>
        
    </div>
  )
}

export default CartItem
