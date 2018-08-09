let config = require('./config');
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let routes = require('./routes/routes');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


mongoose.connect(config.db.uri).then(
    () => { console.log("successfully Connected to DB"); }
);

app.use( '/api' , routes )

app.listen(config.port);

module.exports = app;


