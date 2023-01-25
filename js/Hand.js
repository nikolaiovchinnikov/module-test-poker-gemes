"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hand = void 0;
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
exports.Hand = Hand;
//# sourceMappingURL=Hand.js.map