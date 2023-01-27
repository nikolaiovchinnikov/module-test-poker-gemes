"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
// import  as  from 'lodash';
const Card_1 = __importDefault(require("./Card"));
const POINTS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const SUITS = ["♠", "♥", "♦", "♣"];
class Deck {
    constructor() {
        this.deck = [];
        RANKS.forEach((ranks, i) => {
            SUITS.forEach(sults => {
                this.deck.push(new Card_1.default(ranks, sults, POINTS[i]));
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
exports.default = Deck;
//# sourceMappingURL=Deck.js.map