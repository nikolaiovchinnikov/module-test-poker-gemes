import  Deck  from "./Deck";
import  Hand  from "./Hand";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import  Checker  from "./Checker";



class Application {
    private deck:Deck
    private hand:Hand
    private checker:Checker 
    constructor () {
        this.deck = new Deck()
        this.hand = new Hand()
        this.checker = new Checker()
    }


    public async start(): Promise<boolean> {
        this.deck.shuffle();
        const isBulean = this.toGiveCardFive(5);
        if ( isBulean === false ) return false;
        while(true){
            let gemeUserCards:string = this.hand.showAllCards()
            let isReplaceCard:string[] = (await this.inputUser(gemeUserCards)).split(" ")
            if( isReplaceCard[0] !== "" ){
                console.log(isReplaceCard)
                this.replese( isReplaceCard ) 
            }else {
                this.checker.checkCard(this.hand)
            }
            
            
           
            // закончить цикл при количестве оставшихся кард
            // реализовать подсчет очков


        }
    }


    public async inputUser (cards:string) {
        const rl = readline.createInterface({ input, output });
        const answer = await rl.question(cards + "\nХотите заменить карты? \nВведите через пробел '№'\n");
        rl.close();
        return await answer
    }

    private getNewDeck(){
        this.deck = new Deck()
    }


    private toGiveCardFive ( caunt:number ) {
        for (let i = 0; i < caunt; i++) {
            let card = this.deck.takeCard()
            if (card) {
                this.hand.appendHendCard(card)
            }else {
                console.log("No card")
                return false
            }
        }return true
    }
    private replese ( listIndex:string[]) {
        // реализовать проверку на корректность ввода
        listIndex.forEach(indexStr => {
            let card = this.deck.takeCard()
            if(card) {
                this.hand.deckListGeme.splice(parseInt(indexStr),1,card)
            }
        });
    }
}




new Application().start()



