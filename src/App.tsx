import { useReducer } from 'react';
import { INITIAL_STATE, postReducer } from './postReducer';
import { postActionKind } from './types/postAction';

export const App = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: postActionKind.FETCH_START });

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: postActionKind.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: postActionKind.FETCH_ERROR });
      });
  };

  return (
    <>
      <button onClick={handleFetch}>
        {state.loading ? 'データ取得中...' : 'データを取得する'}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && 'エラーが発生しました'}</span>
    </>
  );
};
