import { ITodo, ITodos } from '../ts/interfaces';
import { TAllReduxTypes } from '../ts/types';

type state = {
  todos: Array<ITodo>;
};

const initialState = {
  todos: [
    {
      id: 0,
      text: 'First Todo',
      isCompleted: false,
    },
    {
      id: 1,
      text: 'Second Todo',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Third Todo',
      isCompleted: false,
    },
    {
      id: 3,
      text:
        'Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo Fourth Todo',
      isCompleted: false,
    },
  ],
};

export const todosReducer = (state: state = initialState, action: TAllReduxTypes): ITodos => {
  switch (action.type) {
    default:
      return state;
  }
};
