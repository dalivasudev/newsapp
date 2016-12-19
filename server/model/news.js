var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  author : String,
  title : { type : String, required : true, unique : true },
  description : String,
  url : String,
  publishedAt : String,
  urlToImage : String,
  comments : String
});

var news = mongoose.model('news', newsSchema);

module.exports = news;
