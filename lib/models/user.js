'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  display_name: {
    type: String,
    unique: false
  },
  password: {
    type: String,
    unique: true
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
var User = _mongoose2.default.model('user', userSchema);
exports.default = User;