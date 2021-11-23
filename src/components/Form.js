import React from 'react';
import Star from './Star';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Dê a sua avaliação</h2>
        <Star />
        <textarea
          placeholder="Dê sua Opinião Sobre o Produto."
          data-testid="product-detail-evaluation"
          name="evaluation"
          cols="30"
          rows="10"
        />
      </form>
    );
  }
}
export default Form;
