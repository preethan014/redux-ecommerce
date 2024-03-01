import React from "react";
import Header from "./Header";
import CartAllItems from "./CartAllItems";
import TotalOrder from "./TotalOrder";
import CartList from "./CartList";
import { useSelector } from "react-redux";

const LayOut = () => {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <div>
      <Header />
      <CartAllItems />

      {showCart && <CartList />}
      <TotalOrder />
    </div>
  );
};

export default LayOut;
