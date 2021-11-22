import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductDetailsCard from './components/ProductDetailsCard';
import Cart from './pages/Cart';
import Home from './pages/Home';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
            <Route path="/product/:id" component={ ProductDetailsCard } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
