import { TAllReduxChecklistTypes, IChecklist } from '../../../types/Checklist'
import {
  ADD_CHECKLIST,
  CHANGE_CHECKLIST_DATA,
  CLEAR_CHECKLISTS,
  DELETE_CHECKLIST,
  GET_CHECKLISTS,
  ON_UPDATE,
} from './checklistTypes'

export type TStatechecklists = {
  checklists: Array<IChecklist>
  checklist: IChecklist
}

const initialState: TStatechecklists = {
  checklists: [],
  checklist: {
    description: '',
    isDone: false,
  },
}

export const checklistReducer = (state = initialState, action: TAllReduxChecklistTypes): TStatechecklists => {
  switch (action.type) {
    case CLEAR_CHECKLISTS:
      return {
        checklists: [],
        checklist: {
          description: '',
          isDone: false,
        },
      }
    case ON_UPDATE:
      return {
        ...state,
        checklist: action.payload,
      }
    case DELETE_CHECKLIST:
      return {
        ...state,
        checklists: action.payload,
      }
    case ADD_CHECKLIST:
      return {
        ...state,
        checklists: [action.payload, ...state.checklists],
      }
    case CHANGE_CHECKLIST_DATA:
      return {
        ...state,
        checklists: action.payload,
      }
    case GET_CHECKLISTS:
      return {
        ...state,
        checklists: action.payload,
      }
    default:
      return state
  }
}
