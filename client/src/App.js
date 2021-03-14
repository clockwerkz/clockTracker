import React, { useState, useEffect } from 'react';
import TimeButton from './components/TimeButtons';
import TimeSheet from './components/TimeSheet';
import { calculateClockOutTime } from './utility/timeFunctions';

function App() {
  const [clockedIn, setClockedIn] = useState(false);
  const [ timeBank, setTimeBank ] = useState([{start: "10:30", end: "11:30"}, {start: "13:00", end:"15:00"}]);
  const [ totalMinutes, setTotalMinutes ] = useState(480);
  
  const [inEditMode, setInEditMode ] = useState(false);

  const editTimeBlock = (idx, start, end) => {
    setTimeBank(timeBank.map((time, i)=> idx !== i ? time : { start, end }  ));
  }

  const addTime = (start, end) => {
    setTimeBank(timeBank.concat([{ start, end }]));
  }

   return (
    <div className="App">
      <h2>8 Hour shift: {calculateClockOutTime(timeBank[0].end, totalMinutes)}</h2>
      {inEditMode ? 
        (<TimeSheet timeBank={timeBank} editTimeBlock={editTimeBlock} />)
          :
        ("")
      }
      <button onClick={()=>setInEditMode(!inEditMode)}>{inEditMode ? "Close" : "Edit Times"}</button>
      <TimeButton clockedIn={clockedIn} setClockedIn={setClockedIn} />
    </div>
  );
}

export default App;
