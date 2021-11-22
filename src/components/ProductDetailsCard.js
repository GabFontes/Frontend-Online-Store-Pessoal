import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductDetailsCard extends Component {
  constructor() {
    super();

    this.getProductById = this.getProductById.bind(this);

    this.state = {
      productInfo: [],
    };
  }

  componentDidMount() {
    this.getProductById();
  }

  async getProductById() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({
        productInfo: data,
      }));
  }

  render() {
    const {
      productInfo: {
        id,
        title,
        available_quantity: quantity,
        price,
        thumbnail,
        warranty,
      },
    } = this.state;
    return (
      <div>
        <h4 data-testid="product-detail-name">{title}</h4>
        <span>
          R$
          {price}
        </span>
        <p>
          Id do Produto:
          {id}
        </p>
        <p>
          Quantidade Disponível:
          {quantity}
        </p>
        <p>{warranty}</p>
        <img src={ thumbnail } alt={ title } />
        <Link to="/cart">Ir para o Carrinho</Link>
      </div>
    );
  }
}

ProductDetailsCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
