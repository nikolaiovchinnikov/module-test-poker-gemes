"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hand {
    constructor() {
        this.deckListGeme = [];
        // public repleseHendCard ( item:string ) {
        //     this.deckListGeme.map((element,i) => {
        //         i+"" ===
        //     })
        // }
    }
    appendHendCard(item) {
        this.deckListGeme.push(item);
    }
    showAllCards() {
        let deckListGeme = "";
        this.deckListGeme.forEach((element, i) => {
            deckListGeme += ` №${i} ${element.value}`;
        });
        return deckListGeme;
    }
}
exports.default = Hand;
//# sourceMappingURL=Hand.js.map