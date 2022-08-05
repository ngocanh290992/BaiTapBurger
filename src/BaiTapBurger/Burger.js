import React, { Component } from 'react'
import './Burger.css'
import { connect } from 'react-redux'
import Salad from './Salad'
import Cheese from './Cheese'
import Beef from './Beef'

class Burger extends Component {

    renderItem = () => {
        return this.props.burger.map((item,index)=>{
            if(item.name === 'salad'){
                    return <Salad soLuong={item.soLuong}/>
            }else if(item.name === 'cheese'){
                    return <Cheese soLuong={item.soLuong}/>
            }else{
                    return <Beef soLuong={item.soLuong}/>
            }
           
        })
    }

    render() {

        return (
            <div>
                <div className='breadTop'></div>
                {this.renderItem()}
               
                <div className='breadBottom'></div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BaiTapBurgerReducer.burgerNew
    }
}

export default connect(mapStateToProps)(Burger)
