'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var voteSchema = new _mongoose2.default.Schema({
    user: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
    question: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'question' },
    vote_type: {
        type: String,
        enum: ['upvote, downvote'],
        default: null
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

var Vote = _mongoose2.default.model('vote', voteSchema);
exports.default = Vote;