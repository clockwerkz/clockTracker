import { calculateMinutes, calculateTimeBlock } from '../utility/timeFunctions';


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
});
