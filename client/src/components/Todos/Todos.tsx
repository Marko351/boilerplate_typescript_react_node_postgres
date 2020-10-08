import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { ITodo, ITodos } from './ts/interfaces';
import { TodoItem } from './TodoItem';

interface TodosProps {
  todosReducer: ITodos;
}

const TodosComponent: React.FC<TodosProps> = ({ todosReducer }: TodosProps) => {
  return (
    <Fragment>
      {todosReducer.todos.map((todo: ITodo) => {
        return <TodoItem key={todo.id} text={todo.text} isCompleted={todo.isCompleted} id={todo.id} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  todosReducer: state.todosReducer,
});

export default connect(mapStateToProps, {})(TodosComponent);
