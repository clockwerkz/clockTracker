import React, { useState, useContext } from 'react';
import { TimeSheetContext } from '../contexts/TimeSheetContext';

import { validateTimeSheet } from '../utility/timeFunctions';
import "../css/timeSheet.css";

import InputTime from './InputTime';
import TimeEntry from './TimeEntry';

const TimeSheet = ({ timeBank, editTimeBlock }) => {
    const { timeBank : testTimeBank } = useContext(TimeSheetContext);
    const [addingTimeBlock, setAddingTimeBlock ] = useState(false);
    const [addingTime, setAddingTime ] = useState(false);
    const [ newTimeBank, setNewTimeBank ] = useState(timeBank);
    console.log(testTimeBank);
    return ( 
    <div className="time-sheet">
        {newTimeBank.length > 0 ? (timeBank.map((entry, index)=><div key={index}>
            <TimeEntry {...entry} idx={index} editTimeBlock={editTimeBlock} />
            </div>))
            :
            ("")
        }
        {addingTimeBlock ? 
            (<div>
                <InputTime />
                <p onClick={()=>setAddingTimeBlock(!addingTime)}>Add Time here</p>
            </div>)
            :
            (<button onClick={()=>setAddingTimeBlock(!addingTime)}>Add Time</button>)
      }
    </div>);
}


export default TimeSheet;