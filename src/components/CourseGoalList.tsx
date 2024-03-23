
import CourseGoal from "./CourseGoal"
import {type CourseGoal as CGoal} from '../App.tsx'
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";


//--------- For arra -----------//
type CourseGoalListProp = {
   goals:CGoal[],
   handleDeleteGoal:(id:number)=>void;
  };

export default function CourseGoalList({goals,handleDeleteGoal}:CourseGoalListProp){
  if (goals.length===0){
   return <InfoBox mode="hint">You have no course goals yet. Start adding some</InfoBox>
  }
  let warningBox:ReactNode;  //children type
   if (goals.length >=4){
    warningBox=<InfoBox mode="warning" severity="medium">You're collecting a lof of goals.Dont put too much on your plate</InfoBox>
   }

    return <>
    {warningBox}
     <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} handleDeleteGoal={handleDeleteGoal} title={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>))}
      </ul>
    </>
}