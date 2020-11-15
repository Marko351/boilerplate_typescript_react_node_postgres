import { GET_COMMENTS } from '../components/Comments/redux/commentTypes';

export interface IGetComments {
  type: typeof GET_COMMENTS;
  payload: IComment[];
}

export type TAllReduxCommentTypes = IGetComments;

export interface IComment {
  id: number | null;
  description: string;
  createdAt: string | null;
  createdBy: string | null;
}

export interface IComments {
  comments: IComment[];
}
