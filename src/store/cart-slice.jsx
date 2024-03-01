import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        itemsList:[],
        totalQuantity:0,
        totalAmount:0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
            const newitem=action.payload;
            const existingItem=state.itemsList.find((item)=>item.id===newitem.id);
            if(existingItem){
                existingItem.quantity++,
                existingItem.totalPrice+=existingItem.price;
                state.totalAmount+=existingItem.price
            }
            else{
                state.itemsList.push({
                    id:newitem.id,
                    price:newitem.price,
                    quantity:1,
                    totalPrice:newitem.price,
                    name:newitem.name
                }),
                state.totalQuantity+=1,
                state.totalAmount+=newitem.price
            }
        },
        removeFromCart(state,action){
            const existingItem=state.itemsList.find((item)=>item.id===action.payload.id);
            existingItem.quantity--;
            existingItem.totalPrice-=existingItem.price;
            state.totalAmount-=existingItem.price
            if(existingItem.quantity==0){
                state.itemsList=state.itemsList.filter((each)=>each.id!==existingItem.id)
                state.totalQuantity--;
                
            }
        },
        showStatus(state){
            state.showCart=!state.showCart
        }


    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;