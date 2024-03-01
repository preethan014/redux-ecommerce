import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const EachItem = (props) => {
  const { id, name, item_img_url, price } = props;
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  }
  return (
    <div className="each-item-outer">
      <img src={item_img_url} />
      <h3>{name}</h3>
      <h4>$ {price}</h4>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default EachItem;
