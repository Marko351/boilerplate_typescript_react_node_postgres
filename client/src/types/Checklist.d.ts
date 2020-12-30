import {
  CHANGE_CHECKLIST_DATA,
  CLEAR_CHECKLISTS,
  DELETE_CHECKLIST,
  GET_CHECKLISTS,
  ADD_CHECKLIST,
  ON_UPDATE,
} from '../components/Checklists/redux/checklistTypes'

export interface IChecklist {
  description: string
  isDone: boolean
  uuid?: string
  id?: number
}

export interface IOnUpdate {
  type: typeof ON_UPDATE
  payload: IChecklist
}

export interface IGetChecklists {
  type: typeof GET_CHECKLISTS
  payload: IChecklist[]
}

export interface IChangeChecklistData {
  type: typeof CHANGE_CHECKLIST_DATA
  payload: IChecklist[]
}

export interface IAddChecklist {
  type: typeof ADD_CHECKLIST
  payload: IChecklist
}

export interface IDeleteChecklist {
  type: typeof DELETE_CHECKLIST
  payload: IChecklist[]
}

export interface IClearChecklists {
  type: typeof CLEAR_CHECKLISTS
}

export type TAllReduxChecklistTypes =
  | IGetChecklists
  | IChangeChecklistData
  | IAddChecklist
  | IDeleteChecklist
  | IClearChecklists
  | IOnUpdate

export interface ISendChecklistData {
  description: string
  isDone: boolean
  taskId: number
}
