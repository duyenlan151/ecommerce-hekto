import { DataResCommonModel } from './common';

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  status: string;
  createdAt: string;
  accessToken?: string;
}

export interface DataUsersModel extends DataResCommonModel<UserModel> {
  data: UserModel[];
}
