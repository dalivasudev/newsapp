var express = require('express');
var router = express.Router();
var passport=require('passport');
var Strategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');
var User = require('../model/users.js');

// localhost:8080/users?id=dali&pass=dali

router.post('/save',function(req,res)
{

var newusers=new User();
 newusers.username=req.body.username;
 newusers.password=req.body.password;

newusers.save(function(err){
  if(err) res.send("error :  "+err);
  res.send("inserted");
});

});

router.post('/login',
 passport.authenticate('local', { failureRedirect: '/users/login' }),
 function(req, res) {
   console.log('Hello');
   res.send('welcome to login');
 });




module.exports = router;
