import React from 'react';
import ReactDOM from 'react-dom';
import CompHeader from './CompHeader';


describe('CompHeader', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CompHeader/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });