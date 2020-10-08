import { ITodo } from '../ts/interfaces';
import { AppThunk } from '../../../redux/reducers';
import { ADD_NEW_TODO, COMPLETE_TODO } from './reduxTypes';

export const addNewTodo = (data: ITodo): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: ADD_NEW_TODO, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const toggleComplete = (id: number): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: COMPLETE_TODO, payload: id });
  } catch (err) {
    console.log(err);
  }
};
