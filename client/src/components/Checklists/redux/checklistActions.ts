import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { AppThunk } from '../../../redux/reducers'
import { IChecklist } from '../../../types/Checklist'
import {
  GET_CHECKLISTS,
  CHANGE_CHECKLIST_DATA,
  ADD_CHECKLIST,
  DELETE_CHECKLIST,
  CLEAR_CHECKLISTS,
  ON_UPDATE,
} from './checklistTypes'

export const getChecklists = (taskId: number): AppThunk<void> => async (dispatch) => {
  const response = await axios.get(`/checklists`, { params: { taskId } })
  dispatch({
    type: GET_CHECKLISTS,
    payload: response.data,
  })
}

export const changeChecklistData = (name: keyof IChecklist, value: any, id: number | string): AppThunk<void> => async (
  dispatch,
  getState,
) => {
  const checklists = getState().checklistReducer.checklists
  const newChecklists = []
  for (let i = 0; i < checklists.length; i++) {
    const checklist = checklists[i]
    if (checklist.id == id || checklist.uuid == id) {
      if (name === 'description') {
        checklist['description'] = value
      }
      if (name === 'isDone') {
        checklist['isDone'] = value
      }
      console.log(typeof id)
      if (typeof id == 'number') {
        await axios.patch(`/checklists/${id}`, checklist)
      }
      newChecklists.push(checklist)
    } else {
      newChecklists.push(checklist)
    }
  }
  dispatch({
    type: CHANGE_CHECKLIST_DATA,
    payload: newChecklists,
  })
}

export const onUpdateClick = (id: number | string): AppThunk<void> => async (dispatch, getState) => {
  const checklists = getState().checklistReducer.checklists
  let data
  if (typeof id === 'string') {
    data = checklists.filter((checklist) => checklist.uuid === id)
  } else {
    data = checklists.filter((checklist) => checklist.id === id)
  }
  dispatch({
    type: ON_UPDATE,
    payload: data[0],
  })
}

export const addNewChecklist = (): AppThunk<void> => async (dispatch, getState) => {
  const checklist = getState().checklistReducer.checklist
  const { id } = getState().tasksReducer.task
  if (id) {
    const data = {
      taskId: id,
      description: checklist.description,
      isDone: checklist.isDone,
    }
    const response = await axios.post('/checklists', data)
    const checklistData = {
      id: response.data.id,
      description: '',
      isDone: false,
    }
    dispatch({
      type: ADD_CHECKLIST,
      payload: checklistData,
    })
  } else {
    const checklistData = {
      isDone: false,
      description: '',
      uuid: uuidv4(),
    }
    dispatch({
      type: ADD_CHECKLIST,
      payload: checklistData,
    })
  }
}

export const onDeleteChecklist = (id: number | string): AppThunk<void> => async (dispatch, getState) => {
  const checklists = getState().checklistReducer.checklists
  let newChecklist = [...checklists]
  if (typeof id === 'string') {
    newChecklist = checklists.filter((checklist) => checklist.uuid !== id)
  } else if (typeof id === 'number') {
    newChecklist = checklists.filter((checklist) => checklist.id !== id)
    await axios.delete(`/checklists/${id}`)
  }
  dispatch({
    type: DELETE_CHECKLIST,
    payload: newChecklist,
  })
}

export const clearChecklist = () => ({
  type: CLEAR_CHECKLISTS,
})
