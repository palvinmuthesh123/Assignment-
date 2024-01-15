const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const authorizes = require('_helpers/authorize')
const Role = require('_helpers/role');

router.post('/login', authenticate);
router.post('/auths', authorize);
router.get('/', authorizes(Role.Admin), getAll);
router.get('/:id', authorizes(), getById);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'No Cred' }))
        .catch(err => next(err));
}

function authorize(req, res, next) {
    userService.authorize(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'No Cred' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}