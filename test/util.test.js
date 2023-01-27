const Checker = require('../js/Checker');
// import  Checker from '../js/Checker';
// const POINTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
// const SUITS = ["♠", "♥", "♦", "♣"]
let checkSultsTrue = [
    {sults:"♠"},
    {sults:"♠"},
    {sults:"♠"},
    {sults:"♠"},
    {sults:"♠"}
]
let checkSultsFalse = [
    {sults:"♠"},
    {sults:"♥"},
    {sults:"♦"},
    {sults:"♣"},
    {sults:"♠"}
]
let checkOrderTrue = [
    {points:1},
    {points:2},
    {points:3},
    {points:4},
    {points:5}
]
let checkOrderFalse = [
    {points:1},
    {points:2},
    {points:3},
    {points:5},
    {points:5}
]
let checkOrderFalse14Points = [
    {points:9},
    {points:10},
    {points:11},
    {points:12},
    {points:13}
]
let checkOrderTrue14Points = [
    {points:10},
    {points:11},
    {points:12},
    {points:13},
    {points:14}
]
let checkOrderTrue14PointsOrderCard = [
    {points:9},
    {points:10},
    {points:11},
    {points:12},
    {points:14}
]
let fourOfKindFalse = [
    {ranks:"J"},
    {ranks:"J"},
    {ranks:"Q"},
    {ranks:"Q"},
    {ranks:"J"}
]
let fourOfKindTrue = [
    {ranks:"J"},
    {ranks:"J"},
    {ranks:"J"},
    {ranks:"Q"},
    {ranks:"J"}
]

describe( "test Checker", () => {
    const chesk = new Checker()
    test("true checkSults", () => {
        let result = chesk.checkSults(checkSultsTrue)
        expect(result).toBe(true)
    })
    test("false checkSults",()=>{ 
        result = chesk.checkSults(checkSultsFalse)
        expect(result).toBe(false)
    })
    test("true cardOrder",()=>{ 
        result = chesk.cardOrder(checkOrderTrue)
        expect(result).toBe(true)
    })
    test("false cardOrder",()=>{ 
        result = chesk.cardOrder(checkOrderFalse)
        expect(result).toBe(false)
    })
    test("true cardOrder 14 points",()=>{ 
        result = chesk.cardOrder(checkOrderTrue14Points,true)
        expect(result).toBe(true)
    })
    test("false cardOrder 14 points",()=>{ 
        result = chesk.cardOrder(checkOrderFalse14Points,true)
        expect(result).toBe(false)
    })
    test("false cardOrder 14 points, yes 14 points and no order card",()=>{ 
        result = chesk.cardOrder(checkOrderTrue14PointsOrderCard ,true)
        expect(result).toBe(false)
    })
    test("false fourOfKind ",()=>{ 
        result = chesk.fourOfKind(fourOfKindFalse)
        expect(result).toBe(false)
    })
    test("true fourOfKind ",()=>{ 
        result = chesk.fourOfKind(fourOfKindTrue)
        expect(result).toBe(true)
    })

})