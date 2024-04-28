import { ReactNode, forwardRef, useRef } from "react"
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";


export type ModalHandle = {
    open: () => void;
  };

type ModalProps={
    children:ReactNode;
    onClose:()=>void;
}


const Modal=forwardRef<ModalHandle,ModalProps>(function Modal({children,onClose},ref){
    const dialog=useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => {
       return {
        open:()=>{
            dialog.current?.showModal()
        }
       }
      });

    return createPortal(
        <dialog ref={dialog} onClose={onClose}>
        {children}
    </dialog>,
     document.getElementById('modal-root')!
    )
   
   
})

export default Modal