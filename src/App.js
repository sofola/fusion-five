import React from 'react';
import {
  BrowserRouter as Router, Link} from 'react-router-dom';
import Introduction from './components/Introduction';
import Ingredients from './components/Ingredients';

const App = () => {
  return (
    <Router>
        <div className="App">
          <Link path="/intro">
            <Introduction />
          </Link>
          <Link path="/ingredients">
            <Ingredients />
          </Link>
          <Link path="/">
            <h1>Beiersdorf</h1>
          </Link>
        </div>
    </Router>
  );
};

export default App;
