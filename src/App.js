import { Component } from 'react';
import * as api from './services/api';

export default class App extends Component {
  render() {
    return (
        api.getCategories().then(categories => {console.log(categories)})
    )
  }
}
