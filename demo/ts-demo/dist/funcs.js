"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-18 21:44:39
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-18 21:49:38
 */
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
// 创建一副扑克牌
function createDeck() {
    let deckArr = [];
    Object.values(enums_1.Mark).forEach(mark => {
        Object.values(enums_1.Color).forEach(color => {
            deckArr.push({
                color,
                mark
            });
        });
    });
    return deckArr;
}
exports.createDeck = createDeck;
// 打印扑克牌
function printDeck(deck) {
    deck.forEach(item => {
        console.log(item.color + item.mark);
    });
}
exports.printDeck = printDeck;
