import { QuestionTypes } from '@/const';
import { IUserData } from './IUserData';

export interface IQuestion {
  // id of the question
  id: number;
  // title of the question
  title: string;
  // description of the question
  description?: string;
  // type of question, for now it can be 'question' or 'info'
  type: QuestionTypes;
  // dataKey is the key of the user data to be updated
  dataKey?: keyof IUserData;
  // options of the question
  options: IQuestionOption[];
}

export interface IQuestionOption {
  // title of the option
  title: string;
  // value of the option, after selecting the option,
  // this value will be assigned to the user data, using the dataKey of the question
  dataValue?: IUserData[keyof IUserData];
  // dynamically get the next question id based on the user answers data (if needed)
  // for now it can only do calculations based of the user answers data, but can be extended with any data in the future
  getNextQuestionId?(userData: IUserData): number;
}
