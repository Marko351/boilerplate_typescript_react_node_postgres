export interface IEvent {
  id?: number
  creationDate: string
  createdBy?: number
  name: string
  startDate: string
  endDate: string
  description?: string
  location?: string
}

export interface IGetAllEventsOptions {
  limit: number
  skip: number
}
