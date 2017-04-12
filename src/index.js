import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';

const Root = () => {
  return (
  <Router basename="/third-wheeel/build/">
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/:activityId" component={App}/>
    </div>
  </Router>
  );
};

render((<Root/>), document.querySelector('.root'));
