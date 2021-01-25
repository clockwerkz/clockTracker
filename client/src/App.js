import React, { useState, useEffect } from 'react';
import TimeButton from './components/TimeButtons';
import { onBlur, onFocus } from './utility/windowEvents';
function App() {
  const [clockedIn, setClockedIn] = useState(false);
  const [ timeBank, setTimeBank ] = useState([{in: "10:30", out: "11:30"}]);
  const [ timeBlurred, setTimeBlurred ] = useState(new Date());
  const [timeInteval, setTimeInterval] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeInterval(setInterval(()=>{
      setCount(prevTime => prevTime + 1);
    }, 1000));
    //window.addEventListener('focus', onFocus);
    //window.addEventListener('blur', onBlur);
    // Specify how to clean up after this effect:
    return () => {
      //window.removeEventListener('focus', onFocus);
      //window.removeEventListener('blur', onBlur);
      console.log("Clearing time Interval:");
      clearInterval(timeInteval);
      setTimeInterval(0);
    };
  },[]);

  useEffect(()=>{
    console.log(count);
  },[count])

   return (
    <div className="App">
      <h1>Timebank</h1>
      {timeBank.length > 0 ? (timeBank.map((entry, index)=><p key={index}>
        <input type="time" value={entry.in} />
        <input type="time" value={entry.out} />
      </p>)):
      ("")}
      <TimeButton clockedIn={clockedIn} setClockedIn={setClockedIn} />
    </div>
  );
}

export default App;
