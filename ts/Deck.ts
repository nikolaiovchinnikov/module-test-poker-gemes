const _ = require('lodash');
import { Card } from "./Card";

const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const SUITS = ["♠", "♥", "♦", "♣"]
export class  Deck {
    public deck: Card[] = []
    constructor () {
        RANKS.forEach(ranks => {
            SUITS.forEach(sults => {
                this.deck.push(new Card(ranks,sults))
            });
        });
    }
    public shuffle () {
        this.deck = _.shuffle(this.deck)
    }
    public takeCard () {
        let card = this.deck.pop()
        this.deck.map( value => {
            return card !== value
        })
        return card
    }
}

