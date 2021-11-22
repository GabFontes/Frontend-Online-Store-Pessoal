import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShopItem extends Component {
  render() {
    const { card: { thumbnail, title, price, id } } = this.props;
    return (
      <div data-testid="product" className="productCard">
        <img src={ thumbnail } alt={ title } />
        <h2>{title}</h2>
        <p>{price}</p>
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
          style={ { cursor: 'pointer' } }
        >
          Ver Detalhes do Produto
        </Link>
      </div>
    );
  }
}

ShopItem.propTypes = {
  card: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ShopItem;
