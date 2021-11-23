import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShopItem extends Component {
  setIdsInLocalStorage(title, price, thumbnail) {
    let storageIds = [];
    if (localStorage.getItem('arrayInfo')) {
      storageIds = JSON.parse(localStorage.getItem('arrayInfo'));
      console.log('belesma');
    }
    const storageInfo = {
      title,
      price,
      thumbnail,
      itemQuant: 1,
    };
    storageIds.push(storageInfo);
    localStorage.setItem('arrayInfo', JSON.stringify(storageIds));
  }

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
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.setIdsInLocalStorage(title, price, thumbnail) }
        >
          Adicionar ao Carrinho
        </button>
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
