import React, { Component } from 'react';
import LaptopPart from '../LaptopPart/LaptopPart';
import '../App.css';

class CustomizeContent extends Component {
    render(){
        return(
            <div>
                <LaptopPart features={this.props.features} handleUpdateFeatureChange={this.props.handleUpdateFeatureChange} data={this.props.data}/>
            </div>
        );
    };
}

export default CustomizeContent;