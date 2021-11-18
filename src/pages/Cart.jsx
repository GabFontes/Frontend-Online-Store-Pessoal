import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      </div>
    );
  }
}
