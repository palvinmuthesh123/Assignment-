const jwt = require('express-jwt');
const { secret } = require('config.json');
const userService = require('../app/users/user.service');

module.exports = authorize;

function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        jwt({ secret, algorithms: ['HS256'] }),
        async (req, res, next) => {
            const user = await userService.getById(req.user.sub);
            console.log(user.user.role, roles, "RRRRRRRRRR")
            if (roles.length && !roles.includes(user.user.role)) {
                return res.status(401).json({ message: 'Not an Admin' });
            }
            next();
        }
    ];
}