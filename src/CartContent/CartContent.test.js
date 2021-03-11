import React from 'react';
import ReactDOM from 'react-dom';
import CartContent from './CartContent';


describe('CartContent', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CartContent/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});