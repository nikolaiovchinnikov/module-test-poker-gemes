import { Card } from '../js/Card';
describe( "calkulator test", () => {
    const card = new Card()
    test("constructor", () => {
         expect(card).toBe(card)
        //  expect(calc.b).toBe(2)
    })
    // test("return value 1 + 2 = 3",()=>{ 
    //     const result = calc.add()
    //     expect(result).toBe(3)
    // })
    // test("return value 1 + 2 != 6",()=>{ 
    //     const result = calc.add()
    //     expect(result).not.toBe(6)
    // })
})