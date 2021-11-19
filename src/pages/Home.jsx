import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import Sidebar from '../components/Sidebar';
import * as api from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.productsFetch = this.productsFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      products: [],
      query: '',
      categoryId: '',
    };
  }

  handleChange({ target: { value } }) {
    this.setState({
      query: value,
    });
  }

  async productsFetch() {
    const { categoryId, query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products,
    });
  }

  render() {
    const { query, products: { results } } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <form>
          <label htmlFor="input-search">
            <input
              onChange={ this.handleChange }
              value={ query }
              data-testid="query-input"
              type="text"
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.productsFetch }
          >
            Pesquisar
          </button>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">Cart</Link>
        <Sidebar />
        {results && results.map((result) => (<ProductsList
          key={ result.id }
          product={ result }
        />))}
      </div>
    );
  }
}
