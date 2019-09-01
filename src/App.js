import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import SignInSignOutPage from './pages/sign-in-sign-up/sign-in-sign-up';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
