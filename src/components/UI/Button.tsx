import { ComponentPropsWithoutRef } from "react";


//decriminated unions
type ButtonProps = ComponentPropsWithoutRef<'button'> &{
  href?:never
  target:never
}  //merge

type AnchorProps =  ComponentPropsWithoutRef<'a'> &{
  href?:string
  
}
 //merge


//Predicates which returns a boolean .If true only it runs
function isAnchorProps(props:ButtonProps|AnchorProps):props is AnchorProps{
  return 'href' in props
}


export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
}
