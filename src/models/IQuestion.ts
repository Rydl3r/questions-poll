import { IUserData } from '@/store/slices/poll/types';

export interface IQuestion {
  id: number;
  title: string;
  description?: string;
  type: IQuestionType;
  dataKey?: string;
  options: IQuestionOption[];
}

export type IQuestionType = 'question' | 'info';

export interface IQuestionOption {
  title: string;
  dataValue?: string;
  getNextQuestionId?(userData: IUserData): number;
}
