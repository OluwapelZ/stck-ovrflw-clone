import mongoose from '../database';
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  display_name: {
    type: String,
    unique: false,
  },
  password: {
    type: String,
    unique: true,
  },
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
const User = mongoose.model('user', userSchema);
export default User;