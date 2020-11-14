import React, { Component } from 'react'
import Message from './Message'

class Messages extends Component {
  render() {
    const { data } = this.props
    return (
      <ul className='messageList'>
        {data.map((item, index) => {
          return <Message key={index} {...this.props} data={item} />
        })}
      </ul>
    )
  }
}

export default Messages
