import { createSlice,type PayloadAction } from "@reduxjs/toolkit";



export type CartItem={
id:string;
title:string;
price:number;
quantity:number;
}

type CartState={
    items:CartItem[]
}

const initialState:CartState={
    items:[]
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action:PayloadAction<{id:string;
            title:string;
            price:number;
          }>) {
                const itemIndex=state.items.findIndex((item)=>item.id===action.payload.id);
                //if item found 
                console.log(itemIndex)
                if (itemIndex>=0){
                     state.items[itemIndex].quantity++
                }else{
                //if not found its index is -1
                state.items.push({...action.payload,quantity:1})
                }
            },
        removeFromCart(state,action:PayloadAction<string>){
            const itemIndex=state.items.findIndex((item)=>item.id===action.payload);
            console.log(state.items[itemIndex].quantity)
            if (state.items[itemIndex].quantity===1){
                state.items.splice(itemIndex,1);
            }else{
                state.items[itemIndex].quantity--
            }
        }
    }
});


export const {addToCart,removeFromCart}=cartSlice.actions