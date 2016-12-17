import React from 'react';

export default class ViewnewsComponent extends React.Component {
  constructor(){
    super();
    this.deleteNews = this.deleteNews.bind(this);
  }

  deleteNews(){
  $.ajax({
  url: "http://localhost:8085/news",
  type: "DELETE",
  dataType : 'JSON',
  success : function(msg){
  /*msg represents JSON data of news headlines sent back by external API*/
   console.log('delete success');
   console.log(msg);
   that.setState({viewnew:msg});
  },
  error: function(err){
    console.log('error in delete');
    console.log(err);
  }
  });
  }


  render(){
    return(
      <div>
      <section className = "jumbotron" >
        <section className = "row">
          <article className = "col-sm-4">
            <img src={this.props.view.urlToImage} height = "200" width = "300" />
          </article>
          <article className = "col-sm-8">
            <h3> Title: {this.props.view.title} </h3>
            <h6>Published At : {this.props.view.publishedAt} </h6>
            <p>{this.props.view.description}</p>
          </article>
        </section>
        <section className= "row">

          <article className = "col-sm-6">
            <input type = "button" value = "Update" onClick = {this.update} />
            <input type = "button" value = "Delete" onClick = {this.deleteNews} />
          </article>
        </section>
      </section>
      </div>
    )
  }
}
