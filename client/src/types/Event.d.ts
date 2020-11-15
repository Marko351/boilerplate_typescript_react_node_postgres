import { GET_EVENT, GET_EVENTS, SET_LOADING } from '../components/Events/redux/eventTypes';

export interface IGetEvents {
  type: typeof GET_EVENTS;
  payload: IEvent[];
}

export interface IGetEvent {
  type: typeof GET_EVENT;
  payload: IEvent;
}

export interface ISetLoading {
  type: typeof SET_LOADING;
}

export type TAllReduxEventTypes = IGetEvent | IGetEvents | ISetLoading;

export interface IEvent {
  id: number | null;
  eventName: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface IEvents {
  events: IEvent[];
}
