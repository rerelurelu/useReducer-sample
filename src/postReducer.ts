import { PostState } from './types/Post';
import { PostAction, postActionKind } from './types/postAction';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  post: {},
};

export const postReducer = (state: PostState, action: PostAction) => {
  switch (action.type) {
    case postActionKind.FETCH_START:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case postActionKind.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        post: action.payload,
      };
    case postActionKind.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
