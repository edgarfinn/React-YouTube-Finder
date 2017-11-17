import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // write a 'render' method for sending to the DOM and assign the below event handler onInputChange (The onChange event occurs whenever the value of an element has been changed.)
  render() {
    return (
      <div>
        <input
          placeholder = { 'search' }
          value = { this.state.term }
          onChange = { (event) => this.setState({term: event.target.value})} />
      </div>
    );
  }
  // write an event handler for input going into the searchbar
  // the ^event^ argument is the javascript DOM event object. This is standard JS

};



export default SearchBar;
