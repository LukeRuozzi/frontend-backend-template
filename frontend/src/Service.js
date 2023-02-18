import { API_URL } from './environment';

export const getPosts = () => {
  return fetch(`${API_URL}/posts`);
};

export const createPost = (post) => {
  return fetch(`${API_URL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(post),
  });
};
