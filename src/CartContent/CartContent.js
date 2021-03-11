import React, { Component } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import CartTotal from '../CartTotal/CartTotal';
import '../App.css';

class CartContent extends Component {
    render(){
        return(
            <div>
                <CartSummary summary = {this.props.summary}/>
                <CartTotal total = {this.props.total}/>            
            </div>
        );
    };
}

export default CartContent;
