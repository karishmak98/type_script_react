import {useRef,type FormEvent } from "react";


type NewGoalProps={
    handleAddGoal:(goal:string,summary:string)=>void
}

export default function NewGoal({handleAddGoal}:NewGoalProps){
   const goal=useRef<HTMLInputElement>(null)
   const summary=useRef<HTMLInputElement>(null)
    function handleSubmit(event:FormEvent<HTMLFormElement>){    //type of event is FormEvent
    event?.preventDefault();
    event.currentTarget.reset
    // new FormData(event.currentTarget);  //to extract elemnt values 
    handleAddGoal(goal.current!.value,summary.current!.value)

}


    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" name="goal" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button >Add Goal</button>
        </p>
    </form>
}