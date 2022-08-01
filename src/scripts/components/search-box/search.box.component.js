import React from 'react';
import {connect} from 'react-redux';
import './styles/search.box.style.css';
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'searchTerm': ''};
  }

  render() {
    return (
      <div className="block-theme-border search-header-holder">
        <input
          data-testid={this.props.searchType+"-"+"text-box"}
          className="search-input primary-text-color"
          placeholder="Search here...(minimum 3 characters)"
          type="text"
          onChange = {(event)=>{
            this.props.dispatch({
              'type': 'SEARCH_TEXT_UPDATE',
              'payload': {
                'value': event.target.value,
                'searchType': this.props.searchType,
              },
              'dispatchInfo': {
                dispatch: this.props.dispatch,
                type: 'UPDATE_SEARCH_RESULTS',
              },
            });
          }}
          value={this.props.searchTerm}></input>
        <img className="search-icon" src="/assets/images/search.png"></img>
      </div>
    );
  }
}

const mapPropsToState = function(state) {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapPropsToState)(SearchBox);
