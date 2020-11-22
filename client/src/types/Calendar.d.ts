export type TEventGetter = {
  backgroundColor: string
  color: string
}

export interface ICalendarEvent {
  referenceTo: string
  end: string
  start: string
}

export interface IEventPropGetter {
  style: TEventGetter
}
