var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var categoryRoutes = require('./api/routes/categoryRoutes');
categoryRoutes(app);

app.listen(port);
console.log('Message RESTful API server started on: ' + port);