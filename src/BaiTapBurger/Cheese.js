import React, { Component } from 'react'

export default class Cheese extends Component {
  render() {
    for (let i = 0; i < this.props.soLuong; i++) {
      return <div>
        <div className='cheese'></div>
        <Cheese soLuong={this.props.soLuong - 1} />
      </div>
    }
  }
}
