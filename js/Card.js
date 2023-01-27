"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(ranks, sults, points) {
        this.ranks = ranks;
        this.sults = sults;
        this.points = points;
    }
    get value() {
        return `[${this.ranks} ${this.sults}],`;
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map