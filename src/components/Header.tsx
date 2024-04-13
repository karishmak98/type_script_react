import { useTimerContext } from "../store/timers-context";
import Button from "./UI/Button";

export default function Header(){
 const timersCtx=useTimerContext();
  

    return <header>
        <h1>ReactTimer</h1>
        <Button onClick={timersCtx.isRunning?timersCtx.stopTimers:timersCtx.startTimers}>{timersCtx.isRunning ?'Stop Timer':'Start Timer'}</Button>
    </header>
}