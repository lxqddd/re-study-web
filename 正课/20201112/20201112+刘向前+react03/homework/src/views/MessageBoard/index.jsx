import React, { Component } from 'react'
import './index.css'
import Add from './components/Add'
import Messages from './components/Messages'
import State from './components/States'
// 钟阿姨 =======================
class index extends Component {
  state = {
    data: [
      {
        id: 0,
        nickName: 'hello world',
        message: 'hello world',
        isSelect: false
      }
    ],
    selectCount: 0,
    allMessageCount: 0
  }
  addNewMessage = message => {
    const { data } = this.state
    const length = data.length
    this.setState({
      data: [
        ...data,
        {
          id: length,
          ...message,
          isSelect: false
        }
      ]
    })
  }
  delMessage = id => {
    const { data } = this.state
    this.setState({
      data: data.filter(item => id !== item.id)
    })
  }
  editMessage = (id, message) => {
    const { data } = this.state
    for (let i = 0; i < data.length; i++) {
      let nowMessage = data[i]
      if (nowMessage.id === id) {
        data[i] = {
          ...nowMessage,
          message
        }
        break
      }
    }
    this.setState({
      data
    })
  }
  changeSelect = (id, select) => {
    const { data } = this.state
    for (let i = 0; i < data.length; i++) {
      let message = data[i]
      if (message.id === id) {
        data[i] = {
          ...message,
          isSelect: select
        }
        break
      }
    }
    this.setState({
      data
    })
  }
  render() {
    const { data } = this.state
    return (
      <section className='wrap'>
        <h2 className='title'>留言板</h2>
        <Add addMessage={this.addNewMessage} />
        <Messages
          data={data}
          delMessage={this.delMessage}
          editMessage={this.editMessage}
          changeSelect={this.changeSelect}
        />
        <div className='sum'>
          <label>
            <input
              type='checkbox'
              onChange={({ target }) => {
                if (target.value) {
                  data.map(item => {
                    item.isSelect = true
                  })
                  this.setState({
                    data: [...data]
                  })
                }
              }}
            />
            <span>选中全部</span>
          </label>
          <a
            onClick={() => {
              const filterData = data.filter(item => {
                return item.isSelect !== true
              })
              this.setState({
                data: filterData
              })
            }}>
            删除选中项
          </a>
          {/* <p>
            当前选中{this.state.selectCount}项，共{this.state.allMessageCount}条留言
          </p> */}
          <State data={data} />
        </div>
      </section>
    )
  }
}

export default index
