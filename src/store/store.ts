import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";


export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
});
// const name='MAx'
// type N=typeof name

//Creating custom hook for useDispatch
export type AppDispatch=typeof store.dispatch  //since store i value not a type thats why use type of isnce we need type


//for custom useSelector for state management
export type RootState=ReturnType<typeof store.getState>;