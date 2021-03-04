import Home from './View/Home.js';
import Translation from './View/Translation.js';

import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/translation" component={Translation} />
          {/*<Route path="/translation" component={Translation} />
            <Route path="/profile" component={Profile} />*/}
        </Switch>
      </Router>
    </div>

  );
}

export default App;
