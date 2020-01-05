import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage.component';

const hatspage = () => (
  <div>
    <h1>
      Hats PAGE
    </h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={hatspage} />
      </Switch>
    </div>
  );
}

export default App;
