var React = require('react');

export default class favNews extends  React.Component{

  render()
  {
    return(
      <div className="container-fluid">
        <div className="row">
           <div className="col-md-12">
             <div className="jumbotron">
                <h2>
                    Saved News
                </h2>
                <p>
                   This is saved.
                   </p>
                   <p>
                       <a className="btn btn-primary btn-large" href="#">Learn more</a>
                   </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}
