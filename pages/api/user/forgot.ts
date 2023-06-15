import { mongooseConnect } from '@lib/mongoose';
import { sendEmail } from 'helpers/sendEmail';
import jwt from 'jsonwebtoken';
import User from 'models/Admin/user';
import absoluteUrl from 'next-absolute-url';

export default async (req, res) => {
  try {
    await mongooseConnect();
    if (req.method === 'POST') {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ message: 'Email not found!' });
      }

      const token = jwt.sign({ _id: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET || '', {
        expiresIn: 60 * 5,
      });
      // const token = jwt.sign({ _id: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET, {
      //   expiresIn: 10,
      // });

      user.resetToken = token;
      await user.save();

      const { origin } = absoluteUrl(req);
      const link = `${origin}/reset-password/${token}`;

      const message = `<div>Click on the link below to reset your password, if the link is not working then please paste into the browser.</div></br>
    <div>link:${link}</div>`;

      await sendEmail({
        identifier: user.email,
        subject: 'Password Reset',
        text: message,
        url: link,
      });

      return res.status(200).json({
        message: `Email sent to <a style="color: #2470bb; text-decoration: underline;" href="https://mail.google.com/mail/u/0/#inbox">${user.email}</a>
        , please check your email.`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
