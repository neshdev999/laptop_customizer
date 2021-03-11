import React from 'react';
import ReactDOM from 'react-dom';
import CartHeader from './CartHeader';


describe('CartHeader', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CartHeader/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});