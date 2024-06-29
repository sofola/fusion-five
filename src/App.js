import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import Introduction from './components/Introduction'
import GenderSelection from './components/GenderSelection'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/menu" exact component={Menu} />
          <Route path="/gender-selection" component={GenderSelection} />
          <Route path="/question" exact component={Introduction} />
        </Switch>
      </div>
    </Router>
    );
  }
export default App;
