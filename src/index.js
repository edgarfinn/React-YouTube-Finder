import React from 'react';
import ReactDOM from 'react-dom';
console.log(process.env.REACT_APP_YT_API_KEY);
// Create a new component. This component should produce some html.

const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it in the DOM (on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
