import React, { Component } from 'react'

class Message extends Component {
  render() {
    const { nickName, message, delMessage, index } = this.props
    return (
      <li>
        <h3>{nickName}</h3>
        <p>{message}</p>
        <a
          onClick={() => {
            console.log('hello')
            delMessage(index)
          }}>
          删除
        </a>
      </li>
    )
  }
}

export default Message
