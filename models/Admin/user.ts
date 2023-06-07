import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    status: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
