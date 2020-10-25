import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { tasksReducer } from '../components/Tasks/redux/tasksReducer';
import { eventReducer } from '../components/Events/redux/eventReducer';
import { commentsReducer } from '../components/Comments/redux/commentReducer';

const rootReducer = combineReducers({
  tasksReducer,
  eventReducer,
  commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default rootReducer;
