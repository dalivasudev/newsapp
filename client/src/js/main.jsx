import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Home from './components/MainComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import favNews from './components/favNews.jsx';
import login from './components/login.jsx';

class MainComponent extends React.Component{



render(){

return (
<div id="main">
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
             <Route path="/" component={MainComponent} >
              <IndexRoute component = {login} />
              <Route path="/favNews" component={favNews} />
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Route>

</Router>,document.getElementById('content'));
