import { calculateMinutes } from '../utility/timeFunctions';



test('should convert time into total number of minutes', ()=>{
    let time = '1:30';
    let totalMinutes = calculateMinutes(time);
    expect(totalMinutes).toBe(90);
});