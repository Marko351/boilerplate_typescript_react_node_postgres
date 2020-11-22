import { ITask } from '../../../types/Task'
import { AppThunk } from '../../../redux/reducers'
import { ADD_NEW_TASK, COMPLETE_TASK } from './reduxTypes'

export const addNewTask = (data: ITask): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: ADD_NEW_TASK, payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const toggleComplete = (id: number): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: COMPLETE_TASK, payload: id })
  } catch (err) {
    console.log(err)
  }
}
