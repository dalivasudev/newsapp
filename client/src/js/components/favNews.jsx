var React = require('react');
import ViewnewsComponent from './ViewnewsComponent.jsx';

export default class favNews extends  React.Component{
  constructor(){
    super();
    this.state = {viewnew:[]};
    this.refreshNewsArr = this.refreshNewsArr.bind(this);
  }

  refreshNewsArr(item){
    var arr = this.state.viewnew;
    var findIndex = arr.findIndex( x => x._id == item._id);
    console.log("index is "+findIndex);
    arr.splice(findIndex,1);
    this.setState({viewnew:arr});
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
  var that = this;
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
                  return (<ViewnewsComponent view = {newsobj} fxn = {that.refreshNewsArr} />)
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
