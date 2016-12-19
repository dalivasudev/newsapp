var exp = require('express');
var app = exp.Router();
var news = require('../model/news')
//localhost:8080/news


var obj = {
  "author": "BBC News",
  "title": "Football abuse inquiry: 83 potential suspects identified",
  "description": "There are now 83 potential suspects and 98 clubs involved in the inquiry into child abuse in football, police chiefs say.",
  "url": "http://www.bbc.co.uk/news/uk-38260878",
  "urlToImage": "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/7F58/production/_92900623_thinkstockphotos-126460058.jpg",
  "publishedAt": "2016-12-09T10:20:14Z"
};
//save
app.post('/',function(req,res) {

  var saveNews = new news({
    title :req.body.title,
    Author : req.body.author,
    url : req.body.url,
    description : req.body.description,
    publishedAt : req.body.publishedAt,
    urlToImage : req.body.urlToImage,
    comments : "Comments"
  });

  saveNews.save(function(err){
    if(err) throw err;
    res.send('News saved!!!');
  });
});

//delete
app.delete('/',function(req,res) {
  news.remove( {
    url : req.body.url
  }, function(err){
    if (err) throw err;
    res.send('Deleted'+req.body.url);
  });
});

//view
app.get('/',function(req,res) {
  // res.send('view saved');
  news.find({},function(err, findNews){
    if (err) throw err;
    res.send(findNews);
  });
});

//update
app.put('/update',function(req,res) {
  news.findOneAndUpdate({title: req.body.url},{comments: req.body.comments}, function(err,newsFind){
    console.log(req.body.url, req.body.comments);
    if(err) throw error;
    res.send(newsFind);
  });

  /*
  news.find( { title : req.body.title },function(err,findNews){
      if (err) throw err;
      console.log(findNews);

      findNews.description = req.body.description;
      console.log(findNews);
        findNews.save(function(err){
          if(err) throw error;
          res.send("updated"+findNews);
        })
      });*/
    });

module.exports = app;
