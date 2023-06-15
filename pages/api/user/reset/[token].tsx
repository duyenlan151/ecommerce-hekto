import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from 'models/Admin/user';
import { mongooseConnect } from '@lib/mongoose';

export default async (req, res) => {
  try {
    if (req.method === 'PUT') {
      await mongooseConnect();
      const { token } = req.query;
      const { password, confirm_password } = req.body;

      if (password !== confirm_password) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
      if (password.length < 6) {
        return res.status(400).json({ error: 'Password needs to be at least 6 characters' });
      }

      if (token) {
        const decoded = await jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET || '');
        req.user = decoded;
      }

      const user = await User.findById(req.user._id);

      if (user) {
        user.password = await bcryptjs.hash(password, 12);

        user.resetToken = undefined;
        await user.save();

        return res.status(200).json({ message: 'success in updating user' });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: 'Something error. Please try again later' });
  }
};
