import { IUserData } from './IUserData';

export interface IQuestion {
  id: number;
  title: string;
  description?: string;
  type: IQuestionType;
  dataKey?: keyof IUserData;
  options: IQuestionOption[];
}

export type IQuestionType = 'question' | 'info';

export interface IQuestionOption {
  title: string;
  dataValue?: IUserData[keyof IUserData];
  getNextQuestionId?(userData: IUserData): number;
}
