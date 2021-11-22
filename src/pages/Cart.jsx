import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();

    this.getProductInfo = this.getProductInfo.bind(this);

    this.state = {
      productInfo: [],
    };
  }

  componentDidMount() {
    this.getProductInfo();
  }

  getProductInfo() {
    const getInfo = JSON.parse(localStorage.getItem('arrayInfo'));
    this.setState({
      productInfo: getInfo,
    });
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        {!productInfo ? (
          <h2
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h2>)
          : productInfo.map((info) => (
            <div key={ info.title }>
              <h2 data-testid="shopping-cart-product-name">{info.title}</h2>
              <img src={ info.thumbnail } alt={ info.title } />
              <p>{info.price}</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
      </div>
    );
  }
}
