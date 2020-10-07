import { combineReducers } from 'redux';
import { todosReducer } from '../components/Todos/redux/todosReducer';

const rootReducer = combineReducers({
  todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
