import React, { Component } from 'react'
import './index.css'
import Message from './components/Message'

class MessageBoard extends Component {
  state = {
    nickName: '',
    message: '',
    messageList: []
  }
  handleDelMessage = index => {
    const messageList = [...this.state.messageList]
    messageList.splice(index, 1)
    this.setState({
      messageList: [...messageList]
    })
  }
  submitMessage = () => {
    const index = this.state.messageList.length
    this.setState({
      messageList: [
        ...this.state.messageList,
        <Message
          key={index}
          nickName={this.state.nickName}
          message={this.state.message}
          delMessage={this.handleDelMessage}
          index={index}
        />
      ]
    })
  }
  render() {
    return (
      <section className='wrap'>
        <h2 className='title'>留言板</h2>
        <div className='addMessage'>
          <input
            type='text'
            placeholder='请输入昵称'
            onChange={({ target }) => {
              this.setState({
                nickName: target.value
              })
            }}
          />
          <textarea
            placeholder='请输入留言'
            onChange={({ target }) => {
              this.setState({
                message: target.value
              })
            }}></textarea>
          <button onClick={this.submitMessage}>提交留言</button>
        </div>
        <ul className='messageList'>{this.state.messageList}</ul>
      </section>
    )
  }
}

export default MessageBoard
