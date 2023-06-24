import NextAuth, { Account, DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken?: Account.accessToken;

    user: {
      _id: string;
      isAdmin: boolean;
    };
  }

  interface User {
    _id: string;
    isAdmin: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: Account.accessToken;
    _id: string;
    isAdmin: boolean;
  }
}
