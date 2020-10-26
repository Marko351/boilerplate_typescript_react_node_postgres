import React, { ChangeEvent, useState } from 'react';
import { CustomButton } from '../../common/CustomButton/CustomButton';

import { CustomInput } from '../../common/CustomInput/CustomInput';
import { IComment } from '../../types/_comment-types';

interface commentProps {
  comments: IComment[];
}

export const Comment: React.FC<commentProps> = ({ comments }) => {
  const [comment, setComment] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setComment(value);
  };

  return (
    <div className='comment'>
      <div className='comment__header'>Comments</div>
      <div className='comment__body'>
        <div className='comment__add-comment'>
          <CustomInput name='comment' onChange={onChange} placeholder='Add Comment...' value={comment} />
        </div>
        {comments.map((comment) => (
          <div className='comment__comment' key={comment.id}>
            <span className='comment__comment--description'>{comment.description}</span>
            <span className='comment__comment--date'>{comment.createdAt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
