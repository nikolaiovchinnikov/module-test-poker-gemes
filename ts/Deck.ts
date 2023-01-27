const _ = require('lodash');
// import  as  from 'lodash';
import  Card  from "./Card";
const POINTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const SUITS = ["♠", "♥", "♦", "♣"]
export default class  Deck {
    public deck: Card[] = []
    constructor () {
        RANKS.forEach((ranks,i) => {
            SUITS.forEach(sults => {
                this.deck.push(new Card(ranks,sults,POINTS[i]))
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

