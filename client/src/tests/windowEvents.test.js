import { onBlur } from '../utility/windowEvents';

describe('Testing Focus/Blur Window Event functions:', ()=>{
    test("it should return a Date object", ()=>{
        const res = onBlur();
        expect(typeof res).toBe('object');
    })
    test("it should return the current time", ()=>{
        const res = onBlur();
        expect(res).toStrictEqual(new Date());
    })
})