import React from 'react';

export default class login extends React.Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  submit(){
  console.log('register clicked');
  console.log('username='+this.refs.username.value+'&email='+this.refs.email.value+'&age='+this.refs.age.value+'&password='+this.refs.password.value);
  var that = this;
  $.ajax({
  url: "http://localhost:8085/regis",
  type: "POST",
  data: 'username='+this.refs.username.value+'&email='+this.refs.email.value+'&age='+this.refs.age.value+'&password='+this.refs.password.value,
  success : function(msg){
  /*msg represents JSON data of news headlines sent back by external API*/
   console.log('user registered');
   console.log(msg);
  },
  error: function(err){
    console.log('error in registration '+err);
  }
  });
  }

  render(){
    return(
      <div className = "row">
        <div className = "col-lg-3 pull-right">
        <h1>Sign in</h1>
        <label> Username </label>
        <input type = "text" className = "form-control input-sm" placeholder = "username" id = "usernameText"/>
        <br />
        <label> Password </label>
        <input type = "password" className = "form-control input-sm" placeholder = "password" id = "passwordText"/>
        <br/>
        <input type ="submit" className = "btn btn-default btn-primary" value = "Login " />
        <br/><br/>
        <a href = "#registerModal" type = "button" data-toggle="modal" >Not Registered ? Click here to register... </a>
							<section className = "modal fade" id="registerModal">
								<article className = "modal-dialog">
									<section className = "modal-content">
										<article className = "modal-header">
											<h4 className = "modal-title">Registration</h4>
											<button className = "close" data-dismiss = "modal" type = "button">&times;</button>
										</article>

                    <article className = "modal-body">
                      <article className = "form-horizontal">
                          <article className = "form-group">
                            <article className = "col-sm-12 row">
                              <label className = "col-sm-4">Username </label>
                              <input type = "text" placeholder = "username" className = "col-sm-4 form-control" ref = "username"/>
                            </article>
                            <br/>
                            <article className = "col-sm-12 row">
                              <label className = "col-sm-4">Email </label>
                              <input type = "text" placeholder = "email" className = "col-sm-4 form-control" ref = "email"/>
                            </article>
                            <br/>
                            <article className = "col-sm-12 row">

                            <label className = "col-sm-4">Age </label>
                              <input type = "text" placeholder = "age" className = "col-sm-4 form-control" ref = "age"/>
                            </article>
                            <br/>
                            <article className = "col-sm-12 row">
                              <label className = "col-lg-4">Password </label>
                              <input type = "password" placeholder = "password" className = "col-lg-4 form-control" ref = "password"/>
                            </article>
                          </article>
                      </article>
                    </article>

                    <article className="modal-footer">
                      <input type = "submit" className = "btn btn-primary" value ="Register" onClick = {this.submit}/>
                    </article>
									</section>
								</article>
							</section>
        </div>
      </div>
    )
  }
}
