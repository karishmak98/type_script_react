import {type FormEvent, ComponentPropsWithoutRef, useRef,useImperativeHandle, forwardRef } from "react"
import Button from "./Button";

type FormProps=ComponentPropsWithoutRef<'form'> &{
  onSave:(value:unknown)=>void;
}

export type FormHandle={
  clear:()=>void;
}

const Form= forwardRef<FormHandle,FormProps>( function Form({onSave,children,...otherProps},ref){
  const form=useRef<HTMLFormElement>(null)
  
  useImperativeHandle(ref,()=>{
    return {
      clear(){
        console.log("clearing")
        form.current?.reset();
      }
    }
  })


  function handleSubmit(event:FormEvent<HTMLFormElement>){
   event.preventDefault();

   const formData=new FormData(event.currentTarget);
   const data=Object.fromEntries(formData)
   onSave(data);
   form.current?.reset();
  }
    return <form onSubmit={handleSubmit}  {...otherProps} ref={form}>
  {children}
  <p>
    <Button>Save</Button>
  </p>
    </form>
})

export default Form;