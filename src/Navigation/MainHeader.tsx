import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import UpcomingSessions from "../Sessions/UpcomingSessions";




export default function MainHeader(){
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);
  function showUpcomingSessions(){
    setUpcomingSessionsVisible(true)
  }

  function hideUpcomingSessions(){
    setUpcomingSessionsVisible(false);
  }

    return (
        <>
        {upcomingSessionsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
        <header id="main-header">
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive})=>isActive?'active':''}>Our Mission</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sessions" className={({isActive})=>isActive?'active':''}>Browse Sessions</NavLink>
                    </li>
                    <li>
                        <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}