import React, { useState } from 'react';

import InputTime from './InputTime';
import TimeEntry from './TimeEntry';

const TimeSheet = ({ timeBank, editTimeBlock }) => {
    const [addingTimeBlock, setAddingTimeBlock ] = useState(false);
    const [addingTime, setAddingTime ] = useState(false);
    return ( 
    <div>
        {timeBank.length > 0 ? (timeBank.map((entry, index)=><div key={index}>
            <TimeEntry {...entry} idx={index} editTimeBlock={editTimeBlock}/>
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