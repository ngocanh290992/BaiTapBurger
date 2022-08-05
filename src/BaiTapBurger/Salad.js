import React, { Component } from 'react'

export default class Salad extends Component {
  render() {
   for(let i = 0; i < this.props.soLuong; i++){
        return <div>
            <div className='salad'></div>
            <Salad soLuong={this.props.soLuong - 1}/>
        </div>
   }
   
  }
}
