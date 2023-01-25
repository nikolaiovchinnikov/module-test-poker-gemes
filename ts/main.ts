import { Deck } from "./Deck";
import { Hand } from "./Hand";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';




class Application {
    private deck:Deck
    private hand:Hand
    constructor () {
        this.deck = new Deck()
        this.hand = new Hand()
    }


    public async start(): Promise<boolean> {
        this.deck.shuffle();
        const isBulean = this.toGiveCardFive(5);
        if ( isBulean === false ) return false;
        while(true){
            let gemeUserCards:string = this.hand.showAllCards()
            let isReplaceCard:string[] = (await this.inputUser(gemeUserCards)).split(" ")
            this.replese( isReplaceCard ) 
            console.log(this.deck.deck.length)
        }
    }


    public async inputUser (cards:string) {
        const rl = readline.createInterface({ input, output });
        const answer = await rl.question(cards + "\nХотите заменить карты? \n1 = да\n2 = нет");
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
        listIndex.forEach(indexStr => {
            let card = this.deck.takeCard()
            if(card) {
                this.hand.deckListGeme.splice(parseInt(indexStr),1,card)
            }
        });
    }
}




const app = new Application()
app.start();


