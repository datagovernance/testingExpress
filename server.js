//server.js
// More information from:  http://brittneykernan.github.io/noderest-presentation/


var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs');

var mongoUri = 'mongodb://admin:O4lOuujG8vfahvEA@mymongodbcluster-shard-00-00-rwxcz.mongodb.net:27017,mymongodbcluster-shard-00-01-rwxcz.mongodb.net:27017,mymongodbcluster-shard-00-02-rwxcz.mongodb.net:27017/test?ssl=true&replicaSet=mymongodbcluster-shard-0&authSource=admin';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function() {
  throw new Error('Unable to connect to database at ' + mongoUri)
});

var app = express();
require('./routes')(app);

app.get('/', function(req, res) {
    res.send('Hello Seattle\n');
});

app.listen(3001);
console.log('Listening on port 3001...');
