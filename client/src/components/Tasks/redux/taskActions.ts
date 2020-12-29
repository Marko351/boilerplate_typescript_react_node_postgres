import axios from 'axios'
import { History } from 'history'

import { IChecklist, ITask } from '../../../types/Task'
import { AppThunk } from '../../../redux/reducers'
import { ADD_NEW_TASK, COMPLETE_TASK, GET_ALL_TASKS, GET_TASK, CLEAR_ALL_DATA } from './reduxTypes'

export const addNewTask = (data: ITask, checklist: IChecklist[], history: History): AppThunk<void> => async (
  dispatch,
  getState,
) => {
  try {
    const comments = getState().commentsReducer.comments
    const response = await axios.post<ITask>(`/tasks`, { comments, checklist, ...data }, { withCredentials: true })
    history.push(`/tasks/${response.data.id}`)
    dispatch({ type: ADD_NEW_TASK, payload: response.data })
  } catch (err) {
    console.log(err)
  }
}

export const clearAllTaskData = () => ({
  type: CLEAR_ALL_DATA,
})

export const getTask = (id: number): AppThunk<void> => async (dispatch) => {
  const response = await axios.get(`/tasks/${id}`)
  dispatch({ type: GET_TASK, payload: response.data })
}

export const getAllTasks = (options: any): AppThunk<void> => async (dispatch) => {
  const response = await axios.get('/tasks', { params: options, withCredentials: true })
  dispatch({ type: GET_ALL_TASKS, payload: response.data })
}

export const toggleComplete = (id: number): AppThunk<void> => (dispatch) => {
  try {
    dispatch({ type: COMPLETE_TASK, payload: id })
  } catch (err) {
    console.log(err)
  }
}
