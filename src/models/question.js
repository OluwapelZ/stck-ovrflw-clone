import mongoose from '../database';

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    question: {
        type: String,
        unique: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Question = mongoose.model('question', questionSchema)
export default Question;