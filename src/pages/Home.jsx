import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  // constructor(){
  // }

  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <form>
          <label htmlFor="input-search">
            <input tupe="text" />
          </label>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
      </div>
    );
  }
}
