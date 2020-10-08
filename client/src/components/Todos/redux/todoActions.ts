import { ITodo } from '../ts/interfaces';
import { AppThunk } from '../../../redux/reducers';

export const addNewTodo = (data: ITodo): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: 'add_new_todo', payload: data });
  } catch (err) {
    console.log(err);
  }
};
