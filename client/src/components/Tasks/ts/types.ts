import { ADD_NEW_TASK, COMPLETE_TASK } from '../redux/reduxTypes';
import { ITask } from './interfaces';

export interface TAddNewTask {
  type: typeof ADD_NEW_TASK;
  payload: ITask;
}

export interface TCompleteTask {
  type: typeof COMPLETE_TASK;
  payload: number;
}
// export interface TSetCompletedTask {
//   type: string;
//   payload: number;
// }

export type TAllReduxTypes = TAddNewTask | TCompleteTask;
