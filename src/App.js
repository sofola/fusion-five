import React from "react";
import Menu from './components/Menu';
import Questionnaire from './components/Questionnaire';
import ChallengeExplenation from "./components/ChallengeExplenation";
import Start from "./components/Start"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Start}/>
          <Route path="/menu" exact component={Menu} />
          <Route path="/question" exact component={Questionnaire} />
          <Route path="/challenge_explenation" exact component={ChallengeExplenation} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;