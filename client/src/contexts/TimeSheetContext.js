import React, { createContext, useState, useEffect } from 'react';

export const TimeSheetContext = createContext();

const TimeSheetContextProvider = ({ children }) => {
    const [ timeBank, setTimeBank ] = useState([
        {start: "10:30", end: "11:30"}, 
        {start: "13:00", end:"15:00"}
    ]);
    const [ timer, setTimer ] = useState(null);
    const [ counter, setCounter ] = useState(1);
    const [ isCounting, setIsCounting ] = useState(false);

    function startCounter() {
        clearInterval(timer);
        const newTimer = setInterval(()=>{
            console.log("Time tick");
            setCounter(counter => counter + 1)
        }, 1000);
        setTimer(newTimer);
    }

    function stopCounter() {
        clearInterval(timer);
        setTimer(null);
    }

    function toggleCounter() {
        if (timer === null) {
            return startCounter();
        }
        return stopCounter();
    }


    return (
        <TimeSheetContext.Provider value={{ timeBank, counter, toggleCounter, timer }}>
            {children}
        </TimeSheetContext.Provider>
    );
}

export default TimeSheetContextProvider;
