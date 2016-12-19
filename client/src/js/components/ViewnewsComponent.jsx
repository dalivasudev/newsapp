import React from 'react';

export default class ViewnewsComponent extends React.Component {
  constructor(){
    super();
    this.deleteNews = this.deleteNews.bind(this);
    this.updateNews = this.updateNews.bind(this);
  }

  deleteNews(){
  var that = this;
  $.ajax({
  url: "http://localhost:8085/news",
  type: "DELETE",
  data : that.props.view,
  success : function(msg){
  /*msg represents JSON data of news headlines sent back by external API*/
   console.log('delete success');
   console.log(msg);
   that.props.fxn(that.props.view);
  },
  error: function(err){
    console.log('error in delete');
    console.log(err);
  }
  });

  }

  updateNews(){
    console.log('inside update');
  
    var that = this;
    $.ajax({
      url: "http://localhost:8085/news/update",
      type: 'PUT',
      datatype: 'JSON',
      data:that.props.view.comments,
      success: function(res) {
        console.log("Updated");
        that.props.fxn(that.props.view);
      },
      error: function() {
        console.log("Error in update opration");
      }
    });

  }


  render(){
    return(
      <div>
      <section className = "jumbotron" >
        <section className = "row">
          <article className = "col-sm-4">
            <img src={this.props.view.urlToImage} height = "200" width = "300" alt = "sorry"/>
          </article>
          <article className = "col-sm-8">
            <h3> Title: {this.props.view.title} </h3>
            <h6>Published At : {this.props.view.publishedAt} </h6>
            <p>{this.props.view.description}</p>
            <a href = {this.props.view.url} target = "_blank" >...more </a>
          </article>
        </section>

        <section className= "row">
          <article className = "col-sm-6 pull-right">
            <textarea rows = "4" cols = "30" id = "commentArea">{this.props.view.comments}</textarea>
            <input type = "button" value = "Update" onClick = {this.updateNews} />
            <input type = "button" value = "Delete" onClick = {this.deleteNews} />
          </article>
        </section>
      </section>
      </div>
    )
  }
}
