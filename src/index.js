import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Intro from './components/Intro';
import App from './components/App';

const Root = () => {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path={`/:activityId`} component={App}/>
        <Route component={Intro}/>
      </Switch>
    </div>
  </Router>
  );
};

render((<Root/>), document.querySelector('.root'));
