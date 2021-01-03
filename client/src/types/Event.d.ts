import { ADD_NEW_EVENT, GET_ALL_EVENTS, GET_EVENT, CLEAR_ALL_EVENTS_DATA } from '../components/Events/redux/eventTypes'
import { ITableOptions } from './Table'

export interface IGetEvents {
  type: typeof GET_ALL_EVENTS
  payload: {
    data: IEvent[]
    options: ITableOptions
  }
}

export interface IGetEvent {
  type: typeof GET_EVENT
  payload: IEvent
}

export interface IAddNewEvent {
  type: typeof ADD_NEW_EVENT
  payload: IEvent
}

export interface IClearAllEventData {
  type: typeof CLEAR_ALL_EVENTS_DATA
}

export type TAllReduxEventTypes = IGetEvent | IGetEvents | IAddNewEvent | IClearAllEventData

export interface IEvent {
  id?: number | null
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
}

export interface IEvents {
  events: IEvent[]
}
