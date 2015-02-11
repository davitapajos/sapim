var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/users/login', function (req, res) {
  console.log("\n\n >>>>>>>>>>>>>>> POST");
  console.log(req.body);

  if(req.body.data.email == "123" && req.body.data.password == "123") {
    res.status(200).send({
      "data": {
        "access_token": "1234567890",
        "name": "John Doe",
        "session": "0987654321"
      }
    });
  } else {
    res.status(200).send({
      "data": {
        "access_token": "",
        "name": "",
        "session": ""
      }
    });
  }
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Listening at http://%s:%s', host, port)

})