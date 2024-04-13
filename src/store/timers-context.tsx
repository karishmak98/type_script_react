import { ReactNode, createContext, useContext, useReducer } from "react";
import Timer from "../components/Timer";

export type Timer={
    name:string,
    duration:number
}

type TimersState={
    isRunning:boolean;
    timers:Timer[]
}

const initialState:TimersState={
    isRunning:true,
    timers:[]
}

type TimersContextValue=TimersState & {
addTimer:(timerData:Timer)=>void,
startTimers:()=>void,
stopTimers:()=>void
}

const TimersContext=createContext<TimersContextValue | null>(null);


//custome useContext


export function useTimerContext(){
 const timersCtx= useContext(TimersContext);
 if (timersCtx===null){
    throw new Error('Something went wrong')
   }
   return timersCtx
}

type TimerContextProviderProps={
    children:ReactNode
};

type StartTimersAction={
    type:'START_TIMERS'
}
type StopTimersAction={
    type:'STOP_TIMERS'
}
type AddTimersAction={
    type:'ADD_TIMERS',
    payload:Timer
}
type Action=StartTimersAction|StopTimersAction|AddTimersAction

// type Action={
//     type:'ADD_TIMERS'|'STOP_TIMERS'|'START_TIMERS';
//     payload?:Timer
// }

function timeReducer(state:TimersState,action:Action):TimersState{
  switch(action.type){
    case 'START_TIMERS':
    return {
        ...state,isRunning:true
    }
    case 'STOP_TIMERS':
    return {
        ...state,isRunning:false
    }
    case 'ADD_TIMERS':
        return {
            ...state,timers:[
                ...state.timers,{
                 name:action.payload.name,
                 duration:action.payload.duration
                }
            ]
        }
    default:
    return state
  }
}

export default function TimersContextProvider({children}:TimerContextProviderProps){
   const [timersState,dispatch]  =useReducer(timeReducer,initialState)
   
   
   const ctx:TimersContextValue={
        timers:timersState.timers,
        isRunning:timersState.isRunning,
        addTimer(timerData){
            dispatch({type:'ADD_TIMERS',payload:timerData});
        },
        startTimers(){
            dispatch({type:'START_TIMERS'});
        },
        stopTimers(){
            dispatch({type:'STOP_TIMERS'});
        }
    }
return <TimersContext.Provider value={ctx}>
{children}
</TimersContext.Provider>

}