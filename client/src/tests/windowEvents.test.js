import { onBlur, onFocus } from '../utility/windowEvents';

describe('Testing Blur Window Event function:', ()=>{
    test("it should return a Date object", ()=>{
        const res = onBlur();
        expect(typeof res).toBe('object');
    })
    test("it should return the current time", ()=>{
        const res = onBlur();
        expect(res).toStrictEqual(new Date());
    })
})

describe('Testing Focus Window Event function:', ()=>{
    test.skip("it should accept a time one hour in the past and return 60 (min)", ()=>{
        const startDate = new Date();
        startDate.setHours(startDate.getHours() - 1);
        const res = onFocus(startDate);
        expect(startDate.getHours()).toBe(new Date().getHours() - 1);
        expect(res).toBe(60);
    })
    test.skip("it should accept a time 30 minutes in the past return 30 min", ()=>{
        const startDate = new Date();
        if (startDate.getMinutes() < 30) {
            let currentMinutes = startDate.getMinutes();
            let minutes = 60 - (30 - currentMinutes);
            startDate.setHours(startDate.getHours() - 1);
            startDate.setMinutes(minutes);
        } else {
            startDate.setMinutes(startDate.getMinutes() - 30);
        }
        const res = onFocus(startDate);
        expect(res).toBe(30);
    })
    test("it should accept a time at the start of the hour and return the current minutes of the hour", ()=>{
        const startDate = new Date();
        let currentMinutes = startDate.getMinutes();
        startDate.setMinutes(currentMinutes - currentMinutes);
        const res = onFocus(startDate);
        expect(res).toBe(currentMinutes);
    })
})