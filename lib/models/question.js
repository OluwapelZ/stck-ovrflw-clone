'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionSchema = new _mongoose2.default.Schema({
    title: {
        type: String,
        unique: true
    },
    question: {
        type: String,
        unique: true
    },
    user: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

var Question = _mongoose2.default.model('question', questionSchema);
exports.default = Question;