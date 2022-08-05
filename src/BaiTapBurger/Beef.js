import React, { Component } from 'react'

export default class Beef extends Component {
  render() {
    for (let i = 0; i < this.props.soLuong; i++) {
      return <div>
        <div className='beef'></div>
        <Beef soLuong={this.props.soLuong - 1} />
      </div>
    }
  }
}
