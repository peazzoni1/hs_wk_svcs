
var express    = require('express');
var app        = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
       res.sendfile(__dirname + '/index.php');
   });

//start server
app.listen(port);
console.log('The party started at ' + port);
