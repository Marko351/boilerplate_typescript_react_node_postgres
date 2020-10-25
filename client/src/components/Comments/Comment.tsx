import React from 'react';
import { IComment } from '../../types/_comment-types';

interface commentProps {
  comments: IComment[];
}

export const Comment: React.FC<commentProps> = ({ comments }) => {
  return <div></div>;
};
