import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { todosReducer } from '../components/Todos/redux/todosReducer';

const rootReducer = combineReducers({
  todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default rootReducer;
