import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { RootState } from '../../redux/reducers'
import { IComment } from '../../types/Comment'
import { addNewComment, changeCommentData } from './redux/commentActions'
import { TStateComments } from './redux/commentReducer'

interface commentProps {
  taskId?: number | null
  eventId?: number | null
}

export const Comment: React.FC<commentProps> = ({ taskId, eventId }) => {
  const dispatch = useDispatch()
  const CommentsReducer = useSelector<RootState, TStateComments>((state) => state.commentsReducer)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    dispatch(changeCommentData(name, value))
  }

  const onAddClick = () => {
    const id: number | null = taskId && eventId ? (eventId ? eventId : null) : taskId ? taskId : null
    const reference = taskId ? 'task' : 'event'
    dispatch(addNewComment(id, reference))
  }

  return (
    <div className='comment'>
      <div className='comment__header'>Comments</div>
      <div className='comment__inputs'>
        <CustomInput
          name='comment'
          onChange={onChange}
          placeholder='Add Comment...'
          value={CommentsReducer.comment.comment}
        />
        <CustomButton text='Add' onClick={onAddClick} color='primary' />
      </div>
      <div className='comment__body'>
        {CommentsReducer.comments.map((comment) => (
          <div className='comment__comment' key={comment.id}>
            <span className='comment__comment--description'>{comment.comment}</span>
            <span className='comment__comment--date'>{comment.creationDate}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
