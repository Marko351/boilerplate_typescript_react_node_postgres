import {
  ADD_COMMENT,
  CHANGE_COMMENT_DATA,
  CLEAR_COMMENTS,
  DELETE_COMMENT,
  GET_COMMENTS,
} from '../components/Comments/redux/commentTypes'

export interface IGetComments {
  type: typeof GET_COMMENTS
  payload: IComment[]
}

export interface IChangeCommentData {
  type: typeof CHANGE_COMMENT_DATA
  payload: {
    name: string
    value: any
  }
}

export interface IAddComment {
  type: typeof ADD_COMMENT
  payload: IComment
}

export interface IDeleteComment {
  type: typeof DELETE_COMMENT
  payload: number
}

export interface IClearComments {
  type: typeof CLEAR_COMMENTS
}

export type TAllReduxCommentTypes = IGetComments | IChangeCommentData | IAddComment | IDeleteComment | IClearComments

export interface IComment {
  id?: number | null
  comment: string
  creationDate?: string | null
  createdBy?: string | null
}

export interface ISendCommentData {
  comment: string
  taskId?: number | null
  eventId?: number | null
}

export interface IComments {
  comments: IComment[]
}
