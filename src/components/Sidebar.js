import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Sidebar extends Component {
  constructor() {
    super();

    this.categoriesList = this.categoriesList.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const { setCategory } = this.props;
    const categories = await api.getCategories();
    this.setState({
      categories: categories.map((categoria) => (
        <label
          key={ categoria.id }
          data-testid="category"
          htmlFor={ categoria.id }
        >
          <input
            name="category"
            type="radio"
            id={ categoria.id }
            value={ categoria.id }
            onClick={ () => setCategory(categoria.id) }
          />
          {categoria.name}
        </label>
      )),
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          { categories }
        </form>
      </div>
    );
  }
}

Sidebar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
