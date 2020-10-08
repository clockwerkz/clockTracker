import React, { useState } from 'react';
import TimeButton from './components/TimeButtons';

function App() {
  const [clockedIn, setClockedIn] = useState(false);
  const [ timeBank, setTimeBank ] = useState([]);
  return (
    <div className="App">
      <h1>Timebank</h1>
      <input type="time"></input>
      <TimeButton clockedIn={clockedIn} setClockedIn={setClockedIn} />
    </div>
  );
}

export default App;
