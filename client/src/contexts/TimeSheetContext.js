import React, { createContext, useState } from 'react';

export const TimeSheetContext = createContext();

const TimeSheetContextProvider = ({ children }) => {
    const [ timeBank, setTimeBank ] = useState([
        {start: "10:30", end: "11:30"}, 
        {start: "13:00", end:"15:00"}
    ]);

    return (
        <TimeSheetContext.Provider value={{ timeBank }}>
            {children}
        </TimeSheetContext.Provider>
    );
}

export default TimeSheetContextProvider;
