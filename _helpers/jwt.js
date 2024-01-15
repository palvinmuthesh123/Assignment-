const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../app/users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/',
            '/user/login',
            '/user/auths'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if (!user) {
        return done(null, true);
    }

    done();
};