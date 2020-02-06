'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var answerSchema = new _mongoose2.default.Schema({
    text: {
        type: String,
        unique: true
    },
    answered_by: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
    question: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'question' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

var Answer = _mongoose2.default.model('answer', answerSchema);
exports.default = Answer;