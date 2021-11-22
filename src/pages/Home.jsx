import React from 'react';
import { Link } from 'react-router-dom';
import ShopItem from '../components/ShopItems';
import Sidebar from '../components/Sidebar';
import * as api from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchApi = this.searchApi.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.state = {
      query: '',
      categoryId: '',
      search: [],
    };
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  async setCategory(ID) {
    this.setState({
      categoryId: ID,
    }, this.searchApi);
  }

  async searchApi() {
    const { query, categoryId, search } = this.state;
    const searchResults = await api.getProductsFromCategoryAndQuery(
      categoryId,
      query,
    );
    this.setState({
      search: searchResults,
    });
    console.log(search);
  }

  render() {
    const {
      search: { results },
    } = this.state;
    // console.log(query);

    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <form>
          <label htmlFor="input-search">
            <input
              data-testid="query-input"
              onChange={ this.handleChange }
              name="querry"
              type="text"
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.searchApi }
            >
              pesquise
            </button>
          </label>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">
          Cart
        </Link>
        <Sidebar
          setCategory={ this.setCategory }
        />
        {results && results
          .map((result) => <ShopItem key={ result.id } card={ result } />)}
      </div>
    );
  }
}
