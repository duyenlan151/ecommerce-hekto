import { DataResCommonModel } from './common';

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  status: string;
  createdAt: string;
}

export interface DataUsersModel extends DataResCommonModel {
  data: UserModel[];
}
