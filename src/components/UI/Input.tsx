import {forwardRef, ComponentPropsWithRef } from "react";



//decriminated unions
type InputProps={
    label:string;
    id:string;
} & ComponentPropsWithRef<'input'>

const Input= forwardRef<HTMLInputElement,InputProps> (function Input({label,id,...props},ref)
{
return (
    <p>
        <label style={{textAlign:"left"}} htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props}  ref={ref}/>
    </p>
)
})

export default Input