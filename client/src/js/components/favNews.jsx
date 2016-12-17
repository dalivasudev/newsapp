var React = require('react');
import ViewnewsComponent from './ViewnewsComponent.jsx';

export default class favNews extends  React.Component{
  constructor(){
    super();
    this.state = {viewnew:[]};
  }
  componentDidMount(){
  var that = this;
  $.ajax({
  url: "http://localhost:8085/news",
  type: "GET",
  dataType : 'JSON',
  success : function(msg){
  /*msg represents JSON data of news headlines sent back by external API*/
   console.log('saved');
   console.log(msg);
   that.setState({viewnew:msg});
  },
  error: function(err){
    console.log('error');
  }
  });
  }
  render()
  {
  console.log("FAV VIEW");
  console.log(this.state.viewnew);
    return(
      <div className="container-fluid">
        <div className="row">
           <div className="col-md-12">
                <h2>
                    Saved News
                </h2>
                <p>
                {
                this.state.viewnew.map(function(newsobj){
                  return (<ViewnewsComponent view = {newsobj} />)
                }
                )
                }
                </p>
           </div>
       </div>
   </div>
 );
}
}
