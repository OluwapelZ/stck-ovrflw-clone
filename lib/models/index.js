'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectDb = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _question = require('./question');

var _question2 = _interopRequireDefault(_question);

var _answer = require('./answer');

var _answer2 = _interopRequireDefault(_answer);

var _vote = require('./vote');

var _vote2 = _interopRequireDefault(_vote);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectDb = function connectDb() {
    return _mongoose2.default.connect(_config2.default.database.host);
};

var models = { User: _user2.default, Question: _question2.default, Answer: _answer2.default, Vote: _vote2.default };
exports.connectDb = connectDb;
exports.default = models;