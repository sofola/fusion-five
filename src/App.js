import React from "react";
import Menu from './components/Menu';
import Start from "./components/Start"
import Introduction from './components/Introduction'
import GenderSelection from './components/GenderSelection'
import IngredientSelection from "./components/Ingredients_Selection"

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
          <Route path="/" exact component={Start} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/gender-selection" component={GenderSelection} />
          <Route path="/question" exact component={Introduction} />
          <Route path="/ingredients-selection" exact component={IngredientSelection}/>
        </Switch>
      </div>
    </Router>
    );
}
export default App;
