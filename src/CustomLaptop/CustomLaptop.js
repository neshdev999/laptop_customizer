import React, { Component } from 'react';
import CustomizeHeader from '../CustomizeHeader/CustomizeHeader';
import CustomizeContent from '../CustomizeContent/CustomizeContent';
import '../App.css';


class CustomLaptop extends Component {
    render(){
        return(
                <form className="main__form">
                    <CustomizeHeader />
                    <CustomizeContent features={this.props.features} handleUpdateFeatureChange={this.props.handleUpdateFeatureChange} data={this.props.data}/>
                </form>       
        );
    };
}

export default CustomLaptop;