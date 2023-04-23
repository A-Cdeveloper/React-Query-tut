import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editPost } from '../../utils/http';
import Loader from '../UI/Loader';

const EditPost = ({ id, userId, title, body }) => {
  const navigate = useNavigate();

  const inputTitle = useRef(title);
  const inputBody = useRef(body);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: editPost,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(['posts']);
      queryClient.setQueryData(['posts'], data);
    },
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    const editPost = {
      title: inputTitle.current.value,
      body: inputBody.current.value,
      post_id: id,
    };
    mutate(editPost);
    navigate('/posts');
    // console.log(newPost);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="posts">
      <form className="main" onSubmit={handlerSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          aria-label="title"
          ref={inputTitle}
          defaultValue={title}
        />
        <label htmlFor="body">Post</label>
        <textarea
          id="body"
          name="body"
          ref={inputBody}
          defaultValue={body}
        ></textarea>
        <button type="submit">Edit Post</button>
      </form>
    </div>
  );
};

export default EditPost;
