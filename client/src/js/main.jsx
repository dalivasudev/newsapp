import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent'
import ComponentManager from './components/ComponentManager'

class MainWindow extends React.Component {
  constructor(){
    super();
    this.state = {newsArr:[]};
    this.fetchNewsFromExternalAPI = this.fetchNewsFromExternalAPI.bind(this);
  }

  fetchNewsFromExternalAPI(provider) {
    var that = this;
     $.ajax({
      url: "https://newsapi.org/v1/articles?source="+provider+"&apiKey=c37357c46e3441b29e0c4c976e74299c",
      type: "GET",
      dataType: 'JSON',
      success : function(msg){
      /*msg represents JSON data of news headlines sent back by external API*/
      var arr = msg.articles;
      that.setState({newsArr:arr});
      },
      error: function(err){
        console.log('error');
      }
  });
  }

  render(){
    return(
      <div>
        <SearchComponent sendSearchValue = {this.fetchNewsFromExternalAPI} />
        <ComponentManager newsArrRef={this.state.newsArr} />
      </div>
    )
  }
}

ReactDOM.render(
  <MainWindow/>,document.getElementById('content')
)
