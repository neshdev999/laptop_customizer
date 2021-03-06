import React from 'react';
import ReactDOM from 'react-dom';
import CustomLaptop from './CustomLaptop';
import FEATURES from '../Features';

const  dataToTest = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };




describe('CustomLaptop', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CustomLaptop features={FEATURES} data={dataToTest.selected}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});