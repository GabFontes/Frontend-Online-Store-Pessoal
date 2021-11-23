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
              {/* ideia do arrow f. dentro do onclick: https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate/  */}
              <button
                onClick={ () => {
                  info.itemQuant += 1;
                  this.forceUpdate();
                } }
                type="button"
                data-testid="product-increase-quantity"
              >
                +

              </button>
              <p data-testid="shopping-cart-product-quantity">{ info.itemQuant }</p>
              <button
                onClick={ () => {
                  if (info.itemQuant === 0) {
                    info.itemQuant = 0;
                  } else {
                    info.itemQuant -= 1;
                  }
                  this.forceUpdate();
                } }
                type="button"
                data-testid="product-decrease-quantity"
              >
                -

              </button>
            </div>
          ))}
      </div>
    );
  }
}
