import mongoose from '../database';

const answerSchema = mongoose.Schema({
    text: {
        type: String,
        unique: true
    },
    answered_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'question'}
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Answer = mongoose.model('answer', answerSchema);
export default Answer;