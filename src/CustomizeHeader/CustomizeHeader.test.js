import React from 'react';
import ReactDOM from 'react-dom';
import CustomizeHeader from './CustomizeHeader';


describe('CustomizeHeader', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CustomizeHeader/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });