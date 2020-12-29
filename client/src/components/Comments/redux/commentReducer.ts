import { IComment, TAllReduxCommentTypes } from '../../../types/Comment'
import { ADD_COMMENT, CHANGE_COMMENT_DATA, GET_COMMENTS } from './commentTypes'

export type TStateComments = {
  comments: Array<IComment>
  comment: IComment
}

const initialState: TStateComments = {
  comments: [],
  comment: {
    comment: '',
  },
}

export const commentsReducer = (state = initialState, action: TAllReduxCommentTypes): TStateComments => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      }
    case CHANGE_COMMENT_DATA:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.payload.name]: action.payload.value,
        },
      }
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }
    default:
      return state
  }
}
