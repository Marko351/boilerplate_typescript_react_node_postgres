import { ADD_NEW_TODO, COMPLETE_TODO } from '../redux/reduxTypes';
import { ITodo } from './interfaces';

export interface TAddNewTodo {
  type: typeof ADD_NEW_TODO;
  payload: ITodo;
}

export interface TCompleteTodo {
  type: typeof COMPLETE_TODO;
  payload: number;
}
// export interface TSetCompletedTodo {
//   type: string;
//   payload: number;
// }

export type TAllReduxTypes = TAddNewTodo | TCompleteTodo;
