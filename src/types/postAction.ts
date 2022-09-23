import { Post } from './Post';

export enum postActionKind {
  FETCH_START = 'FETCH_START',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export type PostAction = {
  type: postActionKind;
  payload?: Post;
};
