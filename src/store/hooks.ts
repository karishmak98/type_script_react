import { useDispatch,useSelector,type TypedUseSelectorHook } from "react-redux";
import { AppDispatch,RootState } from "./store";


//function type
type DisptachFunction=()=>AppDispatch;


//custom hook of dispatch & useSelector
export const useCartDispatch:DisptachFunction=useDispatch;
export const useCartSelector:TypedUseSelectorHook<RootState>=useSelector;