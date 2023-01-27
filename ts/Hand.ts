import  Card  from "./Card";
export default class Hand {
    public deckListGeme: Card[] = [];
    public appendHendCard (item:Card) {
        this.deckListGeme.push(item);
    }
    public showAllCards () {
        let deckListGeme:string = ""
        this.deckListGeme.forEach((element,i) => {
            deckListGeme +=` №${i} ${element.value}`
        });
        return deckListGeme
    }
    // public repleseHendCard ( item:string ) {
    //     this.deckListGeme.map((element,i) => {
    //         i+"" ===
    //     })
    // }
} 