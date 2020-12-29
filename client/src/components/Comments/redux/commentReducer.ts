import { IComment, TAllReduxCommentTypes } from '../../../types/Comment'
import { ADD_COMMENT, CHANGE_COMMENT_DATA, CLEAR_COMMENTS, DELETE_COMMENT, GET_COMMENTS } from './commentTypes'

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
    case CLEAR_COMMENTS:
      return {
        comments: [],
        comment: {
          comment: '',
        },
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.payload),
      }
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
