import { calculateMinutes, calculateTimeBlock, calculateClockOutTime, isValidTime } from '../utility/timeFunctions';


describe('converting timestamps into minutes with calculateMinutes:', ()=>{
    test('should convert 1:30 into 90 minutes', ()=>{
        let time = '1:30';
        let totalMinutes = calculateMinutes(time);
        expect(totalMinutes).toBe(90);
        time = '14:45';
        totalMinutes = calculateMinutes(time);
        expect(totalMinutes).toBe(14*60+45);
    });

    test('should convert 14:45 into (14*60)+45 minutes', ()=>{
        let time = '14:45';
        let totalMinutes = calculateMinutes(time);
        expect(totalMinutes).toBe(14*60+45);
    });
});

describe('clock math: subtracting time stamps to calculate time spent:', ()=>{
    test('should calculate 1:00 - 00:30 to equal 30', ()=>{
        let result = calculateTimeBlock('00:30', '01:00');
        expect(result).toBe(30);
    });
    test('should calculate 3:00 - 01:32 to equal 88', ()=>{
        let result = calculateTimeBlock('01:32', '3:00');
        expect(result).toBe(88);

    })
});

describe('calculating what the time will be after adding on provided minutes', ()=>{
    test('should calculate 8:00 to be 16:00 after adding 480 minutes',()=> {
        let result = calculateClockOutTime('8:00', 480);
        expect(result).toBe('16:00');
    })
});

describe('isValidTime: compares the hours and minutes of two different times and returns false if the start is equal or before the end.', ()=>{
    test('should return true for times 08:00, 09:00', ()=>{
        let result = isValidTime("08:00", "09:00");
        expect(result).toBe(true);     
    }) 
    test('should return true for military times 13:00, 10:00', ()=>{
        let result = isValidTime("10:00", "13:00");
        expect(result).toBe(true);     
    }) 
    test('should return false for the same time, 08:00', ()=>{
        let result = isValidTime("08:00", "08:00");
        expect(result).toBe(false);     
    }) 
    test('should return false for times 12:00, 11:00', ()=>{
        let result = isValidTime("12:00", "11:00");
        expect(result).toBe(false);     
    }) 

});