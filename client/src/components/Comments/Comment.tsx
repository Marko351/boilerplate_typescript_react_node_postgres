import React, { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { RootState } from '../../redux/reducers'
import { ReactComponent as DeleteIcon } from '../../assets/icons/wrong.svg'
import { addNewComment, changeCommentData, deleteComment } from './redux/commentActions'
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

  const onDeleteChecklistItem = (id: number) => {
    dispatch(deleteComment(id))
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
            <div className='comment__comment--description-box'>
              <div className='comment_comment--description'>{comment.comment}</div>
              <div className='comment_comment--buttons'>
                <div className='icon-box'>
                  <button onClick={() => onDeleteChecklistItem(comment.id!)} className='icon-button'>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className='comment__comment--credentials'>
              <span>{comment.createdBy}</span>
              <span>{moment(comment.creationDate).utc().local().format('YYYY-DD-MM HH:mm')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
