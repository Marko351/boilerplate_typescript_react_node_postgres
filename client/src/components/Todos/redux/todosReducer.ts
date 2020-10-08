import { ITodo } from '../ts/interfaces';
import { TAllReduxTypes } from '../ts/types';
import { ADD_NEW_TODO, COMPLETE_TODO } from './reduxTypes';

export type TStateTodos = {
  todos: Array<ITodo>;
};

const initialState: TStateTodos = {
  todos: [
    {
      id: 0,
      text: 'First Todo',
      isCompleted: false,
    },
  ],
};

export const todosReducer = (state = initialState, action: TAllReduxTypes): TStateTodos => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => {
          if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;
          return todo;
        }),
      };
    default:
      return state;
  }
};
