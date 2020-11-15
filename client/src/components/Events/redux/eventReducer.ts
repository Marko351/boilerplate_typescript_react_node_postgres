import { IEvent, TAllReduxEventTypes } from '../../../types/Event';
import { GET_EVENT, GET_EVENTS, SET_LOADING } from './eventTypes';

export type TStateEvents = {
  events: IEvent[];
  event: IEvent | null;
  isLoading: boolean;
};

const initialState: TStateEvents = {
  events: [],
  event: null,
  isLoading: false,
};

export const eventReducer = (state = initialState, action: TAllReduxEventTypes): TStateEvents => {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
        isLoading: false,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};
