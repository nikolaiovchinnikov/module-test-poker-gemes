import  Card  from "./Card";
import  Hand  from "./Hand";
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const SUITS = ["♠", "♥", "♦", "♣"]
export default class Checker {
    public checkCard (hand:Hand) {
        let item:Card[] = hand.deckListGeme
        hand.deckListGeme[0].ranks = "J"
        hand.deckListGeme[1].ranks = "J"
        hand.deckListGeme[2].ranks = "J"
        hand.deckListGeme[3].ranks = "J"
        hand.deckListGeme[4].ranks = "Q"
        let fourKind:boolean = this.fourOfKind(item)
        let orderCard:boolean = this.cardOrder(item)
        let orderCardFlshRoall:boolean = this.cardOrder(item,true)
        let sults:boolean = this.checkSults(item)
        if(orderCardFlshRoall && sults ) {
            console.log("10 очков - Роял-флеш")
        }else if(orderCard && sults) {
            console.log("9 очков - Стрит-флеш")
        }else if(fourKind) {
            console.log("8 очков - Каре/четвёрка")
        }else if(sults){
            console.log("6 очков - Флеш ")
        }else if(orderCard){
            console.log("5 очка - Стрит (straight)")
        }
    }



    public fourOfKind ( item:Card[] ) {
        let caunt = 0;
        for ( let i in item ) {
            if( caunt === 4 ){ return true }
            caunt = 0
            for ( let value of item ) {
                if( item[i].ranks === value.ranks ) { caunt++ }
            }
        }
        return false
    }


    
    public checkSults (item:Card[]) {
        let isBulean:boolean = false;
        for(let key of SUITS){
            let count = 0
            for (let iterator of item) {
                console.log(iterator.sults )
                if (key !== iterator.sults) {
                    isBulean = false
                    break
                }else {
                    isBulean = true;
                    count++
                    if (count === item.length){
                        return true
                    }
                }
            }
        }return isBulean
    }


    public cardOrder (item:Card[],royalFlush:boolean=false) {
        const listPoints:number[] = []
        let caunt:number = 0;
        for (let element of item) {
            listPoints.push(element.points)
        }
        listPoints.sort(function(a, b) {
            return a - b;
          });
        console.log(listPoints); 
        for (const key in listPoints) {
            if(listPoints[key]+ 1 === listPoints[parseInt(key)+1] ){
                caunt++
            }
            
            else if( listPoints[listPoints.length - 1] === listPoints[listPoints.length - 2]+1 && listPoints.length === parseInt(key)+1 && royalFlush &&  listPoints[listPoints.length - 1] === 14) {
                    caunt++
            }
            
            else if( listPoints[listPoints.length - 1] === listPoints[listPoints.length - 2]+1 && listPoints.length === parseInt(key)+1 && royalFlush === false ) {
                caunt++
            }else{
                return  false
            }
        }if(caunt === listPoints.length) {
            return true
        }else {
            return false
        }
    }
}
module.exports = Checker