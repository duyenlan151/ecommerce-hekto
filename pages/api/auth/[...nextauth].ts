import clientPromise from '@lib/mongodb';
import { mongooseConnect } from '@lib/mongoose';
import User from '@models/Admin/user';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const {
  NEXT_PUBLIC_SECRET = '',
  NEXT_PUBLIC_GOOGLE_ID = '',
  NEXT_PUBLIC_GOOGLE_SECRET = '',
} = process.env;

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: NEXT_PUBLIC_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;

      return token;
    },
    async session({ session, token }) {
      if (token?._id) {
        session.user._id = token._id;
        const accessToken = jwt.sign(
          { _id: token?._id, isAdmin: token?.isAdmin },
          process.env.NEXT_PUBLIC_JWT_SECRET || '',
          {
            expiresIn: 10,
          }
        );
        session.accessToken = accessToken;
      }
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;

      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials) {
        await mongooseConnect();
        const user = await User.findOne({
          email: credentials?.email,
        });
        if (user.status !== 'active') {
          throw new Error('Your account has been locked, Please contact Admin!');
        }
        if (user && bcryptjs.compareSync(credentials?.password, user.password)) {
          // const user = {};

          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: '',
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
});
