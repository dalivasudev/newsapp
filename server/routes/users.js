var express = require('express');
var router = express.Router();
//var User = require('./model/users');

// localhost:8080/users?id=dali&pass=dali

router.post('/', function(req, res) {


    id = req.query.id;
    pass =  req.query.pass;
  
// loginUser.save(function(err){
//     if(err) throw err;
//     res.send('User saved successfully');
//   });
});

module.exports = router;
