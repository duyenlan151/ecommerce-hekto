import mongoose from 'mongoose';
var username = encodeURIComponent('loanduyen151');
var password = encodeURIComponent('fCdrmQgppbLe1KCb');
const uriUrl = `mongodb+srv://${username}:${password}@nextjs.lye8oja.mongodb.net/?retryWrites=true&w=majority`;

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    // const uri = process.env.MONGODB_URI;
    const uri = uriUrl;
    return mongoose.connect(uri as string);
  }
}
