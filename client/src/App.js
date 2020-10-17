import React, { useState, useEffect } from 'react';
import TimeButton from './components/TimeButtons';

function App() {
  const [clockedIn, setClockedIn] = useState(false);
  const [ timeBank, setTimeBank ] = useState([]);
  const [ count, setCount ] = useState(0);

  useEffect(()=>{
    console.log("Setting up timeout:");
    setTimeout(()=> setCount(count+1), 1000);
  }, [count])

  return (
    <div className="App">
      <h1>Timebank</h1>
      <input type="time"></input>
      <TimeButton clockedIn={clockedIn} setClockedIn={setClockedIn} />
      <p>{count}</p>
    </div>
  );
}

export default App;
