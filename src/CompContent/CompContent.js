import React, { Component } from 'react';
import CustomLaptop from '../CustomLaptop/CustomLaptop';
import LaptopCart from '../LaptopCart/LaptopCart';
import '../App.css';

class CompContent extends Component{
    render(){
        return(
            <main>
                <CustomLaptop features={this.props.features} handleUpdateFeatureChange={this.props.handleUpdateFeatureChange} data={this.props.data}/>
                <LaptopCart handleUpdateFeatureChange={this.props.handleUpdateFeatureChange} summary = {this.props.summary} total = {this.props.total}/>
            </main>
        );
    };
}
export default CompContent;