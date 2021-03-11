import React, { Component } from 'react';
import CartHeader from '../CartHeader/CartHeader';
import CartContent from '../CartContent/CartContent';
import '../App.css';

class LaptopCart extends Component {
    render(){
        return(
            <section className="main__summary">
                <CartHeader />
                <CartContent summary = {this.props.summary} total = {this.props.total}/>
            </section>            
        );
    };
}

export default LaptopCart;