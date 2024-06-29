import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import Questionnaire from './components/Questionnaire'
function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/question" exact component={Questionnaire} />
    </Switch>
    </div>
    </Router>
    );
    }
    export default App;