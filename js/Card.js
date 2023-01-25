"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(ranks, sults) {
        this.ranks = ranks;
        this.sults = sults;
    }
    get value() {
        return `[${this.ranks} ${this.sults}],`;
    }
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map