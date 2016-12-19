import React from 'react';

export default class NewsBox extends React.Component {
constructor(){
  super();
  this.saveNews = this.saveNews.bind(this);
}

saveNews(){
  console.log('inside saved '+this.props.item.comments);
  $.ajax({
   url: "http://localhost:8085/news",
   type: "POST",
   data : this.props.item,
   success : function(msg){
   /*msg represents JSON data of news headlines sent back by external API*/
    console.log('saved');
    alert("news saved successfully");
   },
   error: function(err){
     console.log('error');

   }
});

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
