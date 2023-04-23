import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../UI/Loader';
import { deletePost, getSinglePost } from '../../utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Post = ({ userId, id, title, body }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });

  const prefetchPostHandler = () => {
    queryClient.prefetchQuery({
      queryKey: ['posts', id],
      queryFn: () => getSinglePost(id),
    });
  };

  const editPostHandler = () => {
    navigate(`edit/${id}`, {
      state: {
        id: id,
        title: title,
        body: body,
      },
    });
  };

  if (isLoading) return <Loader />;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="post">
      <h3 onMouseEnter={prefetchPostHandler}>
        <Link to={`${id}`}>{title}</Link>
      </h3>
      <div>
        <p>{body}</p>
        <div>
          <button onClick={editPostHandler}>EDIT</button>
          <button onClick={() => mutate(id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
