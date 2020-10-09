import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { tasksReducer } from '../components/Tasks/redux/tasksReducer';

const rootReducer = combineReducers({
  tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default rootReducer;
