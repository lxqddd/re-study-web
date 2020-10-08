/*
 * @Descripttion: 扑克牌练习
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-07 20:20:25
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-08 11:03:07
 */

type Deck = NormalDeck[]
type NormalDeck = {
  color: Color
  mark: Mark
}
// type Color = '♥' | '♣' | '♠' | '♦'
enum Color {
  heart = '♥',
  spade = '♠',
  club = '♣',
  diamond = '♦'
}
enum Mark {
  A = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  twelve = 'Q',
  king = 'K'
}
// 创建一副扑克牌
function createDeck(): Deck {
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
function printDeck(deck: Deck) {
  deck.forEach(item => {
    console.log(item.color + item.mark)
  })
}

const deck = createDeck()
printDeck(deck)
