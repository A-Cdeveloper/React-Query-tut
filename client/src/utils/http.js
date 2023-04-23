const API = 'http://localhost:3000';

export const getPosts = async () => {
  const response = await fetch(`${API}/posts`);
  if (!response.ok) {
    throw new Error("Posts can't be loaded");
  }
  const data = await response.json();
  return data;
};

export const getSinglePost = async (post_id) => {
  const response = await fetch(`${API}/posts/${post_id}`);
  if (!response.ok) {
    throw new Error("Post can't be loaded");
  }
  const data = await response.json();
  return data;
};

export const addPost = async (newPost) => {
  const response = await fetch(`${API}/posts`, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error("Posts can't be added");
  }
};

export const editPost = async ({ title, body, post_id }) => {
  const response = await fetch(`${API}/posts/${post_id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      post_id,
      title,
      body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error("Posts can't be edited");
  }
};

export const deletePost = async (post_id) => {
  const response = await fetch(`${API}/posts/${post_id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error("Posts can't be deleted");
  }
  const data = await response.json();
  return data;
};
