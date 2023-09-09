import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    totalQuantity:0,
    totalPrice:0

}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem:(state,action)=>{
        const newItem=action.payload;
        const existItem=state.cartItems.find((item)=>item.id===newItem.id)
        state.totalQuantity++;
        if(!existItem)
        {
            state.cartItems.push({id:newItem.id,
            productName:newItem.productName,
            image:newItem.image,
            price:newItem.price,
            quantity:1,
            totalPrice:newItem.price

        })
        }
        else
        {
            existItem.quantity++;
            existItem.totalPrice=Number(existItem.totalPrice+newItem.price)
        }
        state.totalPrice=state.cartItems.reduce(((total,item)=>total+Number(item.price)*Number(item.quantity)),0)
    },
    deleteItem:(state,action)=>{
      const id=action.payload
      const existItem=state.cartItems.find((item)=>item.id===id)
      if(existItem)
      {
        state.cartItems=state.cartItems.filter((item)=>item.id!==id )
        state.totalQuantity=state.totalQuantity-existItem.quantity
      }
      state.totalPrice=state.cartItems.reduce(((total,item)=>total+Number(item.price)*Number(item.quantity)),0)
    }

  }
});

export const {addCartItem,deleteItem} = cartSlice.actions

export default cartSlice.reducer