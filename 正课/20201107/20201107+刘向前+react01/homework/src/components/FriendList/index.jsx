import React, { Component } from 'react'
import './index.css'
import data from './data'
import Dl from './components/Dl'
// 暗号：我是MT =====================================
export default class FriendList extends Component {
  render() {
    return (
      <div className='friend-list'>
        {data.map((item, index) => {
          return <Dl key={index} data={item} />
        })}
      </div>
    )
  }
}
