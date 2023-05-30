import multer from 'multer';
import path from 'path';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import nc, { NextConnect } from 'next-connect';
import { Image } from 'models/Admin';
import { mongooseConnect } from '@lib/mongoose';

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({
  storage: storage,
});

const handler = nc<NextApiRequest, NextApiResponse>();
let uploadFile = upload.single('file');

handler.use(uploadFile);
handler.post(async (req, res) => {
  await mongooseConnect();
  // @ts-ignore
  const { originalname, mimetype, path } = req?.file;
  const imageDoc = await Image.create({
    name: originalname,
    type: mimetype,
    path: path.split('/').slice(1).join('/'),
  });
  res.status(200).json([imageDoc]);
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
