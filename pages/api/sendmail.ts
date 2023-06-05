import { sendEmail } from 'helpers/sendEmail';
import absoluteUrl from 'next-absolute-url';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: 'Bad request' });
    }

    try {
      const { name, email, subject, message } = req.body;
      const { origin } = absoluteUrl(req);
      const link = `${origin}/contact-us`;

      await sendEmail({
        fromEmail: email,
        identifier: process.env.NEXT_PUBLIC_EMAIL,
        subject,
        text: `From ${name} - ${email}, ${message}`,
        url: link,
      });

      return res.status(200).json({
        message: `Email sent to us, Thank you.`,
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};
export default handler;
