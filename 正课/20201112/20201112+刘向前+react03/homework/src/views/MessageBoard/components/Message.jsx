import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      editVal: props.data.message
    }
  }
  render() {
    const { data, delMessage, changeSelect, editMessage } = this.props
    const { id, nickName, message, isSelect } = data
    const { isEdit, editVal } = this.state
    return (
      <li className={isEdit ? 'editing' : ''}>
        <h3>{nickName}</h3>
        <input
          type='checkbox'
          checked={isSelect}
          onChange={({ target }) => {
            changeSelect(id, target.checked)
          }}
        />
        <p
          onDoubleClick={() => {
            this.setState({
              isEdit: true
            })
          }}>
          {message}
        </p>
        <textarea
          value={editVal}
          onChange={({ target }) => {
            this.setState({
              editVal: target.value
            })
          }}
          ref={this.editText}
          onBlur={() => {
            if (editVal.trim()) {
              editMessage(id, editVal)
            } else {
              this.setState({
                editVal: message
              })
            }

            this.setState({
              isEdit: false
            })
          }}></textarea>
        <a
          onClick={() => {
            delMessage(id)
          }}>
          删除
        </a>
      </li>
    )
  }
}

export default Message
