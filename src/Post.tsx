import { useState } from 'react';

type Post = {
  userId?: string;
  id?: string;
  title?: string;
  body?: string;
};

export const Post = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({});
  const [error, setError] = useState<boolean>(false);

  const handleFetch = () => {
    setLoading(true);
    setError(false);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <button onClick={handleFetch}>{loading ? 'データ取得中...' : 'データを取得する'}</button>
      <p>{post?.title}</p>
      <span>{error && 'エラーが発生しました'}</span>
    </>
  );
};
