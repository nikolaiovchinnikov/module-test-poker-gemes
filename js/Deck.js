"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const _ = require('lodash');
const Card_1 = require("./Card");
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["♠", "♥", "♦", "♣"];
class Deck {
    constructor() {
        this.deck = [];
        RANKS.forEach(ranks => {
            SUITS.forEach(sults => {
                this.deck.push(new Card_1.Card(ranks, sults));
            });
        });
    }
    shuffle() {
        this.deck = _.shuffle(this.deck);
    }
    takeCard() {
        let card = this.deck.pop();
        this.deck.map(value => {
            return card !== value;
        });
        return card;
    }
}
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map