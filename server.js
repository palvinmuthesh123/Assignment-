require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const server = require("http").createServer(app);

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

app.use(jwt());

app.use((req, res, next) => {
    console.log(req.path, " <---> ", req.body);
    next();
});

app.use('/user', require('./app/users/users.controller'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});
