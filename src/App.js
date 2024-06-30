import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./components/Start"
import Menu from './components/Menu';
import GenderSelection from './components/GenderSelection'
import Introduction from './components/Introduction'
import ChallengeExplenation from "./components/ChallengeExplenation";
import Recommendation from './components/Recommendation';
import IngredientSelection from "./components/Ingredients_Selection"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/gender-selection" component={GenderSelection} />
          <Route path="/question" exact component={Introduction} />
          <Route path="/challenge_explenation" exact component={ChallengeExplenation} />
          <Route path="/recommendation" component={Recommendation} />
          <Route path="/ingredients-selection" exact component={IngredientSelection}/>
        </Switch>
      </div>
    </Router>
    );
}
export default App;
