import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { AppThunk } from '../../../redux/reducers'
import { ISendCommentData } from '../../../types/Comment'
import { GET_COMMENTS, CHANGE_COMMENT_DATA, ADD_COMMENT, DELETE_COMMENT, CLEAR_COMMENTS } from './commentTypes'

export const getComments = (id: number, reference: string): AppThunk<void> => async (dispatch) => {
  const response = await axios.get(`/comments`, { params: { id, reference } })
  dispatch({
    type: GET_COMMENTS,
    payload: response.data,
  })
}

export const changeCommentData = (name: string, value: any): AppThunk<void> => async (dispatch) => {
  dispatch({
    type: CHANGE_COMMENT_DATA,
    payload: { name, value },
  })
}

export const addNewComment = (referenceId?: number | null, reference?: string): AppThunk<void> => async (
  dispatch,
  getState,
) => {
  const comment = getState().commentsReducer.comment
  const user = getState().authReducer.user
  if (referenceId) {
    const commentData: ISendCommentData = {
      comment: comment.comment,
      [reference + 'Id']: referenceId,
    }
    const response = await axios.post('/comments', commentData)
    dispatch({
      type: ADD_COMMENT,
      payload: response?.data,
    })
  } else {
    dispatch({
      type: ADD_COMMENT,
      payload: { comment: comment.comment, createdBy: user.username, id: uuidv4() },
    })
  }
  dispatch(changeCommentData('comment', ''))
}

export const deleteComment = (id: number): AppThunk<void> => async (dispatch) => {
  await axios.delete(`/comments/${id}`)
  dispatch({
    type: DELETE_COMMENT,
    payload: id,
  })
}

export const clearComments = () => ({
  type: CLEAR_COMMENTS,
})
