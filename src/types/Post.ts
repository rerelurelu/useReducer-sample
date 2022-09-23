export type Post = {
  userId?: string;
  id?: string;
  title?: string;
  body?: string;
};

export type PostState = {
  loading: boolean;
  error: boolean;
  post?: Post;
};
