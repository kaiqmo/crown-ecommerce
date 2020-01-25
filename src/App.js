import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage.component';

import ShopPage from './pages/shop/shop.component.jsx';

import Header from './components/header-component/header-component.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
