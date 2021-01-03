import axios from 'axios'
import { History } from 'history'

import { IEvent } from '../../../types/Event'
import { AppThunk } from '../../../redux/reducers'
import { ADD_NEW_EVENT, CLEAR_ALL_EVENTS_DATA, GET_ALL_EVENTS, GET_EVENT } from './eventTypes'

export const addNewEvent = (data: IEvent, history: History): AppThunk<void> => async (dispatch, getState) => {
  try {
    const comments = getState().commentsReducer.comments
    const response = await axios.post<IEvent>(`/events`, { comments, ...data })
    history.push(`/events/${response.data.id}`)
    dispatch({ type: ADD_NEW_EVENT, payload: response.data })
  } catch (err) {
    console.log(err)
  }
}

export const clearAllEventData = () => ({
  type: CLEAR_ALL_EVENTS_DATA,
})

export const getEvent = (id: number): AppThunk<void> => async (dispatch) => {
  const response = await axios.get(`/events/${id}`)
  dispatch({ type: GET_EVENT, payload: response.data })
}

export const getAllEvents = (options: any): AppThunk<void> => async (dispatch) => {
  const response = await axios.get('/events', { params: options, withCredentials: true })
  dispatch({ type: GET_ALL_EVENTS, payload: response.data })
}

interface data {
  name: string
  startDate: string
  endDate: string
  description: string
  location: string
  id: number
}

export const updateEvent = (data: data): AppThunk<void> => async (dispatch) => {
  const { id, ...rest } = data
  const response = await axios.patch(`/events/${id}`, rest)
  dispatch({
    type: GET_EVENT,
    payload: response.data,
  })
}

export const deleteEvent = (id: number, history: History): AppThunk<void> => async () => {
  await axios.delete(`/events/${id}`)
  history.push('/events')
}
