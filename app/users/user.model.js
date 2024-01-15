const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, default: 'User' },
    createdDate: { type: Date, default: Date.now },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);