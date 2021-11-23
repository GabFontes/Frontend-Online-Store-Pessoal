import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

class Star extends React.Component {
  render() {
    const array = 5;
    return (
      <div>
        {/* https://www.youtube.com/watch?v=eDw46GYAIDQ */}
        {[...Array(array)].map((_star, index) => {
          const ratingValue = index + 1;
          return (
            <label htmlFor={ index } key={ index }>
              <input type="radio" name="rating" id={ index } value={ ratingValue } />
              <FaStar className="star" size={ 30 } />
            </label>
          );
        })}
      </div>
    );
  }
}
export default Star;
