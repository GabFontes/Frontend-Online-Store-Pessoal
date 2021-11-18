import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default class Home extends React.Component {
  // constructor(){
  // 

  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <form>
          <label htmlFor="input-search">
            <input type="text" />
          </label>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
        <Sidebar />
      </div>
    );
  }
}
