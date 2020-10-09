import React, { createContext, useReducer, Dispatch } from 'react';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

type state = {
  tasks: Array<Task>;
};

type actions = { type: 'add_new_task'; payload: string } | { type: 'set_complete_task'; payload: number };

const initialState = {
  tasks: [
    {
      id: 0,
      text: 'First Task',
      isCompleted: false,
    },
    {
      id: 1,
      text: 'Second Task',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Third Task',
      isCompleted: false,
    },
    {
      id: 3,
      text:
        'Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task Fourth Task',
      isCompleted: false,
    },
  ],
};

type TasksContextType = {
  tasks: Task[];
};

export const tasksStore = createContext<TasksContextType | any>(initialState);
const { Provider } = tasksStore;

interface Props {
  children?: JSX.Element[];
}

export const TasksProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer((state: state, action: actions): state => {
    switch (action.type) {
      case 'add_new_task':
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              text: action.payload,
              isCompleted: false,
              id: state.tasks.length - 1 + 1,
            },
          ],
        };
      case 'set_complete_task':
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          }),
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
