"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = require("./Deck");
const Hand_1 = require("./Hand");
const readline = __importStar(require("node:readline/promises"));
const node_process_1 = require("node:process");
class Application {
    constructor() {
        this.deck = new Deck_1.Deck();
        this.hand = new Hand_1.Hand();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.deck.shuffle();
            const isBulean = this.toGiveCardFive(5);
            if (isBulean === false)
                return false;
            while (true) {
                let gemeUserCards = this.hand.showAllCards();
                let isReplaceCard = (yield this.inputUser(gemeUserCards)).split(" ");
                this.replese(isReplaceCard);
                console.log(this.deck.deck.length);
            }
        });
    }
    inputUser(cards) {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
            const answer = yield rl.question(cards + "\nХотите заменить карты? \n1 = да\n2 = нет");
            rl.close();
            return yield answer;
        });
    }
    getNewDeck() {
        this.deck = new Deck_1.Deck();
    }
    toGiveCardFive(caunt) {
        for (let i = 0; i < caunt; i++) {
            let card = this.deck.takeCard();
            if (card) {
                this.hand.appendHendCard(card);
            }
            else {
                console.log("No card");
                return false;
            }
        }
        return true;
    }
    replese(listIndex) {
        listIndex.forEach(indexStr => {
            let card = this.deck.takeCard();
            if (card) {
                this.hand.deckListGeme.splice(parseInt(indexStr), 1, card);
            }
        });
    }
}
const app = new Application();
app.start();
//# sourceMappingURL=main.js.map