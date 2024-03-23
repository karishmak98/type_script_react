import {type PropsWithChildren} from 'react'
// type CourseType={
//     title:string;
//     description:string    
// }


//************prop children */
// interface CourseType{
//     title:string;
//     // description:string 
//     children:ReactNode   
// }

// export default function CourseGoal({title,children}:CourseType){
//     return <article>
//         <div>
//             <h2>{title}</h2>
//            {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     }

//************alternate way for prop children ****/
type CourseType=PropsWithChildren<{title:string,handleDeleteGoal:(id:number)=>void,id:number}>;            //PropsWithChildren is of generic type basically for children

export default function CourseGoal({title,children,handleDeleteGoal,id}:CourseType){
return <article>
    <div>
        <h2>{title}</h2>
       {children}
    </div>
    <button onClick={()=>handleDeleteGoal(id)}>Delete</button>
</article>
}


//************Alternate syntax for above using FC ****/

// const CourseGoal=({title,children}:CourseType)=>{
// return <article>
//     <div>
//         <h2>{title}</h2>
//        {children}
//     </div>
//     <button>Delete</button>
// </article>
// }

// export default CourseGoal

// const CourseGoal:FC<CourseType>=({title,children})=>{
//     return <article>
//         <div>
//             <h2>{title}</h2>
//            {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     }
    
// export default CourseGoal