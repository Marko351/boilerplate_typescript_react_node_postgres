import { ADD_COMMENT, CHANGE_COMMENT_DATA, GET_COMMENTS } from '../components/Comments/redux/commentTypes'

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

export type TAllReduxCommentTypes = IGetComments | IChangeCommentData | IAddComment

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
