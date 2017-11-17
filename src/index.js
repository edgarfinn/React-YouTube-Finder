import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import API_KEYs from './../keys.js';

console.log(API_KEYs.YOUTUBE);
// Create a new component. This component should produce some html.

const App = () => {
  return <SearchBar />
}

// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
