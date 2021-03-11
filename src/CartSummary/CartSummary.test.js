import React from 'react';
import ReactDOM from 'react-dom';
import CartSummary from './CartSummary';


describe('CartSummary', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CartSummary/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});