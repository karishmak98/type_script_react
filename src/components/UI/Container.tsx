//Polymorphic component- which dont know which component it is going to wrapp in advance

import { ComponentPropsWithoutRef, type ElementType,type ReactNode } from "react"


//Generic type
type ContainerProps<T extends ElementType>={
as?:T;     //value should be a valid identifier of component ex button without angular brackets.this is not like        ReactNode that consider with brackets.It wants name of the component and not the jsx code
children:ReactNode;   //it want only jsx code inside the <>ABC</>                  
} & ComponentPropsWithoutRef<T>


//return component by using as alias
export default function Container<C extends ElementType>({as,children,...props}:ContainerProps<C>){
    const Component=as || 'div';      //since as start with small so stored it in new variable with first letter in capital
    return<Component {...props}>{children}</Component>
}