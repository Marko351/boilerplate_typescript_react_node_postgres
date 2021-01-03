import { IEvent, TAllReduxEventTypes } from '../../../types/Event'
import { ITableOptions } from '../../../types/Table'
import { GET_EVENT, ADD_NEW_EVENT, GET_ALL_EVENTS, CLEAR_ALL_EVENTS_DATA } from './eventTypes'

export type TStateEvents = {
  events: IEvent[]
  event: IEvent
  isLoading: boolean
  options: ITableOptions
}

const initialState: TStateEvents = {
  events: [],
  event: {
    id: null,
    name: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  },
  isLoading: false,
  options: {
    totalRecords: 0,
    limit: 0,
    skip: 0,
  },
}

export const eventReducer = (state = initialState, action: TAllReduxEventTypes): TStateEvents => {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
        isLoading: false,
      }
    case CLEAR_ALL_EVENTS_DATA:
      return {
        ...state,
        event: {
          id: null,
          name: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      }
    case ADD_NEW_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      }
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload.data,
        options: action.payload.options,
      }
    default:
      return state
  }
}
