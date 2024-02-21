import { IUserData } from '@/models/IUserData';

export interface IUserDataItem {
  dataKey: keyof IUserData;
  dataValue: IUserData[keyof IUserData];
}

export interface IState {
  userData: Partial<IUserData>;
}
