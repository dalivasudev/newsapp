import React from 'react';

export default class SearchComponent extends React.Component {
  constructor(){
    super();
    this.searchClick = this.searchClick.bind(this);
  }

  searchClick(){
    this.props.sendSearchValue(document.getElementById('searchText').value);
  }

  render(){
    return(
      <div className = "container">
        <div className = "navbar">
          <div className = "container">
            <h3 className = "nav navbar-nav pull-left">View </h3>
            <div className = "nav navbar navbar-nav pull-right">
              <input type = "text" placeholder = "Search" id = "searchText" />
              <input type = "submit" value = "Search" id = "searchBtn" onClick = {this.searchClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
