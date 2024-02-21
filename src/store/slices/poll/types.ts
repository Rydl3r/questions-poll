export type IUserData = Record<string, string>;

export interface IUserDataItem {
  dataKey: string;
  dataValue: string;
}

export interface IState {
  userData: IUserData;
}
