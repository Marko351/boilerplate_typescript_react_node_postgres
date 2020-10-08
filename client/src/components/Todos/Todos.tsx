import React, { Fragment, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { ITodo } from './ts/interfaces';
import { TodoItem } from './TodoItem';
import { addNewTodo, toggleComplete } from './redux/todoActions';

const mapStateToProps = (state: RootState) => ({
  todosReducer: state.todosReducer,
});

const connector = connect(mapStateToProps, { addNewTodo, toggleComplete });

type PropsFromRedux = ConnectedProps<typeof connector>;

type TodosProps = PropsFromRedux;

const TodosComponent: React.FC<TodosProps> = ({ todosReducer, addNewTodo, toggleComplete }: TodosProps) => {
  const [todo] = useState({
    id: Math.floor(Math.random() * 100),
    text: '',
    isCompleted: false,
  });

  const onToggleComplete = (id: number) => {
    toggleComplete(id);
  };

  const onAddNewTodo = () => {
    addNewTodo(todo);
  };

  return (
    <Fragment>
      {todosReducer.todos.map((todo: ITodo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            id={todo.id}
            onToggleComplete={onToggleComplete}
          />
        );
      })}
      <button onClick={onAddNewTodo}>Add new todo</button>
    </Fragment>
  );
};

export default connector(TodosComponent);
