const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const speakeasys = require('speakeasy');
const db = require('_helpers/db');
const User = db.User;
const { sendMessages } = require('../utilities')

module.exports = {
    authenticate,
    authorize,
    getAll,
    getById
};

async function authenticate(usero) {
    var secret = speakeasys.generateSecret({ length: 6 });
    var token = speakeasys.totp({
        secret: secret.base32,
        encoding: 'base32'
    });
    sendMessages(usero.email, token);
    var sends = { secret: secret }
    return { success: true, sends, message: "Email has been sent" }
}

async function authorize(cont) {
    var tokenValidates = speakeasys.totp.verify({
        secret: cont.secret.base32,
        encoding: 'base32',
        token: cont.token,
        window: 6
    });

    var userParam = {
        email: cont.email,
        password: cont.password,
        first_name: cont.first_name,
        last_name: cont.last_name,
        phone: cont.phone,
        gender: cont.gender,
    }

    if (tokenValidates) {
        if (await User.findOne({ email: userParam.email })) {
            throw 'Email "' + userParam.email + '" is already taken';
        }
        const user = new User(userParam);
        if (userParam.password)
            user.hash = bcrypt.hashSync(userParam.password, 10);
        const users = await user.save();
        if (users && bcrypt.compareSync(userParam.password, users.hash)) {
            const { hash, ...userWithoutHash } = users.toObject();
            const token = jwt.sign({ sub: users.id }, config.secret);
            return {
                ...userWithoutHash,
                token, success: true, message: "User sign up successfull"
            };
        }
    }
    else {
        return { success: true, message: "Token Expired !!!" }
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    const user = await User.findById(id).select('-hash').lean();
    if (!user)
        return { error: true, message: "User not found" };
    else
        return { success: true, user: user };
}

