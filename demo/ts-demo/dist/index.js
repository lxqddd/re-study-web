"use strict";
/*
 * @Descripttion: 扑克牌练习
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-07 20:20:25
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-08 11:03:07
 */
// type Color = '♥' | '♣' | '♠' | '♦'
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelve"] = "Q";
    Mark["king"] = "K";
})(Mark || (Mark = {}));
// 创建一副扑克牌
function createDeck() {
    let deckArr = [];
    Object.values(Mark).forEach(mark => {
        Object.values(Color).forEach(color => {
            deckArr.push({
                color,
                mark
            });
        });
    });
    return deckArr;
}
// 打印扑克牌
function printDeck(deck) {
    deck.forEach(item => {
        console.log(item.color + item.mark);
    });
}
const deck = createDeck();
printDeck(deck);
