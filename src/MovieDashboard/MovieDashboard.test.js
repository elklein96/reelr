import React from 'react';
import ReactDOM from 'react-dom';
import MovieDashboard from './MovieDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
