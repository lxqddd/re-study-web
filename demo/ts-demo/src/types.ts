import { Color, Mark } from './enums'

/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-18 21:44:15
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-18 21:49:26
 */
export type Deck = NormalDeck[]

export type NormalDeck = {
  color: Color
  mark: Mark
}
