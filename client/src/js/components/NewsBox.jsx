import React from 'react';

export default class NewsBox extends React.Component {
constructor(){
  super();
  this.state = {data:"default"};
  this.saveNews = this.saveNews.bind(this);

}

saveNews(){
var that = this;
  console.log('inside saved '+this.props.item.comments);
  $.ajax({
   url: "http://localhost:8085/news",
   type: "POST",
   data : this.props.item,
   success : function(msg){
   /*msg represents JSON data of news headlines sent back by external API*/
    console.log('saved '+msg);
    that.setState({data:msg});
    that.display();
   },
   error: function(err){
      if(err == 'error of duplication'){
        that.setState({data:"News already saved"});
        that.display();
      }
     console.log('error');
   }
});
}
  display(){
      alert(this.state.data);
  }

render(){
  console.log("Inside News BOX");
  return(

    <section className = "jumbotron" >
      <section className = "row">
        <article className = "col-sm-5">
          <img src={this.props.item.urlToImage} height = "200" width = "300" alt="sorry"/>
        </article>
          <article className = "col-sm-7">
          <h3> Title: {this.props.item.title} </h3>
          <h6>Published At : {this.props.item.publishedAt} </h6>
          <p>{this.props.item.description}</p>
          <a href = {this.props.item.url} target = "_blank" >...more </a>
        </article>
      </section>
      <section className= "row">

        <article className = "col-sm-5 pull-right" >
          <input type = "button" value = "save" onClick = {this.saveNews} />
        </article>
      </section>
    </section>

  );
}

}
