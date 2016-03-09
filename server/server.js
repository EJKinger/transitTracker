var express = require('express');
var http = require('http');
var MartaApiKey = require('./config.js');

var app = express();
var port = 1337;

var martaRouter = express.Router();

martaRouter.route('/').get(function(request, response){
  http.get('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=' + MartaApiKey,
  function(res){
    var data = '';
    res.on('data', function(chunk){
      data += chunk;
    })
    res.on('end', function(){
      response.send(data);  
    })
  })
});
  
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
}  
  
  
app.use(allowCrossDomain);
app.use('/marta', martaRouter)

app.listen(port, function(err){
  console.log('running server on port ' + port);
});
