import React, { Component } from 'react'

class Add extends Component {
  state = {
    nickName: '',
    message: ''
  }
  render() {
    return (
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
        <button
          onClick={() => {
            console.log(this.state.nickName)
            this.props.addMessage({
              nickName: this.state.nickName,
              message: this.state.message
            })
          }}>
          提交留言
        </button>
      </div>
    )
  }
}

export default Add
