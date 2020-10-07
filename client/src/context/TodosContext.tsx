import React, { createContext, useReducer, Dispatch } from 'react';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

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

type TodosContextType = {
  todos: Todo[];
};

export const todosStore = createContext<TodosContextType | any>(initialState);
const { Provider } = todosStore;

interface Props {
  children?: JSX.Element[];
}

export const TodosProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (state: state, action: actions): state => {
      switch (action.type) {
        case 'add_new_todo':
          return {
            ...state,
            todos: [
              ...state.todos,
              {
                text: action.payload,
                isCompleted: false,
                id: state.todos.length - 1 + 1,
              },
            ],
          };
        case 'set_complete_todo':
          return {
            ...state,
            todos: state.todos.map((todo) => {
              if (todo.id === action.payload) {
                todo.isCompleted = !todo.isCompleted;
              }
              return todo;
            }),
          };
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
