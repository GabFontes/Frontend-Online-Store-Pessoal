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
          return (
            <label htmlFor={ index } key={ index }>
              <input type="radio" name="rating" id={ index }/>
              <FaStar className="star" size={ 30 } />
            </label>
          );
        })}
      </div>
    );
  }
}
export default Star;
