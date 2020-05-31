import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './Landing';
import HomePage from './HomePage';
class AppRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={HomePage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default AppRoutes;