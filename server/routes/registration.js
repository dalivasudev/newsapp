var exp = require('express');
var router = exp.Router();
var User = require('../model/users');

// localhost:8080/regis?fname=dali&lname=dali&age=22&email=dali&pass=pass

// localhost:8085/regis
// {
// 	"fname" : "dali",
// 	"lname" : "vasudev",
// 	"age" : 22,
// 	"email" : "dali@gmail.com",
// 	"password" : "dali"
// }

router.post('/regis',function(req,res,next) {

  var regisUser = new User({
    username : req.body.username,
    email : req.body.email,
    age : req.body.age,
    password : req.body.password
  });
  regisUser.save(function(err){
    if(err) {
      console.log(err);
      res.send('Username already exists');
    }
    else {
      res.send('User saved successfully');}
  });
});
module.exports = router;
