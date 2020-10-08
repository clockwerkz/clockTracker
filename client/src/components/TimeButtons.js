import React from 'react';

const TimeButton = ({ clockedIn, setClockedIn }) => {
    return (
        <div>
            <button onClick={()=>setClockedIn(!clockedIn)}>{!clockedIn ? "Clock In" : "Clock Out"}</button>
            <button>Time Sheet</button>
        </div>   
    )
}

export default TimeButton;