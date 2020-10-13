import { TEventGetter } from './types';

export interface ICalendarEvent {
  referenceTo: string;
  end: string;
  start: string;
}

export interface IEventPropGetter {
  style: TEventGetter;
}
