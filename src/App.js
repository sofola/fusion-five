import React from "react";
import Menu from './components/Menu';
import ChallengeExplenation from "./components/ChallengeExplenation";
import Start from "./components/Start"
import Introduction from './components/Introduction'
import GenderSelection from './components/GenderSelection'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/gender-selection" component={GenderSelection} />
          <Route path="/question" exact component={Introduction} />
          <Route path="/challenge_explenation" exact component={ChallengeExplenation} />
        </Switch>
      </div>
    </Router>
    );
  }
export default App;
