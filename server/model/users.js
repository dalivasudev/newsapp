var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost:27017/userdb');

var userSchema = new Schema({
  username : { type : String, required : true, unique : true },
  email : String,
  age : Number,
  password : String,
});

var User = mongoose.model('User',userSchema);

module.exports = User;
