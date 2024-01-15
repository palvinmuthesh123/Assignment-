const config = require('config.json'); //local
// const config = require('config-prod.json'); //prod
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../app/users/user.model'),
};