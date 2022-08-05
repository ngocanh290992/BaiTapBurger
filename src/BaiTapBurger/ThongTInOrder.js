import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTInOrder extends Component {

  renderInfoBurger = () => {
    return this.props.burgerNew.map((item, index) => {
      return <tr key={index}>
        <td>{item.name}</td>

        <td>
          <button onClick={()=>{
            this.props.tangGiam(item.name ,false)
          }} className='btn btn-danger'>-</button>
          {item.soLuong}
          <button onClick={()=>{
            this.props.tangGiam(item.name ,true)
          }} className='btn btn-success'>+</button>
        </td>

        <td>{item.donGia}</td>

        <td>{item.soLuong * item.donGia}</td>

      </tr>
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInfoBurger()}
          </tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td>Tổng cộng</td>
            <td>{this.props.burgerNew.reduce((tongTien, item, index)=>{
              return tongTien += item.soLuong * item.donGia;
            },0)}</td>
          </tfoot>
        </table>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    burgerNew: state.BaiTapBurgerReducer.burgerNew
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tangGiam: (name, tangGiam) => {
      dispatch({
        type: 'TANG_GIAM',
        name,
        tangGiam
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTInOrder)
