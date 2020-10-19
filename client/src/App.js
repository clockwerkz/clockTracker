import React, { useState, useEffect } from 'react';
import TimeButton from './components/TimeButtons';
import { onBlur, onFocus } from './utility/windowEvents';
function App() {
  const [clockedIn, setClockedIn] = useState(false);
  const [ timeBank, setTimeBank ] = useState([]);
  const [ timeBlurred, setTimeBlurred ] = useState(new Date());
  const [ count, setCount ] = useState(0);
  const [ isBlurred, setIsBlurred ] = useState(false);

  useEffect(()=>{
    window.addEventListener('blur', ()=>{
      console.log("Blur");
      setIsBlurred(true);
      setTimeBlurred(new Date());
    })
    window.addEventListener('focus', ()=>{
     console.log("Back in focus");
     if (timeBlurred !== null) {
      console.log("Time in between blur and focus:", onFocus(timeBlurred));
     }
     setIsBlurred(false); 
    })
  },[])

  useEffect(()=>{
    if (!isBlurred) {
      setTimeout(()=>{
        setCount(count+1);
      }, 1000)
    }
  }, [count, isBlurred])

   return (
    <div className="App">
      <h1>Timebank</h1>
      <input type="time" value={timeBlurred.getHours() + ":" + timeBlurred.getMinutes()}></input>
      <TimeButton clockedIn={clockedIn} setClockedIn={setClockedIn} />
      <p>{count}</p>
    </div>
  );
}

export default App;
