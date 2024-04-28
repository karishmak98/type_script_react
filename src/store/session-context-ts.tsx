import { ReactNode, createContext, useReducer,useContext } from "react";



export type Session={
    id:string;
    title:string;
    description:string;
    summary:string;
    date:string;
    image:string;
    duration:number;
}

type SessionState={
    upcomingSessions:Session[]
}

type SessionContextProvider=SessionState &{
    bookSession:(session:Session)=>void
    cancelSession:(sessionId:string)=>void
}
export const SessionContext=createContext<SessionContextProvider|null>(null);
type BookSessionAction={
    type:'BOOK_SESSION';
    session:Session;
}

type CancelSessionAction={
    type:'CANCEL_SESSION';
    sessionId:string;
}

type SessionsAction=BookSessionAction|CancelSessionAction

function sessionsReducer(state: SessionState, action: SessionsAction) {
    if (action.type === 'BOOK_SESSION') {
      if (
        state.upcomingSessions.some((session) => session.id === action.session.id)
      ) {
        return state;
      }
      return {
        upcomingSessions: state.upcomingSessions.concat(action.session),
      };
    }
  
    if (action.type === 'CANCEL_SESSION') {
      return {
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.sessionId
        ),
      };
    }
  
    return state;
  }

  export function useSessionsContext() {
    const context = useContext(SessionContext);
    if (!context) {
      throw new Error(
        'useSessionsContext must be used within a SessionsContextProvider'
      );
    }
    return context;
  }

export default function SessionContextProvider({children}:{children:ReactNode}){
    const [sessionsState, dispatch] = useReducer(sessionsReducer, {
        upcomingSessions: [],
      });

      function bookSession(session: Session) {
        dispatch({ type: 'BOOK_SESSION', session });
      }
      function cancelSession(sessionId: string) {
        dispatch({ type: 'CANCEL_SESSION', sessionId });
      }

      const ctxValue={
        upcomingSessions:sessionsState.upcomingSessions,
        bookSession,
        cancelSession
      }
    return(
<SessionContext.Provider value={ctxValue}>
{children}
</SessionContext.Provider>
    )
}
