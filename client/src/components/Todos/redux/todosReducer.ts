import { Todo, Todos } from '../interfaces';

type state = {
  todos: Array<Todo>;
};

type actions =
  | { type: 'add_new_todo'; payload: string }
  | { type: 'set_complete_todo'; payload: number };

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

export const todosReducer = (
  state: state = initialState,
  action: actions
): Todos => {
  switch (action.type) {
    default:
      return state;
  }
};
