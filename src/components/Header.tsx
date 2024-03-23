import { FC,PropsWithChildren } from "react";

// interface HeaderProps{
//     children:ReactNode;
//     image:{
//         src:string;
//         alt:string;
//     }
// }

// export default function Header({image,children}:HeaderProps){
// return<>
// <img src={image.src} alt={image.alt}/>
// {children}
// </>
// }
type HeaderProps=PropsWithChildren<{image:{src:string;alt:string}}>

const Header:FC<HeaderProps>=({image,children})=>{
    return<>
    <img src={image.src} alt={image.alt}/>
    {children}
    </>
}

export default Header;