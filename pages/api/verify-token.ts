import jwt from 'jsonwebtoken';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { token } = req.body;

      if (token) {
        const decoded = await jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        req.user = decoded;
        res.json({ decoded });
      }
      res.json({ token });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Tonken invalid' });
  }
};
