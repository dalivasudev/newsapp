import React from 'react';

export default class NewsBox extends React.Component {

render(){
  console.log("Inside News BOX");
  return(
    <div>
    <section class="row jumbotron" id="featuresHeading">
    <article class="col_12">
    <h3> Title: {this.props.item.title} </h3>
      <h6>Published At : {this.props.item.publishedAt} </h6>
    <p class="lead">
    Description : {this.props.item.description}
    </p>
    </article>
    </section>



    </div>
  );
}

}
