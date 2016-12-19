import React from 'react';

export default class SearchComponent extends React.Component {
  constructor(){
    super();
    this.searchClick = this.searchClick.bind(this);
  }

  searchClick(){
    var search = this.refs.searchText.value;
    this.props.sendSearchValue(search);
  }

  render(){
    return(
      <div className = "container">
        <div className = "navbar">
          <div className = "jumbotron">
            <div className = "row">
              <input type = "text" placeholder = "Search news provider here .. " ref = "searchText" className = "col-md-12"/>
              <br /><br />
              <input type = "submit" value = "Search News" id = "searchBtn" onClick = {this.searchClick} className = "btn btn-default btn-primary center-block"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
