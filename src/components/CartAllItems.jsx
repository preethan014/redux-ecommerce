import React from 'react'
import EachItem from './EachItem'
import data from "../database/itemsdata"
import { useSelector } from 'react-redux'
const CartAllItems = () => {

 

  const itemsdata=data;
  return (
    <div className='cart-allitems-outer'>
      {itemsdata.map((each)=>{
        const{id,item_name,item_img_url,item_price}=each;
        return (
           <li className='each-outer' key={id}>
            <EachItem id={id} name={item_name} item_img_url={item_img_url} price={item_price} />
           </li>
          
          
        )
      })}


    </div>
  )
}

export default CartAllItems
