import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as api from '../services/api';

class ShopItem extends Component {
  render() {
    const { card: { thumbnail, title, price } } = this.props;
    return (
      <div data-testid="product" className="productCard">
        <img src={ thumbnail } alt={ title } />
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    );
  }
}

ShopItem.propTypes = {
  card: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ShopItem;
