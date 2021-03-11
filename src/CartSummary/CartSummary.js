import React, { Component } from 'react';
import '../App.css';

class CartSummary extends Component {
    render(){
        return(
            <div>
            {this.props.summary}            
            </div>
        );
    };
}

export default CartSummary;