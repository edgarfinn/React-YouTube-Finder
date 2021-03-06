import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    // initialise state
    this.state = { term: '' };
  }

  // write a 'render' method for sending to the DOM and assign the below event handler onInputChange (The onChange event occurs whenever the value of an element has been changed.)
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder = { 'search' }

          // write an event handler for input going into the searchbar
          onChange = { (event) => this.onInputChange(event.target.value)}
          // when the value of a component is provided by state, the component becomes a 'controlled component'
          value = { this.state.term }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

};



export default SearchBar;
