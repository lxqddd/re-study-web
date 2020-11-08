import React, { Component } from 'react'

export default class Dl extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
  }
  state = {
    show: false
  }
  handleShowSelect = () => {
    const { show } = this.state
    this.setState({
      show: !show
    })
  }
  render() {
    const { show } = this.state
    return (
      <dl className={show ? 'friend-group expanded' : 'friend-group'}>
        <dt onClick={this.handleShowSelect}>{this.data.title}</dt>
        {this.data.content.map((item, index) => {
          return <dd key={index}>{item}</dd>
        })}
      </dl>
    )
  }
}
