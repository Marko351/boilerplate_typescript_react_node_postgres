import axios from 'axios'

import { ITask } from '../../../types/Task'
import { AppThunk } from '../../../redux/reducers'
import { ADD_NEW_TASK, COMPLETE_TASK, GET_ALL_TASKS } from './reduxTypes'

export const addNewTask = (data: ITask): AppThunk<void> => async (dispatch) => {
  try {
    const response = await axios.post<ITask>(`/tasks`, data, { withCredentials: true })
    dispatch({ type: ADD_NEW_TASK, payload: response.data })
  } catch (err) {
    console.log(err)
  }
}

export const getAllTasks = (options: any): AppThunk<void> => async (dispatch) => {
  const response = await axios.get('/tasks', { params: options })
  dispatch({ type: GET_ALL_TASKS, payload: response.data })
}

export const toggleComplete = (id: number): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: COMPLETE_TASK, payload: id })
  } catch (err) {
    console.log(err)
  }
}
