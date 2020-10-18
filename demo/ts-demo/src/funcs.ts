/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-18 21:44:39
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-18 21:49:38
 */

import { Mark, Color } from './enums'
import { Deck, NormalDeck } from './types'

// 创建一副扑克牌
export function createDeck(): Deck {
  let deckArr: NormalDeck[] = []

  Object.values(Mark).forEach(mark => {
    Object.values(Color).forEach(color => {
      deckArr.push({
        color,
        mark
      })
    })
  })
  return deckArr
}

// 打印扑克牌
export function printDeck(deck: Deck) {
  deck.forEach(item => {
    console.log(item.color + item.mark)
  })
}
