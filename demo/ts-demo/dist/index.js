"use strict";
/*
 * @Descripttion: 扑克牌练习
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-07 20:20:25
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-07 21:06:49
 */
// 创建一副扑克牌
function createDeck() {
    let deckArr = [];
    for (let i = 1; i <= 13; i++) {
        deckArr.push({
            color: '♠',
            number: i
        });
        deckArr.push({
            color: '♣',
            number: i
        });
        deckArr.push({
            color: '♥',
            number: i
        });
        deckArr.push({
            color: '♦',
            number: i
        });
    }
    return deckArr;
}
// 打印扑克牌
function printDeck(deck) {
    deck.forEach(item => {
        if (item.number <= 10) {
            console.log(item.color + item.number);
        }
        else if (item.number === 11) {
            console.log(item.color + 'J');
        }
        else if (item.number === 12) {
            console.log(item.color + 'Q');
        }
        else if (item.number === 13) {
            console.log(item.color + 'K');
        }
    });
}
const deck = createDeck();
printDeck(deck);
