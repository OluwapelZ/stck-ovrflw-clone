import mongoose from '../database';

const voteSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'question'},
    vote_type: {
        type: String,
        enum: ['upvote, downvote'],
        default: null
    }
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Vote = mongoose.model('vote', voteSchema);
export default Vote;