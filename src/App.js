import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import { render } from '@testing-library/react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p> Grupo 09 </p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
