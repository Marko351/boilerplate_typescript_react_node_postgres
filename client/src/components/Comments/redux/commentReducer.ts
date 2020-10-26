import { IComment, TAllReduxCommentTypes } from '../../../types/_comment-types';
import { GET_COMMENTS } from './commentTypes';

export type TStateComments = {
  comments: Array<IComment>;
};

const initialState: TStateComments = {
  comments: [
    {
      id: 1,
      createdAt: '22-01-1992',
      createdBy: 'Marko',
      description:
        'Testiram za projekat. Ovo je komentar Testiram za projekat. Ovo je komentar Testiram za projekat. Ovo je komentar',
    },
    {
      id: 2,
      createdAt: '22-01-1992',
      createdBy: 'Marko',
      description: 'Testiram za projekat. Ovo je komentar',
    },
    {
      id: 3,
      createdAt: '22-01-1992',
      createdBy: 'Marko',
      description: 'Testiram za projekat. Ovo je komentar',
    },
  ],
};

export const commentsReducer = (state = initialState, action: TAllReduxCommentTypes): TStateComments => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
