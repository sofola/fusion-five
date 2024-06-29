import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import Introduction from './components/Introduction'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/question" exact component={Introduction} />
        </Switch>
      </div>
    </Router>
    );
  }
export default App;
