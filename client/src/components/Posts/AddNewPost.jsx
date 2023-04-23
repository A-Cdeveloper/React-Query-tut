import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost } from '../../utils/http';
import Loader from '../UI/Loader';

const AddNewPost = () => {
  const navigate = useNavigate();

  const inputTitle = useRef();
  const inputBody = useRef();

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: addPost,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(['posts']);
      queryClient.setQueryData(['posts'], data);
    },
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: 1,
      id: +crypto.randomUUID(),
      title: inputTitle.current.value,
      body: inputBody.current.value,
    };
    mutate(newPost);
    navigate('/posts');
    // console.log(newPost);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="posts">
      <form className="main" onSubmit={handlerSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" aria-label="title" ref={inputTitle} />
        <label htmlFor="body">Post</label>
        <textarea id="body" name="body" ref={inputBody}></textarea>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddNewPost;
