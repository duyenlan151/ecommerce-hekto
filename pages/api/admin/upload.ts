// import multer from 'multer';
// import path from 'path';
// import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
// import nc, { NextConnect } from 'next-connect';
// import { Image } from 'models/Admin';
// import { mongooseConnect } from '@lib/mongoose';

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

// let upload = multer({
//   storage: storage,
// });

// const handler = nc<NextApiRequest, NextApiResponse>();
// let uploadFile = upload.single('file');

// handler.use(uploadFile);
// handler.post(async (req, res) => {
//   await mongooseConnect();
//   // @ts-ignore
//   const { originalname, mimetype, path } = req?.file;
//   const imageDoc = await Image.create({
//     name: originalname,
//     type: mimetype,
//     path: path.split('/').slice(1).join('/'),
//   });
//   res.status(200).json([imageDoc]);
// });

// export default handler;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

import { mongooseConnect } from '@lib/mongoose';
import cloudinary from '@utils/cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import { Image } from 'models/Admin';

import nc from 'next-connect';
import multer from 'multer';
import path from 'path';
import DatauriParser from 'datauri/parser';
const handler = nc<NextApiRequest, NextApiResponse>();
handler.use(multer().array('file', 5));
handler.post(async (req, res) => {
  try {
    await mongooseConnect();

    const imagesDoc = [];
    // @ts-ignorex
    const files = req.files;

    if (!files) return res.status(400).json({ message: 'No picture attached!' });

    const uploader = async (image) => {
      // await cloudinary.v2.uploader.upload(path);
      const parser = new DatauriParser();

      const base64Image = await parser.format(
        path.extname(image.originalname).toString(),
        image.buffer
      );
      // @ts-ignorex
      const uploadedImageResponse = await cloudinary.uploader.upload(
        base64Image.content,
        'flashcards',
        { resource_type: 'image' }
      );

      const url = uploadedImageResponse.url;
      const imageDoc = await Image.create({
        name: image.originalname,
        type: image.mimetype,
        path: url,
      });
      return imageDoc;
    };

    for (const file of files) {
      const newPath = await uploader(file);
      // @ts-ignorex
      imagesDoc.push(newPath);
    }
    res.status(200).json([...imagesDoc]);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// disable body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
