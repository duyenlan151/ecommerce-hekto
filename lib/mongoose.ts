import mongoose from 'mongoose';
var username = encodeURIComponent('admin');
var password = encodeURIComponent('Duyenlan1501');
const uriUrl = `mongodb+srv://${username}:${password}@cluster0.06plb.mongodb.net/?retryWrites=true&w=majority`;

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    // const uri = process.env.MONGODB_URI;
    const uri = uriUrl;
    return mongoose.connect(uri as string);
  }
}
