import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartlist = useSelector((state) => state.cart.itemsList);
  console.log(cartlist);
  return (
    <div className="cartlist-outer">
      {cartlist.map((each) => {
        const { id, price, quantity, totalPrice, name } = each;
        return(
          <li className="each-outer" key={id}>
             <CartItem id={id} name={name} price={price} quantity={quantity} totalPrice={totalPrice} />
          </li>
        )
      })}
     
    </div>
  );
};

export default CartList;
