import React, { Component } from 'react'
import Burger from './Burger'
import ThongTInOrder from './ThongTInOrder'

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className='row mt-4'>
        <div className='col-7'>
            <p className='text-center text-danger' style={{fontWeight:'bold'}}>Bánh Burger của bạn</p>
            <Burger/>
        </div>
        <div className='col-5'>
          <p className='text-center text-success' style={{fontWeight:'bold'}}>Chọn thức ăn</p>
            <ThongTInOrder/>
        </div>
      </div>
    )
  }
}
